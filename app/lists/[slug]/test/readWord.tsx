"use client"
import { useCallback, useEffect } from "react";
import Image from "next/image";

interface ReadWordProps {
  word?: string | null;
  autoSpeak?: boolean;
}

export default function ReadWord({ word, autoSpeak = true }: ReadWordProps) {
  // Memoize the `speak` function to avoid unnecessary re-renders
  const speak = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const speechSynth = window.speechSynthesis;
      if (!speechSynth.speaking) {
        const newUtter = new SpeechSynthesisUtterance(word || "");
        speechSynth.speak(newUtter);
      }
    } else {
      console.error("Speech synthesis not supported in this browser.");
    }
  }, [word]);

  useEffect(() => {
    if (autoSpeak) {
      speak();
    }
  }, [word, autoSpeak, speak]);

  if (!word) {
    return <div>Loading...</div>;
  }

  return (
    <button
      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all hover:opacity-80"
      onClick={speak}
    >
      <Image
        className="dark:invert"
        src="/mic-nobg.png"
        alt="Dictation logo"
        height={80}
        width={80}
        priority
      />
      <span className="text-sm text-slate-600 dark:text-slate-300 hidden md:flex">
        Listen Again
      </span>
    </button>
  );
}
