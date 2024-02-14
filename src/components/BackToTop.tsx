import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";
import { motion } from "framer-motion";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 2 * window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, visibility: "hidden" }}
      animate={
        showButton
          ? { opacity: 1, visibility: "visible" }
          : { opacity: 0, visibility: "hidden" }
      }
      transition={{ duration: 0.4, type: "tween", ease: "linear" }}
      onClick={() => window.scrollTo(0, 0)}
      className={`fixed bottom-0 right-0 pt-4 pl-4 rounded-tl-full bg-accent text-white text-3xl`}
    >
      <BiArrowFromBottom className="animate-bounce" />
    </motion.button>
  );
};

export default BackToTop;
