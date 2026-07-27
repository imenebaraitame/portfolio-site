import { useEffect } from "react";
import { motion } from "framer-motion";
import Monogram from "./Monogram";

export default function SplashScreen({ onFinish, duration = 3600 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#221724] overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute w-[500px] h-[500px] rounded-full bg-slate-600/10 blur-3xl"
      />

      <Monogram />

      <div className="flex overflow-hidden mt-8">
        {"Hello".split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.0 + i * 0.06 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            {char}
          </motion.span>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 3.4 }}
        className="text-slate-500 text-5xl font-bold mt-3 mb-8"
      >
        Welcome to my world
      </motion.p>

      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-2 h-2 rounded-full bg-slate-500"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </motion.div>
  );
}
