import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Code, Palette, Database, Award, Briefcase, Star, ArrowRight, Zap, Target, Users, ChevronDown } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBadge } from "@/components/SkillBadge";
import { MagicCursor } from "@/components/MagicCursor";
import { DraggableElement } from "@/components/DraggableElement";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FloatingParticles } from "@/components/FloatingParticles";
import { TypewriterText } from "@/components/TypewriterText";
import { MagneticButton } from "@/components/MagneticButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const projects = [
    { title: "E-Commerce Dashboard", description: "Comprehensive admin dashboard with real-time analytics, product management, and order tracking.", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80", techStack: ["React", "TypeScript", "Tailwind", "Chart.js", "Node.js"], demoUrl: "#", githubUrl: "#" },
    { title: "Task Management App", description: "Collaborative project management with real-time updates, drag-and-drop, and team features.", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80", techStack: ["React", "Redux", "Socket.io", "Express", "MongoDB"], demoUrl: "#", githubUrl: "#" },
    { title: "AI Content Generator", description: "AI-powered platform for generating marketing content, blog posts, and social media captions.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80", techStack: ["Next.js", "OpenAI", "Prisma", "PostgreSQL", "Stripe"], demoUrl: "#", githubUrl: "#" },
    { title: "Real-Time Chat Application", description: "End-to-end encrypted messaging app with video calls, file sharing, and group chats.", image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80", techStack: ["React", "WebRTC", "Socket.io", "Firebase", "Tailwind"], demoUrl: "#", githubUrl: "#" },
    { title: "Crypto Portfolio Tracker", description: "Track cryptocurrency investments with real-time pricing, alerts, and portfolio analytics.", image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80", techStack: ["React", "CoinGecko API", "D3.js", "Node.js", "Redis"], demoUrl: "#", githubUrl: "#" },
    { title: "Social Media Dashboard", description: "Unified dashboard to manage and analyze multiple social media accounts and campaigns.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", techStack: ["React", "GraphQL", "AWS Lambda", "DynamoDB", "Recharts"], demoUrl: "#", githubUrl: "#" },
  ];

  const skills = {
    "Frontend": [
      { skill: "React", level: "expert" as const }, { skill: "TypeScript", level: "expert" as const },
      { skill: "Next.js", level: "advanced" as const }, { skill: "Tailwind CSS", level: "expert" as const },
      { skill: "JavaScript", level: "expert" as const }, { skill: "Vue.js", level: "intermediate" as const },
    ],
    "Backend": [
      { skill: "Node.js", level: "advanced" as const }, { skill: "Python", level: "advanced" as const },
      { skill: "Express.js", level: "advanced" as const }, { skill: "REST APIs", level: "expert" as const },
      { skill: "GraphQL", level: "intermediate" as const }, { skill: "Java", level: "intermediate" as const },
    ],
    "Database & Cloud": [
      { skill: "PostgreSQL", level: "advanced" as const }, { skill: "MongoDB", level: "advanced" as const },
      { skill: "AWS", level: "intermediate" as const }, { skill: "Docker", level: "advanced" as const },
      { skill: "Firebase", level: "advanced" as const }, { skill: "Redis", level: "intermediate" as const },
    ]
  };

  const stats = [
    { label: "Projects Completed", value: "50+", icon: Briefcase },
    { label: "Happy Clients", value: "30+", icon: Users },
    { label: "Years Experience", value: "5+", icon: Award },
    { label: "Technologies", value: "25+", icon: Zap },
  ];

  const experiences = [
    { role: "Senior Full-Stack Developer", company: "TechCorp Solutions", period: "2022 - Present", description: "Leading development of enterprise SaaS applications with React, Node.js, and AWS." },
    { role: "Full-Stack Developer", company: "Digital Innovations", period: "2020 - 2022", description: "Built and maintained multiple client-facing applications with modern web technologies." },
    { role: "Frontend Developer", company: "Creative Agency", period: "2019 - 2020", description: "Designed and developed responsive web applications with pixel-perfect UI implementations." },
  ];

  const services = [
    { title: "Web Development", description: "Custom web applications built with modern frameworks and best practices.", icon: Code },
    { title: "UI/UX Design", description: "Beautiful, intuitive interfaces that enhance user experience and engagement.", icon: Palette },
    { title: "API Development", description: "Robust, scalable APIs designed for performance and reliability.", icon: Database },
    { title: "Consulting", description: "Technical guidance and architecture planning for your digital projects.", icon: Target },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Error", description: "Please fill in all fields.", variant: "destructive" });
      return;
    }
    toast({ title: "Message Sent! ✨", description: "Thank you for reaching out. I'll get back to you soon!" });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <MagicCursor />
      <FloatingParticles />
      
      {/* Ambient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 right-0 w-[300px] h-[500px] bg-primary/4 rounded-full blur-[100px]"
          animate={{ x: [0, -40, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.span 
            className="text-xl font-bold text-gold-gradient font-['Playfair_Display']"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            AZ
          </motion.span>
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item, i) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.span 
                  className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>
          <MagneticButton>
            <DraggableElement>
              <Button size="sm" className="bg-gold-gradient text-primary-foreground hover:opacity-90 font-semibold">
                Hire Me
              </Button>
            </DraggableElement>
          </MagneticButton>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Animated decorative lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-1/3 left-10 w-px h-40 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
            animate={{ height: [100, 200, 100], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-1/4 right-20 w-px h-60 bg-gradient-to-b from-transparent via-primary/20 to-transparent"
            animate={{ height: [150, 280, 150], opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
          <motion.div 
            className="absolute bottom-1/3 left-1/4 w-40 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            animate={{ width: [60, 200, 60], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          />
          <motion.div 
            className="absolute top-1/2 right-1/3 w-32 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            animate={{ width: [40, 160, 40], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 7, repeat: Infinity, delay: 3 }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span 
                className="inline-block px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-primary border border-primary/30 rounded-full mb-8"
                animate={{ boxShadow: ["0 0 0px hsl(43 74% 49% / 0)", "0 0 20px hsl(43 74% 49% / 0.2)", "0 0 0px hsl(43 74% 49% / 0)"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Full-Stack Developer & Designer
              </motion.span>
            </motion.div>
            
            <div className="overflow-hidden">
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 font-['Playfair_Display'] leading-[0.9]"
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="text-foreground">Abhay</span>
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 font-['Playfair_Display'] leading-[0.9]"
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="text-gold-gradient">Zingre</span>
              </motion.h1>
            </div>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Crafting premium digital experiences through elegant code and thoughtful design.
            </motion.p>
            
            <motion.div
              className="text-lg md:text-xl mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="text-muted-foreground">I build </span>
              <TypewriterText words={["Web Apps", "APIs", "UI/UX", "Solutions", "Experiences"]} />
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <MagneticButton>
                <DraggableElement>
                  <Button asChild size="lg" className="bg-gold-gradient text-primary-foreground hover:opacity-90 transition-all duration-300 shadow-gold px-8 group">
                    <a href="#projects">
                      <span>View My Work</span>
                      <motion.span className="inline-block ml-2" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </a>
                  </Button>
                </DraggableElement>
              </MagneticButton>
              <MagneticButton>
                <DraggableElement>
                  <Button asChild variant="outline" size="lg" className="border-primary/40 text-foreground hover:bg-primary/10 transition-all duration-300 px-8">
                    <a href="#contact">Get In Touch</a>
                  </Button>
                </DraggableElement>
              </MagneticButton>
            </motion.div>
            
            <motion.div 
              className="flex justify-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {[
                { icon: Github, href: "https://github.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Mail, href: "mailto:abhay@zingre.dev" }
              ].map(({ icon: Icon, href }, i) => (
                <MagneticButton key={i}>
                  <DraggableElement>
                    <motion.a 
                      href={href} 
                      className="text-muted-foreground hover:text-primary transition-all duration-300 block"
                      whileHover={{ scale: 1.3, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  </DraggableElement>
                </MagneticButton>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6 text-primary/50 mx-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative border-y border-border bg-card/50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem}>
                <DraggableElement>
                  <div className="text-center group">
                    <motion.div whileHover={{ scale: 1.2, rotate: 15 }} transition={{ type: "spring", stiffness: 300 }}>
                      <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                    </motion.div>
                    <div className="text-3xl md:text-4xl font-bold text-gold-gradient font-['Playfair_Display'] mb-1">
                      <AnimatedCounter target={stat.value} />
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                  </div>
                </DraggableElement>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">About Me</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Playfair_Display'] text-foreground">
                Passionate about building <span className="text-gold-gradient">exceptional</span> products
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a full-stack developer with 5+ years of experience creating digital solutions that make a real impact. 
                I specialize in building scalable web applications with modern technologies like React, Node.js, and cloud services.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or sharing knowledge through tech blogs and community workshops.
              </p>
              <MagneticButton>
                <DraggableElement>
                  <Button className="bg-gold-gradient text-primary-foreground hover:opacity-90 group">
                    Download Resume 
                    <motion.span className="inline-block ml-2" whileHover={{ x: 5 }}>
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Button>
                </DraggableElement>
              </MagneticButton>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <motion.div 
                  className="aspect-square rounded-2xl overflow-hidden border border-border glow-gold"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" 
                    alt="Abhay Zingre" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/30 rounded-2xl"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -top-4 -left-4 w-16 h-16 border border-primary/20 rounded-2xl"
                  animate={{ rotate: [0, -5, 0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-card/50 border-y border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">What I Do</span>
            <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-foreground">
              Services & <span className="text-gold-gradient">Expertise</span>
            </h2>
          </AnimatedSection>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={staggerItem}>
                <DraggableElement>
                  <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                    <Card className="bg-background border-border hover:border-primary/40 transition-all duration-500 group hover:shadow-gold h-full">
                      <CardHeader>
                        <motion.div 
                          className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gold-gradient group-hover:shadow-gold transition-all duration-500"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                        </motion.div>
                        <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </DraggableElement>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-foreground">
              Featured <span className="text-gold-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of my recent work. Drag the cards around for fun — they'll snap back!
            </p>
          </AnimatedSection>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {projects.map((project) => (
              <motion.div key={project.title} variants={staggerItem}>
                <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                  <DraggableElement>
                    <ProjectCard {...project} />
                  </DraggableElement>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-card/50 border-y border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">My Toolkit</span>
            <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-foreground">
              Skills & <span className="text-gold-gradient">Technologies</span>
            </h2>
          </AnimatedSection>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {Object.entries(skills).map(([category, categorySkills]) => (
              <motion.div key={category} variants={staggerItem}>
                <DraggableElement>
                  <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                    <Card className="bg-background border-border hover:border-primary/30 transition-all duration-500 hover:shadow-gold h-full">
                      <CardHeader className="text-center">
                        <motion.div 
                          className="mx-auto mb-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          {category === "Frontend" && <Code className="w-6 h-6 text-primary" />}
                          {category === "Backend" && <Database className="w-6 h-6 text-primary" />}
                          {category === "Database & Cloud" && <Palette className="w-6 h-6 text-primary" />}
                        </motion.div>
                        <CardTitle className="text-xl text-foreground">{category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {categorySkills.map((skillItem, si) => (
                            <motion.div 
                              key={skillItem.skill}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: si * 0.08, type: "spring", stiffness: 200 }}
                            >
                              <DraggableElement>
                                <SkillBadge {...skillItem} />
                              </DraggableElement>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </DraggableElement>
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection delay={0.3} className="flex justify-center gap-6 mt-12 flex-wrap">
            {[
              { label: "Expert", style: "bg-gold-gradient text-primary-foreground" },
              { label: "Advanced", style: "bg-primary/20 text-primary" },
              { label: "Intermediate", style: "bg-secondary text-foreground" },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${item.style}`}></span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Career Path</span>
            <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-foreground">
              Work <span className="text-gold-gradient">Experience</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedSection key={exp.company} delay={index * 0.15} direction="left">
                <DraggableElement>
                  <div className="relative pl-8 border-l border-primary/30">
                    <motion.div 
                      className="absolute left-0 top-0 w-3 h-3 rounded-full bg-gold-gradient -translate-x-[7px]"
                      animate={{ boxShadow: ["0 0 0px hsl(43 74% 49% / 0)", "0 0 15px hsl(43 74% 49% / 0.5)", "0 0 0px hsl(43 74% 49% / 0)"] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                      <Card className="bg-card border-border hover:border-primary/30 transition-all duration-500 hover:shadow-gold">
                        <CardHeader>
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <div>
                              <CardTitle className="text-lg text-foreground">{exp.role}</CardTitle>
                              <CardDescription className="text-primary font-medium">{exp.company}</CardDescription>
                            </div>
                            <span className="text-xs text-muted-foreground uppercase tracking-wider border border-border px-3 py-1 rounded-full w-fit">{exp.period}</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{exp.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </DraggableElement>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-card/50 border-y border-border overflow-hidden">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-8 h-8 text-primary mx-auto mb-8" />
            </motion.div>
            <blockquote className="text-2xl md:text-3xl font-['Playfair_Display'] text-foreground leading-relaxed mb-8 italic">
              "Great code is not just about functionality — it's about creating experiences that 
              <span className="text-gold-gradient"> inspire and delight</span> every user who interacts with it."
            </blockquote>
            <motion.p 
              className="text-primary font-semibold"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              — Abhay Zingre
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-foreground">
                Let's Build Something <span className="text-gold-gradient">Amazing</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <AnimatedSection direction="left">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground font-['Playfair_Display']">Let's connect</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm always open to new opportunities and exciting collaborations.
                      Whether you're a startup with a bold vision or an enterprise seeking technical expertise, 
                      let's create something remarkable together.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { icon: Mail, text: "abhay@zingre.dev", href: "mailto:abhay@zingre.dev" },
                      { icon: Github, text: "github.com/abhayzingre", href: "https://github.com" },
                      { icon: Linkedin, text: "linkedin.com/in/abhayzingre", href: "https://linkedin.com" },
                    ].map(({ icon: Icon, text, href }, i) => (
                      <motion.a 
                        key={text} 
                        href={href} 
                        className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                        whileHover={{ x: 8 }}
                      >
                        <motion.div 
                          className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-gold-gradient group-hover:shadow-gold transition-all duration-300"
                          whileHover={{ rotate: 15 }}
                        >
                          <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                        </motion.div>
                        <span>{text}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <DraggableElement>
                  <Card className="bg-card border-border hover:border-primary/30 transition-all duration-500 hover:shadow-gold">
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground">Send a message</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        Fill out the form and I'll respond within 24 hours.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary" required />
                        </motion.div>
                        <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary" required />
                        <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary min-h-[120px]" required />
                        <MagneticButton>
                          <DraggableElement>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Button type="submit" className="w-full bg-gold-gradient text-primary-foreground hover:opacity-90 transition-all duration-300 shadow-gold">
                                <Send className="w-4 h-4 mr-2" />
                                Send Message
                              </Button>
                            </motion.div>
                          </DraggableElement>
                        </MagneticButton>
                      </form>
                    </CardContent>
                  </Card>
                </DraggableElement>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="py-8 border-t border-border bg-card/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.span 
              className="text-xl font-bold text-gold-gradient font-['Playfair_Display']"
              whileHover={{ scale: 1.1 }}
            >
              Abhay Zingre
            </motion.span>
            <p className="text-sm text-muted-foreground">
              © 2025 Abhay Zingre. Crafted with passion & precision.
            </p>
            <div className="flex gap-4">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.3, rotate: 10, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
