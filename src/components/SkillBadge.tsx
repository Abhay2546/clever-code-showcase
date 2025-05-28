
import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  skill: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export const SkillBadge = ({ skill, level }: SkillBadgeProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert':
        return 'bg-gradient-to-r from-green-400 to-emerald-500 text-white hover:from-green-500 hover:to-emerald-600';
      case 'advanced':
        return 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-600';
      case 'intermediate':
        return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600';
      default:
        return 'bg-gradient-to-r from-gray-400 to-gray-500 text-white hover:from-gray-500 hover:to-gray-600';
    }
  };

  return (
    <Badge 
      className={`${getLevelColor(level)} px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default`}
    >
      {skill}
    </Badge>
  );
};
