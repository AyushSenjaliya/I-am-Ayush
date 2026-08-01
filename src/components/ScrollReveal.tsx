import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "zoom";
  delay?: number; // In milliseconds
  className?: string;
  duration?: number; // In milliseconds
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  className = "",
  duration = 700,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getDirectionStyles = () => {
    if (isVisible) {
      return "opacity-100 translate-x-0 translate-y-0 scale-100 blur-0";
    }

    switch (direction) {
      case "up":
        return "opacity-0 translate-y-12 blur-sm";
      case "down":
        return "opacity-0 -translate-y-12 blur-sm";
      case "left":
        return "opacity-0 translate-x-12 blur-sm";
      case "right":
        return "opacity-0 -translate-x-12 blur-sm";
      case "zoom":
        return "opacity-0 scale-95 blur-sm";
      default:
        return "opacity-0 translate-y-12 blur-sm";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all ${getDirectionStyles()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
