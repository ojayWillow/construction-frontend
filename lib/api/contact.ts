import axios, { AxiosError } from 'axios';
import { ContactFormData } from '@/lib/validations/contact';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

interface ContactResponse {
  success: boolean;
  message: string;
  messageLV?: string;
  messageEN?: string;
}

interface ContactError {
  message: string;
  errors?: Record<string, string[]>;
}

export class ContactAPIError extends Error {
  public statusCode?: number;
  public errors?: Record<string, string[]>;

  constructor(message: string, statusCode?: number, errors?: Record<string, string[]>) {
    super(message);
    this.name = 'ContactAPIError';
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

/**
 * Submit contact form to backend API
 */
export async function submitContactForm(data: ContactFormData): Promise<ContactResponse> {
  try {
    const response = await axios.post<ContactResponse>(
      `${API_URL}/api/contact`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000, // 10 second timeout
      }
    );

    return response.data;
  } catch (error) {
    // Handle axios errors
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ContactError>;
      
      if (axiosError.response) {
        // Server responded with error status
        const statusCode = axiosError.response.status;
        const errorData = axiosError.response.data;
        
        throw new ContactAPIError(
          errorData?.message || 'Kļūda nosūtot ziņu',
          statusCode,
          errorData?.errors
        );
      } else if (axiosError.request) {
        // Request was made but no response
        throw new ContactAPIError(
          'Serveris neatbild. Lūdzu, pārbaudiet interneta savienojumu.',
          0
        );
      }
    }
    
    // Unknown error
    throw new ContactAPIError(
      'Negaidīta kļūda. Lūdzu, mēģiniet vēlreiz.',
      0
    );
  }
}

/**
 * Test backend connection
 */
export async function testBackendConnection(): Promise<boolean> {
  try {
    const response = await axios.get(`${API_URL}/health`, {
      timeout: 5000,
    });
    return response.status === 200;
  } catch (error) {
    console.error('Backend connection test failed:', error);
    return false;
  }
}
