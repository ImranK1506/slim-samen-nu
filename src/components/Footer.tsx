import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Missie & Visie", href: "#missie" },
    { name: "Wat Wij Willen", href: "#programma" },
    { name: "Nieuws", href: "#nieuws" },
    { name: "Doe mee", href: "#doe-mee" },
    { name: "AI Principes", href: "#ai-principes" },
  ];

  const legal = [
    { name: "Privacy", href: "#" },
    { name: "AVG", href: "#" },
    { name: "Cookies", href: "#" },
    { name: "Algemene Voorwaarden", href: "#" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="text-2xl font-bold text-primary mb-4">
                De Slimme Samenleving
              </div>
              <p className="text-background/80 text-sm leading-relaxed">
                Samen slimmer, samen sterker. Voor een eerlijke, efficiënte en
                toekomstgerichte samenleving.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-background/60 hover:text-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-background/60 hover:text-primary transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-background/60 hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-background/60 hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigatie</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-background/80 hover:text-primary transition-colors text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Juridisch</h3>
              <ul className="space-y-2">
                {legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-background/80 hover:text-primary transition-colors text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-sm text-background/60">
                KvK: 12345678<br />
                BTW: NL123456789B01
              </div>
            </div>

            {/* Contact */}
            <div id="contact">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center text-background/80 text-sm">
                  <Mail size={16} className="mr-3 text-primary" />
                  info@slimmesamenleving.nl
                </div>
                <div className="flex items-center text-background/80 text-sm">
                  <Phone size={16} className="mr-3 text-primary" />
                  +31 (0)20 123 4567
                </div>
                <div className="flex items-start text-background/80 text-sm">
                  <MapPin size={16} className="mr-3 text-primary mt-0.5" />
                  <div>
                    Keizersgracht 123<br />
                    1015 CJ Amsterdam
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} De Slimme Samenleving. Alle rechten voorbehouden.
            </p>
            <p className="text-background/60 text-sm mt-2 md:mt-0">
              Gebouwd voor een slimmere toekomst 🇳🇱
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;