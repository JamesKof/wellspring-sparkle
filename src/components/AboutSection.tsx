import { Heart, Users, Sparkles, CheckCircle } from "lucide-react";

const features = [
  "Improving communication and swallowing abilities for children and adults",
  "Evidence-based therapy with compassionate care",
  "Modern tools to enhance client outcomes",
  "Speech clarity and language development support",
  "Fluency and communication confidence building",
  "In-person therapy, teletherapy, and digital engagement tools",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual Element */}
          <div className="relative">
            <div className="relative">
              {/* Main decorative card */}
              <div className="relative bg-gradient-to-br from-primary-light to-secondary-light rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  {/* Stat Card 1 */}
                  <div className="bg-card rounded-2xl p-6 shadow-soft">
                    <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-4">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-1">1000+</h3>
                    <p className="text-sm text-muted-foreground">Families Served</p>
                  </div>

                  {/* Stat Card 2 */}
                  <div className="bg-card rounded-2xl p-6 shadow-soft">
                    <div className="w-12 h-12 rounded-full bg-secondary-light flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-1">15+</h3>
                    <p className="text-sm text-muted-foreground">Expert Therapists</p>
                  </div>

                  {/* Stat Card 3 */}
                  <div className="bg-card rounded-2xl p-6 shadow-soft">
                    <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center mb-4">
                      <Sparkles className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-1">98%</h3>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>

                  {/* Stat Card 4 */}
                  <div className="bg-card rounded-2xl p-6 shadow-soft">
                    <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-4">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-1">5000+</h3>
                    <p className="text-sm text-muted-foreground">Sessions Completed</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium">
                <Heart className="w-4 h-4" />
                <span>About Wellspring</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
                Dedicated to{" "}
                <span className="text-gradient">Transforming Lives</span>{" "}
                Through Compassionate Care
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wellspring is committed to improving communication and swallowing abilities for children and adults. Our centre uses evidence-based therapy, compassionate care, and modern tools to enhance client outcomes.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                We provide therapy that supports speech clarity, language development, fluency, communication confidence, and rehabilitation. We're dedicated to improving access through in-person therapy, teletherapy, and digital engagement tools.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
