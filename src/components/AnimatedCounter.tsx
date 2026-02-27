import { useEffect, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface AnimatedCounterProps {
  target: string;
  className?: string;
}

export const AnimatedCounter = ({ target, className = '' }: AnimatedCounterProps) => {
  const { ref, isVisible } = useScrollReveal(0.5);
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target.replace(/\D/g, ''));
  const suffix = target.replace(/\d/g, '');

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = numericTarget / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, numericTarget]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
};
