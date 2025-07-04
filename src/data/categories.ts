interface App {
  id: string;
  name: string;
  description: string;
  category: string;
  providerId: string;
  logoUrl: string;
}

export const categories: Record<string, App[]> = {
  Airlines: [
    {
      id: 'delta-skymiles',
      name: 'Delta SkyMiles',
      description: 'Premium airline rewards program',
      category: 'Airlines',
      providerId: '4688ad77-413d-4714-84bd-36dbce9f6d6d',
      logoUrl:
        'https://www.tramatm.com/_next/image?url=https%3A%2F%2Ftrama-static.s3.eu-central-1.amazonaws.com%2Fimages%2Fhall-of-fame%2Flogos%2F141-logo.png&w=3840&q=75',
    },
    {
      id: 'american-aadvantage',
      name: 'American AAdvantage',
      description: 'American Airlines loyalty program',
      category: 'Airlines',
      providerId: '62f06d19-2122-4cd0-a268-eda0d965b40d',
      logoUrl:
        'https://substackcdn.com/image/fetch/$s_!_-5C!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F10fda0b8-2f5c-4283-a7a1-71d2a184ab7f_1200x1200.jpeg',
    },
    {
      id: 'united-mileageplus',
      name: 'United MileagePlus',
      description: 'United Airlines rewards program',
      category: 'Airlines',
      providerId: 'aa22e99d-9c74-4505-97b6-d68ce49b60cd',
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ik5UWfwdCGIu58VPaPq42HnxjGY6iN0zzQ&s',
    },
    {
      id: 'delta-skymiles',
      name: 'Delta SkyMiles',
      description: 'Premium airline rewards program',
      category: 'Airlines',
      providerId: '4688ad77-413d-4714-84bd-36dbce9f6d6d',
      logoUrl:
        'https://www.tramatm.com/_next/image?url=https%3A%2F%2Ftrama-static.s3.eu-central-1.amazonaws.com%2Fimages%2Fhall-of-fame%2Flogos%2F141-logo.png&w=3840&q=75',
    },
    {
      id: 'american-aadvantage',
      name: 'American AAdvantage',
      description: 'American Airlines loyalty program',
      category: 'Airlines',
      providerId: '62f06d19-2122-4cd0-a268-eda0d965b40d',
      logoUrl:
        'https://substackcdn.com/image/fetch/$s_!_-5C!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F10fda0b8-2f5c-4283-a7a1-71d2a184ab7f_1200x1200.jpeg',
    },
    {
      id: 'united-mileageplus',
      name: 'United MileagePlus',
      description: 'United Airlines rewards program',
      category: 'Airlines',
      providerId: 'aa22e99d-9c74-4505-97b6-d68ce49b60cd',
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ik5UWfwdCGIu58VPaPq42HnxjGY6iN0zzQ&s',
    },
    {
      id: 'delta-skymiles',
      name: 'Delta SkyMiles',
      description: 'Premium airline rewards program',
      category: 'Airlines',
      providerId: '4688ad77-413d-4714-84bd-36dbce9f6d6d',
      logoUrl:
        'https://www.tramatm.com/_next/image?url=https%3A%2F%2Ftrama-static.s3.eu-central-1.amazonaws.com%2Fimages%2Fhall-of-fame%2Flogos%2F141-logo.png&w=3840&q=75',
    },
    {
      id: 'american-aadvantage',
      name: 'American AAdvantage',
      description: 'American Airlines loyalty program',
      category: 'Airlines',
      providerId: '62f06d19-2122-4cd0-a268-eda0d965b40d',
      logoUrl:
        'https://substackcdn.com/image/fetch/$s_!_-5C!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F10fda0b8-2f5c-4283-a7a1-71d2a184ab7f_1200x1200.jpeg',
    },
    {
      id: 'united-mileageplus',
      name: 'United MileagePlus',
      description: 'United Airlines rewards program',
      category: 'Airlines',
      providerId: 'aa22e99d-9c74-4505-97b6-d68ce49b60cd',
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ik5UWfwdCGIu58VPaPq42HnxjGY6iN0zzQ&s',
    },
  ],
};
