import { Plane, Building2, UtensilsCrossed, ShoppingBag, CreditCard, Gamepad2, Trophy, Wallet } from 'lucide-react';
import { LoyaltyProgram } from '@/types/loyalty';

export const loyaltyPrograms: LoyaltyProgram[] = [
  {
    id: 'airlines',
    name: 'Airlines & Travel',
    icon: <Plane className="w-5 h-5" />,
    category: 'Travel',
    description: 'Connect your frequent flyer accounts',
  },
  // ... rest of the loyalty programs
];
