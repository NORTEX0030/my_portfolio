import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Nitesh Yadav. Built with React, TypeScript & Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Passionate about automating, scaling, and securing cloud-native solutions
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
