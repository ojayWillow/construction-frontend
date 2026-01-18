import { z } from 'zod';
import { isValidLatvianPhone } from '@/lib/utils';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Vārdam jābūt vismaz 2 simboliem' })
    .max(100, { message: 'Vārds nedrīkst būt garāks par 100 simboliem' })
    .regex(/^[a-zA-ZĀāČčĒēĢģĪīĶķĻļŅņŠšŪūŽž\s-]+$/, {
      message: 'Vārdā drīkst būt tikai burti, atstarpes un defises'
    }),
  
  email: z
    .string()
    .min(1, { message: 'E-pasts ir obligāts' })
    .email({ message: 'Nederīga e-pasta adrese' })
    .toLowerCase(),
  
  phone: z
    .string()
    .min(1, { message: 'Tālrunis ir obligāts' })
    .refine(
      (phone) => isValidLatvianPhone(phone),
      { message: 'Nederīgs Latvijas tālruņa numurs. Formāts: +371 20000000 vai 20000000' }
    ),
  
  message: z
    .string()
    .min(10, { message: 'Ziņai jābūt vismaz 10 simboliem' })
    .max(1000, { message: 'Ziņa nedrīkst būt garāka par 1000 simboliem' }),
});

// Type inference from schema
export type ContactFormData = z.infer<typeof contactFormSchema>;

// Error messages in Latvian
export const errorMessages = {
  required: 'Šis lauks ir obligāts',
  invalidEmail: 'Nederīga e-pasta adrese',
  invalidPhone: 'Nederīgs tālruņa numurs',
  tooShort: 'Vērtība ir pārāk īsa',
  tooLong: 'Vērtība ir pārāk gara',
  serverError: 'Serveris neatbild. Lūdzu, mēģiniet vēlreiz vēlāk.',
  networkError: 'Savienojuma kļūda. Pārbaudiet interneta savienojumu.',
  success: 'Ziņa veiksmīgi nosūtīta! Mēs ar jums sazināsimies drīzumā.',
};
