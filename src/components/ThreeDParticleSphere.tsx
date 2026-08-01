import { useEffect, useRef } from "react";

const ThreeDParticleSphere = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const size = 260;
    canvas.width = size;
    canvas.height = size;

    const radius = 100;
    const particleCount = 180;
    
    // Create 3D points on a sphere using Fibonacci sphere layout
    const points: Array<{ x: number; y: number; z: number }> = [];
    const phi = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < particleCount; i++) {
      const y = 1 - (i / (particleCount - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;

      points.push({
        x: Math.cos(theta) * r * radius,
        y: y * radius,
        z: Math.sin(theta) * r * radius,
      });
    }

    let angleX = 0.003;
    let angleY = 0.005;

    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left - size / 2) * 0.0001;
      mouse.y = (e.clientY - rect.top - size / 2) * 0.0001;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, size, size);

      const cx = size / 2;
      const cy = size / 2;

      // Add mouse velocity influence
      const currentAngleX = angleX + mouse.y;
      const currentAngleY = angleY + mouse.x;

      for (let i = 0; i < particleCount; i++) {
        const p = points[i];

        // Rotate Y
        const cosY = Math.cos(currentAngleY);
        const sinY = Math.sin(currentAngleY);
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        // Rotate X
        const cosX = Math.cos(currentAngleX);
        const sinX = Math.sin(currentAngleX);
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        p.x = x1;
        p.y = y2;
        p.z = z2;

        // 3D Perspective projection
        const scale = 300 / (300 + p.z);
        const projX = cx + p.x * scale;
        const projY = cy + p.y * scale;

        // Alpha scaling based on Z position depth
        const alpha = Math.max(0.1, (p.z + radius) / (2 * radius));
        const particleSize = Math.max(1, 2.2 * scale);

        ctx.beginPath();
        ctx.arc(projX, projY, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 255, 218, ${alpha})`;
        ctx.fill();

        // Connect nearby 3D points
        for (let j = i + 1; j < particleCount; j += 7) {
          const p2 = points[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dz = p.z - p2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 42) {
            const scale2 = 300 / (300 + p2.z);
            const projX2 = cx + p2.x * scale2;
            const projY2 = cy + p2.y * scale2;

            ctx.beginPath();
            ctx.moveTo(projX, projY);
            ctx.lineTo(projX2, projY2);
            ctx.strokeStyle = `rgba(100, 255, 218, ${0.15 * alpha * (1 - dist / 42)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center p-2">
      <canvas ref={canvasRef} className="w-[260px] h-[260px]" />
    </div>
  );
};

export default ThreeDParticleSphere;
