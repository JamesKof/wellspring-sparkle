import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Video, ArrowRight } from "lucide-react";

const BookingSection = () => {
  return (
    <section id="book" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-background to-secondary-light" />
            
            {/* Content */}
            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>Book Your Session</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                    Start Your{" "}
                    <span className="text-gradient">Therapy Journey</span>{" "}
                    Today
                  </h2>
                  
                  <p className="text-lg text-muted-foreground">
                    Schedule a consultation with our expert therapists. We offer flexible appointment times and multiple session formats to fit your needs.
                  </p>

                  {/* Options */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-soft">
                      <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">In-Person Sessions</h4>
                        <p className="text-sm text-muted-foreground">Visit our modern therapy centre</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-soft">
                      <div className="w-12 h-12 rounded-xl bg-secondary-light flex items-center justify-center">
                        <Video className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Teletherapy Sessions</h4>
                        <p className="text-sm text-muted-foreground">Secure video sessions from home</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right - Booking Card */}
                <div className="bg-card rounded-2xl p-8 shadow-lifted">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                    Request an Appointment
                  </h3>
                  
                  <form className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone (WhatsApp)</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+233 XX XXX XXXX"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Preferred Session Type</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>In-Person Session</option>
                        <option>Teletherapy Session</option>
                        <option>Initial Consultation</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>We'll contact you within 24 hours</span>
                    </div>
                    
                    <Button variant="hero" size="lg" className="w-full">
                      Request Appointment
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
