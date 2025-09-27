// All credit for this code goes to designali.in
// Follow him on twitter @designali_in
// Checkout his website https://designali.in/

"use client";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

interface ShineBorderProps {
  children: React.ReactNode;
  className?: string;
  borderWidth?: number;
  duration?: number;
  color?: string[];
}

export const ShineBorder = ({
  children,
  className,
  borderWidth = 2,
  duration = 14,
  color = ["#A07CFE", "#FE8A71", "#8A71FE", "#71FE8A", "#71A0FE"],
}: ShineBorderProps) => {
  return (
    <div
      style={
        {
          "--border-width": `${borderWidth}px`,
        } as React.CSSProperties
      }
      className={cn(
        "relative rounded-lg border border-transparent bg-white/10 p-px font-bold text-primary transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_#fff8] dark:bg-black/10",
        className
      )}
    >
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--gradient-color": `${color.join(",")}`,
            "--duration": `${duration}s`,
          } as React.CSSProperties
        }
        className="to-indigo-500, to-sky-500, to-emerald-500, to-teal-500, to-cyan-500, to-blue-500, bg-shine-gradient absolute inset-[0] z-[-1] rounded-[inherit] border-[length:var(--border-width)] border-transparent"
      />
      {children}
    </div>
  );
};

export const TypeWriter = ({
  strings,
  className,
}: {
  strings: string[];
  className?: string;
}) => {
  const [text, setText] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  useEffect(() => {
    const type = () => {
      const currentString = strings[index];
      if (isDeleting) {
        setText(currentString.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setIndex((index + 1) % strings.length);
        }
      } else {
        setText(currentString.substring(0, text.length + 1));
        if (text.length === currentString.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    };
    const timer = setTimeout(type, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, strings]);

  return (
    <span
      className={cn(
        "min-w-48 text-left text-2xl font-bold tracking-tight text-blue-500 md:text-2xl",
        className
      )}
    >
      {text}
    </span>
  );
};

// All credit for this code goes to https://codepen.io/alphardex/pen/RWrGZpa
export const renderCanvas = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let cx = canvas.width / 2;
  let cy = canvas.height / 2;

  let rad = 0;

  const R = canvas.width / 4;

  const handleResize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cx = canvas.width / 2;
    cy = canvas.height / 2;
  };

  window.addEventListener("resize", handleResize);

  const draw = () => {
    if (!ctx) return;
    rad += 0.01;
    if (rad > Math.PI * 2) {
      rad = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "rgba(168, 162, 158, 0.2)";
    ctx.lineWidth = 1;

    let gap = R / 8;
    for (let i = 1; i <= 8; i++) {
      ctx.beginPath();
      ctx.arc(cx, cy, gap * i, 0, Math.PI * 2);
      ctx.stroke();
    }

    let x = cx + R * Math.cos(rad);
    let y = cy + R * Math.sin(rad);

    ctx.fillStyle = "rgba(168, 162, 158, 0.4)";
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fill();

    requestAnimationFrame(draw);
  };

  draw();
  return () => window.removeEventListener("resize", handleResize);
};
