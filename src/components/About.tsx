const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">👋 About Me</span>
            </h2>
          </div>
          
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-foreground">
                I'm <span className="text-primary font-semibold">Nitesh Yadav</span>, a passionate DevOps Engineer focused on building secure, scalable, and efficient infrastructure for modern applications. I believe in automating everything—from code deployments to infrastructure provisioning—and take pride in delivering production-ready, cloud-native solutions.
              </p>
              
              <p className="text-muted-foreground">
                With hands-on experience through real-world projects and internships, I've worked across the full DevOps lifecycle—planning, coding, building, testing, releasing, deploying, operating, and monitoring. Whether it's deploying microservices on Kubernetes or optimizing CI/CD pipelines, I enjoy solving complex problems with clean, maintainable solutions.
              </p>
              
              <p className="text-muted-foreground">
                I'm constantly learning and growing with every project, and I thrive in collaborative environments where innovation and reliability go hand in hand.
              </p>
              
              <p className="text-secondary font-medium">
                Let's connect if you're looking for someone who is eager to automate, scale, and secure cloud-native solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/10 rounded-full animate-float opacity-50"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-accent/10 rounded-lg animate-float" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default About;