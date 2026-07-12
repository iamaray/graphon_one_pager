"use client";

import { useEffect, useRef, useState } from "react";

const heroWords = [
  "Genomics",
  "Immunology",
  "Neuroscience",
  "Biochemistry",
  "Oncology",
] as const;

const typeStepMs = 85;
const deleteStepMs = 45;
const wordPauseMs = 1200;
const emptyPauseMs = 250;
const heroWordWidth = Math.max(...heroWords.map((word) => word.length)) + 1;

type TypingState = {
  wordIndex: number;
  visibleCharacterCount: number;
  phase: "typing" | "pausing" | "deleting";
};

const initialTypingState: TypingState = {
  wordIndex: 0,
  visibleCharacterCount: heroWords[0].length,
  phase: "pausing",
};

function getNextTypingState(state: TypingState): TypingState {
  const currentWord = heroWords[state.wordIndex];

  if (state.phase === "pausing") {
    return { ...state, phase: "deleting" };
  }

  if (state.phase === "typing") {
    const visibleCharacterCount = state.visibleCharacterCount + 1;

    if (visibleCharacterCount >= currentWord.length) {
      return {
        ...state,
        visibleCharacterCount: currentWord.length,
        phase: "pausing",
      };
    }

    return { ...state, visibleCharacterCount };
  }

  if (state.visibleCharacterCount > 0) {
    return {
      ...state,
      visibleCharacterCount: state.visibleCharacterCount - 1,
    };
  }

  return {
    wordIndex: (state.wordIndex + 1) % heroWords.length,
    visibleCharacterCount: 0,
    phase: "typing",
  };
}

function getTypingDelay(state: TypingState) {
  if (state.phase === "pausing") {
    return wordPauseMs;
  }

  if (state.phase === "deleting" && state.visibleCharacterCount === 0) {
    return emptyPauseMs;
  }

  return state.phase === "typing" ? typeStepMs : deleteStepMs;
}

export default function TypedHeroWord({
  onWordChange,
}: {
  onWordChange?: () => void;
}) {
  const [typingState, setTypingState] = useState(initialTypingState);
  const hasMounted = useRef(false);
  const currentWord = heroWords[typingState.wordIndex];
  const visibleText = currentWord.slice(0, typingState.visibleCharacterCount);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setTypingState(getNextTypingState);
    }, getTypingDelay(typingState));

    return () => window.clearTimeout(timeout);
  }, [typingState]);

  useEffect(() => {
    if (hasMounted.current) {
      onWordChange?.();
      return;
    }

    hasMounted.current = true;
  }, [onWordChange, typingState.wordIndex]);

  return (
    <span
      className="inline-block whitespace-nowrap"
      style={{ minWidth: `${heroWordWidth}ch` }}
    >
      {visibleText}
      <span className="ml-1 inline-block h-[0.9em] w-px translate-y-[0.1em] animate-pulse bg-foreground" />
    </span>
  );
}
