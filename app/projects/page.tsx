import { Section } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Building2, Calendar, MapPin, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projekti - BūvcenuGuru',
  description: 'Apskatiet mūsu veiksmīgi realizētos būvniecības projektus visā Latvijā.',
};

export default function ProjectsPage() {
  const projects = [
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
      description: 'Vēsturiskās ēkas fasādes atjaunošana un iekštelpu pilnīga pārbūve ar mūsdienīgām inženiersistēmām.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    },
    {
      title: 'Dzīvojamā Kompleksa Būvniecība',
      category: 'Jaunbūve',
      location: 'Rīga, Pļavnieki',
      year: '2022',
      area: '3500 m²',
      description: 'Moderns dzīvojamais komplekss ar 48 dzīvokļiem, pazemes autostāvvietu un labiekārtotu teritoriju.',
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
    {
      title: 'Rūpnieciskā Noliktava',
      category: 'Jaunbūve',
      location: 'Rīgas Rajons',
      year: '2021',
      area: '5000 m²',
      description: 'Lielas platības loģistikas centrs ar modernu ugunsdrošības sistēmu un energoefektīvu apkuri.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    },
    {
      title: 'Privātmājas Piebūve un Rekonstrukcija',
      category: 'Renovācija',
      location: 'Pierīga',
      year: '2021',
      area: '120 m²',
      description: 'Vecas mājas rekonstrukcija ar modernu piebūvi, jumta nomaiņa un fasādes siltināšana.',
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop',
    },
  ];

  const categories = ['Visi', 'Jaunbūve', 'Renovācija', 'Apdare'];

  return (
    <main>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 text-white">Mūsu Projekti</h1>
          <p className="text-xl text-gray-100">
            Lepojamies ar vairāk nekā 200 veiksmīgi realizētiem projektiem visā Latvijā. 
            Apskatiet dažus no mūsu labākajiem darbiem.
          </p>
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-gray-600">Pabeigti Projekti</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-gray-600">Gadu Pieredze</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600">Apmierināti Klienti</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-gray-600">m² Uzbūvēts</div>
          </div>
        </div>
      </Section>

      {/* Filter Buttons - Placeholder for future functionality */}
      <Section background="gray" padding="sm">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-lg font-medium transition-colors bg-white text-gray-700 hover:bg-primary hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      {/* Projects Grid */}
      <Section background="gray" padding="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} hover padding="none" className="overflow-hidden group">
              {/* Project Image */}
              <div className="relative h-64 bg-gray-300 overflow-hidden">
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
              <CardHeader>
                <CardTitle className="mb-3">{project.title}</CardTitle>
                <CardDescription className="mb-4">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
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
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-secondary">Vēlaties Redzēt Savu Projektu Šeit?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Sazinieties ar mums un sāksim plānot jūsu sapņu projektu jau šodien!
          </p>
          <ButtonLink href="/contact" variant="primary" size="lg">
            Sākt Projektu
          </ButtonLink>
        </div>
      </Section>
    </main>
  );
}
