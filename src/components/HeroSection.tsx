import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Users, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-[var(--gradient-subtle)]" />
      
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5" />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000" />
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
              <Brain className="w-4 h-4" />
              AI-gedreven politiek
            </div>
            
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                De Slimme
                <span className="block text-primary">Samenleving</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
                Samen slimmer, samen sterker.
              </p>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Eerlijk, efficiënt en toekomstgericht beleid — voor alle werkende Nederlanders.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-hero group">
                Doe mee
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="btn-secondary">
                Lees ons programma
              </Button>
            </div>
          </div>

          {/* Right content - Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:pl-8">
            <div className="political-card group hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="check-icon">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Voor iedereen</h3>
                  <p className="text-sm text-muted-foreground">Beleid dat alle werkende Nederlanders ten goede komt</p>
                </div>
              </div>
            </div>
            
            <div className="political-card group hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="check-icon">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Efficiënt</h3>
                  <p className="text-sm text-muted-foreground">Snelle oplossingen door slimme technologie</p>
                </div>
              </div>
            </div>
            
            <div className="political-card group hover:scale-105 sm:col-span-2">
              <div className="flex items-start gap-4">
                <div className="check-icon">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Toekomstgericht</h3>
                  <p className="text-sm text-muted-foreground">AI-gedreven beleid dat vooruitkijkt en meegroeit met de tijd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;