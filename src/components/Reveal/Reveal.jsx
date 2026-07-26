import { motion } from "framer-motion";

function Reveal({ children, delay = 0 }) {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    return children;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;