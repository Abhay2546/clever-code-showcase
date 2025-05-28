
import { useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, Send, Code, Palette, Database } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBadge } from "@/components/SkillBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing products, orders, and analytics with real-time data visualization.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Node.js"],
      demoUrl: "https://demo-ecommerce-dashboard.com",
      githubUrl: "https://github.com/yourusername/ecommerce-dashboard"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      techStack: ["React", "Redux", "Material-UI", "Socket.io", "Express"],
      demoUrl: "https://demo-task-manager.com",
      githubUrl: "https://github.com/yourusername/task-manager"
    },
    {
      title: "Weather Forecast App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      techStack: ["React", "OpenWeather API", "Mapbox", "Styled Components"],
      demoUrl: "https://demo-weather-app.com",
      githubUrl: "https://github.com/yourusername/weather-app"
    }
  ];

  const skills = {
    "Frontend": [
      { skill: "React", level: "expert" as const },
      { skill: "TypeScript", level: "advanced" as const },
      { skill: "Next.js", level: "advanced" as const },
      { skill: "Tailwind CSS", level: "expert" as const },
      { skill: "JavaScript", level: "expert" as const },
      { skill: "HTML/CSS", level: "expert" as const }
    ],
    "Backend": [
      { skill: "Node.js", level: "advanced" as const },
      { skill: "Python", level: "intermediate" as const },
      { skill: "Express.js", level: "advanced" as const },
      { skill: "REST APIs", level: "advanced" as const },
      { skill: "GraphQL", level: "intermediate" as const }
    ],
    "Database & Cloud": [
      { skill: "PostgreSQL", level: "advanced" as const },
      { skill: "MongoDB", level: "intermediate" as const },
      { skill: "AWS", level: "intermediate" as const },
      { skill: "Docker", level: "intermediate" as const },
      { skill: "Firebase", level: "advanced" as const }
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              John Developer
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              Full-Stack Developer crafting exceptional digital experiences with modern technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105">
                <a href="#projects">
                  View My Work
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-105">
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="mailto:hello@johndeveloper.com" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300">
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development, 
              UI/UX design, and problem-solving.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I work with modern technologies to build scalable, performant, and user-friendly applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, categorySkills]) => (
              <Card key={category} className="bg-white/5 backdrop-blur-sm border-gray-700 hover:bg-white/10 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 w-fit">
                    {category === "Frontend" && <Code className="w-8 h-8" />}
                    {category === "Backend" && <Database className="w-8 h-8" />}
                    {category === "Database & Cloud" && <Palette className="w-8 h-8" />}
                  </div>
                  <CardTitle className="text-2xl text-white">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {categorySkills.map((skillItem, index) => (
                      <div key={skillItem.skill} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <SkillBadge {...skillItem} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Work Together
              </h2>
              <p className="text-xl text-gray-300">
                Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Get in touch</h3>
                  <p className="text-gray-300 mb-6">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you're a company looking to hire, or you're someone with a project idea, 
                    I'd love to hear from you.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-300">hello@johndeveloper.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Github className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-300">github.com/johndeveloper</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Linkedin className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-300">linkedin.com/in/johndeveloper</span>
                  </div>
                </div>
              </div>

              <Card className="bg-white/5 backdrop-blur-sm border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Send me a message</CardTitle>
                  <CardDescription className="text-gray-300">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400 min-h-[120px]"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-700 bg-black/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 John Developer. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
