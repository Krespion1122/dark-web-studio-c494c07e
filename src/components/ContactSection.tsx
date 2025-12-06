import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Wiadomość wysłana!',
      description: 'Odpowiemy najszybciej jak to możliwe.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'kontakt@webcraft.pl' },
    { icon: <Phone className="w-5 h-5" />, label: 'Telefon', value: '+48 123 456 789' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Adres', value: 'Warszawa, Polska' },
    { icon: <Clock className="w-5 h-5" />, label: 'Godziny', value: 'Pon-Pt: 9:00 - 17:00' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4">Kontakt</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Porozmawiajmy o <span className="gradient-text">Twoim projekcie</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Masz pomysł na stronę? Skontaktuj się z nami i otrzymaj darmową wycenę w ciągu 24 godzin.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold mb-6">Dane kontaktowe</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Benefits */}
            <div className="glass rounded-2xl p-6">
              <h4 className="font-display text-lg font-bold mb-4">Dlaczego warto?</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Darmowa konsultacja
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Wycena w 24 godziny
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Brak ukrytych kosztów
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Gwarancja satysfakcji
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Imię i nazwisko</label>
                  <Input
                    type="text"
                    placeholder="Jan Kowalski"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="jan@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Telefon (opcjonalnie)</label>
                <Input
                  type="tel"
                  placeholder="+48 123 456 789"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Twoja wiadomość</label>
                <Textarea
                  placeholder="Opisz swój projekt - jakiej strony potrzebujesz, jakie funkcje są dla Ciebie ważne..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary/50 border-border/50 focus:border-primary min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full glow-primary hover:scale-[1.02] transition-transform duration-300">
                <Send className="w-5 h-5 mr-2" />
                Wyślij wiadomość
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
