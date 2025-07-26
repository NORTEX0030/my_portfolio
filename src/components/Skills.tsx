import { 
  Github, 
  GitBranch, 
  Cloud, 
  Server, 
  Container, 
  Settings, 
  Shield, 
  Activity,
  Code,
  Database
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "CI/CD Pipelines",
      skills: ["GitHub Actions", "GitLab CI", "Jenkins", "CircleCI"],
      icon: <GitBranch className="w-8 h-8" />,
      color: "text-primary"
    },
    {
      title: "Cloud Platforms",
      skills: ["AWS (EC2, S3, IAM, EKS)", "GCP", "Cloudflare"],
      icon: <Cloud className="w-8 h-8" />,
      color: "text-secondary"
    },
    {
      title: "Infrastructure as Code (IaC)",
      skills: ["Terraform", "Ansible", "AWS CloudFormation"],
      icon: <Settings className="w-8 h-8" />,
      color: "text-accent"
    },
    {
      title: "Containerization & Orchestration",
      skills: ["Docker", "Kubernetes", "Helm"],
      icon: <Container className="w-8 h-8" />,
      color: "text-primary"
    },
    {
      title: "GitOps",
      skills: ["Git", "ArgoCD", "FluxCD"],
      icon: <Github className="w-8 h-8" />,
      color: "text-secondary"
    },
    {
      title: "Monitoring & Observability",
      skills: ["Grafana", "Prometheus", "CloudWatch", "Loki"],
      icon: <Activity className="w-8 h-8" />,
      color: "text-accent"
    },
    {
      title: "DevSecOps & Security",
      skills: ["Trivy", "SonarQube", "HashiCorp Vault"],
      icon: <Shield className="w-8 h-8" />,
      color: "text-primary"
    },
    {
      title: "Project & Agile Tools",
      skills: ["Jira","Scrum"],
      icon: <Database className="w-8 h-8" />,
      color: "text-secondary"
    },
    {
      title: "Programming & Scripting",
      skills: ["Python", "Bash", "Shell", "YAML", "JSON"],
      icon: <Code className="w-8 h-8" />,
      color: "text-accent"
    },
    {
      title: "Version Control Systems",
      skills: ["Git", "GitHub", "GitLab", "Bitbucket"],
      icon: <Server className="w-8 h-8" />,
      color: "text-primary"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">💻 Technical Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build robust, scalable infrastructure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="skill-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${category.color} mb-4 group-hover:animate-pulse`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="text-muted-foreground text-sm flex items-center"
                  >
                    <div className="w-2 h-2 bg-current rounded-full mr-3 opacity-60"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Skills;