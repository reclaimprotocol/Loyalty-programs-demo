import { Building2, CreditCard, Gamepad2, Plane, ShoppingBag, Trophy, UtensilsCrossed, Wallet } from 'lucide-react';
import React from 'react';

export interface LoyaltyProgram {
  id: string;
  name: string;
  icon: React.ReactNode;
  category: string;
  description: string;
  path: string;
}

export const loyaltyPrograms: LoyaltyProgram[] = [
  {
    id: 'airlines',
    name: 'Airlines & Travel',
    icon: Plane,
    category: 'Travel',
    description: 'Connect your frequent flyer accounts',
    path: '/programs/airlines',
  },
  {
    id: 'hotels',
    name: 'Hotels & Resorts',
    icon: Building2,
    category: 'Travel',
    description: 'Hotel rewards and memberships',
    path: '/programs/hotels',
  },
  {
    id: 'dining',
    name: 'Dining & Restaurants',
    icon: UtensilsCrossed,
    category: 'Food',
    description: 'Restaurant loyalty programs',
    path: '/programs/dining',
  },
  {
    id: 'retail',
    name: 'Retail & Shopping',
    icon: ShoppingBag,
    category: 'Shopping',
    description: 'Retail store rewards',
    path: '/programs/retail',
  },
  {
    id: 'credit-cards',
    name: 'Credit Card Rewards',
    icon: CreditCard,
    category: 'Finance',
    description: 'Credit card points and rewards',
    path: '/programs/credit-cards',
  },
  {
    id: 'gaming',
    name: 'Gaming Rewards',
    icon: Gamepad2,
    category: 'Gaming',
    description: 'Gaming platform achievements',
    path: '/programs/gaming',
  },
  {
    id: 'sports',
    name: 'Sports & Recreation',
    icon: Trophy,
    category: 'Sports',
    description: 'Sports club memberships',
    path: '/programs/sports',
  },
  {
    id: 'crypto',
    name: 'Crypto Rewards',
    icon: Wallet,
    category: 'Crypto',
    description: 'Cryptocurrency rewards programs',
    path: '/programs/crypto',
  },
];
