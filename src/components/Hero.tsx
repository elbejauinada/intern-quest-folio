import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile.jpg"; // ← add your photo in src/assets

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    // Make sure your CV file is in /public folder (e.g. /public/Nada_El_Bejaui_CV.pdf)
    const link = document.createElement("a");
    link.href = "/cv_elbejauiahmimesnada_fr.pdf";
    link.download = "cv_elbejauiahmimesnada_fr.pdf";
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Photo */}
          <div className="flex justify-center">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/40 shadow-lg object-cover"
            />
          </div>

          {/* Greeting + Name */}
          <div className="space-y-2 animate-float">
            <h2 className="text-lg md:text-xl text-muted-foreground font-mono">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground">
              Nada El Bejaui
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Software Engineer
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto">
            Final Year Student Seeking PFE Internship
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about building innovative solutions and eager to
            contribute to cutting-edge projects. Looking for opportunities to
            apply my skills in a dynamic environment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>

            <Button variant="secondary" size="lg" onClick={handleDownloadCV}>
              <Download className="w-5 h-5" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-8">
            <a
              href="https://github.com/elbejauinada"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-muted transition-all duration-300 hover:shadow-glow"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/nada-el-bejaui"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-muted transition-all duration-300 hover:shadow-glow"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:nada.elbejauiahmimes@etu.uae.ac.ma"
              className="p-3 rounded-full bg-card hover:bg-muted transition-all duration-300 hover:shadow-glow"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
