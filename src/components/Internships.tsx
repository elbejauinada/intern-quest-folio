import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Calendar, ExternalLink, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Internships = () => {
  const targetInternships = [
    {
      company: "Bangicode",
      location: "Tétouan, Morocco",
      position: "Software Engineer Intern",
      duration: "2 months",
      type: "PFA Internship",
      focus: ["Web Development", "Next.js", "Laravel", "Agile"],
      description: `Developed a training center management system using Laravel and NextJs, automating class scheduling, enrollment, and payment tracking to improve operational efficiency.
      Designed and implemented student and professor interfaces with a focus on usability and streamlined workflows.
      Enhanced a car rental system by integrating invoice and TVA generation features, ensuring accurate reporting.
      Collaborated in an Agile environment, participating in daily stand-ups and using Jira to manage tasks and project progress.`,
      companyLink: "https://bangicode.ma/",
      linkedinLink: "https://www.linkedin.com/posts/nada-el-bejaui_softwareengineering-webdevelopment-internship-activity-7381282236610019328-osjH?utm_source=share&utm_medium=member_desktop&rcm=ACoAACfqhIcB4QTIwlI6gJJqNwfCmzgXPkWi4n0",
    },

    {
      company: "Naja7host",
      location: "Tétouan, Morocco",
      position: "Software Engineer Intern",
      duration: "2 months",
      type: "Initiation Internship",
      focus: ["Laravel", "Tailwind CSS", "Agile"],
      description:
        "Dynamic startup environment working on cutting-edge cloud-based applications.",
      companyLink: "https://www.naja7host.com/",
      linkedinLink: "https://www.linkedin.com/posts/nada-el-bejaui_dear-network-during-my-internship-at-naja7host-activity-7240739646253465600-8A2E?utm_source=share&utm_medium=member_desktop&rcm=ACoAACfqhIcB4QTIwlI6gJJqNwfCmzgXPkWi4n0",
    },
  ];

  return (
    <section id="internships" className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            My Internships
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {targetInternships.map((internship, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    {internship.company}
                  </h3>
                  <p className="text-lg text-primary mb-3">
                    {internship.position}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed whitespace-pre-line">
                {internship.description}
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">
                    {internship.location}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">
                    {internship.duration} • {internship.type}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
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

              <div className="flex gap-3">
                {/* ✅ Show company link if available */}
                {internship.companyLink && internship.companyLink !== "#" && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a
                      href={internship.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Company Site
                    </a>
                  </Button>
                )}

                {/* ✅ Show LinkedIn post if available */}
                {internship.linkedinLink && internship.linkedinLink !== "#" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a
                      href={internship.linkedinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-8 bg-gradient-primary border-0">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3 text-primary-foreground">
              Open to Opportunities
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              While these are my experiences, I'm open to exploring other
              exciting opportunities in software development. If you have a PFE
              internship position available, I'd love to hear from you!
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
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
