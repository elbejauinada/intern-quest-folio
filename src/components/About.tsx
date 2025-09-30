import { Card } from "@/components/ui/card";
import { Code, Lightbulb, Users, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Skills",
      description: "Proficient in modern web technologies and software development practices"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Analytical mindset with a passion for finding elegant solutions"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach with excellent communication skills"
    },
    {
      icon: Rocket,
      title: "Quick Learner",
      description: "Adaptable and eager to embrace new technologies and challenges"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated software engineering student with a strong foundation in computer science 
            and a drive to create impactful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
            >
              <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-subtle border-border">
          <h3 className="text-2xl font-bold mb-4">My Journey</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Currently pursuing my degree in Software Engineering, I've developed a strong foundation 
            in programming, algorithms, and software architecture. My academic journey has been 
            complemented by hands-on projects and a continuous drive to learn.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I'm now seeking a PFE (Projet de Fin d'Études) internship where I can apply my knowledge, 
            contribute to meaningful projects, and grow as a professional developer. I'm particularly 
            interested in opportunities that challenge me to innovate and collaborate with experienced teams.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
