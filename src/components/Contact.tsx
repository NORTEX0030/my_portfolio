"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";


const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"success" | "error" | "idle">("idle");

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "yadavnitesh2003@gmail.com",
      link: "mailto:yadavnitesh2003@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Mobile",
      value: "+91 9326669513",
      link: "tel:+919326669513"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "India",
      link: null
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_clu17ph", // Replace with your EmailJS Service ID
        "template_11tz03q", // Replace with your EmailJS Template ID
        formRef.current,
        "JnKo7onELf5ALMJLF" // Replace with your EmailJS Public Key
      )
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">📞 Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how I can help automate, scale, and secure your infrastructure
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white shadow-glow">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-medium text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Connect with me
                </h3>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass-card"
                    onClick={() => window.open("https://github.com/NORTEX0030", "_blank")}
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass-card"
                    onClick={() => window.open("https://www.linkedin.com/in/niteshyadav-cloud", "_blank")}
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Send me a message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    name="title"
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground"
                    placeholder="Project collaboration"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <Button variant="glow" size="lg" className="w-full" type="submit">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>

                {status === "success" && (
                  <p className="text-green-600 text-sm mt-2">✅ Message sent successfully!</p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-sm mt-2">❌ Failed to send message. Try again!</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Contact;
