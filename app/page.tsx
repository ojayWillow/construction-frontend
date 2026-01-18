import { ButtonLink } from '@/components/ui/ButtonLink';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Building2, Hammer, PenTool } from 'lucide-react';

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
      {/* Hero Section */}
      <Section id="home" background="gradient" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6">
            Profesionāla Būvniecība
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Kvalitatīvi būvniecības pakalpojumi Latvijā. Jaunbūves, renovācija un projektēšana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href="#contact" variant="primary" size="lg">
              Sazināties
            </ButtonLink>
            <ButtonLink 
              href="#services"
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-secondary"
            >
              Uzzināt vairāk
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" background="white" padding="xl">
        <h2 className="text-center mb-12 text-secondary">
          Mūsu Pakalpojumi
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
      <Section id="contact" background="gray" padding="xl">
        <div className="text-center">
          <h2 className="mb-6 text-secondary">Gatavs Sākt Projektu?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Sazinieties ar mums šodien un saņemiet bezmaksas konsultāciju par jūsu būvniecības projektu!
          </p>
          <ButtonLink href="#contact" variant="primary" size="lg">
            Sazināties Tagad
          </ButtonLink>
        </div>
      </Section>
    </main>
  );
}
