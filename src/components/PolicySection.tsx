import { Check } from "lucide-react";

const PolicySection = () => {
  const policies = [
    {
      title: "Betaalbaar wonen",
      description: "Woningen eerlijk verdelen én betaalbaar houden."
    },
    {
      title: "Eerlijke belastingen",
      description: "Minder druk op werkenden, slimmer en rechtvaardig verdelen."
    },
    {
      title: "Snelle, simpele overheid",
      description: "Procedures sneller en eenvoudiger."
    },
    {
      title: "Betere balans werk-privé",
      description: "Meer tijd voor familie, rust en welzijn."
    },
    {
      title: "Betaalbare energie",
      description: "Duurzaam en betaalbaar, zonder dat het pijn doet."
    }
  ];

  return (
    <section id="programma" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Wat Wij Willen
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Concrete oplossingen voor de uitdagingen van werkend Nederland
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {policies.map((policy, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-4">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {policy.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  {policy.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-hero">
            Lees het volledige programma
          </button>
        </div>
      </div>
    </section>
  );
};

export default PolicySection;