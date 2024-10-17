"use client";

import { cn } from "../utils/cn";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex].text;

    if (isRemoving) {
      if (displayedText.length > 0) {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
      } else {
        setIsRemoving(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    } else {
      if (displayedText.length < currentWord.length) {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      } else {
        setIsRemoving(true);
      }
    }
  }, [displayedText, isRemoving, currentWordIndex, words]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isRemoving) {
        setDisplayedText(displayedText);
      }
    }, isRemoving ? 0.3 : 0.2); // ここで表示の遅さを調整します

    return () => clearTimeout(timer);
  }, [displayedText, isRemoving]);

  return (
    <div className={cn("text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center", className || "")}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear" }} // 表示時間を2秒に設定
        className="inline-block overflow-hidden"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={cn("dark:text-white text-black")}
        >
          {displayedText}
        </motion.span>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn("inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500", cursorClassName || "")}
      ></motion.span>
    </div>
  );
};
