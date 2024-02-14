import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  className: string;
  children: ReactNode;
};
const FadeInListItem = ({ children, className }: Props) => {
  return (
    <motion.li
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "200px", amount: "all" }}
      transition={{ duration: 0.5, type: "tween", ease: "linear" }}
    >
      {children}
    </motion.li>
  );
};

export default FadeInListItem;
