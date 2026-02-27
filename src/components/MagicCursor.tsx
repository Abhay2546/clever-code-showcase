import { useEffect, useState } from 'react';

export const MagicCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; opacity: number }>>([]);

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const newParticle = {
        id: particleId++,
        x: e.clientX + (Math.random() - 0.5) * 10,
        y: e.clientY + (Math.random() - 0.5) * 10,
        opacity: 1
      };
      
      setParticles(prev => [...prev.slice(-20), newParticle]);
    };

    document.addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          opacity: particle.opacity - 0.04
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
      {/* Gold cursor glow */}
      <div
        className="fixed pointer-events-none z-50 w-10 h-10 rounded-full opacity-25 blur-sm"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          background: 'radial-gradient(circle, hsl(43 80% 65%), hsl(43 74% 49%), transparent)',
          transition: 'all 0.1s ease-out'
        }}
      />
      
      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-50 w-6 h-6 rounded-full border opacity-40"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          borderColor: 'hsl(43 74% 49%)',
          transition: 'all 0.15s ease-out'
        }}
      />
      
      {/* Gold particle trail */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-40 w-1.5 h-1.5 rounded-full"
          style={{
            left: particle.x - 3,
            top: particle.y - 3,
            opacity: particle.opacity,
            background: `hsl(43 ${60 + particle.opacity * 30}% ${45 + particle.opacity * 20}%)`,
            transform: `scale(${particle.opacity})`,
            boxShadow: `0 0 ${particle.opacity * 6}px hsl(43 74% 49% / ${particle.opacity * 0.5})`
          }}
        />
      ))}
    </>
  );
};
