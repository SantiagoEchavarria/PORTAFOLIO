import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export function Typewriter({
  text,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 5000,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && index < text.length) {
      // Escribiendo
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, typingSpeed);
    } 
    else if (!isDeleting && index === text.length) {
      // Pausa cuando termina de escribir
      setShowCursor(false);
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } 
    else if (isDeleting && index > 0) {
      // Borrando
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, deletingSpeed);
    } 
    else if (isDeleting && index === 0) {
      // Reinicia
      setIsDeleting(false);
      setShowCursor(true);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return (
    <span className="text-blue-600">
      {displayedText}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  );
}
