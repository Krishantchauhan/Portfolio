import { useState, useEffect } from 'react';

function useTypingAnimation(text, pauseDuration = 1000) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting && index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      } else if (!isDeleting && index === text.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, pauseDuration]);

  return displayedText;
}

export default useTypingAnimation;
