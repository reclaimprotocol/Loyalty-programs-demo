import { GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon, SearchIcon, MenuIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { ReclaimProofRequest } from '@reclaimprotocol/js-sdk';
import { Plane, Building2, UtensilsCrossed, ShoppingBag, CreditCard, Gamepad2, Trophy, Wallet } from 'lucide-react';

interface Logo {
  className?: string;
  alt: string;
  src: string;
}

interface LogoScrollerProps {
  companyLogos: Logo[];
}

interface Provider {
  name: string;
  icon: React.ReactNode;
  providerId: string;
  description: string;
  category: string;
}

interface LoyaltyProgram {
  id: string;
  name: string;
  icon: React.ReactNode;
  category: string;
  description: string;
}

interface LoyaltyCard {
  id: string;
  programId: string;
  name: string;
  points: number;
  tier: string;
  lastUsed: string;
  benefits: string[];
  icon: React.ReactNode;
}

// Add new interface for airline apps
interface AirlineApp {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
  category: string;
  providerId: string;
}

const getProviderDetails = async (providerId: string) => {
  try {
    const response = await fetch(`https://api.reclaimprotocol.org/api/providers/${providerId}`, {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-GB,en;q=0.6',
      },
      body: null,
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const name = data.providers.name;
    const logoUrl = data.providers.logoUrl;
    return { name, logoUrl, providerId };
  } catch (error) {
    console.error('Error fetching provider details:', error);
    throw error;
  }
};

const LogoScroller: React.FC<LogoScrollerProps> = ({ companyLogos }) => {
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

      {/* Inline animation style */}
      <style>{`
  @keyframes logoScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
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

// Update the loyaltyPrograms data
const loyaltyPrograms: LoyaltyProgram[] = [
  {
    id: 'airlines',
    name: 'Airlines & Travel',
    icon: <Plane className="w-5 h-5" />,
    category: 'Travel',
    description: 'Connect your frequent flyer accounts',
  },
  {
    id: 'hotels',
    name: 'Hotels & Resorts',
    icon: <Building2 className="w-5 h-5" />,
    category: 'Travel',
    description: 'Hotel rewards and memberships',
  },
  {
    id: 'dining',
    name: 'Dining & Restaurants',
    icon: <UtensilsCrossed className="w-5 h-5" />,
    category: 'Food',
    description: 'Restaurant loyalty programs',
  },
  {
    id: 'retail',
    name: 'Retail & Shopping',
    icon: <ShoppingBag className="w-5 h-5" />,
    category: 'Shopping',
    description: 'Retail store rewards',
  },
  {
    id: 'credit-cards',
    name: 'Credit Card Rewards',
    icon: <CreditCard className="w-5 h-5" />,
    category: 'Finance',
    description: 'Credit card points and rewards',
  },
  {
    id: 'gaming',
    name: 'Gaming Rewards',
    icon: <Gamepad2 className="w-5 h-5" />,
    category: 'Gaming',
    description: 'Gaming platform achievements',
  },
  {
    id: 'sports',
    name: 'Sports & Recreation',
    icon: <Trophy className="w-5 h-5" />,
    category: 'Sports',
    description: 'Sports club memberships',
  },
  {
    id: 'crypto',
    name: 'Crypto Rewards',
    icon: <Wallet className="w-5 h-5" />,
    category: 'Crypto',
    description: 'Cryptocurrency rewards programs',
  },
];

// Mock data for loyalty cards
const loyaltyCards: LoyaltyCard[] = [
  {
    id: '1',
    programId: 'airlines',
    name: 'United MileagePlus',
    points: 50000,
    tier: 'Gold',
    lastUsed: '2024-02-15',
    benefits: ['Priority Boarding', 'Lounge Access', 'Extra Baggage'],
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
      </svg>
    ),
  },
  {
    id: '2',
    programId: 'airlines',
    name: 'Delta SkyMiles',
    points: 75000,
    tier: 'Platinum',
    lastUsed: '2024-03-01',
    benefits: ['First Class Upgrade', 'Companion Pass', 'Priority Check-in'],
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
      </svg>
    ),
  },
  {
    id: '3',
    programId: 'hotels',
    name: 'Marriott Bonvoy',
    points: 100000,
    tier: 'Titanium',
    lastUsed: '2024-02-28',
    benefits: ['Room Upgrades', 'Late Checkout', 'Welcome Gift'],
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19,7H11V14H3V5H1V20H3V17H21V20H23V11C23,8.8 21.2,7 19,7M7,13C8.7,13 10,11.7 10,10C10,8.3 8.7,7 7,7C5.3,7 4,8.3 4,10C4,11.7 5.3,13 7,13Z" />
      </svg>
    ),
  },
  // Add more mock cards as needed
];

// Organize apps by category
const categories = {
  Airlines: [
    {
      id: 'delta-skymiles',
      name: 'Delta SkyMiles',
      description: 'Premium airline rewards program',
      category: 'Airlines',
      providerId: '4688ad77-413d-4714-84bd-36dbce9f6d6d',
      logoUrl: '/logos/delta.svg',
    },
    {
      id: 'american-aadvantage',
      name: 'American AAdvantage',
      description: 'American Airlines loyalty program',
      category: 'Airlines',
      providerId: '62f06d19-2122-4cd0-a268-eda0d965b40d',
      logoUrl: '/logos/american.svg',
    },
    {
      id: 'united-mileageplus',
      name: 'United MileagePlus',
      description: 'United Airlines rewards program',
      category: 'Airlines',
      providerId: 'aa22e99d-9c74-4505-97b6-d68ce49b60cd',
      logoUrl: '/logos/united.svg',
    },
    // Add other airlines...
  ],
  Hotels: [
    {
      id: 'marriott-bonvoy',
      name: 'Marriott Bonvoy',
      description: 'Global hotel rewards program',
      category: 'Hotels',
      providerId: 'db48def1-4602-4672-82be-311ea5a779e3',
      logoUrl: '/logos/marriott.svg',
    },
    {
      id: 'hilton-honors',
      name: 'Hilton Honors',
      description: 'Hilton hotels loyalty program',
      category: 'Hotels',
      providerId: 'b4490d0b-5680-4243-9cd5-7937c7ace58c',
      logoUrl: '/logos/hilton.svg',
    },
    // Add other hotels...
  ],
  Gaming: [
    {
      id: 'ubisoft',
      name: 'Ubisoft Connect',
      description: 'Ubisoft gaming platform',
      category: 'Gaming',
      providerId: 'db3c898d-462d-4084-908e-6883bb8b5f66',
      logoUrl: '/logos/ubisoft.svg',
    },
    // Add other gaming platforms...
  ],
  Exchange: [
    {
      id: 'binance',
      name: 'Binance',
      description: 'Cryptocurrency exchange platform',
      category: 'Exchange',
      providerId: '37cdbf32-8061-46e7-827a-f3f16e0dfbf9',
      logoUrl: '/logos/binance.svg',
    },
    {
      id: 'kucoin',
      name: 'KuCoin',
      description: 'Digital asset exchange',
      category: 'Exchange',
      providerId: 'cb324ae8-4ca5-4550-815d-ab853cbca5e1',
      logoUrl: '/logos/kucoin.svg',
    },
    // Add other exchanges...
  ],
};

export const Desktop = (): JSX.Element => {
  const [selectedSource, setSelectedSource] = useState<string | undefined>(undefined);
  const [customProviderId, setCustomProviderId] = useState('');
  const [requestUrl, setRequestUrl] = useState('');
  const [proofs, setProofs] = useState<any[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [providerName, setProviderName] = useState<string>('');
  const [providerIcon, setProviderIcon] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loadingState, setLoadingState] = useState<{
    type: 'none' | 'provider' | 'custom';
    step: 'fetching' | 'generating' | 'none';
  }>({ type: 'none', step: 'none' });

  // Add new state for search
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Add this to your existing state declarations
  const [desiredProgram, setDesiredProgram] = useState('');

  // Add new state for selected program
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  // Filter cards based on selected program
  const filteredCards = selectedProgram ? loyaltyCards.filter((card) => card.programId === selectedProgram) : [];

  // Check if device is mobile on component mount
  useEffect(() => {
    const checkMobile =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()) ||
      (typeof window.orientation !== 'undefined' ? window.orientation : -1) > -1;
    setIsMobile(checkMobile);
  }, []);

  // Data for the data sources to map over
  const dataSources: Provider[] = [
    {
      name: 'X user profile',
      icon: <TwitterIcon className="w-full h-full text-[#1DA1F2]" />,
      providerId: 'e6fe962d-8b4e-4ce5-abcc-3d21c88bd64a',
      description: 'Verify your X (formerly Twitter) profile details and engagement metrics',
      category: 'Social Media',
    },
    {
      name: 'Coinbase KYC',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="w-full h-full">
          <path
            fill="#0052FF"
            d="M512,0L512,0c282.8,0,512,229.2,512,512l0,0c0,282.8-229.2,512-512,512l0,0C229.2,1024,0,794.8,0,512l0,0  C0,229.2,229.2,0,512,0z"
          />
          <path
            fill="#FFFFFF"
            d="M512.1,692c-99.4,0-180-80.5-180-180s80.6-180,180-180c89.1,0,163.1,65,177.3,150h181.3  c-15.3-184.8-170-330-358.7-330c-198.8,0-360,161.2-360,360s161.2,360,360,360c188.7,0,343.4-145.2,358.7-330H689.3  C675,627,601.2,692,512.1,692z"
          />
        </svg>
      ),
      providerId: '285a345c-c6a6-4b9f-9e1e-23432082c0a8',
      description: 'Verify your Coinbase KYC status and account information',
      category: 'Finance',
    },
    {
      name: 'Github username',
      icon: <GithubIcon className="w-full h-full text-gray-900" />,
      providerId: '6d3f6753-7ee6-49ee-a545-62f1b1822ae5',
      description: 'Verify your Github account and access your profile information',
      category: 'Development',
    },
    {
      name: 'Gmail Account',
      icon: <div className="w-full h-full bg-[url(/group-1.png)] bg-[100%_100%]" />,
      providerId: 'f9f383fd-32d9-4c54-942f-5e9fda349762',
      description: 'Verify your Gmail account and email information',
      category: 'Email',
    },
    {
      name: 'Youtube Creator Analytics',
      icon: <YoutubeIcon className="w-full h-full text-red-600" />,
      providerId: 'f826e0b5-bb4d-4a85-b64c-2cd5c148657e',
      description: 'Access and verify your YouTube creator statistics and analytics',
      category: 'Social Media',
    },
    {
      name: 'Steam Counter Strike Inventory',
      icon: (
        <img
          src="https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/steampowered.com-ba4366e5-2dae-4611-9819-6f12cd452583.png"
          alt="Steam"
          className="w-full h-full object-contain"
        />
      ),
      providerId: '835cfd84-4096-4b3b-a547-4938686e9c5e',
      description: 'Verify your CS:GO inventory items and details',
      category: 'Gaming',
    },
    {
      name: 'LinkedIn user profile',
      icon: <LinkedinIcon className="w-full h-full text-[#0A66C2]" />,
      providerId: 'e3b24f7a-92d1-4b9c-bf4d-7a6f21c3d918',
      description: 'Verify your LinkedIn profile and professional information',
      category: 'Professional',
    },
    {
      name: 'Amazon Last 2 order details',
      icon: <img src="/amazon.ico" alt="Amazon" className="w-full h-full object-contain" />,
      providerId: 'bcaa6b6b-632f-43ec-8de5-c7cc9113aacd',
      description: 'Verify your recent Amazon order history and details',
      category: 'Shopping',
    },
    {
      name: 'Swiggy Order analytics',
      icon: (
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="-7.3 3.6 2520.1 3702.8">
          <path
            d="m1255.2 3706.3c-2.4-1.7-5-4-7.8-6.3-44.6-55.3-320.5-400.9-601.6-844.2-84.4-141.2-139.1-251.4-128.5-279.9 27.5-74.1 517.6-114.7 668.5-47.5 45.9 20.4 44.7 47.3 44.7 63.1 0 67.8-3.3 249.8-3.3 249.8 0 37.6 30.5 68.1 68.2 68 37.7 0 68.1-30.7 68-68.4l-.7-453.3h-.1c0-39.4-43-49.2-51-50.8-78.8-.5-238.7-.9-410.5-.9-379 0-463.8 15.6-528-26.6-139.5-91.2-367.6-706-372.9-1052-7.5-488 281.5-910.5 688.7-1119.8 170-85.6 362-133.9 565-133.9 644.4 0 1175.2 486.4 1245.8 1112.3 0 .5 0 1.2.1 1.7 13 151.3-820.9 183.4-985.8 139.4-25.3-6.7-31.7-32.7-31.7-43.8-.1-115-.9-438.8-.9-438.8-.1-37.7-30.7-68.1-68.4-68.1-37.6 0-68.1 30.7-68.1 68.4l1.5 596.4c1.2 37.6 32.7 47.7 41.4 49.5 93.8 0 313.1-.1 517.4-.1 276.1 0 392.1 32 469.3 90.7 51.3 39.1 71.1 114 53.8 211.4-154.9 866-1135.9 1939.1-1172.8 1983.8z"
            fill="#fc8019"
          />
        </svg>
      ),
      providerId: 'e7da584e-7353-4b88-a51d-3fc8abc332f0',
      description: 'Access and verify your Swiggy order history and analytics',
      category: 'Food Delivery',
    },
    {
      name: 'Zomato Order analytics',
      icon: <img src="/zomato.webp" alt="Zomato" className="w-full h-full object-contain" />,
      providerId: '61fea293-73bc-495c-9354-c2f61294fcaf',
      description: 'Access and verify your Zomato order history and analytics',
      category: 'Food Delivery',
    },
    {
      name: 'Flipkart Order history',
      icon: <img src="/image-5.png" alt="Flipkart" className="w-full h-full object-contain" />,
      providerId: '29495787-4142-47be-a6fc-f3d4530c33da',
      description: 'Verify your Flipkart order history and purchase details',
      category: 'Shopping',
    },
    {
      name: 'Spotify user-artist overview',
      icon: (
        <img
          src="https://devtool-images.s3.ap-south-1.amazonaws.com/http-provider-brand-logos/spotify.com-3d4ce35c-312a-4303-95ed-64387d6c00b3.png"
          alt="Spotify"
          className="w-full h-full object-contain"
        />
      ),
      providerId: 'f395c58c-9b19-4623-8887-c8599c7996cf',
      description: 'Access your Spotify listening history and artist preferences',
      category: 'Entertainment',
    },
    {
      name: 'LinkedIn verifications',
      icon: <LinkedinIcon className="w-full h-full text-[#0A66C2]" />,
      providerId: '2c636fe2-4859-4e1f-8411-9e9d270b4675',
      description: 'Verify your LinkedIn profile certifications and badges',
      category: 'Professional',
    },
    {
      name: 'EPFO Employment History',
      icon: (
        <img
          src="https://devtool-images.s3.ap-south-1.amazonaws.com…a.gov.in-67f7fb10-7db4-4452-a41d-81549a632d19.png"
          alt="epfo"
          className="w-full h-full object-contain"
        />
      ),
      providerId: 'c64918ac-9a21-4b49-9bb0-13ede03da3ca',
      description: 'Access and verify your EPFO employment history and contributions',
      category: 'Employment',
    },
  ];

  // Data for company logos to map over
  const companyLogos = [
    {
      src: '/company-logo-2.svg',
      alt: 'Company logo',
      className: 'relative w-[17px] h-12',
    },
    {
      src: '/company-logo-1.svg',
      alt: 'Company logo',
      className: 'w-[110px] relative h-12',
    },
    {
      src: '/company-logo-3.svg',
      alt: 'Company logo',
      className: 'w-[72px] relative h-12',
    },
    {
      src: '/company-logo.svg',
      alt: 'Company logo',
      className: 'w-[127px] relative h-12',
    },
    { src: '/image-6.png', alt: 'Image', className: 'relative w-[57px] h-14' },
    { src: '/image-5.png', alt: 'Image', className: 'relative w-12 h-[49px]' },
    { src: '/image-4.png', alt: 'Image', className: 'relative w-12 h-12' },
    { src: '/image-3.png', alt: 'Image', className: 'relative w-[47px] h-12' },
    {
      src: '/image-2.png',
      alt: 'Image',
      className: 'relative w-[55px] h-[46px]',
    },
    { src: '/image-7.png', alt: 'Image', className: 'relative w-24 h-[23px]' },
    { src: '/image-8.png', alt: 'Image', className: 'relative w-14 h-[39px]' },
    {
      src: '/image-9.png',
      alt: 'Image',
      className: 'relative w-[51px] h-[50px]',
    },
    { src: '/image-1.png', alt: 'Image', className: 'relative w-[39px] h-14' },
    {
      src: '/image-10.png',
      alt: 'Image',
      className: 'relative w-[90px] h-[35px]',
    },
    {
      src: '/image-11.png',
      alt: 'Image',
      className: 'relative w-[52px] h-[50px]',
    },
  ];

  // Filter data sources based on search
  const filteredDataSources = dataSources.filter((source) =>
    source.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle source selection
  const handleSourceSelect = (value: string) => {
    setSelectedSource(value);
    setCustomProviderId('');
    setProviderName('');
    setProviderIcon('');
    setErrorMessage('');
    setRequestUrl('');
    setLoadingState({ type: 'provider', step: 'generating' });
    setProofs([]);
  };

  // Find the selected data source
  const selectedDataSource = selectedSource
    ? dataSources.find((source) => source.name.toLowerCase().replace(/\s+/g, '-') === selectedSource)
    : undefined;

  // Effect to automatically generate verification request when source changes
  useEffect(() => {
    if (selectedDataSource) {
      getVerificationReq();
    }
  }, [selectedSource]);

  const getVerificationReq = async () => {
    if (!selectedDataSource) return;

    setLoadingState({ type: 'provider', step: 'generating' });
    try {
      // Your credentials from the Reclaim Developer Portal
      // Replace these with your actual credentials
      const APP_ID = import.meta.env.VITE_RECLAIM_APP_ID || '';
      const APP_SECRET = import.meta.env.VITE_RECLAIM_APP_SECRET || '';
      const PROVIDER_ID = selectedDataSource.providerId;
      // Check if device is mobile
      const isMobile =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()) ||
        (typeof window.orientation !== 'undefined' ? window.orientation : -1) > -1;

      // Check if device is iOS
      const isIOS = /mac|iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()) || false;

      // Determine device type
      const deviceType = isMobile ? (isIOS ? 'ios' : 'android') : 'desktop';

      // Initialize the Reclaim SDK with your credentials
      const reclaimProofRequest = await ReclaimProofRequest.init(APP_ID, APP_SECRET, PROVIDER_ID, {
        device: deviceType,
        useAppClip: deviceType !== 'desktop',
      });
      // Generate the verification request URL
      const requestUrl = await reclaimProofRequest.getRequestUrl();
      console.log('Request URL:', requestUrl);
      setRequestUrl(requestUrl);
      setLoadingState({ type: 'none', step: 'none' });

      // Start listening for proof submissions
      await reclaimProofRequest.startSession({
        // Called when the user successfully completes the verification
        onSuccess: (proofs) => {
          if (proofs) {
            if (typeof proofs === 'string') {
              // When using a custom callback url, the proof is returned to the callback url and we get a message instead of a proof
              console.log('SDK Message:', proofs);
              setProofs([proofs]);
            } else if (typeof proofs !== 'string') {
              // When using the default callback url, we get a proof object in the response
              if (Array.isArray(proofs)) {
                // when using provider with multiple proofs, we get an array of proofs
                console.log('Verification success', JSON.stringify(proofs.map((p) => p.claimData.context)));
                setProofs(proofs);
              } else {
                // when using provider with a single proof, we get a single proof object
                console.log('Verification success', proofs?.claimData.context);
                setProofs([proofs]);
              }
            }
          }
          // Add your success logic here, such as:
          // - Updating UI to show verification success
          // - Storing verification status
          // - Redirecting to another page
        },
        // Called if there's an error during verification
        onError: (error) => {
          console.error('Verification failed', error);
          setErrorMessage(error instanceof Error ? error.message.split(': ')[1] : 'An unknown error occurred');
          setLoadingState({ type: 'none', step: 'none' });

          // Add your error handling logic here, such as:
          // - Showing error message to user
          // - Resetting verification state
          // - Offering retry options
        },
      });
    } catch (error) {
      console.error('Error generating verification request:', error);
      setErrorMessage(error instanceof Error ? error.message.split(': ')[1] : 'An unknown error occurred');
      setLoadingState({ type: 'none', step: 'none' });
    }
  };

  const copyProofsToClipboard = () => {
    const proofString = JSON.stringify(proofs, null, 2);
    navigator.clipboard.writeText(proofString);
    alert('Proofs copied to clipboard!');
  };

  const handleOpenLink = () => {
    if (requestUrl) {
      window.open(requestUrl, '_blank');
    }
  };

  // Add new function for handling custom provider verification
  const handleCustomProviderSubmit = async () => {
    if (!customProviderId) return;
    setRequestUrl('');
    setProviderName('');
    setProviderIcon('');
    setErrorMessage('');
    setProofs([]);

    setLoadingState({ type: 'custom', step: 'fetching' });
    setErrorMessage(''); // Clear any previous errors
    try {
      const details = await getProviderDetails(customProviderId);
      setProviderName(details.name);
      setProviderIcon(details.logoUrl);
      console.log(details);

      setLoadingState({ type: 'custom', step: 'generating' });

      // Initialize verification with custom provider
      const APP_ID = import.meta.env.VITE_RECLAIM_APP_ID || '';
      const APP_SECRET = import.meta.env.VITE_RECLAIM_APP_SECRET || '';

      const isMobile =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()) ||
        (typeof window.orientation !== 'undefined' ? window.orientation : -1) > -1;

      const isIOS = /mac|iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()) || false;
      const deviceType = isMobile ? (isIOS ? 'ios' : 'android') : 'desktop';

      const reclaimProofRequest = await ReclaimProofRequest.init(APP_ID, APP_SECRET, customProviderId, {
        device: deviceType,
        useAppClip: deviceType !== 'desktop',
      });

      const requestUrl = await reclaimProofRequest.getRequestUrl();
      console.log('Request URL:', requestUrl);
      setLoadingState({ type: 'none', step: 'none' });
      setRequestUrl(requestUrl);

      await reclaimProofRequest.startSession({
        onSuccess: (proofs) => {
          if (proofs) {
            if (typeof proofs === 'string') {
              console.log('SDK Message:', proofs);
              setProofs([proofs]);
            } else if (typeof proofs !== 'string') {
              if (Array.isArray(proofs)) {
                console.log('Verification success', JSON.stringify(proofs.map((p) => p.claimData.context)));
                setProofs(proofs);
              } else {
                console.log('Verification success', proofs?.claimData.context);
                setProofs([proofs]);
              }
            }
          }
          setLoadingState({ type: 'none', step: 'none' });
        },
        onError: (error) => {
          console.error('Verification failed', error);
          setErrorMessage('Verification failed. Please try again.');
          setLoadingState({ type: 'none', step: 'none' });
        },
      });
    } catch (error) {
      console.error('Error with custom provider:', error);
      setErrorMessage(
        error instanceof Error
          ? error.message.includes('HTTP error! status: 404')
            ? 'Provider not found. Please recheck the provider ID.'
            : error.message.split(': ')[1]
          : 'An unknown error occurred'
      );
      setLoadingState({ type: 'none', step: 'none' });
      // Clear provider details on error
      setProviderName('');
      setProviderIcon('');
    }
  };

  return (
    <div className="flex h-screen bg-[#f6f9fc] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(79,70,229,0.12)_0%,rgba(255,255,255,0)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(35%_35%_at_-10%_-10%,rgba(79,70,229,0.08)_0%,rgba(255,255,255,0)_100%)] pointer-events-none" />

      {/* Modern Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'w-80' : 'w-0'
        } transition-all duration-300 bg-white overflow-hidden flex flex-col h-full border-r border-gray-100 relative z-10`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="px-6 h-[70px] flex items-center border-b border-gray-50">
            <img src="/vector.svg" alt="Reclaim Logo" className="h-[22px]" />
          </div>

          {/* Categories Section */}
          <div className="flex-1 flex flex-col min-h-0">
            {/* Section Header */}
            <div className="px-6 pt-6 pb-4">
              <h2 className="text-sm font-medium text-gray-900">All Categories</h2>
            </div>

            {/* Program Categories */}
            <div className="flex-1 px-3 overflow-y-auto">
              {loyaltyPrograms.map((program) => (
                <button
                  key={program.id}
                  onClick={() => (program.id === 'airlines' ? setSelectedProgram(program.id) : null)}
                  className={`group relative w-full flex items-start px-3 py-2.5 mb-1 rounded-lg transition-all
                    ${selectedProgram === program.id ? 'bg-indigo-600' : 'hover:bg-gray-50'}
                    ${program.id !== 'airlines' ? 'cursor-default' : ''}`}
                >
                  {/* Icon */}
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center mr-3 flex-shrink-0
                    ${
                      selectedProgram === program.id
                        ? 'bg-indigo-500/20 text-white'
                        : 'bg-gray-50 text-gray-500 group-hover:text-gray-600'
                    }`}
                  >
                    {program.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-[13px] font-medium truncate
                        ${selectedProgram === program.id ? 'text-white' : 'text-gray-700'}`}
                      >
                        {program.name}
                      </span>
                      {program.id !== 'airlines' && (
                        <span
                          className={`inline-flex px-1.5 py-0.5 rounded-full text-[11px] font-medium 
                          whitespace-nowrap
                          ${selectedProgram === program.id ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-600'}`}
                        >
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="p-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="text-sm font-medium text-gray-900">Missing a program?</h3>
              <p className="text-xs text-gray-600 mt-1 mb-3">We'll add it within 24 hours!</p>
              <button
                className="w-full px-3 py-2 bg-indigo-600 text-white rounded-lg text-xs font-medium
                  hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 
                  focus:ring-indigo-600/20 focus:ring-offset-2"
              >
                Request Program
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Modern Header */}
        <header className="h-[70px] bg-white border-b border-gray-100 px-6 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-gray-500 
                hover:bg-gray-50 transition-all"
            >
              {isSidebarOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <MenuIcon className="h-5 w-5" strokeWidth={1.5} />
              )}
            </button>

            <div className="flex items-center gap-5">
              <h1 className="text-[15px] font-semibold text-gray-900">Loyalty Programs</h1>
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600">
                  {Object.keys(categories).length} Categories
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600">
                  {Object.values(categories).flat().length} Programs
                </span>
              </div>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <button
              className="inline-flex items-center justify-center h-8 px-3 rounded-lg text-sm 
              text-gray-600 hover:bg-gray-50 transition-all gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Help Center
            </button>
            <div className="h-6 w-px bg-gray-100" />
            <button
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg 
              bg-indigo-600 text-white hover:bg-indigo-700 transition-all"
            >
              <span className="text-sm font-medium">K</span>
            </button>
          </div>
        </header>

        {/* Stripe-style Card Grid */}
        <main className="flex-1 overflow-auto bg-[#f6f9fc]">
          {/* Add Search and Filter Bar */}
          <div className="bg-white border-b border-gray-200 py-4">
            <div className="max-w-[1200px] mx-auto px-8">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                {/* Main Search */}
                <div className="relative flex-1 w-full">
                  <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search by program name, category, or features..."
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm
                      focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600
                      placeholder:text-gray-400"
                  />
                </div>

                {/* Filter Buttons */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {/* Category Filter */}
                  <div className="relative">
                    <button
                      className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium
                      text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-600/20
                      inline-flex items-center gap-2"
                    >
                      <span>Category</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Sort Filter */}
                  <div className="relative">
                    <button
                      className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium
                      text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-600/20
                      inline-flex items-center gap-2"
                    >
                      <span>Sort by</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* View Toggle */}
                  <button
                    className="p-2.5 bg-white border border-gray-200 rounded-lg text-sm
                    text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Active Filters */}
              <div className="flex items-center gap-2 mt-4">
                <span className="text-sm text-gray-500">Active filters:</span>
                <button
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                  bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors gap-1.5"
                >
                  Airlines
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <button
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                  bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors gap-1.5"
                >
                  Most Popular
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="max-w-[1200px] mx-auto p-8">
            {filteredDataSources.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="max-w-md mx-auto">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 mb-4">
                      <SearchIcon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Can't find what you're looking for?</h3>
                    <p className="text-sm text-gray-500 mb-6">
                      Don't worry! Let us know what loyalty program you need, and we'll build it within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        /* Handle request */
                      }}
                      className="inline-flex items-center px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 
                        text-white rounded-lg text-sm font-medium transition-colors duration-200
                        focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:ring-offset-2"
                    >
                      Request New Program
                      <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>

                  {/* Suggested Programs */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-700 mb-4">Popular programs you might like</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <button
                        className="px-4 py-2 rounded-lg text-sm bg-white border border-gray-200 
                        text-gray-600 hover:border-indigo-600/30 hover:text-indigo-600 transition-colors"
                      >
                        Delta SkyMiles
                      </button>
                      <button
                        className="px-4 py-2 rounded-lg text-sm bg-white border border-gray-200 
                        text-gray-600 hover:border-indigo-600/30 hover:text-indigo-600 transition-colors"
                      >
                        Marriott Bonvoy
                      </button>
                      <button
                        className="px-4 py-2 rounded-lg text-sm bg-white border border-gray-200 
                        text-gray-600 hover:border-indigo-600/30 hover:text-indigo-600 transition-colors"
                      >
                        United MileagePlus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Existing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(categories).map(([category, apps]) => (
                    <React.Fragment key={category}>
                      {apps.map((app) => (
                        <div
                          key={app.id}
                          className="group relative bg-white rounded-xl border border-gray-200 hover:border-[#635bff]/30 
                            hover:shadow-lg transition-all duration-200 overflow-hidden"
                        >
                          {/* Gradient Hover Effect */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#635bff]/3 to-transparent" />
                          </div>

                          <div className="relative p-6">
                            {/* Header with Logo and Name */}
                            <div className="flex items-center space-x-4 mb-5">
                              <div
                                className="w-12 h-12 rounded-xl border border-gray-100 overflow-hidden flex-shrink-0
                                bg-white flex items-center justify-center shadow-sm"
                              >
                                <img src={app.logoUrl} alt={`${app.name} logo`} className="w-8 h-8 object-contain" />
                              </div>
                              <div>
                                <h3 className="text-base font-semibold text-gray-900 mb-1">{app.name}</h3>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                                  {app.category}
                                </span>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-600 mb-6 line-clamp-2 leading-relaxed">{app.description}</p>

                            {/* Connect Button */}
                            <button
                              onClick={() => handleSourceSelect(app.providerId)}
                              className="w-full px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white
                                rounded-lg text-sm font-medium transition-colors duration-200
                                focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:ring-offset-2"
                            >
                              Try Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>

                {/* Simple "Can't find?" section at bottom */}
                <div className="mt-16 text-center border-t border-gray-200 pt-16">
                  <div className="max-w-md mx-auto">
                    <h3 className="text-base font-medium text-gray-900 mb-2">Can't find your program?</h3>
                    <p className="text-sm text-gray-500 mb-6">
                      We'll add it within 24 hours, just let us know what you need.
                    </p>
                    <button
                      onClick={() => {
                        /* Handle request */
                      }}
                      className="inline-flex items-center px-4 py-2.5 bg-white border border-gray-200 
                        hover:border-indigo-600/30 text-gray-700 hover:text-indigo-600
                        rounded-lg text-sm font-medium transition-colors duration-200
                        focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:ring-offset-2"
                    >
                      Request New Program
                      <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
