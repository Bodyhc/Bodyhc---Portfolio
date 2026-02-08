"use client";
import React, { useEffect, useRef } from "react";

const ContactBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Wave animation
        let time = 0;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.01;

            // Create multiple animated gradient waves
            for (let i = 0; i < 3; i++) {
                const gradient = ctx.createLinearGradient(
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );
                
                const phase = time + i * 0.5;
                const r1 = Math.sin(phase) * 0.5 + 0.5;
                const g1 = Math.cos(phase * 1.2) * 0.5 + 0.5;
                const b1 = Math.sin(phase * 0.8) * 0.5 + 0.5;

                gradient.addColorStop(0, `rgba(139, 92, 246, ${r1 * 0.15})`);
                gradient.addColorStop(0.3, `rgba(59, 130, 246, ${g1 * 0.15})`);
                gradient.addColorStop(0.6, `rgba(6, 182, 212, ${b1 * 0.15})`);
                gradient.addColorStop(1, `rgba(236, 72, 153, ${r1 * 0.15})`);

                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            // Draw animated circles
            for (let i = 0; i < 8; i++) {
                const x = (canvas.width / 8) * i + Math.sin(time + i) * 50;
                const y = canvas.height / 2 + Math.cos(time * 0.7 + i) * 100;
                const radius = 100 + Math.sin(time * 2 + i) * 50;
                
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
                const colors = [
                    [139, 92, 246],  // purple
                    [59, 130, 246],  // blue
                    [6, 182, 212],   // cyan
                    [236, 72, 153],  // pink
                ];
                const color = colors[i % colors.length];
                
                gradient.addColorStop(0, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.3)`);
                gradient.addColorStop(0.5, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.15)`);
                gradient.addColorStop(1, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0)`);

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fill();
            }

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ background: "#0a0a0f" }}
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-dark via-bg-dark/60 to-transparent" />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-bg-dark via-bg-dark/60 to-transparent" />
        </div>
    );
};

export default ContactBackground;
