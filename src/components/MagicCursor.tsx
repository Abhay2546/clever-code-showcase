
import { useEffect, useState } from 'react';

export const MagicCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; opacity: number }>>([]);

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create particle trail
      const newParticle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        opacity: 1
      };
      
      setParticles(prev => [...prev.slice(-15), newParticle]);
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animate particles
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          opacity: particle.opacity - 0.05
        })).filter(particle => particle.opacity > 0)
      );
    }, 50);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Magic cursor glow */}
      <div
        className="fixed pointer-events-none z-50 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-30 blur-sm"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transition: 'all 0.1s ease-out'
        }}
      />
      
      {/* Particle trail */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-40 w-2 h-2 rounded-full bg-gradient-to-r from-blue-300 to-purple-400"
          style={{
            left: particle.x - 4,
            top: particle.y - 4,
            opacity: particle.opacity,
            transform: `scale(${particle.opacity})`
          }}
        />
      ))}
    </>
  );
};
