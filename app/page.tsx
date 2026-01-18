import { ButtonLink } from '@/components/ui/ButtonLink';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Building2, Hammer, PenTool, Bot, Calculator, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      icon: Building2,
      title: 'Jaunbūves',
      description: 'Kvalitatīva jaunu ēku celtniecība no pamatu līdz jumtam. Pilns projektēšanas un būvniecības cikls.'
    },
    {
      icon: Hammer,
      title: 'Renovācija',
      description: 'Ēku renovācija un modernizācija. Energoefektivitātes uzlabošana un fasāžu atjaunošana.'
    },
    {
      icon: PenTool,
      title: 'Projektēšana',
      description: 'Profesionāla būvprojektu izstrāde. 3D vizualizācijas un tehniskā dokumentācija.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section - Split CTA */}
      <Section id="home" background="gradient" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="mb-6">
              BūvcenuGuru - Jūsu Partneris Būvniecībā
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Profesionāli būvniecības pakalpojumi un AI tehnoloģijas vienā vietā
            </p>
          </div>

          {/* Two Column CTA */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Traditional Construction Services */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all">
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Būvniecības Pakalpojumi
              </h3>
              <p className="text-gray-600 mb-6">
                Jaunbūves, renovācija un projektēšana. Kvalitatīvi risinājumi jūsu projektiem.
              </p>
              <ButtonLink href="/contact" variant="primary" size="lg" className="w-full">
                Sūtīt prasību
              </ButtonLink>
            </div>

            {/* AI Platform */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all text-white">
              <Bot className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">
                AI Platforma Būvniekiem
              </h3>
              <p className="mb-6 opacity-90">
                Cenu salīdzināšana, AI kalkulatori, 2092+ produkti. Ietaupi laiku un naudu!
              </p>
              <Link 
                href="/ai-platform"
                className="block w-full bg-white text-orange-600 text-center px-6 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
              >
                Izmanto AI rīkus
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* AI Platform Preview Section */}
      <Section background="white" padding="xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Jauns!</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            AI Platforma Būvniecībā
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modernās tehnoloģijas, kas palīdz ietaupīt laiku un naudu būvmateriālu iegādē un projektu plānošanā
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card hover padding="lg">
            <CardHeader>
              <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <CardTitle>Cenu Salīdzināšana</CardTitle>
            </CardHeader>
            <CardDescription>
              2092+ produkti no 10+ veikaliem. Atrodi labāko cenu vienā vietā bez čakarēšanās.
            </CardDescription>
          </Card>

          <Card hover padding="lg">
            <CardHeader>
              <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <CardTitle>AI Kalkulatori</CardTitle>
            </CardHeader>
            <CardDescription>
              Materiālu un darba izmaksu kalkulatori. Precīzi aprēķini bez zināšanām.
            </CardDescription>
          </Card>

          <Card hover padding="lg">
            <CardHeader>
              <div className="w-14 h-14 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <CardTitle>Telegram Boti</CardTitle>
            </CardHeader>
            <CardDescription>
              Pieejams 24/7 caur Telegram. Bez reģistrācijas, bez maksas, bez komplikācijām.
            </CardDescription>
          </Card>
        </div>

        <div className="text-center mt-10">
          <ButtonLink href="/ai-platform" variant="primary" size="lg">
            Uzzināt Vairāk par AI Platformu
          </ButtonLink>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" background="gray" padding="xl">
        <h2 className="text-center mb-12 text-secondary">
          Mūsu Būvniecības Pakalpojumi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} hover padding="lg">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardDescription>
                  {service.description}
                </CardDescription>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section id="contact" background="white" padding="xl">
        <div className="text-center">
          <h2 className="mb-6 text-secondary">Gatavs Sākt Projektu?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Sazinieties ar mums šodien un saņemiet bezmaksas konsultāciju par jūsu būvniecības projektu!
          </p>
          <ButtonLink href="/contact" variant="primary" size="lg">
            Sazināties Tagad
          </ButtonLink>
        </div>
      </Section>
    </main>
  );
}
