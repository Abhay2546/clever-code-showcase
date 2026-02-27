import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  skill: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export const SkillBadge = ({ skill, level }: SkillBadgeProps) => {
  const getLevelStyle = (level: string) => {
    switch (level) {
      case 'expert':
        return 'bg-gold-gradient text-primary-foreground shadow-gold';
      case 'advanced':
        return 'bg-primary/20 text-primary border border-primary/40';
      case 'intermediate':
        return 'bg-secondary text-foreground border border-border';
      default:
        return 'bg-muted text-muted-foreground border border-border';
    }
  };

  return (
    <Badge 
      className={`${getLevelStyle(level)} px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-gold cursor-default`}
    >
      {skill}
    </Badge>
  );
};
