export const getProviderDetails = async (providerId: string) => {
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
