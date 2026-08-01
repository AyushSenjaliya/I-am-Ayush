import React, { useEffect, useRef, useState } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  scrambleSpeed?: number;
}

const glyphs = "!@#$%^&*()_+-=[]{}|;:,.<>?~⚡🚀🤖";

const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  className = "",
  scrambleSpeed = 30,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          scramble();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated, text]);

  const scramble = () => {
    let iteration = 0;
    const maxIterations = text.length * 3;

    const interval = setInterval(() => {
      setDisplayText((_) =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration / 3) {
              return text[index];
            }
            return glyphs[Math.floor(Math.random() * glyphs.length)];
          })
          .join("")
      );

      if (iteration >= maxIterations) {
        setDisplayText(text);
        clearInterval(interval);
      }

      iteration += 1;
    }, scrambleSpeed);
  };

  return (
    <span ref={ref} className={`inline-block font-mono ${className}`}>
      {displayText}
    </span>
  );
};

export default TextScramble;
