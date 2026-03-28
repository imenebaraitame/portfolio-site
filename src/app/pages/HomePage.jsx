import React from 'react'
import {
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";


function HomePage() {
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

        </div>

        

      </section>
    </>
  )
}

export default HomePage