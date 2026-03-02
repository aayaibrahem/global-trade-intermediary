import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", showText = true }) => {
  return (
    <div className="flex items-center gap-2 shrink-0 mr-6 md:mr-10">
      <div className={className}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer Circle/Globe */}
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" strokeDasharray="4 4" className="opacity-20" />
          
          {/* Stylized 'E' */}
          <path
            d="M35 35H65M35 50H55M35 65H65"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            className="text-primary"
          />
          
          {/* Stylized 'C' wrapping around */}
          <path
            d="M70 30C75 35 78 42 78 50C78 65 65 78 50 78C35 78 22 65 22 50C22 35 35 22 50 22"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            className="text-primary opacity-60"
          />
          
          {/* Connecting Dot/Bridge */}
          <circle cx="50" cy="50" r="4" fill="currentColor" className="text-accent" />
        </svg>
      </div>
      {showText && (
        <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-primary whitespace-nowrap">
          EC <span className="text-muted italic">Sourcing</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
