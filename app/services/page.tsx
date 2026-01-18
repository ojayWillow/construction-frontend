'use client';

import { Section } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { 
  Building2, 
  Hammer, 
  PenTool, 
  Wrench, 
  Home, 
  Lightbulb,
  Bot,
  MessageSquare,
  Calculator,
  FileText,
  Gauge,
  Sparkles,
  Building,
  Zap
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const constructionServices = [
    {
      icon: Building2,
      title: 'Jaunbūves',
      shortDesc: 'Kvalitatīva jaunu ēku celtniecība no pamatu līdz jumtam.',
      features: [
        'Privātmāju celtniecība',
        'Daudzdzivokļu ēkas',
        'Komercialās ēkas',
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
      title: 'Inženiertikli',
      shortDesc: 'Ūdensapgādes, kanalizācijas un apkures sistēmu izbūve.',
      features: [
        'Ūdensapgādes sistēmas',
        'Kanalizācijas ierīkošana',
        'Apkures sistēmas',
        'Ventilācijas montāža',
        'Elektrības tikli',
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
        'Koka darbi un durvu uzstādīšana',
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

  const aiServices = [
    {
      icon: Bot,
      title: 'AI Chatboti',
      shortDesc: '24/7 klientu apkalpošanas boti Telegram un tīmekļa lapām.',
      features: [
        'Telegram botu izstrāde',
        'Tīmekļa čatu integrācija',
        'Daudzvalodu atbalsts',
        'Automātiska atbilžu ģenerēšana',
        'CRM integrācija',
        'Anālīze un uzlabošana',
      ],
      highlight: 'Popūlarākais',
    },
    {
      icon: Calculator,
      title: 'AI Kalkulatori',
      shortDesc: 'Automātiski izmaksu un materiālu aprēķini ar AI.',
      features: [
        'Materiālu daudzuma aprēķins',
        'Darba izmaksu kalkulators',
        'Cenu salīdzināšanas sistēmas',
        'Budžeta plānošanas rīki',
        'Reallaika cenu atjaunināšana',
        'PDF/Excel atskaites',
      ],
    },
    {
      icon: FileText,
      title: 'Dokumentu Apstrāde',
      shortDesc: 'AI dokumentu skanēšana, analīze un informācijas izvilkšana.',
      features: [
        'Rēķinu automātiska apstrāde',
        'Līgumu analīze',
        'Projektu dokumentācijas organizēšana',
        'OCR teksta atpazīšana',
        'Datu ekstrākčānu sistēmām',
        'Arhivēšana un meklēšana',
      ],
    },
    {
      icon: MessageSquare,
      title: 'Klientu Piedāvājumu Sistēmas',
      shortDesc: 'Automātiska piedāvājumu ģenerēšana un nosūīšana.',
      features: [
        'Automātiska piedāvājumu izveidošana',
        'Pielāgoti veidnes',
        'E-pastu automātiska nosūīšana',
        'Klientu datubāzes pārvaldība',
        'Sekojošu ziņojumu automātizācija',
        'Analītika un atskaites',
      ],
    },
    {
      icon: Gauge,
      title: 'Projektu Pārvaldības AI',
      shortDesc: 'Viedas sistēmas projektu plānošanai un izpildes uzraudzībai.',
      features: [
        'Uzdevumu automātiska pieškiršana',
        'Progresa sekošana',
        'Risku prognoze',
        'Resursu optimizācija',
        'Termiņu brīdinājumi',
        'Integrācija ar Trello/Asana',
      ],
    },
    {
      icon: Zap,
      title: 'Prognozējošā Apkope',
      shortDesc: 'AI sistēmas, kas prognoze tehniku un ēku uzturēšanas vajadzības.',
      features: [
        'Iekārtu stāvokļa uzraudzība',
        'Prognozējošā analītika',
        'Automātiski apkopes atgādinājumi',
        'Izmaksu optimizācija',
        'Sensoru datu integrācija',
        'Vēsturisko datu analīze',
      ],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6 text-white">Mūsu Pakalpojumi</h1>
          <p className="text-xl text-gray-100 mb-8">
            Piedavājam pilnu spektru būvniecības pakalpojumu UN modernās AI tehnoloģijas jūsu biznesam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('construction')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Būvniecības Pakalpojumi
            </button>
            <button 
              onClick={() => document.getElementById('ai-services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all"
            >
              AI Risinājumi
            </button>
          </div>
        </div>
      </Section>

      {/* Construction Services */}
      <Section id="construction" background="white" padding="xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
            <Building className="w-5 h-5 text-gray-700" />
            <span className="font-semibold text-gray-700">Tradicīonālie Pakalpojumi</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Būvniecības Pakalpojumi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilns spektrs būvniecības darbu - no projektēšanas līdz atslegas nodošanai
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {constructionServices.map((service, index) => {
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

      {/* AI Services */}
      <Section id="ai-services" background="gray" padding="xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Modernās Tehnoloģijas</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            AI Tehnoloģiju Ieviešana
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Palīdzēsiem jūsu biznesam ieviest mākslīgā intelekta risinājumus - no chatbotiem līdz datu analīzei
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                hover 
                padding="lg" 
                className="h-full flex flex-col relative overflow-hidden"
              >
                {service.highlight && (
                  <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    {service.highlight}
                  </div>
                )}
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
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
                        <span className="text-orange-500 mt-1.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 mb-6 text-lg">
            Vai jūsu biznesam nepieciešami AI risinājumi?
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all"
          >
            Sazināties par AI Ieviešanu
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-secondary">Nepieciešama Konsultācija?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Sazinieties ar mums, lai uzzinātu vairāk par mūsu pakalpojumiem un saņemtu individuālu piedāvājumu!
          </p>
          <ButtonLink href="/contact" variant="primary" size="lg">
            Sazināties ar Mums
          </ButtonLink>
        </div>
      </Section>
    </main>
  );
}
