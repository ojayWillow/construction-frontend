import { Section } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Building2, Hammer, PenTool, Wrench, Home, Lightbulb } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pakalpojumi - BūvcenuGuru',
  description: 'Mūsu būvniecības pakalpojumi: jaunbūves, renovācija, projektēšana un konsultācijas.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: Building2,
      title: 'Jaunbūves',
      shortDesc: 'Kvalitatīva jaunu ēku celtniecība no pamatu līdz jumtam.',
      features: [
        'Privātmāju celtniecība',
        'Daudzdzīvokļu ēkas',
        'Komerciālas ēkas',
        'Rūpnieciskie objekti',
        'Pilns projektu vadības cikls',
        'Kvalitātes garantija 5 gadi',
      ],
    },
    {
      icon: Hammer,
      title: 'Renovācija',
      shortDesc: 'Ēku renovācija un modernizācija ar mūsdienīgiem risinājumiem.',
      features: [
        'Fasāžu atjaunošana',
        'Jumtu remonts',
        'Iekštelpu pārbūve',
        'Energoefektivitātes uzlabošana',
        'Vēsturisku ēku restaurācija',
        'Santehnikas un elektrības atjaunošana',
      ],
    },
    {
      icon: PenTool,
      title: 'Projektēšana',
      shortDesc: 'Profesionāla būvprojektu izstrāde ar 3D vizualizācijām.',
      features: [
        'Arhitektūras projektēšana',
        'Konstrukciju aprēķini',
        '3D vizualizācijas',
        'Tehniskā dokumentācija',
        'Būvatļaujas noformēšana',
        'Autoruzraudzība',
      ],
    },
    {
      icon: Wrench,
      title: 'Inženiertīkli',
      shortDesc: 'Ūdensapgādes, kanalizācijas un apkures sistēmu izbūve.',
      features: [
        'Ūdensapgādes sistēmas',
        'Kanalizācijas ierīkošana',
        'Apkures sistēmas',
        'Ventilācijas montāža',
        'Elektrības tīkli',
        'Garantijas apkope',
      ],
    },
    {
      icon: Home,
      title: 'Apdare',
      shortDesc: 'Iekštelpu un ārtelpu apdares darbi augstā kvalitātē.',
      features: [
        'Telpu krāsošana',
        'Grīdas segumu klāšana',
        'Flīžu un akmens darbi',
        'Gipškartona konstrukcijas',
        'Koka darbi un durvju uzstādīšana',
        'Dekoratīvā apdare',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Konsultācijas',
      shortDesc: 'Profesionālas konsultācijas būvniecības jautājumos.',
      features: [
        'Projektu novērtēšana',
        'Izmaksu aprēķins',
        'Materiālu izvēles konsultācijas',
        'Juridiskais atbalsts',
        'Būvuzraudzība',
        'Pēcgarantijas apkope',
      ],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 text-white">Mūsu Pakalpojumi</h1>
          <p className="text-xl text-gray-100">
            Piedāvājam pilnu spektru būvniecības pakalpojumu - no projektēšanas līdz atslēgas nodošanai.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section background="white" padding="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} hover padding="lg" className="h-full flex flex-col">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-9 h-9 text-white" />
                  </div>
                  <CardTitle className="mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.shortDesc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-secondary">Nepieciešama Konsultācija?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Sazinieties ar mums, lai uzzinātu vairāk par mūsu pakalpojumiem un saņemtu individuālu piedāvājumu!
          </p>
          <ButtonLink href="#contact" variant="primary" size="lg">
            Sazināties ar Mums
          </ButtonLink>
        </div>
      </Section>
    </main>
  );
}
