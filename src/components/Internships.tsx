import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Internships = () => {
  const targetInternships = [
    {
      company: "Tech Innovators Inc.",
      location: "Tunis, Tunisia",
      position: "Full Stack Developer Intern",
      duration: "6 months",
      type: "PFE Internship",
      focus: ["Web Development", "React", "Node.js"],
      description: "Leading technology company focused on building innovative web solutions for global clients."
    },
    {
      company: "Digital Solutions Ltd.",
      location: "Sfax, Tunisia",
      position: "Software Engineer Intern",
      duration: "6 months",
      type: "PFE Internship",
      focus: ["Full Stack", "Cloud", "Agile"],
      description: "Dynamic startup environment working on cutting-edge cloud-based applications."
    },
    {
      company: "Enterprise Systems Corp.",
      location: "Sousse, Tunisia",
      position: "Backend Developer Intern",
      duration: "6 months",
      type: "PFE Internship",
      focus: ["Java", "Spring Boot", "Microservices"],
      description: "Enterprise software company specializing in scalable business solutions."
    },
    {
      company: "AI & Data Labs",
      location: "Ariana, Tunisia",
      position: "Software Development Intern",
      duration: "6 months",
      type: "PFE Internship",
      focus: ["Python", "Machine Learning", "Data"],
      description: "Research-focused company at the intersection of AI and software engineering."
    }
  ];

  return (
    <section id="internships" className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Target Internships
          </h2>
          <p className="text-lg text-muted-foreground">
            Companies and positions I'm interested in for my PFE internship
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {targetInternships.map((internship, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{internship.company}</h3>
                  <p className="text-lg text-primary mb-3">{internship.position}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {internship.description}
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{internship.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{internship.duration} • {internship.type}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {internship.focus.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex}
                    variant="secondary"
                    className="bg-muted"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
              >
                <ExternalLink className="w-4 h-4" />
                View Company
              </Button>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-8 bg-gradient-primary border-0">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3 text-primary-foreground">
              Open to Opportunities
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              While these are my target companies, I'm open to exploring other exciting opportunities 
              in software development. If you have a PFE internship position available, I'd love to hear from you!
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in Touch
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Internships;
