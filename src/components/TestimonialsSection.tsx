import { useState, useEffect } from 'react';
import { Star, StarHalf, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Weronika',
    company: 'Korepetycje z matematyki',
    rating: 5,
    text: 'Strona do rezerwacji korepetycji działa świetnie. Uczniowie łatwo umawiają się na zajęcia!',
  },
  {
    id: 2,
    name: 'Marcin',
    company: 'Biuro Nieruchomości',
    rating: 4.5,
    text: 'Profesjonalna strona, która pomaga nam prezentować oferty. Klienci chwalą intuicyjność.',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      handleSlide('right');
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleSlide = (direction: 'left' | 'right') => {
    if (isSliding) return;
    
    setSlideDirection(direction);
    setIsSliding(true);
    
    setTimeout(() => {
      if (direction === 'right') {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
      setIsSliding(false);
    }, 300);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    handleSlide('left');
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    handleSlide('right');
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    if (index !== currentIndex) {
      setSlideDirection(index > currentIndex ? 'right' : 'left');
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsSliding(false);
      }, 300);
    }
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4">Opinie klientów</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Co mówią <span className="gradient-text">klienci?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Poznaj opinie naszych zadowolonych klientów.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            {/* Main Testimonial Card */}
            <div 
              className={`glass rounded-3xl p-8 md:p-12 relative transition-all duration-500 ease-out ${
                isSliding 
                  ? slideDirection === 'right' 
                    ? 'opacity-0 -translate-x-16' 
                    : 'opacity-0 translate-x-16'
                  : 'opacity-100 translate-x-0'
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-16 h-16" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(Math.floor(testimonials[currentIndex].rating))].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                  {testimonials[currentIndex].rating % 1 !== 0 && (
                    <StarHalf className="w-5 h-5 fill-primary text-primary" />
                  )}
                </div>

                {/* Text */}
                <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed font-light italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div>
                  <div className="font-display font-bold text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="glass rounded-full w-12 h-12 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary w-8'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="glass rounded-full w-12 h-12 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
