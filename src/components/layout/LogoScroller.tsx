import React from 'react';
import { LogoScrollerProps } from '@/types/loyalty';

export const LogoScroller: React.FC<LogoScrollerProps> = ({ companyLogos }) => {
  return (
    <div className="w-full overflow-hidden py-1 fixed bottom-0">
      <div className="flex justify-center items-center whitespace-nowrap gap-10 animate-logo-scroll">
        {[...companyLogos, ...companyLogos].map((logo, index) => (
          <img
            key={`logo-${index}`}
            className={`${logo.className ?? ''} scale-50 sm:scale-75`}
            alt={logo.alt}
            src={logo.src}
          />
        ))}
      </div>

      <style>{`
        @keyframes logoScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-logo-scroll {
          animation: logoScroll 20s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-logo-scroll {
            animation-duration: 10s;
          }
        }
      `}</style>
    </div>
  );
};
