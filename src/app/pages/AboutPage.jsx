import { motion } from "motion/react";
import {
  Code2,
  Server,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Building responsive, performant UIs with React, TypeScript, and modern CSS.",
    color: "#a78bfa",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Scalable server-side apps with Node.js, Express, and REST APIs.",
    color: "#68a063",
  }
];

const experience = [
  {
    role: "Full-Stack Developer",
    company: "TechCorp Solutions",
    period: "2024 – Present",
    description:
      "Lead developer for multiple client projects, building full-stack web apps with React and Node.js.",
    type: "work",
  },
  {
    role: "Frontend Developer",
    company: "Pixel Studio",
    period: "2022 – 2024",
    description:
      "Developed UI components and design systems, collaborating closely with design teams.",
    type: "work",
  },
  {
    role: "B.Sc. Computer Science",
    company: "Cairo University",
    period: "2018 – 2022",
    description:
      "Graduated with honors. Specialized in software engineering and web technologies.",
    type: "education",
  },
];

const techStack = [
  "React", "TypeScript", "JavaScript", "TailwindCSS",
  "Node.js", "Express", "Python", "MongoDB", "Git", "Figma", "REST API",
];

const interests = [
  { icon: Code2, label: "Open Source" },
  { icon: GraduationCap, label: "Lifelong Learner" },
];

export function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm tracking-widest uppercase" style={{ color: "#c084fc" }}>
            Who I Am
          </span>
          <h1
            className="mt-2"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#e8e8f0",
            }}
          >
            About Me
          </h1>
        </motion.div>
          {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-5 gap-10 mb-20 items-center"
        >
          {/* Avatar */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #c084fc, #f472b6)",
                  transform: "rotate(4deg)",
                  opacity: 0.3,
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1696960181436-1b6d9576354e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmZW1hbGUlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMGNvbmZpZGVudHxlbnwxfHx8fDE3NzQ0NjA2NzF8MA&ixlib=rb-4.1.0&q=80&w=400"
                alt="Mohamed"
                className="relative rounded-2xl object-cover"
                style={{ width: "240px", height: "280px", border: "2px solid rgba(192,132,252,0.25)" }}
              />
              {/* Online badge */}
              <div
                className="absolute -bottom-3 -right-3 px-4 py-2 rounded-xl flex items-center gap-2 shadow-xl"
                style={{
                  background: "#120a1e",
                  border: "1px solid rgba(192,132,252,0.2)",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#a3e635", boxShadow: "0 0 6px #a3e635" }}
                />
                <span className="text-xs" style={{ color: "#c0c0d8" }}>
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-3">
            <h2 className="mb-4" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#e8e8f0" }}>
              Imene — Full-Stack Developer
            </h2>
            <p className="mb-4" style={{ color: "#6a6a8a", lineHeight: "1.9" }}>
              I'm a passionate full-stack developer based in Algiers, Algeia with 2+ years of
              experience building modern web applications. I love turning ideas into reality
              through clean, efficient code and thoughtful design.
            </p>
            <p className="mb-6" style={{ color: "#6a6a8a", lineHeight: "1.9" }}>
              My journey started with tinkering with HTML and CSS in high school, and has evolved
              into building complex, scalable systems. I specialize in the JavaScript ecosystem but
              love exploring new technologies and pushing creative boundaries.
            </p>
            <div className="flex flex-wrap gap-3">
              {interests.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm"
                  style={{
                    background: "rgba(192,132,252,0.07)",
                    border: "1px solid rgba(192,132,252,0.15)",
                    color: "#c084fc",
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-sm tracking-widest uppercase" style={{ color: "#c084fc" }}>
            What I Do
          </span>
          <h2
            className="mt-2 mb-8"
            style={{ fontSize: "1.8rem", fontWeight: 700, color: "#e8e8f0" }}
          >
            Services
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-2xl group transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget).style.borderColor = `${service.color}30`;
                  (e.currentTarget).style.background = `${service.color}06`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget).style.borderColor = "rgba(255,255,255,0.05)";
                  (e.currentTarget).style.background = "rgba(255,255,255,0.02)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${service.color}18` }}
                >
                  <service.icon className="w-5 h-5" style={{ color: service.color }} />
                </div>
                <h3
                  className="mb-2"
                  style={{ fontSize: "1rem", fontWeight: 600, color: "#e8e8f0" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm" style={{ color: "#5a5a7a", lineHeight: "1.7" }}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-sm tracking-widest uppercase" style={{ color: "#c084fc" }}>
            My Journey
          </span>
          <h2
            className="mt-2 mb-8"
            style={{ fontSize: "1.8rem", fontWeight: 700, color: "#e8e8f0" }}
          >
            Experience & Education
          </h2>
          <div className="relative">
            <div
              className="absolute left-5 top-0 bottom-0 w-px"
              style={{ background: "rgba(192,132,252,0.15)" }}
            />
            <div className="flex flex-col gap-6">
              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 pl-14 relative"
                >
                  {/* Dot */}
                  <div
                    className="absolute left-3 top-5 w-4 h-4 rounded-full flex items-center justify-center -translate-y-1/2"
                    style={{
                      background: item.type === "work" ? "#c084fc" : "#f472b6",
                      boxShadow: `0 0 12px ${item.type === "work" ? "#c084fc55" : "#f472b655"}`,
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  <div
                    className="flex-1 p-5 rounded-2xl"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#e8e8f0" }}>
                        {item.role}
                      </h3>
                      <span
                        className="text-xs px-2 py-0.5 rounded-md"
                        style={{
                          background:
                            item.type === "work"
                              ? "rgba(192,132,252,0.1)"
                              : "rgba(244,114,182,0.1)",
                          color: item.type === "work" ? "#c084fc" : "#f9a8d4",
                        }}
                      >
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm mb-2" style={{ color: "#c084fc" }}>
                      {item.company}
                    </p>
                    <p className="text-sm" style={{ color: "#5a5a7a", lineHeight: "1.7" }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm tracking-widest uppercase" style={{ color: "#c084fc" }}>
            Tools & Tech
          </span>
          <h2
            className="mt-2 mb-8"
            style={{ fontSize: "1.8rem", fontWeight: 700, color: "#e8e8f0" }}
          >
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="px-4 py-2 rounded-xl text-sm transition-all duration-200 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "#8a8aaa",
                }}
                whileHover={{
                  background: "rgba(192,132,252,0.08)",
                  borderColor: "rgba(192,132,252,0.25)",
                  color: "#c084fc",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default AboutPage;