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
    logoUrl: '/logos/marriott.svg',
    category: 'Hotels',
  },
  {
    name: 'Hilton Honors',
    providerId: 'b4490d0b-5680-4243-9cd5-7937c7ace58c',
    websiteUrl: 'https://hilton.com/honors',
    logoUrl: '/logos/hilton.svg',
    category: 'Hotels',
  },
  {
    name: 'Delta SkyMiles',
    providerId: '4688ad77-413d-4714-84bd-36dbce9f6d6d',
    websiteUrl: 'https://delta.com/skymiles',
    logoUrl: '/logos/delta.svg',
    category: 'Airlines',
  },
  {
    name: 'IHG One Rewards',
    providerId: 'f752b6a3-fc17-4321-a3e9-f60fafdcd2cf',
    websiteUrl: 'https://ihg.com/onerewards',
    logoUrl: '/logos/ihg.svg',
    category: 'Hotels',
  },
  {
    name: 'American AAdvantage',
    providerId: '62f06d19-2122-4cd0-a268-eda0d965b40d',
    websiteUrl: 'https://aa.com/aadvantage',
    logoUrl: '/logos/american-airlines.svg',
    category: 'Airlines',
  },
  {
    name: 'Wyndham Rewards',
    providerId: 'd74891b8-bcd4-400e-98c5-64eb2b6aaa13',
    websiteUrl: 'https://wyndhamhotels.com/rewards',
    logoUrl: '/logos/wyndham.svg',
    category: 'Hotels',
  },
  {
    name: 'United MileagePlus',
    providerId: 'aa22e99d-9c74-4505-97b6-d68ce49b60cd',
    websiteUrl: 'https://united.com/mileageplus',
    logoUrl: '/logos/united.svg',
    category: 'Airlines',
  },
  {
    name: 'Accor Live Limitless',
    providerId: '4a956ed7-0166-43d9-8fba-8085d4fd5449',
    websiteUrl: 'https://all.accor.com',
    logoUrl: '/logos/accor.svg',
    category: 'Hotels',
  },
  {
    name: 'Choice Privileges',
    providerId: '25a90a1b-d5a2-458e-8b69-a7a1f54eae52',
    websiteUrl: 'https://choicehotels.com/privileges',
    logoUrl: '/logos/choice.svg',
    category: 'Hotels',
  },
  {
    name: 'Caesars Rewards',
    providerId: 'ca399561-01eb-4229-849c-eba898a60804',
    websiteUrl: 'https://caesars.com/rewards',
    logoUrl: '/logos/caesars.svg',
    category: 'Hotels',
  },
  {
    name: 'MGM Rewards',
    providerId: 'ca9ff54b-8ce6-4fca-98ae-7a19316281e5',
    websiteUrl: 'https://mgmresorts.com/rewards',
    logoUrl: '/logos/mgm.svg',
    category: 'Hotels',
  },
  {
    name: 'Lufthansa Miles & More',
    providerId: '7d509268-cb4a-558c-c22f-2365d1e87b7b',
    websiteUrl: 'https://miles-and-more.com',
    logoUrl: '/logos/lufthansa.svg',
    category: 'Airlines',
  },
  {
    name: 'Radisson Rewards',
    providerId: 'e7431d9f-25b0-424e-8896-9519e9e90d57',
    websiteUrl: 'https://radissonhotels.com/rewards',
    logoUrl: '/logos/radisson.svg',
    category: 'Hotels',
  },
  {
    name: 'Emirates Skywards',
    providerId: '776524f8-a2db-4db9-96a4-66541a7c5c8b',
    websiteUrl: 'https://emirates.com/skywards',
    logoUrl: '/logos/emirates.svg',
    category: 'Airlines',
  },
  {
    name: 'China Southern Sky Pearl Club',
    providerId: '97be3b62-0f33-4ae0-a2f3-1f8b305a5da1',
    websiteUrl: 'https://csair.com/en/ffp',
    logoUrl: '/logos/china-southern.svg',
    category: 'Airlines',
  },
  {
    name: 'British Airways Executive Club',
    providerId: '8ac39bfd-c92b-4592-8d0e-20f4e18458f5',
    websiteUrl: 'https://britishairways.com/executive-club',
    logoUrl: '/logos/british-airways.svg',
    category: 'Airlines',
  },
  {
    name: 'Turkish Airlines Miles&Smiles',
    providerId: '24ae1601-43fa-435e-a3cc-910cb01e98b0',
    websiteUrl: 'https://turkishairlines.com/miles-smiles',
    logoUrl: '/logos/turkish-airlines.svg',
    category: 'Airlines',
  },
  {
    name: 'AirAsia BIG Loyalty',
    providerId: 'e3f78e95-d1cd-4131-838a-f8844da85e32',
    websiteUrl: 'https://airasia.com/big',
    logoUrl: '/logos/airasia.svg',
    category: 'Airlines',
  },
  {
    name: 'Ryanair Rewards',
    providerId: 'af8e5472-6f5a-43f8-b4f5-2a198228e98b',
    websiteUrl: 'https://ryanair.com/rewards',
    logoUrl: '/logos/ryanair.svg',
    category: 'Airlines',
  },
  {
    name: 'Qatar Airways Privilege Club',
    providerId: '8f3df557-2d75-42ea-91a2-680845214c8f',
    websiteUrl: 'https://qatarairways.com/privilege-club',
    logoUrl: '/logos/qatar.svg',
    category: 'Airlines',
  },
  {
    name: 'Singapore Airlines KrisFlyer',
    providerId: 'a4b5d7bb-1ea8-4417-84e3-75e564714960',
    websiteUrl: 'https://singaporeair.com/krisflyer',
    logoUrl: '/logos/singapore-airlines.svg',
    category: 'Airlines',
  },
  {
    name: 'EasyJet Flight Club',
    providerId: 'ae372da6-b5c0-4ea1-9326-35afbdbdf0fa',
    websiteUrl: 'https://easyjet.com/en/loyalty',
    logoUrl: '/logos/easyjet.svg',
    category: 'Airlines',
  },
  {
    name: 'Cathay Pacific Asia Miles',
    providerId: '8262f10f-4988-42ef-9ab8-33bc734732e9',
    websiteUrl: 'https://cathaypacific.com/asia-miles',
    logoUrl: '/logos/cathay-pacific.svg',
    category: 'Airlines',
  },
  {
    name: 'JetBlue TrueBlue',
    providerId: 'd5724415-c5f4-42f7-bc3c-9808527387f4',
    websiteUrl: 'https://jetblue.com/trueblue',
    logoUrl: '/logos/jetblue.svg',
    category: 'Airlines',
  },
  {
    name: 'Korean Air SKYPASS',
    providerId: '9db43368-548d-4f40-8656-29c3798f45bf',
    websiteUrl: 'https://koreanair.com/skypass',
    logoUrl: '/logos/korean-air.svg',
    category: 'Airlines',
  },
  {
    name: 'MeliáRewards',
    providerId: '4c38367d-68c8-413e-a522-77d78eef980f',
    websiteUrl: 'https://melia.com/rewards',
    logoUrl: '/logos/melia.svg',
    category: 'Hotels',
  },
  {
    name: 'Thai Airways Royal Orchid Plus',
    providerId: '78440b6e-f55e-430d-947e-b52f105456b0',
    websiteUrl: 'https://thaiairways.com/rop',
    logoUrl: '/logos/thai-airways.svg',
    category: 'Airlines',
  },
  {
    name: 'Virgin Australia Velocity',
    providerId: '5388f622-c8f3-4fbe-9dc8-b35bf784ab1f',
    websiteUrl: 'https://velocityfrequentflyer.com',
    logoUrl: '/logos/virgin-australia.svg',
    category: 'Airlines',
  },
  {
    name: 'Etihad Guest',
    providerId: '580f0e11-1ab6-444c-9ee6-cd7a0c0b372a',
    websiteUrl: 'https://etihadguest.com',
    logoUrl: '/logos/etihad.svg',
    category: 'Airlines',
  },
  {
    name: 'Shangri-La Circle',
    providerId: '3cf8f74e-57b6-43e0-83de-dad0f44d4853',
    websiteUrl: 'https://shangri-la.com/circle',
    logoUrl: '/logos/shangri-la.svg',
    category: 'Hotels',
  },
  {
    name: 'NH Rewards',
    providerId: '1e8fed5b-9380-444c-85dc-d71fad00012c',
    websiteUrl: 'https://nh-hotels.com/rewards',
    logoUrl: '/logos/nh-hotels.svg',
    category: 'Hotels',
  },
  {
    name: 'Air Canada Aeroplan',
    providerId: '8a571248-4cfe-4866-a1b4-f767bec656d4',
    websiteUrl: 'https://aircanada.com/aeroplan',
    logoUrl: '/logos/air-canada.svg',
    category: 'Airlines',
  },
  {
    name: 'Spirit Free Spirit',
    providerId: '8763f085-ce66-4a20-8dc9-77288ad6d3ba',
    websiteUrl: 'https://spirit.com/free-spirit',
    logoUrl: '/logos/spirit.svg',
    category: 'Airlines',
  },
  {
    name: 'Frontier Miles',
    providerId: '80235191-50de-4bb2-8e9a-0a2d07b270cc',
    websiteUrl: 'https://flyfrontier.com/miles',
    logoUrl: '/logos/frontier.svg',
    category: 'Airlines',
  },
  {
    name: 'Taj InnerCircle',
    providerId: 'ec11a4b2-e415-4696-af09-7cb97c841ccf',
    websiteUrl: 'https://tajhotels.com/innercircle',
    logoUrl: '/logos/taj.svg',
    category: 'Hotels',
  },
  {
    name: 'Wynn Rewards',
    providerId: 'b0eae0df-4541-463b-8f8e-b22bf56151d9',
    websiteUrl: 'https://wynnlasvegas.com/rewards',
    logoUrl: '/logos/wynn.svg',
    category: 'Hotels',
  },
  {
    name: 'SAS EuroBonus',
    providerId: '997944df-4a6e-4178-ad89-05dd98e14e30',
    websiteUrl: 'https://flysas.com/en',
    logoUrl: '/logos/sas.svg',
    category: 'Airlines',
  },
  {
    name: 'Finnair Plus',
    providerId: '7c3282f4-7c3b-4714-aaa7-75e58cada6bb',
    websiteUrl: 'https://finnair.com/finnair-plus',
    logoUrl: '/logos/finnair.svg',
    category: 'Airlines',
  },
  {
    name: 'South African Airways Voyager',
    providerId: '260cd2d5-b537-4b5c-b472-d45d8dce571a',
    websiteUrl: 'https://flysaa.com/voyager',
    logoUrl: '/logos/south-african-airways.svg',
    category: 'Airlines',
  },
  {
    name: 'Oberoi ONE',
    providerId: '1da975bb-92a5-49d1-925c-6c561c4287c2',
    websiteUrl: 'https://oberoihotels.com/privilege',
    logoUrl: '/logos/oberoi.svg',
    category: 'Hotels',
  },
  {
    name: 'Binance',
    providerId: '37cdbf32-8061-46e7-827a-f3f16e0dfbf9',
    websiteUrl: 'https://binance.com',
    logoUrl: '/logos/binance.svg',
    category: 'Exchange',
  },
  {
    name: 'KuCoin',
    providerId: 'cb324ae8-4ca5-4550-815d-ab853cbca5e1',
    websiteUrl: 'https://kucoin.com/account',
    logoUrl: '/logos/kucoin.svg',
    category: 'Exchange',
  },
  {
    name: 'Bitget',
    providerId: 'da3bfac0-e90d-4353-9fee-387693a83109',
    websiteUrl: 'https://bitget.com',
    logoUrl: '/logos/bitget.svg',
    category: 'Exchange',
  },
  {
    name: 'Ubisoft',
    providerId: 'db3c898d-462d-4084-908e-6883bb8b5f66',
    websiteUrl: 'https://ubisoft.com',
    logoUrl: '/logos/ubisoft.svg',
    category: 'Gaming',
  },
  {
    name: 'EA',
    providerId: '0bebda39-79a8-4e7f-b011-1ec5c8bfc74c',
    websiteUrl: 'https://ea.com',
    logoUrl: '/logos/ea.svg',
    category: 'Gaming',
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
