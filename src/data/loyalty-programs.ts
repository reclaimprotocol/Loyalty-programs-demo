import {
  Building2,
  Car,
  CreditCard,
  Gamepad,
  Globe,
  LineChart,
  Plane,
  Ship,
  ShoppingBag,
  Train,
  Users,
  UtensilsCrossed,
} from 'lucide-react';
import React from 'react';

export interface LoyaltyProgram {
  id: string;
  name: string;
  icon: React.ReactNode;
  category: string;
  description: string;
  path: string;
  isEnabled: boolean;
}
export enum LoyaltyProgramCategory {
  Airlines = 'airlines',
  OneWorldAlliance = 'one-world',
  StarAlliance = 'star-alliance',
  SkyTeam = 'skyteam',
  Independent = 'independent',
  Hotels = 'hotels',
  TravelPrograms = 'travel-programs',
  CarRentals = 'car-rentals',
  CreditCards = 'credit-cards',
  Trains = 'trains',
  Cruises = 'cruises',
  Shopping = 'shopping',
  Dining = 'dining',
  ClubMemberships = 'club-memberships',
  Gaming = 'gaming',
  Exchange = 'exchange',
}

export const loyaltyPrograms: LoyaltyProgram[] = [
  {
    id: LoyaltyProgramCategory.Airlines,
    name: 'Airlines',
    icon: Plane,
    category: LoyaltyProgramCategory.Airlines,
    description: 'Connect your frequent flyer accounts and manage air miles',
    path: '/programs/airlines',
    isEnabled: true,
  },
  // {
  //   id: LoyaltyProgramCategory.OneWorldAlliance,
  //   name: 'OneWorld Alliance Airlines',
  //   icon: Globe2,
  //   category: LoyaltyProgramCategory.OneWorldAlliance,
  //   description: 'Connect your frequent flyer accounts and manage air miles',
  //   path: '/programs/one-world',
  //   isEnabled: true,
  // },
  {
    id: LoyaltyProgramCategory.Hotels,
    name: 'Hotels & Resorts',
    icon: Building2,
    category: LoyaltyProgramCategory.Hotels,
    description: 'Track hotel loyalty points and elite status benefits',
    path: '/programs/hotels',
    isEnabled: true,
  },
  {
    id: LoyaltyProgramCategory.Cruises,
    name: 'Cruise Lines',
    icon: Ship,
    category: LoyaltyProgramCategory.Cruises,
    description: 'Cruise line memberships and rewards',
    path: '/programs/cruises',
    isEnabled: true,
  },
  {
    id: LoyaltyProgramCategory.TravelPrograms,
    name: 'Travel Programs',
    icon: Globe,
    category: LoyaltyProgramCategory.TravelPrograms,
    description: 'Manage rewards from online travel agencies and booking platforms',
    path: '/programs/travel-platforms',
    isEnabled: true,
  },
  {
    id: LoyaltyProgramCategory.CarRentals,
    name: 'Car Rentals',
    icon: Car,
    category: LoyaltyProgramCategory.CarRentals,
    description: 'Manage car rental rewards and elite status',
    path: '/programs/car-rentals',
    isEnabled: true,
  },
  {
    id: LoyaltyProgramCategory.CreditCards,
    name: 'Credit Cards',
    icon: CreditCard,
    category: LoyaltyProgramCategory.CreditCards,
    description: 'Track credit card rewards, points, and cashback programs',
    path: '/programs/credit-cards',
    isEnabled: false,
  },
  {
    id: LoyaltyProgramCategory.Trains,
    name: 'Train Rewards',
    icon: Train,
    category: LoyaltyProgramCategory.Trains,
    description: 'Railway loyalty programs and season tickets',
    path: '/programs/trains',
    isEnabled: false,
  },

  {
    id: LoyaltyProgramCategory.Shopping,
    name: 'Retail & Shopping',
    icon: ShoppingBag,
    category: LoyaltyProgramCategory.Shopping,
    description: 'Retail store rewards and cashback programs',
    path: '/programs/shopping',
    isEnabled: false,
  },
  {
    id: LoyaltyProgramCategory.Dining,
    name: 'Dining & Restaurants',
    icon: UtensilsCrossed,
    category: LoyaltyProgramCategory.Dining,
    description: 'Restaurant loyalty programs and dining rewards',
    path: '/programs/dining',
    isEnabled: false,
  },
  {
    id: LoyaltyProgramCategory.ClubMemberships,
    name: 'Club Memberships',
    icon: Users,
    category: LoyaltyProgramCategory.ClubMemberships,
    description: 'Private club memberships and benefits',
    path: '/programs/club-memberships',
    isEnabled: false,
  },
  {
    id: LoyaltyProgramCategory.Gaming,
    name: 'Gaming',
    icon: Gamepad,
    category: LoyaltyProgramCategory.Gaming,
    description: 'Manage gaming platform rewards and memberships',
    path: '/programs/gaming',
    isEnabled: true,
  },
  {
    id: LoyaltyProgramCategory.Exchange,
    name: 'Crypto Exchange',
    icon: LineChart,
    category: LoyaltyProgramCategory.Exchange,
    description: 'Track cryptocurrency exchange accounts and rewards',
    path: '/programs/exchange',
    isEnabled: true,
  },
];

// Updated interface first
export interface Provider {
  name: string;
  providerId: string;
  websiteUrl: string;
  logoUrl: string;
  category: string[];
  description: string;
  isEnabled?: boolean;
}

// Helper function for descriptions
const getProviderDescription = (brandName: string, index: number): string => {
  const descriptions = [
    `Prove your ${brandName} status in seconds. No screenshots. No uploads.`,
    `Elite with ${brandName}? Prove it privately in one click.`,
    `Instantly verify your ${brandName} membership. Fully private, Zero hassle.`,
  ];
  return descriptions[index % descriptions.length];
};

