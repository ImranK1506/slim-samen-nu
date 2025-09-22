import { useState } from "react";
import { ChevronDown, MessageCircleQuestion, Shield, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      icon: Shield,
      category: "AI Transparantie",
      question: "Hoe kunnen we er zeker van zijn dat AI-beslissingen eerlijk zijn?",
      answer: "Alle AI-systemen die we implementeren worden voorzien van uitlegbare algoritmes. Elke beslissing kan worden getraceerd naar de gebruikte data en logica. We publiceren maandelijks transparantierapporten waarin we tonen hoe onze AI-systemen presteren en welke beslissingen ze hebben genomen."
    },
    {
      icon: Users,
      category: "Democratische Controle",
      question: "Hebben burgers inspraak in hoe AI wordt gebruikt?",
      answer: "Absoluut. We organiseren elk kwartaal burgerpanels waar inwoners kunnen meebeslissen over nieuwe AI-toepassingen. Daarnaast heeft elke burger het recht om bezwaar te maken tegen AI-beslissingen die hen raken, met garantie op menselijke heroverweging binnen 48 uur."
    },
    {
      icon: Zap,
      category: "Slimme Overheid",
      question: "Wordt de overheid dan volledig geautomatiseerd?",
      answer: "Nee, AI is een hulpmiddel, geen vervanging. We gebruiken AI om routinetaken te automatiseren zodat ambtenaren meer tijd hebben voor persoonlijk contact en complexe vraagstukken. Belangrijke beslissingen blijven altijd onder menselijke controle."
    },
    {
      icon: MessageCircleQuestion,
      category: "Privacy & Veiligheid",
      question: "Wat gebeurt er met mijn persoonlijke data?",
      answer: "Privacy is ons uitgangspunt. We verzamelen alleen data die noodzakelijk is voor publieke dienstverlening. Alle data wordt geanonimiseerd waar mogelijk, en burgers hebben altijd het recht om hun data in te zien, te corrigeren of te laten verwijderen."
    },
    {
      icon: Shield,
      category: "Implementatie",
      question: "Hoe snel willen jullie deze veranderingen doorvoeren?",
      answer: "We geloven in gefaseerde implementatie met uitgebreide pilots. Elk nieuw AI-systeem wordt eerst 6 maanden getest in een beperkte omgeving, met continue monitoring en feedback van gebruikers. Pas na bewezen succes schalen we op."
    },
    {
      icon: Users,
      category: "Sociale Impact",
      question: "Verdwijnen er banen door deze automatisering?",
      answer: "Ons doel is niet het afschaffen van banen, maar het verbeteren ervan. We investeren zwaar in omscholing en bijscholing. Ambtenaren krijgen de kans om zich te ontwikkelen in nieuwe rollen die meer waarde toevoegen voor de samenleving."
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Veelgestelde Vragen
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Alles wat je wilt weten over onze visie op AI in de politiek en slimme samenleving
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <span 
                key={category}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="political-card transition-all duration-200 hover:shadow-lg"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <faq.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium mb-1">
                      {faq.category}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6 pt-0">
                  <div className="pl-14">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="political-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Meer vragen?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Heb je nog andere vragen over onze visie op AI en slimme samenleving? 
              We horen graag van je en beantwoorden graag al je vragen.
            </p>
            <Button className="btn-hero">
              Stel je vraag
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;