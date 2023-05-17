// Citation: Inspired, in part, by Frank's Laboratory CanvasJS Tutorial
// Link: ("https://www.youtube.com/watch?v=Yvz_axxWG4Y&list=PLVCwuSoMXkBFHqKFf6zeXfzkaY_4VcJEp&index=6")

import { useEffect, useRef, useState } from "react";
import Particle from "../classes/Particle";

interface canvasProps {
  width: string;
  height: string;
  numParticles: number;
  lineDistance: number;
  lineColor: string;
}

const Canvas = (props: canvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  const setCanvasDimensions = (context: CanvasRenderingContext2D): void => {
    const bg = document.querySelector("#hero-bg");
    if (bg) {
      context.canvas.height = bg.clientHeight;
      context.canvas.width = bg.clientWidth;
    }
  };

  /**
   * Uses width of canvas to determine far
   * particles must be to draw line
   * @param context
   * @returns
   */
  const getLineConstraint = (context: CanvasRenderingContext2D) => {
    return context.canvas!.width > 900 ? 300 : 140;
  };

  /**
   * Draws line between particles
   * @param context Canvas rendering context
   * @param particles list of particles
   * @param i index of particle A
   * @param j index of particle B
   */
  const drawLineBetweenParticles = (
    context: CanvasRenderingContext2D,
    particles: Particle[],
    i: number,
    j: number
  ) => {
    context.beginPath();
    context.strokeStyle = "#4290f5";
    context.moveTo(particles[i].x, particles[i].y);
    context.lineTo(particles[j].x, particles[j].y);
    context.stroke();
  };

  /**
   * Updates and draws particles for each animation frame
   * @param context Canvas context
   */
  const handleParticles = (context: CanvasRenderingContext2D) => {
    for (let i = 0; i < particles.length; i++) {
      particles[i].update(context);
      particles[i].draw(context);
      for (let j = i; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;

        const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

        if (distance < getLineConstraint(context)) {
          drawLineBetweenParticles(context, particles, i, j);
        }
      }
    }
  };

  /**
   * Clears canvas and draws animation frame
   * @param context Canvas context
   */
  const animate = (context: CanvasRenderingContext2D) => {
    context.clearRect(0, 0, context.canvas!.width, context.canvas!.height);
    setCanvasDimensions(context);

    handleParticles(context);
  };

  useEffect(() => {
    /**
     * Populates the particle array
     * @param context Canvas context
     */

    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
      const ctx = canvas.getContext("2d");
      setContext(ctx);
      if (context) {
        // Populate the particles array
        const particlesArr = [];
        for (let i = 0; i < props.numParticles; i++) {
          particlesArr.push(
            new Particle(
              Math.random() * context.canvas.width,
              Math.random() * context.canvas.height
            )
          );
        }
        setParticles(particlesArr);
      }
    }
  }, [context, props.numParticles]);

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
        context.clearRect(0, 0, context.canvas!.width, context.canvas!.height);
        setCanvasDimensions(context);
      });
    }
  }, [animate, context]);

  return (
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  );
};
export default Canvas;
