import { MessageSquare, Lightbulb, Code, Rocket, Clock } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    step: '01',
    title: 'Konsultacja',
    duration: '1-2 dni',
    description: 'Poznajemy Twoje potrzeby, cele biznesowe i wizję projektu. Bezpłatna rozmowa bez zobowiązań.',
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    step: '02',
    title: 'Projekt',
    duration: '3-5 dni',
    description: 'Tworzymy makiety i projekty graficzne. Dopracowujemy każdy detal według Twoich wskazówek.',
  },
  {
    icon: <Code className="w-8 h-8" />,
    step: '03',
    title: 'Realizacja',
    duration: '5-14 dni',
    description: 'Kodujemy stronę od zera z najwyższą dbałością o jakość, responsywność i wydajność.',
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    step: '04',
    title: 'Wdrożenie',
    duration: '1-2 dni',
    description: 'Publikujemy stronę, konfigurujemy hosting i przekazujemy pełną dokumentację.',
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4">Proces realizacji</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Jak <span className="gradient-text">pracujemy?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Przejrzysty proces, stały kontakt i terminowa realizacja. 
            Od pomysłu do gotowej strony w 4 prostych krokach. Każdy projekt tworzymy od zera!
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Step Card */}
                <div className="glass rounded-2xl p-8 glass-hover relative z-10 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary flex items-center justify-center font-display text-xl font-bold text-primary-foreground glow-primary group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                    {step.icon}
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold mb-2">
                    {step.title}
                  </h3>
                  
                  {/* Duration */}
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mb-4">
                    <Clock className="w-4 h-4" />
                    {step.duration}
                  </div>
                  
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 text-primary z-20">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
