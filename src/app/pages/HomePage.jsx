import React from 'react'
import {
  ArrowRight,
  Download,
  Sparkles,
  Mail,
  ChevronDown
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import { motion } from "motion/react";
import { Link } from "react-router";
import {ProjectCard} from '../components/ui/ProjectCard.jsx';
import { projects } from "../data/projects";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/imenebaraitame", label: "GitHub" },
  { icon: FaLinkedin, href: "https://dz.linkedin.com/in/imene-baraitame-03280412b", label: "LinkedIn" },
  { icon: Mail, href: "mailto:baraitame.imene@gmail.com", label: "Email" },
];

const skills = [
  { name: "React", level: 70, color: "#a78bfa" },
  { name: "javascript /typescript", level: 60, color: "#818cf8" },
  { name: "Node.js / Express", level: 84, color: "#68a063" },
  { name: "TailwindCSS / CSS", level: 95, color: "#f472b6" },
  { name: "MongoDB / MySQL", level: 78, color: "#fb923c" },
  { name: "Java / thymeleaf/ ratpack", level: 80, color: "#fbbf24" },
];

function SkillBar({ name, level, color }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-[#c0c0d8]">
          {name}
        </span>
        <span className="text-sm text-[#c084fc]">
          {level}%
        </span>
      </div>
      <div
        className="relative h-2 rounded-full overflow-hidden bg-[rgba(255,255,255,0.05)]"
      >
        <motion.div
          className="absolute top-0 left-0 h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}aa, ${color})` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}


function HomePage() {

  const RESUME_URL = "https://drive.google.com/file/d/1_jPZjqZyp7j8iD_Mguew8y9A3iNSDWv4/view?usp=sharing";
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      {/* ───── HERO ───── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Background glow */}
        <div
          className="hero-glow absolute rounded-full pointer-events-none transition-transform duration-700"
          style={{
            width: "700px",
            height: "700px",
            background:
              "radial-gradient(circle, rgba(192,132,252,0.09) 0%, rgba(244,114,182,0.05) 50%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(192,132,252,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(192,132,252,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
            style={{
              background: "rgba(192,132,252,0.06)",
              border: "1px solid rgba(192,132,252,0.18)",
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: "#c084fc" }} />
            <span className="text-sm" style={{ color: "#c084fc" }}>
              Available for new opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1
              className="mb-4"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#e8e8f0",
              }}
            >
              Hi, I'm{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #c084fc, #f472b6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Imene
              </span>
            </h1>
            <h2
              className="mb-6"
              style={{
                fontSize: "clamp(1.2rem, 3vw, 2rem)",
                color: "#6a6a8a",
                fontWeight: 400,
              }}
            >
              Full-Stack Developer &amp;{" "}
              <span style={{ color: "#c084fc" }}>UI/UX Enthusiast</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mb-10 text-base md:text-lg"
            style={{ color: "#5a5a7a", maxWidth: "560px", lineHeight: "1.8" }}
          >
            I build fast, beautiful, and accessible web applications. Passionate about clean
            code, great user experiences, and turning complex problems into elegant solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-14"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #c084fc, #9333ea)",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={RESUME_URL}
              download="ImeneBaraitame_Resume.pdf"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#e8e8f0",
                fontSize: "0.95rem",
              }}
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex items-center justify-center gap-3"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200
                bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] text-[#5a5a7a]
                hover:bg-[rgba(192,132,252,0.08)] hover:border-[rgba(192,132,252,0.3)] hover:text-[#c084fc]"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" style={{ color: "#3a3a5a" }} />
          </motion.div>
        </div>
      </section>

      {/* ───── SKILLS ───── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-sm tracking-widest uppercase" style={{ color: "#c084fc" }}>
              What I Know
            </span>
            <h2
              className="mt-2"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#e8e8f0" }}
            >
              My Tech Stack
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <SkillBar {...skill} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FEATURED PROJECTS ───── */}
      <section className="py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <span className="text-sm tracking-widest uppercase" style={{ color: "#c084fc" }}>
                Portfolio
              </span>
              <h2
                className="mt-2"
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 700,
                  color: "#e8e8f0",
                }}
              >
                Featured Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:text-[#c084fc]"
              style={{ color: "#6a6a8a" }}
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ProjectCard project={project} featured />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA SECTION ───── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-12 rounded-3xl relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(192,132,252,0.06) 0%, rgba(244,114,182,0.06) 100%)",
              border: "1px solid rgba(192,132,252,0.14)",
            }}
          >
            {/* Glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
              style={{
                width: "300px",
                height: "150px",
                background: "radial-gradient(ellipse, rgba(192,132,252,0.14), transparent 70%)",
                filter: "blur(20px)",
              }}
            />
            <h2
              className="mb-4"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2rem)",
                fontWeight: 700,
                color: "#e8e8f0",
              }}
            >
              Ready to Build Something Great?
            </h2>
            <p className="mb-8" style={{ color: "#5a5a7a", lineHeight: "1.8" }}>
              I'm always excited to work on new projects. Let's collaborate and create something
              amazing together!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #c084fc, #9333ea)",
                color: "#ffffff",
                fontWeight: 600,
              }}
            >
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default HomePage