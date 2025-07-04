import { ReclaimProofRequest } from '@reclaimprotocol/js-sdk';
import { useState } from 'react';

export const useVerification = () => {
  const [requestUrl, setRequestUrl] = useState('');
  const [providerName, setProviderName] = useState('');
  const [providerIcon, setProviderIcon] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [proofs, setProofs] = useState<any[]>([]);
  const [loadingState, setLoadingState] = useState<{
    type: 'none' | 'provider' | 'custom';
    step: 'fetching' | 'generating' | 'none';
  }>({ type: 'none', step: 'none' });

  const generateVerificationRequest = async (providerId: string) => {
    setLoadingState({ type: 'provider', step: 'generating' });
    try {
      const APP_ID = import.meta.env.VITE_RECLAIM_APP_ID || '';
      const APP_SECRET = import.meta.env.VITE_RECLAIM_APP_SECRET || '';

      const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        navigator.userAgent.toLowerCase()
      );
      const isIOS = /mac|iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase());
      const deviceType = isMobile ? (isIOS ? 'ios' : 'android') : 'desktop';

      const reclaimProofRequest = await ReclaimProofRequest.init(APP_ID, APP_SECRET, providerId, {
        device: deviceType,
        useAppClip: deviceType !== 'desktop',
      });

      const url = await reclaimProofRequest.getRequestUrl();
      setRequestUrl(url);
      setLoadingState({ type: 'none', step: 'none' });

      await reclaimProofRequest.startSession({
        onSuccess: (proofs) => {
          handleProofs(proofs);
        },
        onError: (error) => {
          handleError(error);
        },
      });
    } catch (error) {
      handleError(error);
    }
  };

  const handleProofs = (proofs: any) => {
    if (proofs) {
      if (typeof proofs === 'string') {
        setProofs([proofs]);
      } else if (typeof proofs !== 'string') {
        if (Array.isArray(proofs)) {
          setProofs(proofs);
        } else {
          setProofs([proofs]);
        }
      }
    }
    setLoadingState({ type: 'none', step: 'none' });
  };

  const handleError = (error: any) => {
    console.error('Verification failed', error);
    setErrorMessage(error instanceof Error ? error.message.split(': ')[1] : 'An unknown error occurred');
    setLoadingState({ type: 'none', step: 'none' });
  };

  return {
    requestUrl,
    providerName,
    providerIcon,
    errorMessage,
    proofs,
    loadingState,
    generateVerificationRequest,
    setProviderName,
    setProviderIcon,
    setErrorMessage,
    setLoadingState,
  };
};
