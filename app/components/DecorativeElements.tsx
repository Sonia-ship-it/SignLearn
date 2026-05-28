export function WavePattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute ${className}`}
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 80C40 60, 60 100, 80 80C100 60, 120 100, 140 80C160 60, 180 100, 200 80"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 120C40 100, 60 140, 80 120C100 100, 120 140, 140 120C160 100, 180 140, 200 120"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 160C40 140, 60 180, 80 160C100 140, 120 180, 140 160C160 140, 180 180, 200 160"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute ${className}`}
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={20 + col * 20}
            cy={20 + row * 20}
            r="3"
            fill="currentColor"
          />
        ))
      )}
    </svg>
  );
}

export function CirclePattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute ${className}`}
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="75"
        cy="75"
        r="60"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.3"
      />
      <circle
        cx="75"
        cy="75"
        r="45"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
      />
      <circle
        cx="75"
        cy="75"
        r="30"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.7"
      />
    </svg>
  );
}
