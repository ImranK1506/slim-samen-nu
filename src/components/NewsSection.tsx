import { Calendar, Tag } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      title: "AI-gedreven beleid: De toekomst van openbaar bestuur",
      date: "15 maart 2024",
      tags: ["AI", "Beleid", "Innovatie"],
      excerpt: "Hoe kunstmatige intelligentie kan helpen bij het maken van eerlijkere en efficiëntere beleidsbeslissingen voor alle Nederlanders."
    },
    {
      title: "Woningcrisis oplossen met slimme data-analyse",
      date: "8 maart 2024", 
      tags: ["Wonen", "Data", "Beleid"],
      excerpt: "Door betere data-analyse kunnen we eindelijk de woningverdeling eerlijker maken en bouwen waar het echt nodig is."
    },
    {
      title: "Digitale overheid: Sneller, simpeler, toegankelijker",
      date: "1 maart 2024",
      tags: ["Digitalisering", "Overheid", "Service"],
      excerpt: "Zo maken we van de Nederlandse overheid de meest gebruiksvriendelijke en efficiënte ter wereld."
    }
  ];

  return (
    <section id="nieuws" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Nieuws & Updates
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">
            Blijf op de hoogte van onze laatste ontwikkelingen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <article key={index} className="political-card">
              <div className="mb-4">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar size={16} className="mr-2" />
                  {article.date}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
                    >
                      <Tag size={12} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                {article.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {article.excerpt}
              </p>
              
              <button className="text-primary font-medium hover:text-primary/80 transition-colors">
                Lees meer →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;