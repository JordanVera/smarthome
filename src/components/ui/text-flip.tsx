'use client';

import React, { useState, useEffect, useId, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface TextFlipProps {
  /** Array of words to cycle through in the animation */
  words?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
  /** Duration of the transition animation in milliseconds */
  animationDuration?: number;
}

export function TextFlip({
  words = ['better', 'modern', 'beautiful', 'awesome'],
  interval = 3000,
  className,
  textClassName,
}: TextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState<number | undefined>(
    undefined
  );
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate the maximum width needed for all words
  const calculateMaxWidth = () => {
    if (textRef.current) {
      // Temporarily show each word to measure its width
      const originalText = textRef.current.textContent;
      let maxWidth = 0;

      words.forEach((word) => {
        // Set the text content temporarily
        textRef.current!.textContent = word;
        // Measure the width
        const wordWidth = textRef.current!.scrollWidth;
        maxWidth = Math.max(maxWidth, wordWidth);
      });

      // Restore the original text
      textRef.current.textContent = originalText;

      // Add padding (30px on each side) and set the container width
      const finalWidth = maxWidth + 60;
      setContainerWidth(finalWidth);
    }
  };

  useEffect(() => {
    // Calculate max width when component mounts and when words change
    calculateMaxWidth();

    // Also update on window resize
    const handleResize = () => calculateMaxWidth();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [words]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <div
      ref={containerRef}
      style={containerWidth ? { width: containerWidth } : undefined}
      className={cn(
        'relative inline-block rounded-lg py-1 text-center text5xl font-bold  md:text-7xl  transition-all duration-300 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent',
        'shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db] shadow-gray-300',
        'shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_rgba(14,165,233,0.24)] shadow-black/30',
        'transition-all duration-300 ease-in-out',
        className
      )}
    >
      <div
        className={cn(
          'inline-block transition-all duration-300 relative z-20',
          textClassName
        )}
        ref={textRef}
        key={`word-${currentWordIndex}`}
      >
        <div className="inline-block">
          {words[currentWordIndex].split('').map((letter, index) => {
            // For left-to-right effect, delay is directly proportional to index
            const delayMs = Math.min(index * 20, 900);

            // Find the closest predefined delay class
            const closestDelay = [
              0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260,
              280, 300, 400, 500, 600, 700, 800, 900,
            ].reduce((prev, curr) =>
              Math.abs(curr - delayMs) < Math.abs(prev - delayMs) ? curr : prev
            );

            return (
              <span
                key={`${currentWordIndex}-${index}`}
                className={cn(
                  'inline-block animate-fade-in',
                  `animation-delay-${closestDelay}`
                )}
              >
                {letter}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TextFlip;
