import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Student Academic Services Platform",
      description:
        "Full-stack web application with user authentication and students' documents requests management. Built with React, Node.js, and MySQL.",
      tags: ["React", "Node.js", "MySQL"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Car rental Platform",
      description:
        "Full-stack web application with user authentication and cars and reservations'requests management. Built with React, Django, and MongoDB.",
      tags: ["React", "Django", "MongoDB", "Agile"],
      liveLink:
        "https://www.linkedin.com/posts/aya-touicha_dans-le-cadre-du-module-bases-de-donn%C3%A9es-ugcPost-7338469423319564288-odPP?utm_source=share&utm_medium=member_desktop&rcm=ACoAACfqhIcB4QTIwlI6gJJqNwfCmzgXPkWi4n0",
      githubLink: "#",
    },
    {
      title: "Personal Finance Management Platform",
      description:
        "A budgeting and expense tracking system with user authentifcation,managing expenses and extracting data from invoices. Implemented using React, Springboot, and MySQL.",
      tags: ["React", , "Springboot", "MySQL", "Agile"],
      liveLink:
        "https://www.linkedin.com/posts/nada-el-bejaui_dear-network-i-am-pleased-to-announce-my-activity-7345144281877143553-6f4b?utm_source=share&utm_medium=member_desktop&rcm=ACoAACfqhIcB4QTIwlI6gJJqNwfCmzgXPkWi4n0",
      githubLink: "#",
    },
    {
      title: "Object Rental Platform",
      description:
        "Created an online rental system with Laravel, enabling categorized item posting and management under Agile workflows.",
      tags: ["Laravel", "API Integration"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Machine Learning Model to predict Moroccan Outcomes",
      description:
        "Predictive model for data analysis using Python and scikit-learn. Includes data preprocessing, training, and visualization components and deploying through Streamlit.",
      tags: ["Python", "ML", "scikit-learn", "Data Analysis"],
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A showcase of my recent work and academic projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {/* ✅ Show only if liveLink is available */}
                {project.liveLink && project.liveLink !== "#" && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                )}

                {/* ✅ Show only if githubLink is available */}
                {project.githubLink && project.githubLink !== "#" && (
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
