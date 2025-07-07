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

export const loyaltyPrograms: LoyaltyProgram[] = [
  {
    id: 'airlines',
    name: 'Airlines',
    icon: Plane,
    category: 'Airlines',
    description: 'Connect your frequent flyer accounts and manage air miles',
    path: '/programs/airlines',
    isEnabled: true,
  },
  {
    id: 'hotels',
    name: 'Hotels & Resorts',
    icon: Building2,
    category: 'Hotels',
    description: 'Track hotel loyalty points and elite status benefits',
    path: '/programs/hotels',
    isEnabled: true,
  },
  {
    id: 'travel-programs',
    name: 'Travel Programs',
    icon: Globe,
    category: 'Travel',
    description: 'Manage rewards from online travel agencies and booking platforms',
    path: '/programs/travel-platforms',
    isEnabled: true,
  },
  {
    id: 'car-rentals',
    name: 'Car Rentals',
    icon: Car,
    category: 'CarRentals',
    description: 'Manage car rental rewards and elite status',
    path: '/programs/car-rentals',
    isEnabled: true,
  },
  {
    id: 'credit-cards',
    name: 'Credit Cards',
    icon: CreditCard,
    category: 'Financial',
    description: 'Track credit card rewards, points, and cashback programs',
    path: '/programs/credit-cards',
    isEnabled: false,
  },
  {
    id: 'trains',
    name: 'Train Rewards',
    icon: Train,
    category: 'Travel',
    description: 'Railway loyalty programs and season tickets',
    path: '/programs/trains',
    isEnabled: false,
  },
  {
    id: 'cruises',
    name: 'Cruise Lines',
    icon: Ship,
    category: 'Travel',
    description: 'Cruise line memberships and rewards',
    path: '/programs/cruises',
    isEnabled: false,
  },
  {
    id: 'shopping',
    name: 'Retail & Shopping',
    icon: ShoppingBag,
    category: 'Shopping',
    description: 'Retail store rewards and cashback programs',
    path: '/programs/shopping',
    isEnabled: false,
  },
  {
    id: 'dining',
    name: 'Dining & Restaurants',
    icon: UtensilsCrossed,
    category: 'Food',
    description: 'Restaurant loyalty programs and dining rewards',
    path: '/programs/dining',
    isEnabled: false,
  },
  {
    id: 'club-memberships',
    name: 'Club Memberships',
    icon: Users,
    category: 'Lifestyle',
    description: 'Private club memberships and benefits',
    path: '/programs/club-memberships',
    isEnabled: false,
  },
  {
    id: 'gaming',
    name: 'Gaming',
    icon: Gamepad,
    category: 'Gaming',
    description: 'Manage gaming platform rewards and memberships',
    path: '/programs/gaming',
    isEnabled: true,
  },
  {
    id: 'exchange',
    name: 'Crypto Exchange',
    icon: LineChart,
    category: 'Exchange',
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
  category: string;
  description: string;
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
    category: 'Hotels',
    description: getProviderDescription('Marriott Bonvoy', 0),
  },
  {
    name: 'Hilton Honors',
    providerId: 'b4490d0b-5680-4243-9cd5-7937c7ace58c',
    websiteUrl: 'https://hilton.com/honors',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/hilton.com-04caa689-1a63-4615-8952-5035d8b83133.png',
    category: 'Hotels',
    description: getProviderDescription('Hilton Honors', 1),
  },
  {
    name: 'Delta SkyMiles',
    providerId: '4688ad77-413d-4714-84bd-36dbce9f6d6d',
    websiteUrl: 'https://delta.com/skymiles',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/delta.com-9d14140c-1792-45c8-8bf6-d5b2c3dcc19d.png',
    category: 'Airlines',
    description: getProviderDescription('Delta SkyMiles', 2),
  },
  {
    name: 'IHG One Rewards',
    providerId: 'f752b6a3-fc17-4321-a3e9-f60fafdcd2cf',
    websiteUrl: 'https://ihg.com/onerewards',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/ihg.com-0ba408f1-5425-4dd8-8dad-70ac9666d08f.png',
    category: 'Hotels',
    description: getProviderDescription('IHG One Rewards', 3),
  },
  {
    name: 'American AAdvantage',
    providerId: '62f06d19-2122-4cd0-a268-eda0d965b40d',
    websiteUrl: 'https://aa.com/aadvantage',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/aa.com-742c637a-c884-4f3a-89d2-6e9fa4419433.png',
    category: 'Airlines',
    description: getProviderDescription('American AAdvantage', 4),
  },
  {
    name: 'Wyndham Rewards',
    providerId: 'd74891b8-bcd4-400e-98c5-64eb2b6aaa13',
    websiteUrl: 'https://wyndhamhotels.com/rewards',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/wyndhamhotels.com-d015a666-d3ea-42ff-aeef-d04e23a4d2be.png',
    category: 'Hotels',
    description: getProviderDescription('Wyndham Rewards', 5),
  },
  {
    name: 'United MileagePlus',
    providerId: 'aa22e99d-9c74-4505-97b6-d68ce49b60cd',
    websiteUrl: 'https://united.com/mileageplus',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/united.com-489a8d2d-085c-44af-b73b-4f8862663546.png',
    category: 'Airlines',
    description: getProviderDescription('United MileagePlus', 6),
  },
  {
    name: 'Accor Live Limitless',
    providerId: '4a956ed7-0166-43d9-8fba-8085d4fd5449',
    websiteUrl: 'https://all.accor.com',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/accor.com-f3457baf-2808-44f8-9115-724eaf6eb38a.png',
    category: 'Hotels',
    description: getProviderDescription('Accor Live Limitless', 7),
  },
  {
    name: 'Emirates Skywards',
    providerId: '776524f8-a2db-4db9-96a4-66541a7c5c8b',
    websiteUrl: 'https://emirates.com/skywards',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/emirates.com-c6dd727f-cb27-4933-b018-84f2f0a7d8ce.png',
    category: 'Airlines',
    description: getProviderDescription('Emirates Skywards', 8),
  },
  {
    name: 'Qatar Airways Privilege Club',
    providerId: '8f3df557-2d75-42ea-91a2-680845214c8f',
    websiteUrl: 'https://qatarairways.com/privilege-club',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/qatarairways.com-dc711e1a-03bc-4c20-b80a-ebb5b29b8849.png',
    category: 'Airlines',
    description: getProviderDescription('Qatar Airways Privilege Club', 9),
  },
  {
    name: 'Singapore Airlines KrisFlyer',
    providerId: 'a4b5d7bb-1ea8-4417-84e3-75e564714960',
    websiteUrl: 'https://singaporeair.com/krisflyer',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/singaporeair.com-ec45540f-0eb2-4b09-af07-9fca0f0901a3.png',
    category: 'Airlines',
    description: getProviderDescription('Singapore Airlines KrisFlyer', 10),
  },
  {
    name: 'British Airways Executive Club',
    providerId: '8ac39bfd-c92b-4592-8d0e-20f4e18458f5',
    websiteUrl: 'https://britishairways.com/executive-club',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/britishairways.com-3a58cdb6-dcdb-4f0d-9ac9-108a4b1773d7.png',
    category: 'Airlines',
    description: getProviderDescription('British Airways Executive Club', 11),
  },
  {
    name: 'Turkish Airlines Miles&Smiles',
    providerId: '24ae1601-43fa-435e-a3cc-910cb01e98b0',
    websiteUrl: 'https://turkishairlines.com/miles-smiles',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/turkishairlines.com-136a29eb-4cf6-4dff-8e0a-ea63a0470f00.png',
    category: 'Airlines',
    description: getProviderDescription('Turkish Airlines Miles&Smiles', 12),
  },
  {
    name: 'Etihad Guest',
    providerId: '580f0e11-1ab6-444c-9ee6-cd7a0c0b372a',
    websiteUrl: 'https://etihadguest.com',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/etihad.com-af282b1d-38ac-497d-9507-ed10aa26f4c8.png',
    category: 'Airlines',
    description: getProviderDescription('Etihad Guest', 13),
  },
  {
    name: 'Ubisoft',
    providerId: 'db3c898d-462d-4084-908e-6883bb8b5f66',
    websiteUrl: 'https://ubisoft.com',
    logoUrl: 'https://logos-world.net/wp-content/uploads/2021/02/Ubisoft-Logo.png',
    category: 'Gaming',
    description: getProviderDescription('Ubisoft', 14),
  },
  {
    name: 'EA',
    providerId: '0bebda39-79a8-4e7f-b011-1ec5c8bfc74c',
    websiteUrl: 'https://ea.com',
    logoUrl: 'https://logos-world.net/wp-content/uploads/2020/11/EA-Logo.png',
    category: 'Gaming',
    description: getProviderDescription('EA', 15),
  },
  {
    name: 'Binance',
    providerId: '37cdbf32-8061-46e7-827a-f3f16e0dfbf9',
    websiteUrl: 'https://binance.com',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/binance.com-logo.png',
    category: 'Exchange',
    description: getProviderDescription('Binance', 16),
  },
  {
    name: 'KuCoin',
    providerId: 'cb324ae8-4ca5-4550-815d-ab853cbca5e1',
    websiteUrl: 'https://kucoin.com/account',
    logoUrl: 'https://assets.staticimg.com/cms/media/1lB3PkckFDyfxz6VudCEACBeRRBi6sQQ7DDjz0yWM.png',
    category: 'Exchange',
    description: getProviderDescription('KuCoin', 17),
  },
  {
    name: 'Bitget',
    providerId: 'da3bfac0-e90d-4353-9fee-387693a83109',
    websiteUrl: 'https://bitget.com',
    logoUrl: 'https://assets.bitget.com/static/v2/images/brand/logo-dark.svg',
    category: 'Exchange',
    description: getProviderDescription('Bitget', 18),
  },
  {
    name: 'Lufthansa Miles & More',
    providerId: '7d509268-cb4a-558c-c22f-2365d1e87b7b',
    websiteUrl: 'https://miles-and-more.com',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/lufthansa.com-logo.png',
    category: 'Airlines',
    description: getProviderDescription('Lufthansa Miles & More', 19),
  },
  {
    name: 'Air Asia BIG Loyalty',
    providerId: 'e3f78e95-d1cd-4131-838a-f8844da85e32',
    websiteUrl: 'https://airasia.com/rewards',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/airasia.com-logo.png',
    category: 'Airlines',
    description: getProviderDescription('Air Asia BIG Loyalty', 20),
  },
  {
    name: 'EasyJet Flight Club',
    providerId: 'ae372da6-b5c0-4ea1-9326-35afbdbdf0fa',
    websiteUrl: 'https://easyjet.com/flight-club',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/easyjet.com-logo.png',
    category: 'Airlines',
    description: getProviderDescription('EasyJet Flight Club', 21),
  },
  {
    name: 'Cathay Pacific Asia Miles',
    providerId: '8262f10f-4988-42ef-9ab8-33bc734732e9',
    websiteUrl: 'https://cathaypacific.com/asiamiles',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/cathaypacific.com-logo.png',
    category: 'Airlines',
    description: getProviderDescription('Cathay Pacific Asia Miles', 22),
  },
  {
    name: 'JetBlue TrueBlue',
    providerId: 'd5724415-c5f4-42f7-bc3c-9808527387f4',
    websiteUrl: 'https://jetblue.com/trueblue',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/jetblue.com-logo.png',
    category: 'Airlines',
    description: getProviderDescription('JetBlue TrueBlue', 23),
  },
  {
    name: 'Korean Air SKYPASS',
    providerId: '9db43368-548d-4f40-8656-29c3798f45bf',
    websiteUrl: 'https://koreanair.com/skypass',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/koreanair.com-logo.png',
    category: 'Airlines',
    description: getProviderDescription('Korean Air SKYPASS', 24),
  },
  {
    name: 'SAS EuroBonus',
    providerId: '997944df-4a6e-4178-ad89-05dd98e14e30',
    websiteUrl: 'https://sas.se/eurobonus',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/sas.se-logo.png',
    category: 'Airlines',
    description: getProviderDescription('SAS EuroBonus', 25),
  },
  {
    name: 'Finnair Plus',
    providerId: '7c3282f4-7c3b-4714-aaa7-75e58cada6bb',
    websiteUrl: 'https://finnair.com/plus',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/finnair.com-logo.png',
    category: 'Airlines',
    description: getProviderDescription('Finnair Plus', 26),
  },
  {
    name: 'Thai Airways Royal Orchid Plus',
    providerId: '78440b6e-f55e-430d-947e-b52f105456b0',
    websiteUrl: 'https://thaiairways.com/rop',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/thaiairways.com-logo.png',
    category: 'Airlines',
    description: getProviderDescription('Thai Airways Royal Orchid Plus', 27),
  },
  {
    name: 'Ryanair Rewards',
    providerId: 'af8e5472-6f5a-43f8-b4f5-2a198228e98b',
    websiteUrl: 'https://ryanair.com/rewards',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/ryanair.com-logo.png',
    category: 'Airlines',
    description: getProviderDescription('Ryanair Rewards', 28),
  },
  {
    name: 'China Southern Sky Pearl Club',
    providerId: '97be3b62-0f33-4ae0-a2f3-1f8b305a5da1',
    websiteUrl: 'https://global.csair.com/skypearl',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/csair.com-logo.png',
    category: 'Airlines',
    description: getProviderDescription('China Southern Sky Pearl Club', 29),
  },
  {
    name: 'Spirit Free Spirit',
    providerId: '8763f085-ce66-4a20-8dc9-77288ad6d3ba',
    websiteUrl: 'https://spirit.com/free-spirit',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/spirit.com-logo.png',
    category: 'Airlines',
    description: getProviderDescription('Spirit Free Spirit', 30),
  },
  {
    name: 'Frontier Miles',
    providerId: '80235191-50de-4bb2-8e9a-0a2d07b270cc',
    websiteUrl: 'https://flyfrontier.com/frontier-miles',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/flyfrontier.com-logo.png',
    category: 'Airlines',
    description: getProviderDescription('Frontier Miles', 31),
  },
  {
    name: 'Virgin Australia Velocity',
    providerId: '5388f622-c8f3-4fbe-9dc8-b35bf784ab1f',
    websiteUrl: 'https://virginaustralia.com/velocity',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/virginaustralia.com-logo.png',
    category: 'Airlines',
    description: getProviderDescription('Virgin Australia Velocity', 32),
  },
  {
    name: 'Air Canada Aeroplan',
    providerId: '8a571248-4cfe-4866-a1b4-f767bec656d4',
    websiteUrl: 'https://aircanada.com/aeroplan',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/aircanada.com-logo.png',
    category: 'Airlines',
    description: getProviderDescription('Air Canada Aeroplan', 33),
  },
  {
    name: 'Smiles Club',
    providerId: 'e3190eb3-e171-4667-bfa0-cda0b4e98631',
    websiteUrl: 'https://smiles.club',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/smiles.com.br-616de9f0-7f1c-4e2c-8285-83337850f12d.png',
    category: 'Airlines',
    description: getProviderDescription('Smiles Club', 34),
  },
  {
    name: 'Caesars Rewards',
    providerId: 'ca399561-01eb-4229-849c-eba898a60804',
    websiteUrl: 'https://caesars.com/rewards',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/caesars.com-logo.png',
    category: 'Hotels',
    description: getProviderDescription('Caesars Rewards', 35),
  },
  {
    name: 'Wynn Rewards',
    providerId: 'b0eae0df-4541-463b-8f8e-b22bf56151d9',
    websiteUrl: 'https://wynnresorts.com/rewards',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/wynnresorts.com-logo.png',
    category: 'Hotels',
    description: getProviderDescription('Wynn Rewards', 36),
  },
  {
    name: 'Leading Hotels Leaders Club',
    providerId: '78d6683a-8481-406a-a8cd-52b23d8e6115',
    websiteUrl: 'https://lhw.com/leaders-club',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/lhw.com-logo.png',
    category: 'Hotels',
    description: getProviderDescription('Leading Hotels Leaders Club', 37),
  },
  {
    name: 'MGM Rewards',
    providerId: 'ca9ff54b-8ce6-4fca-98ae-7a19316281e5',
    websiteUrl: 'https://mgmresorts.com/rewards',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/mgmresorts.com-logo.png',
    category: 'Hotels',
    description: getProviderDescription('MGM Rewards', 38),
  },
  {
    name: 'Choice Privileges',
    providerId: '25a90a1b-d5a2-458e-8b69-a7a1f54eae52',
    websiteUrl: 'https://choicehotels.com/choice-privileges',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/choicehotels.com-logo.png',
    category: 'Hotels',
    description: getProviderDescription('Choice Privileges', 39),
  },
  {
    name: 'NH Rewards',
    providerId: '1e8fed5b-9380-444c-85dc-d71fad00012c',
    websiteUrl: 'https://nh-hotels.com/rewards',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/nh-hotels.com-logo.png',
    category: 'Hotels',
    description: getProviderDescription('NH Rewards', 40),
  },
  {
    name: 'MeliáRewards',
    providerId: '4c38367d-68c8-413e-a522-77d78eef980f',
    websiteUrl: 'https://melia.com/rewards',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/melia.com-logo.png',
    category: 'Hotels',
    description: getProviderDescription('MeliáRewards', 41),
  },
  {
    name: 'Radisson Rewards',
    providerId: 'e7431d9f-25b0-424e-8896-9519e9e90d57',
    websiteUrl: 'https://radissonhotels.com/rewards',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/radissonhotels.com-logo.png',
    category: 'Hotels',
    description: getProviderDescription('Radisson Rewards', 42),
  },
  {
    name: 'Shangri-La Circle',
    providerId: '3cf8f74e-57b6-43e0-83de-dad0f44d4853',
    websiteUrl: 'https://shangri-la.com/circle',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/shangri-la.com-logo.png',
    category: 'Hotels',
    description: getProviderDescription('Shangri-La Circle', 43),
  },
  {
    name: 'Oberoi ONE',
    providerId: '1da975bb-92a5-49d1-925c-6c561c4287c2',
    websiteUrl: 'https://oberoihotels.com/oberoi-one',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/oberoihotels.com-logo.png',
    category: 'Hotels',
    description: getProviderDescription('Oberoi ONE', 44),
  },
  {
    name: 'Taj Inner Circle',
    providerId: 'ec11a4b2-e415-4696-af09-7cb97c841ccf',
    websiteUrl: 'https://tajhotels.com/inner-circle',
    logoUrl: 'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/tajhotels.com-logo.png',
    category: 'Hotels',
    description: getProviderDescription('Taj Inner Circle', 45),
  },
  {
    name: 'Booking.com',
    providerId: '817025ed-06ba-477b-a6d1-3ad16b2f2982',
    websiteUrl: 'https://booking.com',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/booking.com-114a6807-12cb-4c4b-9dee-ed0e24c4af9f.png',
    category: 'travel-programs',
    description: getProviderDescription('Booking.com', 46),
  },
  {
    name: 'National Car Emerald Club',
    providerId: '707c8a2f-f83c-4c9b-a1fe-1e3c71c3504d',
    websiteUrl: 'https://expedia.com',
    logoUrl:
      'https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/nationalcar.com-e1141219-81f0-481d-94bd-5f5e7fc60c6a.png',
    category: 'car-rentals',
    description: getProviderDescription('National Car Emerald Club', 47),
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
