import { 
  BookOpen, 
  FileText, 
  ClipboardList, 
  Heart, 
  Dumbbell,
  ArrowRight,
  Baby
} from "lucide-react";

const resources = [
  {
    id: 1,
    title: "Speech & Language Disorders",
    description: "Comprehensive guides explaining various speech and language conditions",
    icon: FileText,
    color: "primary",
    link: "#",
  },
  {
    id: 2,
    title: "Early Intervention Awareness",
    description: "Learn about the importance of early therapy for better outcomes",
    icon: Baby,
    color: "secondary",
    link: "#",
  },
  {
    id: 3,
    title: "Self-Screening Guides",
    description: "Tools to help identify potential communication challenges",
    icon: ClipboardList,
    color: "accent",
    link: "#",
  },
  {
    id: 4,
    title: "Caregiver Tips",
    description: "Practical advice for parents and family members",
    icon: Heart,
    color: "primary",
    link: "#",
  },
  {
    id: 5,
    title: "Rehabilitation Exercises",
    description: "Home-based exercises to support therapy progress",
    icon: Dumbbell,
    color: "secondary",
    link: "#",
  },
  {
    id: 6,
    title: "Educational Articles",
    description: "Latest research and insights in speech therapy",
    icon: BookOpen,
    color: "accent",
    link: "#",
  },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium">
            <BookOpen className="w-4 h-4" />
            <span>Resources</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Speech & Language{" "}
            <span className="text-gradient">Resources</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Educational materials and guides to support your therapy journey at home.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <a 
              key={resource.id}
              href={resource.link}
              className="group card-lifted p-6 flex items-start gap-4 hover:shadow-glow"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Icon */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                resource.color === "primary" ? "bg-primary-light" :
                resource.color === "secondary" ? "bg-secondary-light" :
                "bg-accent-light"
              }`}>
                <resource.icon className={`w-6 h-6 ${
                  resource.color === "primary" ? "text-primary" :
                  resource.color === "secondary" ? "text-secondary" :
                  "text-accent"
                }`} />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {resource.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
