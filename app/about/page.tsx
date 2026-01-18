import { Section } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Target, Users, Award, Heart, Shield, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Par Mums - Būvcenu Guru',
  description: 'Uzziniet vairāk par BūvcenuGuru - mūsu vēsturi, vērtības un komandu.',
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Precizitāte',
      description: 'Mēs veicam katru darbu ar augstu precizitāti un uzmanību detaļām, lai garantētu izcilu rezultātu.'
    },
    {
      icon: Shield,
      title: 'Uzticamība',
      description: 'Jūsu uzticamība ir mūsu prioritāte. Mēs pildām solījumus un ievērojam noteiktos termiņus.'
    },
    {
      icon: Award,
      title: 'Kvalitāte',
      description: 'Izmantojam tikai kvalitatīvus materiālus un mūsdienīgas tehnoloģijas, lai nodrošinātu ilgmūžību.'
    },
    {
      icon: Heart,
      title: 'Apņemība',
      description: 'Katrs projekts mums ir svarīgs. Mēs strādājam ar profesionalitāti un dedikāciju.'
    },
    {
      icon: Users,
      title: 'Komandas Darbs',
      description: 'Mūsu komanda ir mūsu spēks. Kopā mēs sasniedzam lielākus rezultātus.'
    },
    {
      icon: Zap,
      title: 'Inovācija',
      description: 'Sekojam jaunākajām tendencēm un ieviesam mūsdienīgus risinājumus būvniecībā.'
    },
  ];

  const stats = [
    { number: '200+', label: 'Pabeigti Projekti' },
    { number: '15+', label: 'Gadu Pieredze' },
    { number: '50+', label: 'Komandas Biedri' },
    { number: '98%', label: 'Apmierināti Klienti' },
  ];

  const team = [
    {
      name: 'Jānis Bērziņš',
      role: 'Valdes Priekšsēdētājs',
      description: '20 gadu pieredze būvniecībā un projektu vadībā.'
    },
    {
      name: 'Anna Kalniņa',
      role: 'Galvenā Arhitekte',
      description: 'Specializējas mūsdienīgā arhitektūrā un ilgtspējīgā dizainā.'
    },
    {
      name: 'Mārtiņš Ozols',
      role: 'Būvdarbu Vadītājs',
      description: '15 gadu pieredze lielu projektu organizēšanā un vadībā.'
    },
    {
      name: 'Līga Liepa',
      role: 'Projektu Menedžere',
      description: 'Nodrošina efektīvu komunikāciju starp visām iesaistītajām pusēm.'
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Section id="about" background="gradient" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 text-white">Par Mums</h1>
          <p className="text-xl text-gray-100">
            Mēs esam profesionāls būvniecības uzņēmums ar vairāk nekā 15 gadu pieredzi Latvijas tirgū.
          </p>
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Story Section */}
      <Section background="gray" padding="xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12 text-secondary">Mūsu Stāsts</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong className="text-secondary">BūvcenuGuru</strong> tika dibināts 2010. gadā ar mērķi radīt kvalitatīvus un 
              ilgtspējīgus būvniecības risinājumus Latvijā. Sākot kā neliela komanda ar lielām ambīcijām, 
              mēs esam izauguši par vienu no vadošajiem būvniecības uzņēmumiem valstī.
            </p>
            <p>
              Mūsu panākumi pamatojas uz <strong>profesionalitāti</strong>, <strong>precizitāti</strong> un 
              <strong> klientu apmierinātību</strong>. Katrs projekts tiek uztverts kā unikāla iespēja 
              radīt kaut ko izcilu un ilgmūžīgu.
            </p>
            <p>
              Šodien mēs lepojamies ar vairāk nekā 200 veiksmīgi pabeigtu projektu portfeli, 
              profesionālu komandu un augstu klientu apmierinātības rādītāju. Mūsu mērķis - 
              turpināt augt un attīstīties, piedāvājot labākos risinājumus mūsu klientiem.
            </p>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section background="white" padding="xl">
        <h2 className="text-center mb-12 text-secondary">Mūsu Vērtības</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} hover padding="lg">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-3">{value.title}</CardTitle>
                </CardHeader>
                <CardDescription className="text-base">
                  {value.description}
                </CardDescription>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Team Section */}
      <Section background="gray" padding="xl">
        <h2 className="text-center mb-12 text-secondary">Mūsu Komanda</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} padding="lg" className="text-center">
              <CardContent>
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-secondary mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-secondary">Gatavs Sākt Savu Projektu?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Sazinieties ar mums, lai uzzinātu, kā mēs varam palīdzēt realizēt jūsu sapņu projektu!
          </p>
          <ButtonLink href="#contact" variant="primary" size="lg">
            Sazināties ar Mums
          </ButtonLink>
        </div>
      </Section>
    </main>
  );
}
