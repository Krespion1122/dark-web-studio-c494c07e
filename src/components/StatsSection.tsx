import { useEffect, useState, useRef } from 'react';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: <TrendingUp className="w-8 h-8" />, value: 150, suffix: '+', label: 'Ukończonych projektów' },
  { icon: <Users className="w-8 h-8" />, value: 98, suffix: '%', label: 'Zadowolonych klientów' },
  { icon: <Clock className="w-8 h-8" />, value: 5, suffix: ' lat', label: 'Doświadczenia' },
  { icon: <Award className="w-8 h-8" />, value: 24, suffix: 'h', label: 'Czas odpowiedzi' },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const step = value / (duration / 16);
          
          const timer = setInterval(() => {
            start += step;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold font-display gradient-text">
      {count}{suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 glass rounded-2xl glass-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                {stat.icon}
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="text-muted-foreground mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
