import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CampaignHero = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-foreground" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary-light/10 rounded-full blur-2xl" />
      </div>

      {/* Motion blur lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground to-transparent" />
        <div className="absolute top-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground to-transparent" />
        <div className="absolute bottom-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-sm font-medium animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Early Intervention Program</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Early Intervention{" "}
            <span className="text-secondary">Changes Lives</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Research shows that early therapy produces the best outcomes. Join our special program designed to identify and support children during their critical development years.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Learn About Early Intervention
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground"
            >
              Schedule Assessment
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">90%</p>
              <p className="text-sm text-primary-foreground/70">Better Outcomes</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">0-3</p>
              <p className="text-sm text-primary-foreground/70">Years Critical Window</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">500+</p>
              <p className="text-sm text-primary-foreground/70">Children Helped</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignHero;
