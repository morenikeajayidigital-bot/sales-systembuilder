import React from 'react';
import { RenLogo } from './RenLogo.tsx';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#08402F]/10 py-12 sm:py-16 bg-[#F7F3EA]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <RenLogo size="sm" />
              <span className="w-px h-4 bg-[#08402F]/20" aria-hidden="true" />
              <span className="text-sm font-bold tracking-tight text-[#08402F]">
                Sales System Builder
              </span>
            </div>
            <p className="text-xs text-[#08402F]/60">
              © {new Date().getFullYear()} REN DIGITALS. Sales System Builder. All rights reserved.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-6 text-xs sm:text-sm font-medium text-[#08402F]">
            <a href="#overview" className="hover:text-[#A9832F] transition-colors focus-visible:outline-2 focus-visible:outline-[#0F6B50]">
              Overview
            </a>
            <a href="#curriculum" className="hover:text-[#A9832F] transition-colors focus-visible:outline-2 focus-visible:outline-[#0F6B50]">
              Curriculum
            </a>
            <a href="#fit" className="hover:text-[#A9832F] transition-colors focus-visible:outline-2 focus-visible:outline-[#0F6B50]">
              Fit
            </a>
            <a href="#story" className="hover:text-[#A9832F] transition-colors focus-visible:outline-2 focus-visible:outline-[#0F6B50]">
              Story
            </a>
            <a href="#questions" className="hover:text-[#A9832F] transition-colors focus-visible:outline-2 focus-visible:outline-[#0F6B50]">
              Questions
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
