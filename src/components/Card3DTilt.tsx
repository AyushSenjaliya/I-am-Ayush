import React, { useState, useRef, MouseEvent } from "react";

interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum rotation angle in degrees
}

const Card3DTilt: React.FC<Card3DTiltProps> = ({
  children,
  className = "",
  maxTilt = 12,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center (-1 to 1)
    const mouseX = (e.clientX - rect.left - width / 2) / (width / 2);
    const mouseY = (e.clientY - rect.top - height / 2) / (height / 2);

    // Calculate rotation angles
    const rotX = -mouseY * maxTilt;
    const rotY = mouseX * maxTilt;

    setRotateX(rotX);
    setRotateY(rotY);

    // Calculate glare percentage position
    const glareX = ((e.clientX - rect.left) / width) * 100;
    const glareY = ((e.clientY - rect.top) / height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: 0.25 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div className="perspective-1000 w-full h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: rotateX === 0 && rotateY === 0 ? "transform 0.5s ease-out" : "none",
        }}
        className={`transform-style-3d relative rounded-xl transition-shadow duration-300 ${className}`}
      >
        {/* Dynamic glare overlay spotlight */}
        <div
          className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(100, 255, 218, ${glarePos.opacity}), transparent 70%)`,
          }}
        />

        {children}
      </div>
    </div>
  );
};

export default Card3DTilt;
