import { motion } from "framer-motion";

export default function Monogram() {
  return (
    <div className="relative w-32 h-40 flex items-center justify-center">
      <motion.svg
        viewBox="0 0 256 280"
        className="w-full h-full"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <defs>
          <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* halo derrière le point */}
        <motion.circle
          cx="73"
          cy="55"
          r="28"
          fill="url(#dotGlow)"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

        {/* point */}
        <motion.circle
          cx="73"
          cy="55"
          r="19"
          fill="#ffffff"
          filter="url(#softGlow)"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />

        {/* tige gauche */}
        <motion.path
          d="
            M56 102
            H108
            V206
            C108 221 112 233 123 243
            C132 251 143 256 157 258
            H95
            C73 258 56 242 56 220
            Z
          "
          fill="url(#mainGradient)"
          filter="url(#crispGlow)"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />

        {/* forme droite */}
        <motion.path
          d="
            M133 34
            C179 34 210 60 210 103
            C210 126 201 145 183 158
            C203 169 214 190 214 214
            C214 247 188 270 149 270
            C126 270 109 260 98 245
            C115 254 132 258 149 258
            C173 258 190 242 190 219
            C190 196 175 180 151 180
            H137
            V154
            H149
            C170 154 186 138 186 114
            C186 87 166 66 136 66
            C124 66 114 69 105 74
            C110 49 121 34 133 34
            Z
          "
          fill="url(#mainGradient)"
          filter="url(#crispGlow)"
          initial={{ opacity: 0, x: 6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        />
      </motion.svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.15 }}
        className="absolute inset-0 -z-10 rounded-full bg-slate-400/10 blur-2xl"
      />
    </div>
  );
}
