import { Linkedin, Mail } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah van der Berg",
      role: "Lijsttrekker & Directeur Beleid",
      bio: "Econoom gespecialiseerd in AI-ethiek en publieke beleidsvorming. 15 jaar ervaring in overheidsadvies.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c643aca5?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Mark Jansen",
      role: "Technologie & Innovatie",
      bio: "Tech-ondernemer en voormalig CTO. Expert in digitale transformatie van overheidsdiensten.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Fatima Al-Hassan", 
      role: "Sociale Innovatie",
      bio: "Socioloog en beleidsadviseur. Specialist in inclusieve technologie en digitale toegankelijkheid.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Prof. Dr. Pieter Mulder",
      role: "Adviseur Democratie & AI",
      bio: "Politicoloog en onderzoeker aan de UvA. Autoriteit op het gebied van democratische governance.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Lisa Chen",
      role: "Data & Privacy Officer",
      bio: "Jurist en data scientist. Beschermt burgerrechten in het digitale tijdperk.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Ahmed Bakr",
      role: "Communicatie & Engagement",
      bio: "Voormalig journalist en communicatiestrateeg. Bouwt bruggen tussen technologie en samenleving.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Ons Team
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ervaren professionals die zich inzetten voor een slimmere, eerlijkere samenleving
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="political-card text-center">
              <div className="mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/10"
                />
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">
                  {member.role}
                </p>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {member.bio}
              </p>

              <div className="flex justify-center space-x-3">
                <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </button>
                <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;