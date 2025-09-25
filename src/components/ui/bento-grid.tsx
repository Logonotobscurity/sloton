"use client"
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: React.ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <motion.div
    initial="initial"
    whileHover="hover"
    className={cn(
      "group/bento relative flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >
    <div>{background}</div>
    <motion.div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover/bento:-translate-y-10">
      <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 -translate-y-12 transition-all duration-300 ease-in-out group-hover/bento:scale-75" />
      <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-400">{description}</p>
    </motion.div>

    <motion.div
      variants={{
        initial: {
          x: 24,
          opacity: 0,
        },
        hover: {
          x: 0,
          opacity: 1,
        },
      }}
      transition={{
        duration: 0.2,
      }}
      className="pointer-events-none absolute bottom-0 right-0 z-10 -translate-y-[70%] translate-x-1/2 p-4 opacity-0 transition-all duration-300 group-hover/bento:translate-x-0 group-hover/bento:opacity-100"
    >
      <Image
        alt="image"
        width={100}
        height={100}
        className="h-20 w-20 rounded-full bg-white object-contain p-4 shadow-xl dark:bg-black"
        src="https://cdn.magicui.design/icon-badge.png"
      />
    </motion.div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover/bento:bg-black/[.03] group-hover/bento:dark:bg-neutral-800/10" />
  </motion.div>
);
