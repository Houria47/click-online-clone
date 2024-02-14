import { useState, useEffect } from "react";
type Props = {
  text: string;
  delay?: number;
};
const Typewriter = ({ text, delay = 50 }: Props) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  useEffect(() => {
    setCurrentText("");
    setCurrentIndex(0);
  }, [text]);

  return <>{currentText}</>;
};

export default Typewriter;
