'use client';

import { Section } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { 
  Target, 
  Users, 
  Award, 
  Heart, 
  Shield, 
  Zap,
  Sparkles,
  Bot,
  Rocket,
  Brain,
  Building2,
  TrendingUp,
  Globe
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      icon: Brain,
      title: 'Inovācija',
      description: 'Aktivi ieviesam AI un modernās tehnoloģijas, lai revolucionizētu būvniecības nozari Baltijā.'
    },
    {
      icon: Target,
      title: 'Precizitāte',
      description: 'Izmantojam AI rīkus un datu analītiku, lai nodrošinātu augstu precizitāti projektos un izmaksu aprēķinos.'
    },
    {
      icon: Shield,
      title: 'Uzticāmība',
      description: 'Apvienojam gadu desmitiem ilgu būvniecības pieredzi ar mūsdienīgām metodolēģijām, lai pildītu solījumus.'
    },
    {
      icon: Rocket,
      title: 'Nākotnes Vadība',
      description: 'Esam pirmie Latvijā, kas piedavā AI palīgu būvniekiem – no cenu salīdzināšanas līdz kalkulatoriem.'
    },
    {
      icon: Users,
      title: 'Komandas Darbs',
      description: 'Mūsu komandā – gan būvniecības profesionāļi, gan AI inženieri, kopigā mērķa vadīti.'
    },
    {
      icon: Globe,
      title: 'Pieejamība',
      description: 'AI platforma pieejama 24/7 caur Telegram, bez reģistrācijas – tehnoloģijas ikvienam.'
    },
  ];

  const stats = [
    { number: '2092+', label: 'Produkti datubāzē' },
    { number: '10+', label: 'Veikalu integrācija' },
    { number: '1000+', label: 'AI platformas lietotāji' },
    { number: '200+', label: 'Darba veidi kalkulatorā' },
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Uzņēmuma dibināšana',
      description: 'Sākām kā tradicīonāls būvniecības uzņēmums ar fokusu uz kvalitāti.'
    },
    {
      year: '2020',
      title: 'Digitalizācijas sākums',
      description: 'Apzinājāmies, ka nozarei nepieciešama modernizācija un sākām pētīt AI risinājumus.'
    },
    {
      year: '2024',
      title: 'AI platformas izstrāde',
      description: 'Uzsakām BūvcenuGuru AI platformas izstrādi – Telegram boti, kalkulatori, cenu datubāze.'
    },
    {
      year: '2026',
      title: 'AI Platformas Launch',
      description: 'Officiāli palaist BūvcenuGuru AI rīkus un aktivi palīdzēt uzņēmumiem ieviest AI.'
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Section id="about" background="gradient" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Būvniecība + AI Tehnoloģijas</span>
          </div>
          <h1 className="mb-6 text-white">Par BūvcenuGuru</h1>
          <p className="text-xl text-gray-100 leading-relaxed">
            Esam nākotnes vadīts uzņēmums, kas apvieno tradicīonālo būvniecības pieredzi ar <strong>mākslīgā intelekta tehnoloģijām</strong>, lai revolucionizētu nozari Baltijā.
          </p>
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
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
              <strong className="text-secondary">BūvcenuGuru</strong> tika dibināts 2010. gadā kā tradicīonāls būvniecības uzņēmums. 
              Tomrēr, strādājot nozarē, mēs rēdzejām, kādas problēmas sastāv būvniekiem ikdienā: 
              <strong> cenu salīdzināšana</strong>, <strong>materiālu aprēķini</strong>, <strong>laika zudum</strong>.
            </p>
            <p>
              2020. gadā piejemām lēmumu <strong className="text-orange-600">mainit nozari no iekšienes</strong>. 
              Sākām pētīt mākslīgā intelekta tehnoloģijas un to pielietojumus būvniecībā. 
              Mērķis bija vienkāršs – <strong>padarīt būvniecību vieglāku, ātrāku un pieejamāku</strong>.
            </p>
            <p>
              2024.-2026. gadā izstrādājām un palaist <strong className="text-orange-600">BūvcenuGuru AI platformu</strong>: 
              Telegram boti, kas salīdzina cenas no 10+ veikaliem, AI kalkulatori materiāliem un darba izmaksām, 
              un datubāze ar 2092+ produktiem. Viss pieejams bez maksas, bez reģistrācijas.
            </p>
            <p className="text-xl font-semibold text-gray-800">
              🚀 Šodien mēs esam vairāk nekā būvniecības uzņēmums – mēs esam <strong className="text-orange-600">AI palīgi būvniecei</strong> 
              un palīdzējam citiem uzņēmumiem ieviest šīs tehnoloģijas.
            </p>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section background="white" padding="xl">
        <h2 className="text-center mb-12 text-secondary">Mūsu Ceļš</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-lg">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section background="gray" padding="xl">
        <h2 className="text-center mb-12 text-secondary">Mūsu Vērtības</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} hover padding="lg">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
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

      {/* Mission Section */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-4">
                <Target className="w-5 h-5" />
                <span className="font-semibold">Mūsu Misija</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Kļūt par #1 AI platformu būvniecībai Baltijā
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Mūsu mērķis ir padarīt būvniecību vieglāku, ātrāku un pieejamāku, izmantojot mākslīgā intelekta tehnoloģijas. 
                Mēs strādājam, lai katrs būvnieks varētu piekļūt tām pašām informācijas un rīkiem, kas agrk bija pieejami tikai lieliem uzņēmumiem.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Demokratizēt piekļuvi cenu informācijai un AI rīkiem</p>
                </div>
                <div className="flex items-start gap-3">
                  <Bot className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Palīdzēt uzņēmumiem ieviest AI savas bizness</p>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Turpināt piedvāat kvalitatīvus būvniecības pakalpojumus</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-2xl">
              <Sparkles className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Kāpēc AI?</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Ietaupa <strong>10+ stundas</strong> mēnesī cenu meklēšanā</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Samazina <strong>kļūdas</strong> materiālu aprēķinos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Nodrošina <strong>24/7 piekļuvi</strong> informācijai</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Automatizē <strong>rutnas darbas</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Palīdz <strong>paaugstināt efektivitāti</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-white">Pievienojies Nākotnei</h2>
          <p className="text-xl text-gray-100 mb-8">
            Izmanto mūsu AI platformu vai uzzini, kā varam palīdzēt tavam biznesam ieviest AI tehnoloģijas!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-platform"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center gap-2 justify-center"
            >
              <Bot className="w-6 h-6" />
              Izmanto AI Rīkus
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-all inline-flex items-center gap-2 justify-center"
            >
              <Building2 className="w-6 h-6" />
              Būvniecības Pakalpojumi
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
