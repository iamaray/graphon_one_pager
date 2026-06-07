"use client";

import { useEffect, useState } from "react";

const HERO_WORDS = [
  "Genomics",
  "Immunology",
  "Marine Biology",
  "Neuroscience",
  "Biochemistry",
  "Oncology",
] as const;

const TYPE_STEP_MS = 85;
const DELETE_STEP_MS = 45;
const WORD_PAUSE_MS = 1200;
const EMPTY_PAUSE_MS = 250;
const HERO_WORD_WIDTH_CH =
  Math.max(...HERO_WORDS.map((word) => word.length)) + 1;

type TypingPhase = "typing" | "pausing" | "deleting";

type TypingState = {
  wordIndex: number;
  visibleCharacterCount: number;
  phase: TypingPhase;
};

const initialTypingState: TypingState = {
  wordIndex: 0,
  visibleCharacterCount: HERO_WORDS[0].length,
  phase: "pausing",
};

function getNextTypingState(state: TypingState): TypingState {
  const currentWord = HERO_WORDS[state.wordIndex];

  switch (state.phase) {
    case "pausing":
      return {
        ...state,
        phase: "deleting",
      };
    case "typing": {
      const nextVisibleCharacterCount = state.visibleCharacterCount + 1;

      if (nextVisibleCharacterCount >= currentWord.length) {
        return {
          ...state,
          visibleCharacterCount: currentWord.length,
          phase: "pausing",
        };
      }

      return {
        ...state,
        visibleCharacterCount: nextVisibleCharacterCount,
      };
    }
    case "deleting":
      if (state.visibleCharacterCount > 0) {
        return {
          ...state,
          visibleCharacterCount: state.visibleCharacterCount - 1,
        };
      }

      return {
        wordIndex: (state.wordIndex + 1) % HERO_WORDS.length,
        visibleCharacterCount: 0,
        phase: "typing",
      };
  }
}

function getTypingDelay(state: TypingState) {
  if (state.phase === "pausing") {
    return WORD_PAUSE_MS;
  }

  if (state.phase === "deleting" && state.visibleCharacterCount === 0) {
    return EMPTY_PAUSE_MS;
  }

  return state.phase === "typing" ? TYPE_STEP_MS : DELETE_STEP_MS;
}

export default function TypedHeroWord() {
  const [typingState, setTypingState] = useState(initialTypingState);
  const currentWord = HERO_WORDS[typingState.wordIndex];
  const visibleText = currentWord.slice(0, typingState.visibleCharacterCount);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setTypingState(getNextTypingState);
    }, getTypingDelay(typingState));

    return () => {
      window.clearTimeout(timeout);
    };
  }, [typingState]);

  return (
    <span
      className="inline-block whitespace-nowrap"
      style={{ minWidth: `${HERO_WORD_WIDTH_CH}ch` }}
    >
      {visibleText}
      <span className="ml-1 inline-block h-[0.9em] w-px translate-y-[0.1em] animate-pulse bg-foreground" />
    </span>
  );
}
