"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Départ : Invisible et légèrement plus bas
      animate={{ opacity: 1, y: 0 }}  // Arrivée : Visible et à sa place
      transition={{ ease: "easeOut", duration: 0.5 }} // Durée : 0.5 seconde, fluide
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}