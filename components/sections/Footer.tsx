import React from 'react';
import { Container } from '@/components/ui/Container';
import { Building2, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Sākums', href: '#home' },
    { label: 'Pakalpojumi', href: '#services' },
    { label: 'Par Mums', href: '#about' },
    { label: 'Projekti', href: '#projects' },
    { label: 'Kontakti', href: '#contact' },
  ];

  const services = [
    { label: 'Jaunbūves', href: '#services' },
    { label: 'Renovācija', href: '#services' },
    { label: 'Projektēšana', href: '#services' },
    { label: 'Konsultācijas', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-secondary text-white">
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-8 h-8 text-primary" />
                <span className="font-heading font-bold text-xl">
                  BūvcenuGuru
                </span>
              </div>
              <p className="text-gray-300 mb-6">
                Profesionāli būvniecības pakalpojumi Latvijā. Kvalitāte un uzticamība kopš 2020. gada.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Ātrās Saites</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Pakalpojumi</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Kontakti</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    Rīga, Latvija<br />
                    LV-1050
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="tel:+37120000000"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    +371 20 000 000
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:info@buvcenuguru.lv"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    info@buvcenuguru.lv
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © {currentYear} BūvcenuGuru. Visas tiesības aizsargātas.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                Privātuma politika
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                Lietošanas noteikumi
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
