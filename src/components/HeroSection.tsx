import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Logo/Brand */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
              De Slimme Samenleving
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-primary">
              Samen slimmer, samen sterker.
            </p>
          </div>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Eerlijk, efficiënt en toekomstgericht beleid — voor alle werkende Nederlanders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="btn-hero text-lg px-8 py-4">
              Doe mee
            </Button>
            <Button variant="outline" size="lg" className="btn-secondary text-lg px-8 py-4">
              Lees ons programma
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;