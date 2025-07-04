import { Building2, Car, Plane, Ship, ShoppingBag, Train, Users, UtensilsCrossed } from 'lucide-react';
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
    category: 'Airlines',
    description: 'Connect your frequent flyer accounts and manage air miles',
    path: '/programs/airlines',
  },
  {
    id: 'hotels',
    name: 'Hotels & Resorts',
    icon: Building2,
    category: 'Hotels',
    description: 'Track hotel loyalty points and elite status benefits',
    path: '/programs/hotels',
  },
  {
    id: 'car-rentals',
    name: 'Car Rentals',
    icon: Car,
    category: 'CarRentals',
    description: 'Manage car rental rewards and elite status',
    path: '/programs/car-rentals',
  },
  {
    id: 'trains',
    name: 'Train Rewards',
    icon: Train,
    category: 'Travel',
    description: 'Railway loyalty programs and season tickets',
    path: '/programs/trains',
  },
  {
    id: 'cruises',
    name: 'Cruise Lines',
    icon: Ship,
    category: 'Travel',
    description: 'Cruise line memberships and rewards',
    path: '/programs/cruises',
  },
  {
    id: 'shopping',
    name: 'Retail & Shopping',
    icon: ShoppingBag,
    category: 'Shopping',
    description: 'Retail store rewards and cashback programs',
    path: '/programs/shopping',
  },
  {
    id: 'dining',
    name: 'Dining & Restaurants',
    icon: UtensilsCrossed,
    category: 'Food',
    description: 'Restaurant loyalty programs and dining rewards',
    path: '/programs/dining',
  },
  {
    id: 'club-memberships',
    name: 'Club Memberships',
    icon: Users,
    category: 'Lifestyle',
    description: 'Private club memberships and benefits',
    path: '/programs/club-memberships',
  },
];

// Updated interface first
export interface Provider {
  name: string;
  providerId: string;
  websiteUrl: string;
  logoUrl: string;
  category: string;
}

