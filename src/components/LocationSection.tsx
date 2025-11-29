import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  const phoneNumber1 = "+233500758665";
  const whatsappLink = `https://wa.me/${phoneNumber1}`;
  const googleMapsUrl = "https://www.google.com/maps/place/HapaSpace+Kumasi/@6.6885,-1.6321,17z";
  
  return (
    <section id="location" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            <span>Visit Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Find Our <span className="text-gradient">Location</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Located at HapaSpace in Danyame, Kumasi. We're easily accessible and ready to welcome you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Map Embed with Creative Styling */}
          <div className="relative rounded-3xl overflow-hidden shadow-lifted h-full min-h-[400px] group">
            {/* Decorative gradient border */}
            <div className="absolute inset-0 rounded-3xl gradient-teal-orange p-1 z-0">
              <div className="w-full h-full bg-card rounded-[calc(1.5rem-4px)]" />
            </div>
            <div className="absolute inset-1 rounded-[calc(1.5rem-4px)] overflow-hidden z-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.6!2d-1.6285!3d6.6850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96ea67f56a13%3A0x1c8c7dc2b94c8e89!2sHapaSpace%20Kumasi!5e0!3m2!1sen!2sgh!4v1699999999999!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wellspring Speech Therapy Location - HapaSpace, Danyame, Kumasi"
              />
            </div>
            {/* Floating GPS badge */}
            <div className="absolute bottom-4 left-4 z-20 px-4 py-2 rounded-full glass-panel shadow-soft border border-primary/20 animate-fade-in">
              <span className="text-sm font-semibold text-primary">GPS: AK-132-4568</span>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="bg-card rounded-3xl p-8 shadow-lifted flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Wellspring Speech Therapy
              </h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      HapaSpace, Danyame<br />
                      Kumasi, Ghana
                    </p>
                    <p className="text-sm text-primary font-medium mt-1">GPS: AK-132-4568</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a href="tel:+233500758665" className="block text-muted-foreground hover:text-primary transition-colors">
                      +233 50 075 8665
                    </a>
                    <a href="tel:+233247920656" className="block text-muted-foreground hover:text-primary transition-colors">
                      +233 24 792 0656
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                variant="hero" 
                size="lg" 
                className="flex-1"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
              <Button 
                variant="hero-outline" 
                size="lg" 
                className="flex-1"
                onClick={() => window.open(googleMapsUrl, '_blank')}
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
