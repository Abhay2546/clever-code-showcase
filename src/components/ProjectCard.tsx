import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
}

export const ProjectCard = ({ title, description, image, techStack, demoUrl, githubUrl }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden border border-border shadow-lg hover:shadow-gold transition-all duration-500 hover:-translate-y-2 bg-card backdrop-blur-sm">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <Button asChild size="sm" className="bg-gold-gradient text-primary-foreground hover:opacity-90 transition-all duration-300 text-xs">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3 h-3 mr-1" />
              Demo
            </a>
          </Button>
          <Button asChild variant="outline" size="sm" className="border-primary/50 text-foreground hover:bg-primary/10 transition-all duration-300 text-xs">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-3 h-3 mr-1" />
              Code
            </a>
          </Button>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-foreground group-hover:text-gold-gradient transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-1.5">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border border-primary/20 text-xs px-2 py-0.5 hover:bg-primary/20">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
