import { 
  Rocket, 
  Layers, 
  Cloud, 
  Container, 
  Shield, 
  BarChart3, 
  Zap 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "🚀 CI/CD Pipeline Setup",
      description: "Design and implement robust Continuous Integration and Continuous Deployment pipelines to streamline development workflows and reduce deployment time.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "🧱 Infrastructure as Code (IaC)",
      description: "Automate infrastructure provisioning using code to ensure consistent, repeatable, and scalable cloud environments across multiple stages.",
      gradient: "from-secondary to-accent"
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "☁️ Cloud Infrastructure Deployment",
      description: "Build and manage scalable, secure, and cost-efficient infrastructure on cloud platforms. Focus on high availability, performance, and security.",
      gradient: "from-accent to-primary"
    },
    {
      icon: <Container className="w-10 h-10" />,
      title: "🐳 Containerization & Orchestration",
      description: "Package applications into containers and deploy them with orchestration platforms for better scalability, fault-tolerance, and automation.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "🔐 DevSecOps Integration",
      description: "Integrate security into every phase of the DevOps lifecycle with automated vulnerability scans, secrets management, and compliance checks.",
      gradient: "from-secondary to-primary"
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "📈 Monitoring & Logging",
      description: "Set up real-time monitoring, alerting, and centralized logging to ensure system reliability, visibility, and quick incident response.",
      gradient: "from-accent to-secondary"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "🧪 Environment Automation",
      description: "Create and manage isolated environments for development, testing, staging, and production to enable faster delivery and better collaboration.",
      gradient: "from-primary to-accent"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">🛠️ Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive DevOps solutions to accelerate your development lifecycle and ensure reliable, scalable deployments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:animate-pulse text-white shadow-glow`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              
              {/* Hover effect line */}
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Services;