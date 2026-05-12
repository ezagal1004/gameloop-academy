export default function WaveDivider({ from = '#3B9FD8', to = '#ffffff' }: { from?: string; to?: string }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="w-full block"
      style={{ display: 'block', marginBottom: '-1px' }}
    >
      <path
        d="M0,0 L1440,0 L1440,40 C1200,20 960,20 720,40 C480,60 240,60 0,40 Z"
        fill={from}
      />
      <path
        d="M0,40 C240,60 480,60 720,40 C960,20 1200,20 1440,40 L1440,80 L0,80 Z"
        fill={to}
      />
      <path
        d="M0,40 C240,60 480,60 720,40 C960,20 1200,20 1440,40"
        fill="none"
        stroke="#000000"
        strokeWidth="4"
      />
    </svg>
  );
}
