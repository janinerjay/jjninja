import { useEffect } from "react";

const STARS = [
  { top: "18%", delay: "0s" },
  { top: "42%", delay: "0.25s" },
  { top: "30%", delay: "0.5s" },
  { top: "62%", delay: "0.75s" },
  { top: "50%", delay: "1s" },
];
const DURATION_MS = 4000;

function Ninja({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, DURATION_MS);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="ninja-overlay">
      <span className="ninja-runner" aria-hidden="true">
        🥷
      </span>
      {STARS.map((star) => (
        <svg
          key={star.delay}
          className="ninja-star"
          style={{ top: star.top, animationDelay: star.delay }}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ))}
      <p className="ninja-toast" role="status">
        🥷 You found the ninja.
      </p>
    </div>
  );
}

export default Ninja;
