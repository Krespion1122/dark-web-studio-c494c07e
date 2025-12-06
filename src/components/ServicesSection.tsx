import { Globe, Palette, Code2, Zap, Shield, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Strony One Page',
    description: 'Eleganckie, jednostronicowe witryny idealne dla małych firm i portfolio. Wszystko w jednym miejscu.',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Strony Wielostronicowe',
    description: 'Rozbudowane serwisy z wieloma podstronami, idealne dla większych firm i sklepów.',
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Sklepy Internetowe',
    description: 'Funkcjonalne e-commerce z systemem płatności, koszykiem i zarządzaniem produktami.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Landing Page',
    description: 'Strony konwersyjne nastawione na generowanie leadów i sprzedaż produktów.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Redesign Stron',
    description: 'Odświeżenie wyglądu i funkcjonalności istniejącej strony według najnowszych trendów.',
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8" />,
    title: 'Wsparcie Techniczne',
    description: 'Stała opieka, aktualizacje, backupy i pomoc techniczna dla Twojej strony.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4">Nasze usługi</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Co możemy dla Ciebie <span className="gradient-text">stworzyć?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferujemy kompleksowe usługi tworzenia stron internetowych. 
            Od prostych wizytówek po rozbudowane platformy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 glass rounded-2xl glass-hover cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/20 group-hover:rotate-3 transition-all duration-500">
                  {service.icon}
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
