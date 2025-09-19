import { Shield, Eye, Users, Zap, Heart, Brain } from "lucide-react";

const AIPrinciplesSection = () => {
  const principles = [
    {
      icon: Shield,
      title: "Transparantie eerst",
      description: "Alle AI-beslissingen zijn volledig traceerbaar en uitlegbaar. Geen black boxes, alleen heldere logica die burgers kunnen begrijpen en controleren."
    },
    {
      icon: Users,
      title: "Menselijke waardigheid",
      description: "AI dient mensen, niet andersom. Elke technologische keuze wordt getoetst op impact voor menselijke waardigheid en autonomie."
    },
    {
      icon: Eye,
      title: "Open source governance", 
      description: "Onze algoritmes zijn openbaar en controleerbaar. Democratie vereist dat burgers kunnen zien hoe beslissingen tot stand komen."
    },
    {
      icon: Zap,
      title: "Efficiëntie met empathie",
      description: "Snellere overheid betekent niet minder menselijk. AI helpt ons meer tijd te creëren voor persoonlijke aandacht waar het nodig is."
    },
    {
      icon: Heart,
      title: "Inclusief door ontwerp",
      description: "Onze AI-systemen worden getest op eerlijkheid voor alle groepen. Technologie mag bestaande ongelijkheid niet versterken."
    },
    {
      icon: Brain,
      title: "Voortdurend leren",
      description: "Onze AI wordt beter door feedback van burgers. Democratische algoritmes evolueren samen met de samenleving die ze dienen."
    }
  ];

  return (
    <section id="ai-principes" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Onze AI Principes
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verantwoorde kunstmatige intelligentie voor een democratische toekomst. 
            Dit zijn onze ononderhandelbaren principes voor AI in de politiek.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="political-card group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <principle.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {principle.title}
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="political-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              AI Transparantie Garantie
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Wij beloven dat elke AI-gestuurde beleidsbeslissing binnen 48 uur volledig 
              wordt gedocumenteerd en gepubliceerd. Burgers hebben het recht om te weten 
              hoe en waarom beslissingen worden genomen die hun leven beïnvloeden.
            </p>
            <button className="btn-secondary mt-6">
              Lees onze AI Ethiek Code
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPrinciplesSection;