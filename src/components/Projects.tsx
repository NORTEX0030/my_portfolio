import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";

const Projects = () => {
  const experiences = [
    {
      type: "project",
      title: "CloudPilot",
      link: "https://github.com/NORTEX0030/CloudPilot",
      description: "A rapidly scaling e-commerce platform needed robust, automated infrastructure provisioning and deployment.",
      achievements: [
        "Designed and implemented a production-grade CI/CD pipeline and monitoring solution for Kubernetes-based microservices",
        "Automated provisioning of AWS infrastructure (VPC, EC2, RDS, IAM, ASG) using Terraform, reducing manual effort by 80% and eliminating configuration drift",
        "Implemented Helm-based Kubernetes deployments on Amazon EKS with blue-green deployment strategy, achieving zero downtime during release cycles",
        "Integrated Prometheus and Grafana for observability, reducing issue diagnosis time by 60% and enabling real-time performance alerts"
      ],
      tags: ["AWS", "Terraform", "Kubernetes", "Helm", "Prometheus", "Grafana"],
      featured: true
    },
    {
      type: "project",
      title: "SecuTic",
      link: "https://github.com/NORTEX0030/SecuTic",
      description: "A fintech simulation project faced increasing risks from unsecured code and inconsistent environment configurations.",
      achievements: [
        "Secure the CI/CD pipeline and standardize deployments across Kubernetes environments",
        "Integrated Trivy and SonarQube scanners into the CI/CD pipeline to catch high-risk vulnerabilities and code smells before deployment, reducing critical issues by 70%",
        "Employed ArgoCD and Helm for GitOps-based deployment, enabling fully auditable and rollback-ready delivery pipelines across staging and production",
        "Standardized infrastructure across environments by automating provisioning using Ansible, reducing deployment errors and misconfigurations by 65%"
      ],
      tags: ["DevSecOps", "ArgoCD", "Helm", "Trivy", "SonarQube", "Ansible"],
      featured: true
    },
    {
      type: "devops-project",
      title: "Secure AWS Infrastructure with Jenkins and Vault",
      link: "https://github.com/NORTEX0030/secure-aws-infra-jenkins-vault",
      description: "A simulated enterprise infrastructure required a secure, scalable, and automated cloud environment with centralized secrets management.",
      achievements: [
        "Designed a secure CI/CD pipeline integrating secrets management and IAM governance for AWS-based workloads",
        "Provisioned AWS infrastructure (EC2, S3, IAM) using Terraform, applying least-privilege IAM policies and reducing access-related incidents by 60%",
        "Built Jenkins-based CI/CD pipeline integrated with HashiCorp Vault to manage dynamic secrets, enabling encrypted and time-bound credential injection",
        "Automated IAM role rotation and access control workflows, enhancing pipeline security and ensuring compliance with best practices",
        "Achieved 100% infrastructure reproducibility, improving auditability and security compliance for cloud resource deployments"
      ],
      tags: ["Jenkins", "HashiCorp Vault", "AWS", "Terraform", "Security", "IAM"],
      featured: false
    },
    {
      type: "devops-project",
      title: " FullStackDevOps Blueprint – Code-to-Cloud Automation with Observability",
      link: "https://github.com/NORTEX0030/FullStackDevOps",
      description: "This project demonstrates a complete DevOps lifecycle from development to deployment on AWS EKS with built-in observability and quality gates.",
     achievements: [
  "Designed and implemented an end-to-end CI/CD pipeline using Jenkins, enabling automated build, test, and deployment of Java applications to AWS EKS",
  "Integrated SonarQube for code quality analysis and enforced quality gates, reducing bugs and vulnerabilities before deployment",
  "Built and pushed Docker images to Nexus repository, streamlining container management across environments",
  "Automated application deployments on Amazon EKS using ArgoCD, ensuring GitOps-driven continuous delivery with rollback capabilities",
  "Set up centralized monitoring and alerting using Prometheus and Grafana, improving observability and reducing downtime by 70%",
  "Enabled Slack integration for real-time CI/CD pipeline notifications (success/failure/abort), enhancing developer feedback loops",
  "Established namespace-level separation and resource controls within Kubernetes to support multi-environment deployments (dev, stage, prod)",
  "Achieved zero-downtime deployments using Nginx Ingress and AWS ALB integration with Kubernetes services"
],

      tags: [
  "Jenkins", "SonarQube", "Docker", "Nexus", "ArgoCD", 
  "AWS EKS", "Kubernetes", "Prometheus", "Grafana", 
  "CI/CD", "Slack Integration"
],
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">💼 Professional Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world projects showcasing DevOps expertise in cloud infrastructure, security, and automation
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((project, index) => (
            <div 
              key={project.title}
              className={`glass-card p-8 rounded-2xl ${project.featured ? 'border-primary/50 shadow-glow' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm">
                        <Star className="w-4 h-4" />
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-lg">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">{achievement}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <Button 
                    variant="glow" 
                    size="lg"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <Github className="w-5 h-5" />
                    View Project
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default Projects;