import { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const projects = [
  {
    id: 1,
    title: 'E-commerce Fashion',
    category: 'Sklep internetowy',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    description: 'Nowoczesny sklep odzieżowy z systemem filtrowania i płatnościami.',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Restaurant Deluxe',
    category: 'Strona firmowa',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    description: 'Elegancka strona restauracji z rezerwacją online.',
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'Tech Startup',
    category: 'Landing page',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    description: 'Strona konwersyjna dla startupu technologicznego.',
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'Architecture Studio',
    category: 'Portfolio',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop',
    description: 'Minimalistyczne portfolio pracowni architektonicznej.',
    liveUrl: '#',
  },
  {
    id: 5,
    title: 'Fitness Club',
    category: 'One Page',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
    description: 'Dynamiczna strona klubu fitness z harmonogramem zajęć.',
    liveUrl: '#',
  },
  {
    id: 6,
    title: 'Law Firm',
    category: 'Strona firmowa',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
    description: 'Profesjonalna strona kancelarii prawnej.',
    liveUrl: '#',
  },
];

const PortfolioSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handlePreview = (project: typeof projects[0]) => {
    toast.info(`Podgląd projektu: ${project.title}`, {
      description: 'Funkcja podglądu zostanie wkrótce dodana.',
    });
  };

  const handleOpen = (project: typeof projects[0]) => {
    toast.success(`Otwieranie: ${project.title}`, {
      description: 'Przekierowanie do strony projektu...',
    });
    // W przyszłości: window.open(project.liveUrl, '_blank');
  };

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4">Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Nasze <span className="gradient-text">realizacje</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Zobacz wybrane projekty, które zrealizowaliśmy dla naszych klientów. 
            Każdy jest unikalny i tworzony od zera, dopasowany do potrzeb.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent transition-opacity duration-500 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 text-sm bg-background/90 text-primary rounded-full mb-3 font-medium border border-primary/30">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePreview(project);
                      }}
                      className="bg-secondary text-secondary-foreground border border-border/50 hover:scale-105 transition-transform duration-200"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Podgląd
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpen(project);
                      }}
                      className="glow-primary"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Otwórz
                    </Button>
                  </div>
                </div>
              </div>

              {/* Always visible info */}
              <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/95 to-transparent transition-opacity duration-500 ${hoveredId === project.id ? 'opacity-0' : 'opacity-100'}`}>
                <span className="inline-block px-3 py-1 text-xs bg-background/90 text-primary rounded-full mb-2 font-medium border border-primary/30">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-bold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
