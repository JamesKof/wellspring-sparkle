import { Button } from "@/components/ui/button";
import { BadgeCheck, Calendar, Star } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import therapist1 from "@/assets/therapist-1.jpg";
import therapist2 from "@/assets/therapist-2.jpg";
import therapist3 from "@/assets/therapist-3.jpg";

const therapists = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    role: "Lead Speech-Language Pathologist",
    specialization: "Pediatric Speech Disorders & Early Intervention",
    image: therapist1,
    rating: 4.9,
    reviews: 127,
  },
  {
    id: 2,
    name: "Dr. James Rodriguez",
    role: "Senior Rehabilitation Specialist",
    specialization: "Adult Neurological Rehabilitation & Swallowing Therapy",
    image: therapist2,
    rating: 4.8,
    reviews: 98,
  },
  {
    id: 3,
    name: "Dr. Helen Thompson",
    role: "Communication Disorders Expert",
    specialization: "Autism Spectrum & Developmental Delays",
    image: therapist3,
    rating: 4.9,
    reviews: 156,
  },
];

const TherapistSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light text-accent text-sm font-medium">
            <BadgeCheck className="w-4 h-4" />
            <span>Our Team</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Meet Our{" "}
            <span className="text-gradient">Expert Therapists</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Our certified professionals bring years of experience and genuine care to every therapy session.
          </p>
        </div>

        {/* Therapist Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapists.map((therapist, index) => (
            <div 
              key={therapist.id}
              className="group card-lifted overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={therapist.image} 
                  alt={therapist.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full glass-panel">
                  <Star className="w-4 h-4 text-secondary fill-secondary" />
                  <span className="text-sm font-semibold text-foreground">{therapist.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-heading font-semibold text-foreground">
                        {therapist.name}
                      </h3>
                      <Tooltip>
                        <TooltipTrigger>
                          <BadgeCheck className="w-5 h-5 text-primary" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Certified Speech & Rehab Professional</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <p className="text-sm text-primary font-medium">{therapist.role}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm">
                  {therapist.specialization}
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 text-secondary fill-secondary" />
                  <span>{therapist.rating} ({therapist.reviews} reviews)</span>
                </div>

                <Button variant="outline" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Session
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapistSection;
