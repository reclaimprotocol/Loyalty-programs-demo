import { ReactNode } from 'react';

export interface Logo {
  className?: string;
  alt: string;
  src: string;
}

export interface LogoScrollerProps {
  companyLogos: Logo[];
}

export interface Provider {
  name: string;
  icon: ReactNode;
  providerId: string;
  description: string;
  category: string;
}

export interface LoyaltyProgram {
  id: string;
  name: string;
  icon: ReactNode;
  category: string;
  description: string;
}

export interface LoyaltyCard {
  id: string;
  programId: string;
  name: string;
  points: number;
  tier: string;
  lastUsed: string;
  benefits: string[];
  icon: ReactNode;
}

export interface AirlineApp {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
  category: string;
  providerId: string;
}
