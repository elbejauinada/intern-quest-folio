import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with user authentication, product management, and payment integration. Built with React, Node.js, and PostgreSQL.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates and team features. Implemented using React, Firebase, and Material-UI.",
      tags: ["React", "Firebase", "Real-time", "Material-UI"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts and data visualization. Integrated with external APIs for accurate weather data.",
      tags: ["JavaScript", "API Integration", "Charts.js", "CSS"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Machine Learning Model",
      description: "Predictive model for data analysis using Python and scikit-learn. Includes data preprocessing, training, and visualization components.",
      tags: ["Python", "ML", "scikit-learn", "Data Analysis"],
      liveLink: "#",
      githubLink: "#"
    }
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
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                >
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  asChild
                >
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
