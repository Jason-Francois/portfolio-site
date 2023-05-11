import { useEffect, useRef, useState } from "react";
import Particle from "./Particle";

// Citation: Inspired, in part, by Frank's Laboratory CanvasJS Tutorial
// Link: ("https://www.youtube.com/watch?v=Yvz_axxWG4Y&list=PLVCwuSoMXkBFHqKFf6zeXfzkaY_4VcJEp&index=6")

interface canvasProps {
  width: string;
  height: string;
  numParticles: number;
  lineDistance: number;
}

const Canvas = (props: canvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const init = (context: CanvasRenderingContext2D) => {
    for (let i = 0; i < 35; i++) {
      setParticles((arr) => [
        ...arr,
        new Particle(
          Math.random() * context.canvas.width,
          Math.random() * context.canvas.height
        ),
      ]);
    }
  };
  const handleParticles = (context: CanvasRenderingContext2D) => {
    for (let i = 0; i < particles.length; i++) {
      particles[i].update(context);
      particles[i].draw(context);
      for (let j = i; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;

        const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

        let lineLength: number;
        if (context.canvas!.width > 900) {
          lineLength = 500;
        } else {
          lineLength = 140;
        }
        if (distance < lineLength) {
          context.beginPath();
          context.strokeStyle = "green";
          context.moveTo(particles[i].x, particles[i].y);
          context.lineTo(particles[j].x, particles[j].y);
          context.stroke();
        }
      }
    }
  };
  const animate = (context: CanvasRenderingContext2D) => {
    context.clearRect(0, 0, context.canvas!.width, context.canvas!.height);
    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;

    handleParticles(context);
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
      const ctx = canvas.getContext("2d");
      setContext(ctx);
      if (context) {
        init(ctx!);
      }
      // if (context) {
      //   init(context);
      // }
    }
  }, [context]);

  // Animation loop
  useEffect(() => {
    if (context) {
      const renderParticles = () => {
        animate(context!);
        setTimeout(() => {
          requestAnimationFrame(renderParticles);
        });
      };
      renderParticles();
      window.addEventListener("resize", () => {
        context.canvas.height = window.innerHeight;
        context.canvas.width = window.innerWidth;
        context.clearRect(0, 0, context.canvas!.width, context.canvas!.height);
      });
    }
  }, [animate, context!]);

  return (
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  );
};
export default Canvas;
