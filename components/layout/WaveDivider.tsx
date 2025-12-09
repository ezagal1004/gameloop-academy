export default function WaveDivider() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Black stripe */}
      <div className="w-full bg-black h-16 md:h-20"></div>
      
      {/* Wave transition */}
      <svg
        className="w-full h-auto"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,0 L0,0 Z"
          fill="#000000"
        />
        <path
          d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
          fill="#3B9FD8"
        />
      </svg>
    </div>
  );
}