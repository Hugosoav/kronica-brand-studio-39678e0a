import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  splitBy?: "words" | "chars";
}

const AnimatedText = ({
  children,
  className = "",
  as: Tag = "p",
  delay = 0,
  splitBy = "words",
}: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const units = splitBy === "words" ? children.split(" ") : children.split("");

  return (
    <Tag ref={ref} className={className}>
      {units.map((unit, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 20, filter: "blur(4px)" }
          }
          transition={{
            duration: 0.5,
            delay: delay + i * (splitBy === "words" ? 0.08 : 0.03),
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {unit}
          {splitBy === "words" && i < units.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  );
};

export default AnimatedText;
