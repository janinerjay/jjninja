import { useEffect } from "react";
import { isTyping } from "./actions";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function useKonami(onMatch) {
  useEffect(() => {
    let position = 0;
    const onKeyDown = (event) => {
      if (isTyping(event)) return;
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      if (key === KONAMI[position]) {
        position += 1;
      } else {
        position = key === KONAMI[0] ? 1 : 0;
      }
      if (position === KONAMI.length) {
        position = 0;
        onMatch();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onMatch]);
}
