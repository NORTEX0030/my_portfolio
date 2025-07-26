import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid"></div>
      
      {/* Floating 3D elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-lg animate-float opacity-20"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-secondary rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent/30 rounded-lg animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-primary/30 rounded-lg animate-rotate-slow"></div>

      <div className="container mx-auto px-6 text-center z-10">
        {/* Profile image placeholder - can be replaced with actual image */}
        <div
  className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-primary animate-pulse-glow shadow-glow bg-cover bg-center"
  style={{ backgroundImage: "url('/pfp.png')" }}
></div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-in-up">
          <span className="gradient-text">Nitesh Yadav</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-secondary mb-6 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
             DevOps Engineer | Cloud & Automation Enthusiast
        </h2>
        
        
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
           Designing scalable, secure, and automated infrastructure using AWS, Kubernetes, and Terraform. Focused on streamlining code-to-cloud workflows with CI/CD, observability, and DevSecOps best practices.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-up" style={{ animationDelay: '0.8s' }}>
          <Button 
            variant="glow" 
            size="hero"
            onClick={() => scrollToSection('projects')}
          >
            Explore My Work
          </Button>
          
          <Button 
            variant="outline" 
            size="hero"
            onClick={() => window.open('https://drive.google.com/file/d/1fpYOGkhLzHm9KHCJCg4f7npwibPOPs0J/view?usp=sharing', '_blank')}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </Button>
        </div>
        
        {/* Social links */}
        <div className="flex justify-center gap-6 mt-12 animate-slide-in-up" style={{ animationDelay: '1s' }}>
          <Button 
            variant="ghost" 
            size="icon" 
            className="glass-card w-12 h-12"
            onClick={() => window.open('https://github.com/NORTEX0030', '_blank')}
          >
            <Github className="w-6 h-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="glass-card w-12 h-12"
            onClick={() => window.open('https://www.linkedin.com/in/niteshyadav-cloud', '_blank')}
          >
            <Linkedin className="w-6 h-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="glass-card w-12 h-12"
            onClick={() => window.open('mailto:yadavnitesh2003@gmail.com', '_blank')}
          >
            <Mail className="w-6 h-6" />
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;