export const providers: Provider[] = [
  {
    name: 'Marriott Bonvoy',
    providerId: 'db48def1-4602-4672-82be-311ea5a779e3',
    websiteUrl: 'https://marriott.com/bonvoy',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/marriott.com-16d814b3-0d37-4b95-9868-3dcc88bd83e5.png',
    category: ['Hotels'],
    description: getProviderDescription('Marriott Bonvoy', 0),
  },
  {
    name: 'Srilankan Airways',
    providerId: 'acf4c7b1-e599-43bf-b177-d2ab3a931bed',
    websiteUrl: 'https://www.srilankan.com',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/srilankan.com-bbe345e8-b94e-4dfe-aa41-9dacaa4ad177.png',
    category: [LoyaltyProgramCategory.OneWorldAlliance, LoyaltyProgramCategory.Airlines],
    description: getProviderDescription('Srilankan Airways', 0),
    isEnabled: true,
  },
  {
    name: 'Caribbean Airlines Caribbean Miles',
    providerId: '7f721509-402c-4a13-b678-a2e88e0bc70f',
    websiteUrl: 'https://www.caribbeanairlines.com',
    logoUrl: 'https://caribbeanairlines.frequentflyer.aero/pub/app/img/bwa/logo.png',
    category: [LoyaltyProgramCategory.OneWorldAlliance, LoyaltyProgramCategory.Airlines],
    description: getProviderDescription('Caribbean Airlines Caribbean Miles', 20),
    isEnabled: true,
  },
  {
    name: 'Japan Airline (JAL) ',
    providerId: '9637a248-a816-4400-ac40-0a91e86fcd55',
    websiteUrl: 'https://www.jal.com/en/home',
    logoUrl: 'https://logos-world.net/wp-content/uploads/2023/01/Japan-Airlines-Logo.png',
    category: [LoyaltyProgramCategory.OneWorldAlliance, LoyaltyProgramCategory.Airlines],
    description: getProviderDescription('Japan Airline (JAL)', 10),
  },

  {
    name: 'Oman Air',
    providerId: 'xxxx5', //needs fixing
    websiteUrl: 'https://www.jal.com/en/home',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/omanair.com-e16b27b6-dc9e-411f-b59c-a9ff6642a0db.png',
    category: [LoyaltyProgramCategory.OneWorldAlliance, LoyaltyProgramCategory.Airlines],
    description: getProviderDescription('Oman Air', 10),
    isEnabled: false,
  },
  {
    name: 'Royal Air Maroc',
    providerId: 'ff77f410-ef24-4065-9689-ea76ad55b59d', //needs fixing - check and confirm
    websiteUrl: 'https://www.jal.com/en/home',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/royalairmaroc.com-b0467f8c-f331-4372-b885-938a67e4b35e.png',
    category: [LoyaltyProgramCategory.OneWorldAlliance, LoyaltyProgramCategory.Airlines],
    description: getProviderDescription('Royal Air Maroc', 10),
    isEnabled: true,
  },

  {
    name: 'Royal Jordanian',
    providerId: 'cdb0c13a-2944-44e3-a629-0de8a6e56d10',
    websiteUrl: 'https://www.royaljordanian.com',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/frequentflyer.aero-4fff1b71-d02f-4eb0-bddc-c07e311e8e0f.png',
    category: [LoyaltyProgramCategory.OneWorldAlliance, LoyaltyProgramCategory.Airlines],
    description: getProviderDescription('Royal Jordanian', 1),
    isEnabled: true,
  },
  {
    name: 'Malaysia Airlines',
    providerId: 'b72af2f6-0a86-4b2f-8d59-6559c4ef2ce9',
    websiteUrl: 'https://www.malaysiaairlines.com',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/malaysiaairlines.com-ecc8f4b9-5c30-45cd-977d-e7c86adcab82.png',
    category: [LoyaltyProgramCategory.OneWorldAlliance, LoyaltyProgramCategory.Airlines],
    description: getProviderDescription('Malaysia Airlines', 1),
    isEnabled: true,
  },
  {
    name: 'MyIberia airline',
    providerId: 'e0d8a501-16b8-4f9a-a599-479206384c37',
    websiteUrl: 'https://www.iberia.com/us/en/login/',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/iberia.com-b55a1b13-8d48-4093-b2ad-99fd51b5457b.png',
    category: [LoyaltyProgramCategory.OneWorldAlliance, LoyaltyProgramCategory.Airlines],
    description: getProviderDescription('MyIberia Airlie', 3),
    isEnabled: true,
  },

  {
    name: 'Qantas Airlines',
    providerId: '69e961c7-7613-4608-b4ad-545b909c98b0',
    websiteUrl: 'https://www.qantas.com/in/en/my-account',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/qantas.com-26a87515-3e3c-49ac-b43a-235d4633c172.png',
    category: [LoyaltyProgramCategory.OneWorldAlliance, LoyaltyProgramCategory.Airlines],
    description: getProviderDescription('Qantas Airlines', 3),
    isEnabled: true,
  },
  {
    name: 'Hilton Honors',
    providerId: 'b4490d0b-5680-4243-9cd5-7937c7ace58c',
    websiteUrl: 'https://hilton.com/honors',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/hilton.com-04caa689-1a63-4615-8952-5035d8b83133.png',
    category: [LoyaltyProgramCategory.Hotels],
    description: getProviderDescription('Hilton Honors', 1),
  },
  {
    name: 'Delta SkyMiles',
    providerId: '4688ad77-413d-4714-84bd-36dbce9f6d6d',
    websiteUrl: 'https://delta.com/skymiles',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/delta.com-9d14140c-1792-45c8-8bf6-d5b2c3dcc19d.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.SkyTeam],
    description: getProviderDescription('Delta SkyMiles', 2),
  },
  {
    name: 'Alaska Airlines - Status Match',
    providerId: '8ebcfe14-df6f-4d45-b7b1-070f8eb6f85a',
    websiteUrl: 'https://www.alaskaair.com/',
    logoUrl: 'https://www.alaskaair.com/v3/assets/blt2cefe12c88e9dd91/bltb0cd5d132b4088d1/logo-AS-tagline.svg',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.OneWorldAlliance],
    description: getProviderDescription('Alaska Airlines', 2),
    isEnabled: true,
  },
  {
    name: 'IHG One Rewards',
    providerId: 'f752b6a3-fc17-4321-a3e9-f60fafdcd2cf',
    websiteUrl: 'https://ihg.com/onerewards',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/ihg.com-0ba408f1-5425-4dd8-8dad-70ac9666d08f.png',
    category: [LoyaltyProgramCategory.Hotels],
    description: getProviderDescription('IHG One Rewards', 3),
  },
  {
    name: 'American Airlines',
    providerId: '62f06d19-2122-4cd0-a268-eda0d965b40d',
    websiteUrl: 'https://aa.com/aadvantage',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/aa.com-742c637a-c884-4f3a-89d2-6e9fa4419433.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.OneWorldAlliance],
    description: getProviderDescription('American Airlines', 4),
    isEnabled: true,
  },
  {
    name: 'LATAM Pass',
    providerId: '1350fd3d-ce38-4b01-9aba-cc615ee9350a',
    websiteUrl: 'https://latam.com/latam-pass',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/latamairlines.com-9263e97d-0b85-4e42-8910-eb475bb3e2c4.png',
    category: [LoyaltyProgramCategory.Airlines],
    description: getProviderDescription('American Airlines', 4),
    isEnabled: true,
  },
  {
    name: 'Wyndham Rewards',
    providerId: 'd74891b8-bcd4-400e-98c5-64eb2b6aaa13',
    websiteUrl: 'https://wyndhamhotels.com/rewards',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/wyndhamhotels.com-d015a666-d3ea-42ff-aeef-d04e23a4d2be.png',
    category: [LoyaltyProgramCategory.Hotels],
    description: getProviderDescription('Wyndham Rewards', 5),
  },
  {
    name: 'United Airlines',
    providerId: 'aa22e99d-9c74-4505-97b6-d68ce49b60cd',
    websiteUrl: 'https://united.com/mileageplus',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/united.com-489a8d2d-085c-44af-b73b-4f8862663546.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('United MileagePlus', 6),
  },
  {
    name: 'Accor Live Limitless',
    providerId: '4a956ed7-0166-43d9-8fba-8085d4fd5449',
    websiteUrl: 'https://all.accor.com',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/accor.com-f3457baf-2808-44f8-9115-724eaf6eb38a.png',
    category: [LoyaltyProgramCategory.Hotels],
    description: getProviderDescription('Accor Live Limitless', 7),
  },
  {
    name: 'Emirates Airline',
    providerId: '776524f8-a2db-4db9-96a4-66541a7c5c8b',
    websiteUrl: 'https://emirates.com/skywards',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/emirates.com-c6dd727f-cb27-4933-b018-84f2f0a7d8ce.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.Independent],
    description: getProviderDescription('Emirates Airline', 8),
  },
  {
    name: 'Qatar Airways Privilege Club',
    providerId: '8f3df557-2d75-42ea-91a2-680845214c8f',
    websiteUrl: 'https://qatarairways.com/privilege-club',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/qatarairways.com-dc711e1a-03bc-4c20-b80a-ebb5b29b8849.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.OneWorldAlliance],
    description: getProviderDescription('Qatar Airways Privilege Club', 9),
    isEnabled: true,
  },
  {
    name: 'Fiji Airways',
    providerId: 'xxxx45', // confirm and add
    websiteUrl: 'https://www.fiji.com/rewards',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/fiji.com-placeholder.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.OneWorldAlliance],
    description: getProviderDescription('Fiji Airways', 9),
    isEnabled: false,
  },
  {
    name: 'Singapore Airlines KrisFlyer',
    providerId: 'a4b5d7bb-1ea8-4417-84e3-75e564714960',
    websiteUrl: 'https://singaporeair.com/krisflyer',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/singaporeair.com-ec45540f-0eb2-4b09-af07-9fca0f0901a3.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('Singapore Airlines KrisFlyer', 10),
  },
  {
    name: 'ANA (All Nippon Airways)',
    providerId: 'xxxx6', // confirm and add
    websiteUrl: 'https://www.ana.co.jp/en/customer/membership/anamiles/',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('Singapore Airlines KrisFlyer', 10),
    isEnabled: false,
  },
  {
    name: 'Swiss International Air Lines',
    providerId: 'xxxx7', // confirm and add
    websiteUrl: 'https://www.swiss.com/en-in/my-swiss/my-swiss-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('Swiss International Air Lines', 10),
    isEnabled: false,
  },
  {
    name: 'Air New Zealand',
    providerId: 'xxxx8', // confirm and add
    websiteUrl: 'https://www.airnewzealand.com/en-in/my-air-new-zealand/my-air-new-zealand-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('Air New Zealand', 10),
    isEnabled: false,
  },
  {
    name: 'EVA Air',
    providerId: 'xxxx9', // confirm and add
    websiteUrl: 'https://www.evaair.com/en-in/my-eva-air/my-eva-air-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('EVA Air', 10),
    isEnabled: false,
  },
  {
    name: 'Air India',
    providerId: 'xxxx12', // confirm and add
    websiteUrl: 'https://www.airindia.in/en/my-air-india/my-air-india-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('Air India', 10),
    isEnabled: false,
  },
  {
    name: 'Air Egypt',
    providerId: 'xxxx13', // confirm and add
    websiteUrl: 'https://www.aireuropa.com/en-in/my-air-europa/my-air-europa-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('Air Egypt', 10),
    isEnabled: false,
  },
  {
    name: 'Ethiopian Airlines',
    providerId: 'xxxx14', // confirm and add
    websiteUrl: 'https://www.ethiopianairlines.com/en/my-ethiopian/my-ethiopian-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('Ethiopian Airlines', 10),
    isEnabled: false,
  },
  {
    name: 'South African Airways',
    providerId: 'xxxx15', // confirm and add
    websiteUrl: 'https://www.flysaa.com/en-in/my-flysaa/my-flysaa-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('South African Airways', 10),
    isEnabled: false,
  },
  {
    name: 'Shenzhen Airlines',
    providerId: 'xxxx16', // confirm and add
    websiteUrl: 'https://www.shenzhenair.com/en-in/my-shenzhen-air/my-shenzhen-air-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('Shenzhen Airlines', 10),
    isEnabled: false,
  },
  {
    name: 'Air China',
    providerId: 'xxxx17', // confirm and add
    websiteUrl: 'https://www.airchina.com/en-in/my-air-china/my-air-china-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('Air China', 10),
    isEnabled: false,
  },
  {
    name: 'Brussels Airlines',
    providerId: 'xxxx20', // confirm and add
    websiteUrl: 'https://www.brusselsairlines.com/en-in/my-brussels-airlines/my-brussels-airlines-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('Brussels Airlines', 10),
    isEnabled: false,
  },
  {
    name: 'Copa Airlines',
    providerId: 'xxxx21', // confirm and add
    websiteUrl: 'https://www.copaair.com/en-in/my-copa-airlines/my-copa-airlines-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('Copa Airlines', 10),
    isEnabled: false,
  },
  {
    name: 'Croatia Airlines',
    providerId: 'xxxx22', // confirm and add
    websiteUrl: 'https://www.croatiaairlines.com/en-in/my-croatia-airlines/my-croatia-airlines-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('Croatia Airlines', 10),
    isEnabled: false,
  },
  {
    name: 'LOT Polish Airlines',
    providerId: 'xxxx23', // confirm and add
    websiteUrl: 'https://www.lot.com/en-in/my-lot/my-lot-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('LOT Polish Airlines', 10),
    isEnabled: false,
  },
  {
    name: 'Tap Air Portugal',
    providerId: 'xxxx24', // confirm and add
    websiteUrl: 'https://www.flytap.com/en-in/my-tap/my-tap-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('Tap Air Portugal', 20),
    isEnabled: false,
  },
  {
    name: 'Avianca Airlines',
    providerId: 'xxxx19', // confirm and add
    websiteUrl: 'https://www.aviana.com/en-in/my-aviana/my-aviana-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('Avianca Airlines', 10),
    isEnabled: false,
  },
  {
    name: 'Asiana Airlines',
    providerId: 'xxxx18', // confirm and add
    websiteUrl: 'https://www.flyasiana.com/en-in/my-flyasiana/my-flyasiana-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('Asiana Airlines', 10),
    isEnabled: false,
  },
  {
    name: 'Aegean Airlines',
    providerId: 'xxxx11', // confirm and add
    websiteUrl: 'https://www.aegeanair.com/en-in/my-aegean/my-aegean-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('EVA Air', 10),
    isEnabled: false,
  },
  {
    name: 'Austrian Airlines Miles & More',
    providerId: 'xxxx10', // confirm and add
    websiteUrl: 'https://www.austrian.com/en/my-austrian/my-austrian-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('Austrian Airlines Miles & More', 10),
    isEnabled: false,
  },
  {
    name: 'British Airways Executive Club',
    providerId: '8ac39bfd-c92b-4592-8d0e-20f4e18458f5',
    websiteUrl: 'https://britishairways.com/executive-club',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/britishairways.com-3a58cdb6-dcdb-4f0d-9ac9-108a4b1773d7.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.OneWorldAlliance],
    description: getProviderDescription('British Airways Executive Club', 11),
    isEnabled: true,
  },
  {
    name: 'Turkish Airlines Miles&Smiles',
    providerId: '24ae1601-43fa-435e-a3cc-910cb01e98b0',
    websiteUrl: 'https://turkishairlines.com/miles-smiles',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/turkishairlines.com-136a29eb-4cf6-4dff-8e0a-ea63a0470f00.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('Turkish Airlines Miles&Smiles', 12),
  },
  {
    name: 'Aerolíneas Argentinas',
    providerId: 'xxxx25', // confirm and add
    websiteUrl: 'https://www.chinaeastern.com/en-in/my-china-eastern/my-china-eastern-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.SkyTeam],
    description: getProviderDescription('China Eastern Sky Pearl Club', 10),
    isEnabled: false,
  },

  {
    name: 'Tarom',
    providerId: 'xxxx33', // confirm and add
    websiteUrl: 'https://www.tarom.ro/en-in/my-tarom/my-tarom-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.SkyTeam],
    description: getProviderDescription('Tarom', 10),
    isEnabled: false,
  },

  {
    name: 'Vietnam Airlines',
    providerId: 'xxxx34', // confirm and add
    websiteUrl: 'https://www.vietnamairlines.com/en-in/my-vietnam-airlines/my-vietnam-airlines-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.SkyTeam],
    description: getProviderDescription('Vietnam Airlines', 10),
    isEnabled: false,
  },

  {
    name: 'Virgin Atlantic',
    providerId: 'xxxx35', // confirm and add
    websiteUrl: 'https://www.virginatlantic.com/en-in/my-virgin-atlantic/my-virgin-atlantic-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.SkyTeam, LoyaltyProgramCategory.Independent],
    description: getProviderDescription('Virgin Atlantic', 10),
    isEnabled: false,
  },

  {
    name: 'Xiamen Airlines',
    providerId: 'xxxx36', // confirm and add
    websiteUrl: 'https://www.xiamenair.com/en-in/my-xiamen-airlines/my-xiamen-airlines-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.SkyTeam],
    description: getProviderDescription('Xiamen Airlines', 10),
    isEnabled: false,
  },
  {
    name: 'Middle East Airlines',
    providerId: 'xxxx31', // confirm and add
    websiteUrl: 'https://www.middleeastairlines.com/en-in/my-middle-east-airlines/my-middle-east-airlines-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.SkyTeam],
    description: getProviderDescription('Middle East Airlines', 30),
    isEnabled: false,
  },
  {
    name: 'Saudi Arabian Airlines',
    providerId: 'xxxx32', // confirm and add
    websiteUrl: 'https://www.saudia.com/en-in/my-saudia/my-saudia-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.SkyTeam],
    description: getProviderDescription('Saudi Arabian Airlines', 30),
    isEnabled: false,
  },
  {
    name: 'Air Europa',
    providerId: 'xxxx26', // confirm and add
    websiteUrl: 'https://www.aireuropa.com/en-in/my-air-europa/my-air-europa-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.SkyTeam],
    description: getProviderDescription('Air Europa', 20),
    isEnabled: false,
  },
  {
    name: 'Garuda Indonesia',
    providerId: 'xxxx28', // confirm and add
    websiteUrl: 'https://www.garuda-indonesia.com/en-in/my-garuda-indonesia/my-garuda-indonesia-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.SkyTeam],
    description: getProviderDescription('Garuda Indonesia', 10),
    isEnabled: false,
  },
  {
    name: 'Kenya Airways',
    providerId: 'xxxx29', // confirm and add
    websiteUrl: 'https://www.kenyaairways.com/en-in/my-kenya-airways/my-kenya-airways-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.SkyTeam],
    description: getProviderDescription('Kenya Airways', 30),
    isEnabled: false,
  },
  {
    name: 'KLM Airlines',
    providerId: 'xxxx30', // confirm and add
    websiteUrl: 'https://www.klm.com/en-in/my-klm/my-klm-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.SkyTeam],
    description: getProviderDescription('KLM Airlines', 20),
    isEnabled: false,
  },
  {
    name: 'China Airlines',
    providerId: 'xxxx27', // confirm and add
    websiteUrl: 'https://www.airchina.com/en-in/my-air-china/my-air-china-miles',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.SkyTeam],
    description: getProviderDescription('Air China', 30),
    isEnabled: false,
  },
  {
    name: 'Etihad Airways',
    providerId: 'xxxx37', // confirm and add
    websiteUrl: 'https://etihadguest.com',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/etihad.com-af282b1d-38ac-497d-9507-ed10aa26f4c8.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.Independent],
    description: getProviderDescription('Etihad Airways', 13),
    isEnabled: false,
  },
  {
    name: 'Ubisoft',
    providerId: 'db3c898d-462d-4084-908e-6883bb8b5f66',
    websiteUrl: 'https://ubisoft.com',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/ubisoft.com-91413074-7193-407d-8288-97022ef4c30f.png',
    category: [LoyaltyProgramCategory.Gaming],
    description: getProviderDescription('Ubisoft', 14),
  },
  {
    name: 'EA',
    providerId: '0bebda39-79a8-4e7f-b011-1ec5c8bfc74c',
    websiteUrl: 'https://ea.com',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/ea.com-4adad181-1dd4-4bf5-89e6-a7452ee95abf.png',
    category: [LoyaltyProgramCategory.Gaming],
    description: getProviderDescription('EA', 15),
  },
  {
    name: 'Binance',
    providerId: '37cdbf32-8061-46e7-827a-f3f16e0dfbf9',
    websiteUrl: 'https://binance.com',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/binance.com-105099e1-13ea-4b9c-a62a-8441f97d2872.png',
    category: [LoyaltyProgramCategory.Exchange],
    description: getProviderDescription('Binance', 16),
  },
  {
    name: 'KuCoin',
    providerId: 'cb324ae8-4ca5-4550-815d-ab853cbca5e1',
    websiteUrl: 'https://kucoin.com/account',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/kucoin.com-7090ed70-0342-4c68-ad7b-dc2d6dfa0b5d.png',
    category: [LoyaltyProgramCategory.Exchange],
    description: getProviderDescription('KuCoin', 17),
  },
  {
    name: 'Bitget',
    providerId: 'da3bfac0-e90d-4353-9fee-387693a83109',
    websiteUrl: 'https://bitget.com',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/bitget.site-b6f7172c-bef9-4a79-b2f1-750773bbc3bd.png',
    category: [LoyaltyProgramCategory.Exchange],
    description: getProviderDescription('Bitget', 18),
  },
  {
    name: 'Lufthansa Miles & More',
    providerId: '7d509268-cb4a-558c-c22f-2365d1e87b7b',
    websiteUrl: 'https://miles-and-more.com',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/lufthansa.com-b6e3d6da-b9b4-4fad-87c0-e53944309e34.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('Lufthansa Miles & More', 19),
  },
  {
    name: 'Air Asia BIG Loyalty',
    providerId: 'e3f78e95-d1cd-4131-838a-f8844da85e32',
    websiteUrl: 'https://airasia.com/rewards',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/airasia.com-4112381e-8428-4de0-8e30-c921c7aa00ae.png',
    category: [LoyaltyProgramCategory.Airlines],
    description: getProviderDescription('Air Asia BIG Loyalty', 20),
  },
  {
    name: 'EasyJet Airways',
    providerId: 'ae372da6-b5c0-4ea1-9326-35afbdbdf0fa',
    websiteUrl: 'https://easyjet.com/flight-club',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/easyjet.com-fcc0a3ab-7c3d-43b0-9920-def9981c4ba7.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.Independent],
    description: getProviderDescription('EasyJet Airways', 21),
  },
  {
    name: 'South West Airlines',
    providerId: 'xxxx39', // confirm and add
    websiteUrl: 'https://www.southwest.com/rewards',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/southwest.com-fcc0a3ab-7c3d-43b0-9920-def9981c4ba7.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.Independent],
    description: getProviderDescription('South West Airlines', 21),
    isEnabled: false,
  },
  {
    name: 'Cathay Pacific Asia Miles',
    providerId: '8262f10f-4988-42ef-9ab8-33bc734732e9',
    websiteUrl: 'https://cathaypacific.com/asiamiles',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/cathaypacific.com-9c8679d9-4209-469e-bb6f-2a06cbebb1c4.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.OneWorldAlliance],
    description: getProviderDescription('Cathay Pacific Asia Miles', 22),
    isEnabled: true,
  },
  {
    name: 'JetBlue Airways',
    providerId: 'xxxx38', // confirm and add
    websiteUrl: 'https://jetblue.com/trueblue',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/jetblue.com-e23afb96-f111-4248-8d1b-0a7c932abb1e.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.Independent],
    description: getProviderDescription('JetBlue Airways', 23),
    isEnabled: false,
  },
  {
    name: 'Korean Air ',
    providerId: '9db43368-548d-4f40-8656-29c3798f45bf',
    websiteUrl: 'https://koreanair.com/skypass',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/koreanair.com-8944ca09-5fcf-4476-82dd-6c5dbad87418.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.SkyTeam],
    description: getProviderDescription('Korean Air', 24),
  },
  {
    name: 'SAS (Scandinavian Airlines)',
    providerId: '997944df-4a6e-4178-ad89-05dd98e14e30',
    websiteUrl: 'https://sas.se/eurobonus',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/flysas.com-6ab05472-f973-4ac2-86d6-bd9ed4ebbd59.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance, LoyaltyProgramCategory.SkyTeam],
    description: getProviderDescription('SAS (Scandinavian Airlines)', 25),
  },
  {
    name: 'Finnair Plus',
    providerId: '7c3282f4-7c3b-4714-aaa7-75e58cada6bb',
    websiteUrl: 'https://finnair.com/plus',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/finnair.com-b5b28b64-5f41-4113-975f-9939841a4776.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.OneWorldAlliance],
    description: getProviderDescription('Finnair Plus', 26),
    isEnabled: true,
  },
  {
    name: 'Thai Airways Royal Orchid Plus',
    providerId: '78440b6e-f55e-430d-947e-b52f105456b0',
    websiteUrl: 'https://thaiairways.com/rop',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/thaiairways.com-e0bfa007-3713-4d50-a6de-c8805a990157.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('Thai Airways Royal Orchid Plus', 27),
  },
  {
    name: 'Ryanair Rewards',
    providerId: 'af8e5472-6f5a-43f8-b4f5-2a198228e98b',
    websiteUrl: 'https://ryanair.com/rewards',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/ryanair.com-9bab3b25-aa0d-498b-90a5-a5b7ac4f7c71.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.Independent],
    description: getProviderDescription('Ryanair Rewards', 28),
  },
  {
    name: 'China Southern Sky Pearl Club',
    providerId: '97be3b62-0f33-4ae0-a2f3-1f8b305a5da1',
    websiteUrl: 'https://global.csair.com/skypearl',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/csair.com-0744a8c3-b451-41a0-a671-830e90161880.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.SkyTeam],
    description: getProviderDescription('China Southern Sky Pearl Club', 29),
  },
  {
    name: 'Spirit Free Spirit',
    providerId: '8763f085-ce66-4a20-8dc9-77288ad6d3ba',
    websiteUrl: 'https://spirit.com/free-spirit',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/spirit.com-f4a284a0-ad4c-40bf-a2c8-9fff4a62741e.png',
    category: [LoyaltyProgramCategory.Airlines],
    description: getProviderDescription('Spirit Free Spirit', 30),
  },
  {
    name: 'Frontier Miles',
    providerId: '80235191-50de-4bb2-8e9a-0a2d07b270cc',
    websiteUrl: 'https://flyfrontier.com/frontier-miles',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/flyfrontier.com-86df9468-9f9b-42ca-9d3c-00ea8fe91d38.png',
    category: [LoyaltyProgramCategory.Airlines],
    description: getProviderDescription('Frontier Miles', 31),
  },
  {
    name: 'Virgin Australia Velocity',
    providerId: '5388f622-c8f3-4fbe-9dc8-b35bf784ab1f',
    websiteUrl: 'https://virginaustralia.com/velocity',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/velocityfrequentflyer.com-0ead976f-4c06-4589-9fab-b914188fe118.png',
    category: [LoyaltyProgramCategory.Airlines],
    description: getProviderDescription('Virgin Australia Velocity', 32),
  },
  {
    name: 'Air Canada Aeroplan',
    providerId: '8a571248-4cfe-4866-a1b4-f767bec656d4',
    websiteUrl: 'https://aircanada.com/aeroplan',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/aircanada.com-c62c6ce4-c619-445f-a002-5a666ed0998c.png',
    category: [LoyaltyProgramCategory.Airlines, LoyaltyProgramCategory.StarAlliance],
    description: getProviderDescription('Air Canada Aeroplan', 33),
  },
  {
    name: 'Smiles Club',
    providerId: 'e3190eb3-e171-4667-bfa0-cda0b4e98631',
    websiteUrl: 'https://smiles.club',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/smiles.com.br-616de9f0-7f1c-4e2c-8285-83337850f12d.png',
    category: [LoyaltyProgramCategory.Airlines],
    description: getProviderDescription('Smiles Club', 34),
  },
  {
    name: 'Caesars Rewards',
    providerId: 'ca399561-01eb-4229-849c-eba898a60804',
    websiteUrl: 'https://caesars.com/rewards',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/caesars.com-d587412e-3736-4d3a-9d69-ebe07b7ccd1e.png',
    category: [LoyaltyProgramCategory.Hotels],
    description: getProviderDescription('Caesars Rewards', 35),
  },
  {
    name: 'Wynn Rewards',
    providerId: 'b0eae0df-4541-463b-8f8e-b22bf56151d9',
    websiteUrl: 'https://wynnresorts.com/rewards',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/wynnresorts.com-3e01f07c-d35c-4061-bdf8-bc9bfb690637.png',
    category: [LoyaltyProgramCategory.Hotels],
    description: getProviderDescription('Wynn Rewards', 36),
  },
  {
    name: 'Leading Hotels Leaders Club',
    providerId: '78d6683a-8481-406a-a8cd-52b23d8e6115',
    websiteUrl: 'https://lhw.com/leaders-club',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/lhw.com-logo.png',
    category: [LoyaltyProgramCategory.Hotels],
    description: getProviderDescription('Leading Hotels Leaders Club', 37),
  },
  {
    name: 'MGM Rewards',
    providerId: 'ca9ff54b-8ce6-4fca-98ae-7a19316281e5',
    websiteUrl: 'https://mgmresorts.com/rewards',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/mgmresorts.com-8fa50cfb-76f6-435f-bcd9-ce810325438b.png',
    category: [LoyaltyProgramCategory.Hotels],
    description: getProviderDescription('MGM Rewards', 38),
  },
  {
    name: 'Choice Privileges',
    providerId: '25a90a1b-d5a2-458e-8b69-a7a1f54eae52',
    websiteUrl: 'https://choicehotels.com/choice-privileges',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/choicehotels.com-9d308be4-82e2-4cf6-80d7-321c5d995d25.png',
    category: [LoyaltyProgramCategory.Hotels],
    description: getProviderDescription('Choice Privileges', 39),
  },
  {
    name: 'NH Rewards',
    providerId: '1e8fed5b-9380-444c-85dc-d71fad00012c',
    websiteUrl: 'https://nh-hotels.com/rewards',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/nh-hotels.com-75171ace-5bcc-4f4b-a9ba-ea8e29cb468a.png',
    category: [LoyaltyProgramCategory.Hotels],
    description: getProviderDescription('NH Rewards', 40),
  },
  {
    name: 'MeliáRewards',
    providerId: '4c38367d-68c8-413e-a522-77d78eef980f',
    websiteUrl: 'https://melia.com/rewards',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/melia.com-4e83de9b-69c4-456f-a82b-7394046c1825.png',
    category: [LoyaltyProgramCategory.Hotels],
    description: getProviderDescription('MeliáRewards', 41),
  },
  {
    name: 'Radisson Rewards',
    providerId: 'e7431d9f-25b0-424e-8896-9519e9e90d57',
    websiteUrl: 'https://radissonhotels.com/rewards',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/radissonhotels.com-24ccccb5-d469-4a0d-a511-ef4133e878fb.png',
    category: [LoyaltyProgramCategory.Hotels],
    description: getProviderDescription('Radisson Rewards', 42),
  },
  {
    name: 'Shangri-La Circle',
    providerId: '3cf8f74e-57b6-43e0-83de-dad0f44d4853',
    websiteUrl: 'https://shangri-la.com/circle',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/shangri-la.com-cbc83d32-9f90-4d13-818d-05d7cfcfea85.png',
    category: [LoyaltyProgramCategory.Hotels],
    description: getProviderDescription('Shangri-La Circle', 43),
  },
  {
    name: 'Oberoi ONE',
    providerId: '1da975bb-92a5-49d1-925c-6c561c4287c2',
    websiteUrl: 'https://oberoihotels.com/oberoi-one',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/oberoihotels.com-bdc7138e-7c31-4be3-8491-d41a934faf86.png',
    category: [LoyaltyProgramCategory.Hotels],
    description: getProviderDescription('Oberoi ONE', 44),
  },
  {
    name: 'Taj Inner Circle',
    providerId: 'ec11a4b2-e415-4696-af09-7cb97c841ccf',
    websiteUrl: 'https://tajhotels.com/inner-circle',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/tajhotels.com-35df1da5-2424-4bdb-9fe4-e2adff225d54.png',
    category: [LoyaltyProgramCategory.Hotels],
    description: getProviderDescription('Taj Inner Circle', 45),
  },
  {
    name: 'Booking.com',
    providerId: '817025ed-06ba-477b-a6d1-3ad16b2f2982',
    websiteUrl: 'https://booking.com',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/booking.com-114a6807-12cb-4c4b-9dee-ed0e24c4af9f.png',
    category: [LoyaltyProgramCategory.TravelPrograms],
    description: getProviderDescription('Booking.com', 46),
  },
  {
    name: 'National Car Emerald Club',
    providerId: '707c8a2f-f83c-4c9b-a1fe-1e3c71c3504d',
    websiteUrl: 'https://expedia.com',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/nationalcar.com-e1141219-81f0-481d-94bd-5f5e7fc60c6a.png',
    category: [LoyaltyProgramCategory.CarRentals],
    description: getProviderDescription('National Car Emerald Club', 47),
  },
  // {
  //   name: 'x',
  //   providerId: '2523321f-f61d-4db3-b4e6-e665af5efdc1',
  //   websiteUrl: 'https://nationalcar.com',
  //   logoUrl:
  //     'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/nationalcar.com-e1141219-81f0-481d-94bd-5f5e7fc60c6a.png',
  //   category: 'car-rentals',
  //   description: getProviderDescription('National Car Emerald Club', 47),
  // },
  // Cruise Lines
  {
    name: 'Carnival Cruise Line',
    providerId: 'f90f8d00-1f2c-424c-9942-c15bd4ce8d07',
    websiteUrl: 'https://www.carnival.com/',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/carnival.com-5211cfd7-5589-41a3-be5a-1eac2133f959.png',
    category: [LoyaltyProgramCategory.Cruises],
    description: getProviderDescription('Carnival Cruise Line', 48),
    isEnabled: true,
  },
  {
    name: 'Azamara Circle',
    providerId: 'b2c3d4e5-f6g7-8901-2345-678901bcdefg',
    websiteUrl: 'https://azamara.com/rewards',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/azamara.com-placeholder.png',
    category: [LoyaltyProgramCategory.Cruises],
    description: getProviderDescription('Azamara Circle', 49),
    isEnabled: false,
  },
  {
    name: "Celebrity Cruises Captain's Club",
    providerId: '2e2b30e3-e866-4d03-968c-2273319d2744',
    websiteUrl: 'https://celebrity.com/captains-club',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/celebritycruises.com-f6a1fb07-7887-49d8-a493-9b825526a617.png',
    category: [LoyaltyProgramCategory.Cruises],
    description: getProviderDescription("Celebrity Cruises Captain's Club", 50),
    isEnabled: true,
  },
  {
    name: 'Disney Castaway Club',
    providerId: 'xxxx42', // confirm and add
    websiteUrl: 'https://disneycruise.disney.com/castaway-club',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/disneycruise.com-placeholder.png',
    category: [LoyaltyProgramCategory.Cruises],
    description: getProviderDescription('Disney Castaway Club', 51),
    isEnabled: false,
  },
  {
    name: 'Holland America Mariner Society',
    providerId: 'ee678d96-1db3-4b98-8f4b-4b858fa10fe5',
    websiteUrl: 'https://www.hollandamerica.com/en',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/hollandamerica.com-7245901a-6580-4204-8657-d32a95590067.png',
    category: [LoyaltyProgramCategory.Cruises],
    description: getProviderDescription('Holland America Mariner Society', 52),
    isEnabled: true,
  },
  {
    name: 'Norwegian Cruise Line ',
    providerId: 'ae73c054-f723-4961-91f0-9d4fab0dfd42',
    websiteUrl: 'https://ncl.com/latitudes',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/ncl.com-53dc0add-651c-4fa4-a621-2196a4276bc6.png',
    category: [LoyaltyProgramCategory.Cruises],
    description: getProviderDescription('Norwegian Cruise Line Latitudes Rewards', 53),
    isEnabled: true,
  },
  {
    name: 'Oceania Cruises Club',
    providerId: '6e10a210-a5a5-47aa-8595-14a952198fc3',
    websiteUrl: 'https://www.oceaniacruises.com',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/oceaniacruises.com-977f84a9-a098-45a1-bfa1-7d0177c18ee4.png',
    category: [LoyaltyProgramCategory.Cruises],
    description: getProviderDescription('Oceania Cruises Club', 54),
    isEnabled: true,
  },
  {
    name: 'P&O Cruises',
    providerId: 'c350f222-b710-48fa-b625-f36e94d09b33',
    websiteUrl: 'https://pocruises.com/peninsular-club',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/pocruises.com-7dde9620-9145-47a0-a7dd-769afb76098c.png',
    category: [LoyaltyProgramCategory.Cruises],
    description: getProviderDescription('P&O Cruises', 55),
    isEnabled: true,
  },
  {
    name: 'Princess Captain’s Circle',
    providerId: '00f3fc16-779e-4c5e-880b-aa7deefdd216',
    websiteUrl: 'https://princess.com/captains-circle',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/princess.com-1603aec6-4c4c-4637-8691-c624eacd95e7.png',
    category: [LoyaltyProgramCategory.Cruises],
    description: getProviderDescription("Princess Captain's Circle", 56),
    isEnabled: true,
  },
  {
    name: 'Royal Carribean Cruises',
    providerId: 'fff0e92c-fe16-45ff-8e11-4a323ce7bbdc',
    websiteUrl: 'https://royalcaribbean.com/crown-anchor',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/royalcaribbean.com-624388ce-02bb-4aa5-91a1-f1c259e01cd8.png',
    category: [LoyaltyProgramCategory.Cruises],
    description: getProviderDescription('Royal Carribean Cruises', 57),
    isEnabled: true,
  },
  {
    name: 'Windstar Yacht Club',
    providerId: 'ec95a267-ccb7-44f5-909f-0e558e9aedb1', // confirm and add
    websiteUrl: 'https://windstarcruises.com/yacht-club',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/windstarcruises.com-placeholder.png',
    category: [LoyaltyProgramCategory.Cruises],
    description: getProviderDescription('Windstar Yacht Club', 58),
    isEnabled: true,
  },
  {
    name: 'MSC Cruises',
    providerId: 'xxxx44', // confirm and add
    websiteUrl: 'https://msccruises.com/rewards',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/msccruises.com-placeholder.png',
    category: [LoyaltyProgramCategory.Cruises],
    description: getProviderDescription('MSC Cruises', 59),
    isEnabled: false,
  },
  {
    name: 'Virgin Voyages Captains',
    providerId: 'a8e3aaa5-8df4-45d2-9356-0ea09589d07f',
    websiteUrl: 'https://virginvoyages.com/sailor-loot',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/virginvoyages.com-d6743130-a2ca-4407-b3b9-bcf1848ddb7f.png',
    category: [LoyaltyProgramCategory.Cruises],
    description: getProviderDescription('Virgin Voyages', 60),
    isEnabled: true,
  },
  {
    name: 'Azamara Circle',
    providerId: 'xxxx40', // confirm and add
    websiteUrl: 'https://azamara.com/rewards',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/azamara.com-placeholder.png',
    category: [LoyaltyProgramCategory.Cruises],
    description: getProviderDescription('Azamara Circle', 60),
    isEnabled: false,
  },
  {
    name: 'Celebrity Cruises Captain’s Club',
    providerId: 'xxxx41', // confirm and add
    websiteUrl: 'https://avis.com/preferred',
    logoUrl: '',
    category: [LoyaltyProgramCategory.Cruises],
    description: getProviderDescription('Avis Preferred', 60),
    isEnabled: false,
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

// Tab Configuration System
export interface CategoryTab {
  id: string;
  label: string;
  filter?: (provider: Provider) => boolean;
}

export interface CategoryTabConfig {
  [category: string]: CategoryTab[];
}

export const categoryTabs: CategoryTabConfig = {
  [LoyaltyProgramCategory.Airlines]: [
    { id: 'all', label: 'All' },
    {
      id: 'one-world',
      label: 'OneWorld Alliance',
      filter: (provider) => provider.category.includes(LoyaltyProgramCategory.OneWorldAlliance),
    },
    {
      id: 'star-alliance',
      label: 'Star Alliance',
      filter: (provider) => provider.category.includes(LoyaltyProgramCategory.StarAlliance),
    },
    {
      id: 'skyteam',
      label: 'SkyTeam',
      filter: (provider) => provider.category.includes(LoyaltyProgramCategory.SkyTeam),
    },
    {
      id: 'independent',
      label: 'Independent',
      filter: (provider) => provider.category.includes(LoyaltyProgramCategory.Independent),
    },
  ],
  [LoyaltyProgramCategory.Hotels]: [{ id: 'all', label: 'All' }],
  [LoyaltyProgramCategory.Cruises]: [{ id: 'all', label: 'All' }],
  [LoyaltyProgramCategory.Exchange]: [
    { id: 'all', label: 'All' },
    {
      id: 'major',
      label: 'Major Exchanges',
      filter: (provider) => ['Binance', 'KuCoin'].includes(provider.name),
    },
  ],
  // Add more categories as needed
};

// Helper function to get tabs for a category
export const getCategoryTabs = (category: string): CategoryTab[] => {
  return categoryTabs[category.toLowerCase()] || [{ id: 'all', label: 'All' }];
};
