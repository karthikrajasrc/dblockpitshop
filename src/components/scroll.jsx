import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

function ScrollReveal({ children }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
  offset: ["start 0.95", "end 0.4"],
})

const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1])
const y = useTransform(scrollYProgress, [0, 1], [40, 0])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="scroll-section"
    >
      {children}
    </motion.div>
  )
}

function Motion({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ position: "relative" }}
    >
      {children}
    </motion.div>
  )
  }
  
export default ScrollReveal
export { Motion }


