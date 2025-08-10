"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { Link } from "@/components/ui/link";

const features = [
  {
    icon: "/file.svg",
    title: "AI Resume & LinkedIn Analysis",
    description:
      "Get actionable feedback and a Brand Score to stand out in your job search.",
  },
  {
    icon: "/window.svg",
    title: "Portfolio Website Generator",
    description:
      "Instantly create a beautiful, customizable portfolio with your data.",
  },
  {
    icon: "/globe.svg",
    title: "AI Content Generator",
    description:
      "Generate LinkedIn posts and resume bullets tailored to your goals.",
  },
];

export default function Home() {
  return (
    <React.Fragment>
      {/* Top Fade Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none fixed inset-0 -z-[8]"
      >
        <div
          className="absolute inset-0 opacity-80 animate-gradient-move"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.97 0.001 259) 0%, oklch(0.97 0.001 106.424) 50%, oklch(0.97 0.001 84.429) 100%)",
          }}
        />
        {/* Subtle abstract background shape */}
        <motion.div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[480px] h-[480px] rounded-full blur-3xl opacity-40"
          style={{
            background:
              "linear-gradient(45deg, var(--primary)/30 0%, var(--secondary)/20 100%)",
          }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 15, -10, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Hero Section */}
      <section className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center gap-6 pt-24 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1
            className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent mb-4"
            style={{
              background:
                "linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            NovaPersona
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Build your personal brand with AI. Analyze your resume, optimize
            your LinkedIn, and launch a stunning portfolio—all for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              size="lg"
              className="text-base px-8 py-6 shadow-lg"
              href="#get-started"
            >
              Get Started
            </Link>

            <Link
              className="text-base px-8 py-6"
              variant="outline"
              size="lg"
              href="#features"
            >
              See how it works
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="relative z-10 w-full max-w-5xl px-4 pb-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent"
          style={{
            background:
              "linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Features
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </motion.div>
      </section>
    </React.Fragment>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{
        y: -8,
        scale: 1.03,
        boxShadow: "0 8px 32px 0 rgba(99,102,241,0.10)",
      }}
      className="bg-card rounded-2xl border border-border p-8 flex flex-col items-center text-center transition-shadow shadow-md hover:shadow-xl"
    >
      <Image
        src={icon}
        alt=""
        width={44}
        height={44}
        className="mb-4 dark:invert"
        loading="lazy"
      />
      <h3
        className="font-semibold text-xl mb-2 bg-clip-text text-transparent"
        style={{
          background:
            "linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </h3>
      <p className="text-muted-foreground text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
