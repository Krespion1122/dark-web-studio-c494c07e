import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Ile trwa realizacja strony internetowej?',
    answer: 'Czas realizacji zależy od złożoności projektu. Strony One Page realizujemy w 5-7 dni roboczych, strony wielostronicowe w 2-3 tygodnie, a sklepy internetowe w 3-5 tygodni. Dokładny termin ustalamy indywidualnie po omówieniu projektu.',
  },
  {
    question: 'Czy strony są tworzone od zera?',
    answer: 'Tak! Każda strona jest projektowana i kodowana od podstaw, specjalnie dla Ciebie. Nie używamy gotowych szablonów - dzięki temu Twoja strona jest w 100% unikalna i dopasowana do Twoich potrzeb.',
  },
  {
    question: 'Co zawiera cena strony internetowej?',
    answer: 'W cenę wliczony jest: projekt graficzny, kodowanie strony, responsywność (dostosowanie do urządzeń mobilnych), podstawowa optymalizacja, hosting na rok oraz wsparcie techniczne. Wszystkie ceny są ostateczne, bez ukrytych kosztów.',
  },
  {
    question: 'Czy mogę wprowadzać poprawki w trakcie realizacji?',
    answer: 'Oczywiście! W trakcie realizacji projektu masz możliwość zgłaszania uwag i poprawek. W pakietach Business i Premium darmowe poprawki są wliczone w cenę.',
  },
  {
    question: 'Czy pomagacie z domeną i hostingiem?',
    answer: 'Tak, pomagamy w zakupie domeny i konfiguracji hostingu. W każdym pakiecie hosting na pierwszy rok jest wliczony w cenę. Możemy również przejąć opiekę nad stroną po wdrożeniu.',
  },
  {
    question: 'Czy oferujecie wsparcie po oddaniu strony?',
    answer: 'Tak, każdy pakiet zawiera określony okres wsparcia technicznego (od 14 do 90 dni). Po tym czasie oferujemy pakiety opieki nad stroną obejmujące aktualizacje, backup i pomoc techniczną.',
  },
  {
    question: 'Jak wygląda proces płatności?',
    answer: 'Standardowo pobieramy 50% zaliczki przed rozpoczęciem prac, a pozostałe 50% po akceptacji projektu. Dla większych projektów możemy ustalić indywidualny harmonogram płatności.',
  },
  {
    question: 'Czy mogę zamówić tylko redesign istniejącej strony?',
    answer: 'Tak, oferujemy usługę redesignu stron internetowych. Odświeżymy wygląd Twojej strony, poprawimy użyteczność i dostosujemy ją do nowoczesnych standardów. Wycena jest indywidualna.',
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Często zadawane <span className="gradient-text">pytania</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Masz pytania? Znajdź odpowiedzi na najczęściej zadawane pytania.
            Jeśli nie znajdziesz odpowiedzi, skontaktuj się z nami.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-2xl px-6 border-none data-[state=open]:glow-primary transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline py-6 [&[data-state=open]>svg]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
