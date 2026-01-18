import { Section } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { ContactForm } from '@/components/forms/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakti - BūvcenuGuru',
  description: 'Sazinieties ar BūvcenuGuru - telefons, e-pasts, adrese un darba laiks.',
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adrese',
      details: [
        'Brīvības iela 123',
        'Rīga, LV-1050',
        'Latvija'
      ]
    },
    {
      icon: Phone,
      title: 'Tālrunis',
      details: [
        '+371 20 000 000',
        '+371 26 111 111',
        'Darba dienās 8:00-17:00'
      ]
    },
    {
      icon: Mail,
      title: 'E-pasts',
      details: [
        'info@buvcenuguru.lv',
        'projekti@buvcenuguru.lv',
        'Atbildam 24 stundās'
      ]
    },
    {
      icon: Clock,
      title: 'Darba laiks',
      details: [
        'Pirm. - Piekt.: 8:00 - 17:00',
        'Sestd.: 9:00 - 14:00',
        'Svētd.: Slēgts'
      ]
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 text-white">Sazinieties ar Mums</h1>
          <p className="text-xl text-gray-100">
            Mēs vienmēr priecājamies sadzirdēt no jums! Uzdodiet jautājumu vai pieprasiet cenu piedāvājumu.
          </p>
        </div>
      </Section>

      {/* Contact Info Cards */}
      <Section background="white" padding="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} padding="lg" className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-4">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-6">Sūtīt Ziņu</h2>
            <Card padding="lg">
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-6">Mūsu Atrašanās Vieta</h2>
            <Card padding="none" className="overflow-hidden h-[600px]">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">
                    Google Maps integrācija<br />
                    tiks pievienota vēlāk
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Brīvības iela 123, Rīga, LV-1050
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Alternative Contact Section */}
      <Section background="gray" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-secondary">Vēlaties sarunāt tikšanos?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Zvaniet mums tieši vai rakstiet e-pastu, un mēs sazināsimies ar jums 24 stundu laikā!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+37120000000"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +371 20 000 000
            </a>
            <a
              href="mailto:info@buvcenuguru.lv"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white rounded-lg font-medium hover:bg-secondary-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
              info@buvcenuguru.lv
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
