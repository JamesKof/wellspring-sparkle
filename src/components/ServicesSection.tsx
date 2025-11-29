import { 
  Monitor, 
  Video, 
  Gamepad2, 
  FileText, 
  Mic, 
  Globe,
  Calendar,
  MessageSquare,
  BarChart3,
  BookOpen,
  Users,
  Clock
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Digital Therapy Tools",
    description: "Cutting-edge technology to enhance therapy outcomes and streamline care delivery.",
    icon: Monitor,
    color: "primary",
    features: [
      { icon: FileText, text: "Electronic Health Records" },
      { icon: Mic, text: "Speech Recognition Evaluation" },
      { icon: Globe, text: "Virtual Reality Practice" },
      { icon: MessageSquare, text: "AAC Communication Tools" },
    ],
  },
  {
    id: 2,
    title: "Teletherapy & Remote Support",
    description: "Secure online sessions for clients anywhere, with flexible scheduling options.",
    icon: Video,
    color: "secondary",
    features: [
      { icon: Video, text: "Secure Video Sessions" },
      { icon: Calendar, text: "Online Appointment Booking" },
      { icon: Clock, text: "Flexible Scheduling" },
      { icon: Users, text: "Remote Area Support" },
    ],
  },
  {
    id: 3,
    title: "Patient Engagement Platform",
    description: "Interactive exercises and progress tracking for children and adults.",
    icon: Gamepad2,
    color: "accent",
    features: [
      { icon: BookOpen, text: "Speech & Language Exercises" },
      { icon: Gamepad2, text: "Games & Activities" },
      { icon: BarChart3, text: "Progress Tracking" },
      { icon: MessageSquare, text: "Therapist Communication" },
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium">
            <Monitor className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Our Core Services &{" "}
            <span className="text-gradient">Digital Tools</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Comprehensive therapy solutions powered by modern technology and delivered with compassionate care.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group card-lifted p-8 hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                service.color === "primary" ? "bg-primary-light" :
                service.color === "secondary" ? "bg-secondary-light" :
                "bg-accent-light"
              }`}>
                <service.icon className={`w-8 h-8 ${
                  service.color === "primary" ? "text-primary" :
                  service.color === "secondary" ? "text-secondary" :
                  "text-accent"
                }`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      service.color === "primary" ? "bg-primary-light" :
                      service.color === "secondary" ? "bg-secondary-light" :
                      "bg-accent-light"
                    }`}>
                      <feature.icon className={`w-4 h-4 ${
                        service.color === "primary" ? "text-primary" :
                        service.color === "secondary" ? "text-secondary" :
                        "text-accent"
                      }`} />
                    </div>
                    <span className="text-sm text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