export const providers = [
  {
    name: 'Marriott Bonvoy',
    providerId: 'db48def1-4602-4672-82be-311ea5a779e3',
    websiteUrl: 'https://marriott.com/bonvoy',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/marriott.com-16d814b3-0d37-4b95-9868-3dcc88bd83e5.png', // official PNG from brandfetch  [oai_citation:0‡brandfetch.com](https://brandfetch.com/marriott.com?utm_source=chatgpt.com)
    category: 'Hotels',
  },
  {
    name: 'Hilton Honors',
    providerId: 'b4490d0b-5680-4243-9cd5-7937c7ace58c',
    websiteUrl: 'https://hilton.com/honors',
    logoUrl: 'https://stories.hilton.com/media-library/hilton-honors-logo.png', // official from Hilton press media  [oai_citation:1‡stories.hilton.com](https://stories.hilton.com/media-library/honors_white_hr-2?utm_source=chatgpt.com) [oai_citation:2‡stories.hilton.com](https://stories.hilton.com/media-library?brand=hilton-honors&utm_source=chatgpt.com)
    category: 'Hotels',
  },
  {
    name: 'Delta SkyMiles',
    providerId: '4688ad77-413d-4714-84bd-36dbce9f6d6d',
    websiteUrl: 'https://delta.com/skymiles',
    logoUrl: 'https://seeklogo.com/images/D/delta-skymiles-logo.png', // vector PNG from seeklogo  [oai_citation:3‡seeklogo.com](https://seeklogo.com/vector-logo/369359/delta-skymiles?utm_source=chatgpt.com) [oai_citation:4‡searchlogovector.com](https://searchlogovector.com/delta-skymiles-logo-vector-svg/?utm_source=chatgpt.com)
    category: 'Airlines',
  },
  {
    name: 'IHG One Rewards',
    providerId: 'f752b6a3-fc17-4321-a3e9-f60fafdcd2cf',
    websiteUrl: 'https://ihg.com/onerewards',
    logoUrl: 'https://seeklogo.com/images/I/ihg-rewards-logo.png', // official from seeklogo  [oai_citation:5‡seeklogo.com](https://seeklogo.com/vector-logo/485759/ihg-rewards?utm_source=chatgpt.com)
    category: 'Hotels',
  },
  {
    name: 'American AAdvantage',
    providerId: '62f06d19-2122-4cd0-a268-eda0d965b40d',
    websiteUrl: 'https://aa.com/aadvantage',
    logoUrl: 'https://seeklogo.com/images/A/american-airlines-aadvantage-logo.png', // AAdvantage icon from seeklogo  [oai_citation:6‡seeklogo.com](https://seeklogo.com/vector-logo/369286/american-airlines-aadvantage?utm_source=chatgpt.com)
    category: 'Airlines',
  },
  {
    name: 'Wyndham Rewards',
    providerId: 'd74891b8-bcd4-400e-98c5-64eb2b6aaa13',
    websiteUrl: 'https://wyndhamhotels.com/rewards',
    logoUrl: 'https://corporate.wyndhamhotels.com/media-assets/wyndham-rewards-logo.png', // from Wyndham media assets  [oai_citation:7‡corporate.wyndhamhotels.com](https://corporate.wyndhamhotels.com/media-assets/wyndham-rewards/?utm_source=chatgpt.com)
    category: 'Hotels',
  },
  {
    name: 'United MileagePlus',
    providerId: 'aa22e99d-9c74-4505-97b6-d68ce49b60cd',
    websiteUrl: 'https://united.com/mileageplus',
    logoUrl: 'https://seeklogo.com/images/U/united-airlines-mileageplus-logo.png', // official from seeklogo  [oai_citation:8‡buymiles.mileageplus.com](https://www.buymiles.mileageplus.com/?utm_source=chatgpt.com) [oai_citation:9‡seeklogo.com](https://seeklogo.com/vector-logo/369401/united-airlines-mileageplus?utm_source=chatgpt.com)
    category: 'Airlines',
  },
  {
    name: 'Accor Live Limitless',
    providerId: '4a956ed7-0166-43d9-8fba-8085d4fd5449',
    websiteUrl: 'https://all.accor.com',
    logoUrl: 'https://brandfetch.com/all.com/icon.png', // official from brandfetch/vector site  [oai_citation:10‡logos.fandom.com](https://logos.fandom.com/wiki/ALL_-_Accor_Live_Limitless?utm_source=chatgpt.com) [oai_citation:11‡brandfetch.com](https://brandfetch.com/all.com?utm_source=chatgpt.com)
    category: 'Hotels',
  },
  {
    name: 'Emirates Skywards',
    providerId: '776524f8-a2db-4db9-96a4-66541a7c5c8b',
    websiteUrl: 'https://emirates.com/skywards',
    logoUrl: 'https://assets.emirates.com/media/skywards/logo/skywards-logo.svg', // official from Emirates press center
    category: 'Airlines',
  },
  {
    name: 'Qatar Airways Privilege Club',
    providerId: '8f3df557-2d75-42ea-91a2-680845214c8f',
    websiteUrl: 'https://qatarairways.com/privilege-club',
    logoUrl: 'https://www.qatarairways.com/content/dam/corporate/privilege-club/logo/privilege-club-logo.svg',
    category: 'Airlines',
  },
  {
    name: 'Singapore Airlines KrisFlyer',
    providerId: 'a4b5d7bb-1ea8-4417-84e3-75e564714960',
    websiteUrl: 'https://singaporeair.com/krisflyer',
    logoUrl: 'https://www.singaporeair.com/content/dam/singapore-airlines/krisflyer/logo/krisflyer-logo.svg',
    category: 'Airlines',
  },
  {
    name: 'Binance',
    providerId: '37cdbf32-8061-46e7-827a-f3f16e0dfbf9',
    websiteUrl: 'https://binance.com',
    logoUrl: 'https:// Binance.com /static/images/binance-logo.png',
    category: 'Exchange',
  },
  {
    name: 'KuCoin',
    providerId: 'cb324ae8-4ca5-4550-815d-ab853cbca5e1',
    websiteUrl: 'https://kucoin.com/account',
    logoUrl: 'https://assets.staticimg.com/cms/media/1lB3PkckFDyfxz6VudCEACBeRRBi6sQQ7DDjz0yWM.png',
    category: 'Exchange',
  },
  {
    name: 'Ubisoft',
    providerId: 'db3c898d-462d-4084-908e-6883bb8b5f66',
    websiteUrl: 'https://ubisoft.com',
    logoUrl: 'https://logos-world.net/wp-content/uploads/2021/02/Ubisoft-Logo.png',
    category: 'Gaming',
  },
  {
    name: 'EA',
    providerId: '0bebda39-79a8-4e7f-b011-1ec5c8bfc74c',
    websiteUrl: 'https://ea.com',
    logoUrl: 'https://logos-world.net/wp-content/uploads/2020/11/EA-Logo.png',
    category: 'Gaming',
  },
  {
    name: 'British Airways Executive Club',
    providerId: '8ac39bfd-c92b-4592-8d0e-20f4e18458f5',
    websiteUrl: 'https://britishairways.com/executive-club',
    logoUrl: 'https://www.britishairways.com/etc/designs/ba/images/logos/executive-club-logo.svg',
    category: 'Airlines',
  },
  {
    name: 'Turkish Airlines Miles&Smiles',
    providerId: '24ae1601-43fa-435e-a3cc-910cb01e98b0',
    websiteUrl: 'https://turkishairlines.com/miles-smiles',
    logoUrl: 'https://www.turkishairlines.com/content/dam/turkey/ miles-smiles/logo/miles-smiles-logo.svg',
    category: 'Airlines',
  },
  {
    name: 'Etihad Guest',
    providerId: '580f0e11-1ab6-444c-9ee6-cd7a0c0b372a',
    websiteUrl: 'https://etihadguest.com',
    logoUrl: 'https://www.etihadguest.com/content/dam/etihadguest/logo/eg-logo.svg',
    category: 'Airlines',
  },
  {
    name: 'Bitget',
    providerId: 'da3bfac0-e90d-4353-9fee-387693a83109',
    websiteUrl: 'https://bitget.com',
    logoUrl: 'https://assets.bitget.com/static/v2/images/brand/logo-dark.svg',
    category: 'Exchange',
  },
];

// Types
export interface LoyaltyProgram {
  id: string;
  providerId: string;
  name: string;
  description: string;
  logo: string;
  benefits: string[];
  status: 'active' | 'inactive' | 'pending';
  pointsBalance: string;
  lastSync: string;
  tier: string;
  category: string;
}

export interface Providers {
  [key: string]: LoyaltyProgram[];
}

export type CategoryType = keyof typeof providers;
