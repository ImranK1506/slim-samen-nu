const MissionSection = () => {
  return (
    <section id="missie" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Missie & Visie
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="political-card">
              <h3 className="text-2xl font-semibold text-primary mb-6">Onze Missie</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Technologie dient mensen, niet andersom. Wij geloven in een samenleving waar 
                verantwoord toegepaste AI zorgt voor betere publieke diensten, eerlijker beleid 
                en meer tijd voor wat echt belangrijk is: familie, gemeenschap en persoonlijke groei.
              </p>
            </div>

            <div className="political-card">
              <h3 className="text-2xl font-semibold text-primary mb-6">Onze Visie</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Een Nederland waar elke werkende burger profiteert van slimme, efficiënte overheid. 
                Waar bureaucratie verdwijnt, procedures sneller worden en beleid gebaseerd is op 
                feiten in plaats van gevoel. Een land dat voorop loopt in de digitale revolutie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;