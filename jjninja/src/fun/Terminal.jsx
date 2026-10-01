import { useEffect, useRef, useState } from "react";
import { runCommand } from "./commands";

const WELCOME = [
  { kind: "output", text: 'Welcome to janinejay.ninja. Type "help" to get started.' },
];

// Stays mounted while closed so the scrollback and history survive.
function Terminal({ open, onClose, onToggleCode, onNinja }) {
  const [lines, setLines] = useState(WELCOME);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(null);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    if (open) inputRef.current.focus();
  }, [open]);

  useEffect(() => {
    outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [lines]);

  const submit = (event) => {
    event.preventDefault();
    let cleared = false;
    const output = runCommand(value, {
      toggleCode: onToggleCode,
      summonNinja: onNinja,
      close: onClose,
      clear: () => {
        cleared = true;
      },
    });
    setLines((previous) =>
      cleared
        ? []
        : [
            ...previous,
            { kind: "input", text: value },
            ...output.map((text) => ({ kind: "output", text })),
          ],
    );
    if (value.trim()) setHistory((previous) => [...previous, value]);
    setHistoryIndex(null);
    setValue("");
  };

  const recall = (index) => {
    setHistoryIndex(index);
    setValue(index === null ? "" : history[index]);
  };

  const onKeyDown = (event) => {
    if (event.key === "Escape" || event.key === "`") {
      event.preventDefault();
      onClose();
    } else if (event.key === "ArrowUp" && history.length) {
      event.preventDefault();
      recall(
        historyIndex === null ? history.length - 1 : Math.max(historyIndex - 1, 0),
      );
    } else if (event.key === "ArrowDown" && historyIndex !== null) {
      event.preventDefault();
      recall(historyIndex + 1 < history.length ? historyIndex + 1 : null);
    }
  };

  return (
    <div
      className="terminal"
      role="dialog"
      aria-label="Terminal"
      hidden={!open}
      onClick={() => inputRef.current.focus()}
    >
      <div className="terminal-bar">
        <span>visitor@janinejay.ninja</span>
        <button type="button" onClick={onClose} aria-label="Close terminal">
          ×
        </button>
      </div>
      <div className="terminal-output" ref={outputRef} aria-live="polite">
        {lines.map((line, index) => (
          <div key={index} className={`terminal-line is-${line.kind}`}>
            {line.kind === "input" && <span className="terminal-prompt">$ </span>}
            {line.text}
          </div>
        ))}
      </div>
      <form className="terminal-form" onSubmit={submit}>
        <span className="terminal-prompt" aria-hidden="true">
          $
        </span>
        <input
          ref={inputRef}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={onKeyDown}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck="false"
          aria-label="Terminal command"
        />
      </form>
    </div>
  );
}

export default Terminal;
