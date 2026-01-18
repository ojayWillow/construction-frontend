'use client';

import { Section } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  Sparkles,
  TrendingUp,
  CheckCircle,
  Zap,
  Calculator,
  ShoppingCart,
  FileText,
  Building
} from 'lucide-react';

export default function ProjectsPage() {
  const constructionProjects = [
    {
      title: 'Moderna Privātmāja Jūrmalā',
      category: 'Jaunbūve',
      location: 'Jūrmala',
      year: '2023',
      area: '250 m²',
      description: 'Mūsdienīga trīsstāvu privātmāja ar panorāmas logiem un zaļo jumtu. Energoefektīva ēka ar A+ sertifikātu.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    },
    {
      title: 'Ofisu Ēkas Renovācija Rīgā',
      category: 'Renovācija',
      location: 'Rīga, Centrs',
      year: '2023',
      area: '1200 m²',
      description: 'Vēsturikas ēkas fasādes atjaunošana un iekštelpu pilnīga pārbūve ar mūsdienīgām inženiersistēmām.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    },
    {
      title: 'Dzivjamā Kompleksa Būvniecība',
      category: 'Jaunbūve',
      location: 'Rīga, Pļavnieki',
      year: '2022',
      area: '3500 m²',
      description: 'Moderns dzivjamās komplekss ar 48 dzivokļiem, pazemes autostāvvietu un labiekārtotu teritoriju.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    },
    {
      title: 'Restorāna Interjera Dizains',
      category: 'Apdare',
      location: 'Rīga, Vecrīga',
      year: '2022',
      area: '180 m²',
      description: 'Unikāls restorāna interjera dizains ar dabīgiem materiāliem un mūsdienīgu apgaismojumu.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    },
  ];

  const aiProjects = [
    {
      icon: ShoppingCart,
      title: 'BūvcenuGuru Cenu Salīdzināšanas Platforma',
      category: 'AI Platforma',
      year: '2024-2026',
      problem: 'Būvniekiem aizem daudz laika, lai salīdzinātu cenas dažādos veikalos. Nav vienas vietas, kur redzet visas opcijas.',
      technology: [
        'Web scraping & API integrācija',
        'Datubāze ar 2092+ produktiem',
        'Telegram Bot API',
        'Real-time cenu atjaunināšana',
      ],
      results: [
        '10+ veikalu integrācija',
        '1000+ aktīvi lietotāji',
        '~10h ietaupts laiks mēnesī',
        'Bez maksas pieejams viesm',
      ],
    },
    {
      icon: Calculator,
      title: 'AI Materiālu & Darba Izmaksu Kalkulators',
      category: 'AI Rīks',
      year: '2025-2026',
      problem: 'Grūtības aprēķināt precīzu materiālu daudzumu un darba izmaksas bez profesionālām zināšanām.',
      technology: [
        'AI aprēķinu algoritmi',
        '200+ darba veidu datubāze',
        'Automātiska materiālu aprēķins',
        'Telegram & Web integrācija',
      ],
      results: [
        '95% precīzi aprēķini',
        'Samazinātas kļūdas par 80%',
        'Lieto 500+ cilvki',
        'Vidēji 5h ekonomija/projekts',
      ],
    },
    {
      icon: FileText,
      title: 'Automātiska Piedāvājumu Sistēma Būvuzņēmumam',
      category: 'B2B AI Risinājums',
      year: '2025',
      problem: 'Būvuzņēmums "X" taisīja 50+ piedāvājumus mēnesī manuāli, kas aizem 40+ stundas.',
      technology: [
        'AI piedāvājumu ģenerators',
        'Veidnes ar automātisku aizpildīšanu',
        'CRM integrācija',
        'E-pasta automātizācija',
      ],
      results: [
        '90% ātrāka piedāvājumu izveide',
        '35h ietaupts laiks/mēnesī',
        '30% vairāk darbīju bez papildu resursiem',
        'ROI 6 mēnešos',
      ],
    },
    {
      icon: Zap,
      title: 'Dokumentu Apstrādes AI Sistema Developers',
      category: 'B2B AI Risinājums',
      year: '2025',
      problem: 'Nekustamā īpašuma attīstītājs apstrādāja simtiem rēķinu un līgumu manuāli.',
      technology: [
        'OCR teksta atpazīšana',
        'AI dokumentācijas klasifikācija',
        'Datu ekstrākčānu no PDF',
        'Automātiska arhivēšana',
      ],
      results: [
        '95% automātizēta apstrāde',
        '60h ietaupts laiks/mēnesī',
        '99.2% precīzība',
        'Datu pieejamība 10x ātrāka',
      ],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6 text-white">Mūsu Projekti</h1>
          <p className="text-xl text-gray-100 mb-8">
            Lepojamies ar realizētiem tradicīīonāliem būvniecības projektiem UN inovatīviem AI risinājumiem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('construction')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Būvniecības Projekti
            </button>
            <button 
              onClick={() => document.getElementById('ai-projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all"
            >
              AI Projekti
            </button>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-gray-600">Būvniecības Projekti</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">4</div>
            <div className="text-gray-600">AI Risinājumi</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-gray-600">AI Platformas Lietotāji</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">Apmierinati Klienti</div>
          </div>
        </div>
      </Section>

      {/* Construction Projects */}
      <Section id="construction" background="gray" padding="xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
            <Building className="w-5 h-5 text-gray-700" />
            <span className="font-semibold text-gray-700">Tradicīīonālie Projekti</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Būvniecības Projekti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vairāk nekā 200 veiksmigi realizēti projekti visā Latvijā
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {constructionProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              {/* Project Image */}
              <div className="relative h-48 bg-gray-300 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span>{project.area}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* AI Projects */}
      <Section id="ai-projects" background="white" padding="xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">AI & Tehnoloģijas</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            AI Risinājumu Projekti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reāli AI projekti ar izmrimāmiem rezultiem biznesam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {aiProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} hover padding="lg" className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500">{project.year}</span>
                      <div className="text-xs text-orange-600 font-semibold mt-1">{project.category}</div>
                    </div>
                  </div>
                  <CardTitle className="mb-3">{project.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  {/* Problem */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <span className="text-red-500">❌</span> Problēma
                    </h4>
                    <p className="text-gray-600 text-sm">{project.problem}</p>
                  </div>

                  {/* Technology */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-orange-500" /> Tehnoloģijas
                    </h4>
                    <ul className="space-y-1">
                      {project.technology.map((tech, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                          <span className="text-orange-500 mt-0.5">•</span>
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-500" /> Rezultāti
                    </h4>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-white">Vēlaties Redzēt Savu Projektu Šeit?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Vai tas ir būvniecības projekts vai AI risinājums – mēs varam palīdzēt!
          </p>
          <ButtonLink href="/contact" variant="primary" size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Sākt Projektu
          </ButtonLink>
        </div>
      </Section>
    </main>
  );
}
