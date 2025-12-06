import { Check, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const packages = [
  {
    name: 'Starter',
    subtitle: 'Idealna na start',
    price: '1 499',
    description: 'Dla małych firm i freelancerów potrzebujących profesjonalnej wizytówki online.',
    features: [
      'Strona One Page',
      'Responsywny design',
      'Do 5 sekcji',
      'Formularz kontaktowy',
      'Podstawowa optymalizacja',
      'Hosting na 1 rok',
      '14 dni wsparcia',
    ],
    popular: false,
    icon: <Star className="w-6 h-6" />,
  },
  {
    name: 'Business',
    subtitle: 'Najpopularniejszy',
    price: '2 999',
    description: 'Rozbudowana strona dla firm, które chcą wyróżnić się w sieci.',
    features: [
      'Do 8 podstron',
      'Opcja One Page lub Multi Page',
      'Responsywny design',
      'Formularz kontaktowy',
      'Integracja z social media',
      'Blog lub aktualności',
      'Hosting na 1 rok',
      '30 dni wsparcia',
      'Darmowe poprawki',
    ],
    popular: true,
    icon: <Zap className="w-6 h-6" />,
  },
  {
    name: 'Premium',
    subtitle: 'Pełna moc',
    price: '5 999',
    description: 'Kompleksowe rozwiązanie dla wymagających klientów i e-commerce.',
    features: [
      'Nieograniczona liczba podstron',
      'Sklep internetowy',
      'System płatności',
      'Panel administracyjny',
      'Zaawansowane animacje',
      'Indywidualny projekt',
      'Hosting na 1 rok',
      '90 dni wsparcia',
      'Szkolenie z obsługi',
      'Priorytetowa pomoc',
    ],
    popular: false,
    icon: <Star className="w-6 h-6" />,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4">Cennik</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Przejrzyste <span className="gradient-text">ceny</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Wybierz pakiet dopasowany do Twoich potrzeb. 
            Wszystkie ceny są ostateczne, bez ukrytych kosztów.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                pkg.popular
                  ? 'glass border-primary/50 glow-primary'
                  : 'glass glass-hover'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    <Zap className="w-4 h-4" />
                    Najpopularniejszy
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${pkg.popular ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                  {pkg.icon}
                </div>
                <h3 className="font-display text-2xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm">{pkg.subtitle}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-display font-bold gradient-text">{pkg.price}</span>
                  <span className="text-muted-foreground">PLN</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">{pkg.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full py-6 text-lg ${
                  pkg.popular
                    ? 'glow-primary hover:scale-105'
                    : 'glass glass-hover'
                }`}
                variant={pkg.popular ? 'default' : 'outline'}
              >
                Wybierz pakiet
              </Button>
            </div>
          ))}
        </div>

        {/* Custom Project CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Potrzebujesz indywidualnej wyceny? Masz specyficzne wymagania?
          </p>
          <Button size="lg" variant="outline" className="glass glass-hover">
            Zamów darmową wycenę
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
