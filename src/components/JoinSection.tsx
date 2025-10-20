import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const joinFormSchema = z.object({
  name: z.string().trim().min(1, "Naam is verplicht").max(100, "Naam mag maximaal 100 tekens bevatten"),
  email: z.string().trim().email("Ongeldig e-mailadres").max(255, "E-mailadres mag maximaal 255 tekens bevatten"),
  phone: z.string().trim().regex(/^(\+31|0)[0-9]{9}$/, "Ongeldig telefoonnummer (gebruik +31612345678 of 0612345678)").optional().or(z.literal("")),
  motivation: z.string().trim().max(1000, "Motivatie mag maximaal 1000 tekens bevatten").optional(),
});

const JoinSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    motivation: "",
    newsletter: true,
    volunteer: false
  });
  
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      const validatedData = joinFormSchema.parse({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        motivation: formData.motivation || undefined,
      });

      // Insert into Supabase
      const { error } = await supabase
        .from('join_submissions')
        .insert({
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone || null,
          motivation: validatedData.motivation || null,
          newsletter: formData.newsletter,
          volunteer: formData.volunteer,
        });

      if (error) throw error;

      toast({
        title: "Bedankt voor je aanmelding!",
        description: "We nemen binnenkort contact met je op.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        motivation: "",
        newsletter: true,
        volunteer: false
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validatiefout",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        console.error('Error submitting form:', error);
        toast({
          title: "Er is iets misgegaan",
          description: "Probeer het later opnieuw.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <section id="doe-mee" className="py-20 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Samen sterker — doe mee!
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Word onderdeel van de beweging voor een slimmere, eerlijkere samenleving. 
            Elke stem telt, elke bijdrage maakt het verschil.
          </p>
        </div>

        <div className="political-card max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Volledige naam *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="email">E-mailadres *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="mt-2"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone">Telefoonnummer</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="motivation">Waarom wil je meedoen?</Label>
              <Textarea
                id="motivation"
                value={formData.motivation}
                onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                className="mt-2"
                rows={4}
                placeholder="Vertel ons wat je motiveert om bij te dragen aan een slimmere samenleving..."
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  id="newsletter"
                  type="checkbox"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                  className="rounded border-border"
                />
                <Label htmlFor="newsletter" className="text-sm">
                  Nieuwsbrief ontvangen met updates en nieuws
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  id="volunteer"
                  type="checkbox"
                  checked={formData.volunteer}
                  onChange={(e) => setFormData({...formData, volunteer: e.target.checked})}
                  className="rounded border-border"
                />
                <Label htmlFor="volunteer" className="text-sm">
                  Ik wil vrijwilliger worden
                </Label>
              </div>
            </div>

            <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg">
              <strong>Privacy:</strong> Je gegevens worden vertrouwelijk behandeld conform de AVG. 
              We gebruiken je informatie alleen om contact te houden over onze activiteiten en 
              je kunt je altijd uitschrijven.
            </div>

            <Button type="submit" className="btn-hero w-full">
              Doe mee!
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;