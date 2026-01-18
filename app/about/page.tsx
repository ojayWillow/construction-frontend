import { Section } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Target, Users, Award, Heart, Shield, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Par Mums - BūvcenuGuru',
  description: 'Uzziniet vairāk par BūvcenuGuru - mūsu vēsturi, vērtības un komandu.',
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Precizitāte',
      description: 'Mēs veicam katru darbu ar augšu precizitāti un uzmanību detaļām, lai garantu0113tu izcīlu rezultu0101tu.'
    },
    {
      icon: Shield,
      title: 'Uzticamība',
      description: 'Jūsu uzticamība ir mūsu prioritu0101te. Mēs pildām soludu012bjumus un ievurojam noteiktos teru012diu0146us.'
    },
    {
      icon: Award,
      title: 'Kvalitu0101te',
      description: 'Izmantojam tikai kvalitatuiv012dus materu012diu0101lus un muu017esdienuigas tehnolou011fijas, lai nodrouiu0161inu0101tu ilgmuz012digu012gbu.'
    },
    {
      icon: Heart,
      title: 'Apn012emuib012dba',
      description: 'Katrs projekts mums ir svaruig012ds. Mēs struu0101du0101jam ar profesionuu0101lu012dtuu012di un deduikuu0101ciju.'
    },
    {
      icon: Users,
      title: 'Komandas Darbs',
      description: 'Mūsu komanda ir mūsu spuuek012ds. Kops012bu mēs sasniedzam lic012deluu0101kus rezultuu0101tus.'
    },
    {
      icon: Zap,
      title: 'Inovuu0101cija',
      description: 'Sekojam juunuu0101ku012dju0101m tendencēm un ieviesuam muu017esdienuigus risinuu0101jumus buu016bvniecutib012duu0101.'
    },
  ];

  const stats = [
    { number: '200+', label: 'Pabeigti Projekti' },
    { number: '15+', label: 'Gadu Pieredze' },
    { number: '50+', label: 'Komandas Biedri' },
    { number: '98%', label: 'Apmierinuu0101ti Klienti' },
  ];

  const team = [
    {
      name: 'Juu0101nis Buu0113rziu0146u0161',
      role: 'Valdes Priekuseduu0113tuu0101js',
      description: '20 gadu pieredze buu016bvniecuib012duu0101 un projektu vadu012dbuibu0101.'
    },
    {
      name: 'Anu0101 Kalniu0146a',
      role: 'Galvenuu0101 Arhitekte',
      description: 'Specializuu0113jas muu017esdieniuguu0101 arhitektuuuru0101 un ilgtspuuejuiguu0101 dizainu0101.'
    },
    {
      name: 'Muuu0101rtiu0146u0161 Ozolu0161',
      role: 'Buu016bvdarbu Vadu012dtuu0101js',
      description: '15 gadu pieredze lielu projektu organizuu0113u0161anu0101 un vadu012dbuibu0101.'
    },
    {
      name: 'Lu012dga Liepa',
      role: 'Projektu Menauu013dere',
      description: 'Nodrouiu0161ina efektuivu komunikuu0101ciju starp visuu0101m iesaistituu0101juu0101m pusu0113m.'
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Section id="about" background="gradient" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 text-white">Par Mums</h1>
          <p className="text-xl text-gray-100">
            Mēs esam profesionuu0101lu buu016bvniecuib012dbas uzn012duu0113mums ar vairuu0101k neku0101 15 gadu pieredzi Latvijas tirguu016b.
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
          <h2 className="text-center mb-12 text-secondary">Mūsu Stuuu0101sts</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong className="text-secondary">Buu016bvcenuGuru</strong> tika dibinuu0101ts 2010. gaduuu0101 ar muu0113ru0137ki raduit kvalitatuivus un 
              ilgtspuuejuigus buu016bvniecuib012dbas risinuu0101jumus Latviju0101. Suuu0101kot ku0101 neliela komanda ar lielu0101m ambuciju0101m, 
              mu0113s esam izauguusi par vienu no vadouau0161ajiem buu016bvniecuib012dbas uzn012duu0113mumiem valu012dstu012b.
            </p>
            <p>
              Muuusu panuukumi pamatojas uz <strong>profesionuualituuti</strong>, <strong>precizituuti</strong> un 
              <strong> klientu apmierinatuibu</strong>. Katrs projekts tiek uztverts ku0101 unikuu0101la iespeju012dja 
              raduit kaut ko izc012dilu un ilgmuz012digu012dgu.
            </p>
            <p>
              u0160odien mu0113s lepoujamies ar vairuu0101k neku0101 200 veiksmui012dgi pabeigtu projektu portfeli, 
              profesionuu0101lu komandu un aug012dstu klientu apmierinatuibu012dbas ruu0101duituu0101ju. Muuusu muu0113ru0137kis - 
              turpinauit augt un attuistuitiuies, pieduu0101vuu0101jot labuu0101kos risinuu0101jumus muuusu klientiem.
            </p>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section background="white" padding="xl">
        <h2 className="text-center mb-12 text-secondary">Muuusu Vuuertuib012dbas</h2>
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
        <h2 className="text-center mb-12 text-secondary">Muuusu Komanda</h2>
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
          <h2 className="mb-6 text-secondary">Gatavs Suuu0101kt Savu Projektu?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Sazinieties ar mums, lai uzzinuu0101tu, ku0101 mu0113s varam palidzuu0113t realizuu0113t juu016bsu sapn012du projektu!
          </p>
          <ButtonLink href="#contact" variant="primary" size="lg">
            Sazinauuties ar Mums
          </ButtonLink>
        </div>
      </Section>
    </main>
  );
}
