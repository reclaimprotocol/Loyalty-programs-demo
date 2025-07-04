import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { Modal } from './Modal';
import { Camera, LogIn, Clock, X, Shield, ExternalLink } from 'lucide-react';
import { ReclaimProofRequest } from '@reclaimprotocol/js-sdk';
import { JSONTree } from 'react-json-tree';

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
  provider: {
    name: string;
    description: string;
    providerId: string;
    logo: string;
  };
  requestUrl?: string | null;
}

export const QRModal = ({ isOpen, onClose, provider }: QRModalProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const [requestUrl, setRequestUrl] = useState<string | null>(null);
  const [proofs, setProofs] = useState<any[]>([]);
  const [loadingState, setLoadingState] = useState({ type: 'none', step: 'none' });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const getVerificationReq = async () => {
    if (!provider) return;

    setLoadingState({ type: 'provider', step: 'generating' });
    try {
      // Your credentials from the Reclaim Developer Portal
      // Replace these with your actual credentials

      const APP_ID = import.meta.env.VITE_RECLAIM_APP_ID;
      const APP_SECRET = import.meta.env.VITE_RECLAIM_APP_SECRET;

      const PROVIDER_ID = provider.providerId;
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

  useEffect(() => {
    if (isOpen) {
      getVerificationReq();
    } else {
      // Reset states when modal closes
      setRequestUrl(null);
      setProofs([]);
      setLoadingState({ type: 'none', step: 'none' });
      setErrorMessage(null);
    }
  }, [isOpen]);

  const steps = [
    {
      icon: Camera,
      title: 'Scan QR Code',
      description: "Use your phone's camera to scan the QR code",
    },
    {
      icon: LogIn,
      title: `Login to ${provider.name}`,
      description: 'Sign in to your account using your credentials',
    },
    {
      icon: Shield,
      title: 'Secure Verification',
      description: 'Your data is encrypted and secure',
    },
    {
      icon: Clock,
      title: 'Wait for Verification',
      description: "We'll verify your membership automatically",
    },
  ];

  const isMobileDevice = () => {
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
  };

  const renderContent = () => {
    if (proofs.length > 0) {
      return (
        <div className="flex flex-col items-center w-full">
          <div className="w-full bg-gray-50 rounded-xl p-4 overflow-auto max-h-[400px]">
            <JSONTree
              data={proofs[0]}
              theme={{
                base00: '#ffffff',
                base01: '#2a2a2a',
                base02: '#3a3a3a',
                base03: '#666666',
                base04: '#999999',
                base05: '#333333',
                base06: '#222222',
                base07: '#111111',
                base08: '#e91e63',
                base09: '#f57c00',
                base0A: '#ffc107',
                base0B: '#4caf50',
                base0C: '#00bcd4',
                base0D: '#2196f3',
                base0E: '#9c27b0',
                base0F: '#795548',
              }}
              hideRoot
              shouldExpandNode={() => true}
            />
          </div>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Close
          </button>
        </div>
      );
    }

    if (requestUrl) {
      if (isMobileDevice()) {
        return (
          <div className="flex flex-col items-center text-center">
            <button
              onClick={() => window.open(requestUrl, '_blank')}
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg
                hover:bg-indigo-700 transition-colors text-base font-medium gap-2
                focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:ring-offset-2"
            >
              <ExternalLink className="w-5 h-5" />
              Start Verification
            </button>
            <p className="mt-4 text-sm text-gray-500 max-w-[250px]">
              Click the button above to start the verification process for your {provider.name} account
            </p>
            <div className="mt-6">
              <div className="animate-pulse flex space-x-2 justify-center">
                <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
                <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
                <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Waiting for verification...</p>
            </div>
          </div>
        );
      } else {
        return (
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <QRCode value={requestUrl} size={200} />
            </div>
            <p className="mt-4 text-sm text-gray-500">Scan the QR code to verify your credentials</p>
            <div className="mt-6">
              <div className="animate-pulse flex space-x-2 justify-center">
                <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
                <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
                <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Waiting for proofs...</p>
            </div>
          </div>
        );
      }
    }

    return (
      <div className="text-center py-8">
        <div className="animate-pulse flex space-x-2 justify-center">
          <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
          <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
          <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
        </div>
        <p className="text-gray-500 mt-2">Preparing verification...</p>
      </div>
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8">
        {/* Header with Logo */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-white border border-gray-100 p-2 flex items-center justify-center">
              <img
                src={provider.logo}
                alt={provider.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    provider.name
                  )}&background=6366f1&color=fff`;
                }}
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {proofs.length > 0 ? 'Verification Complete' : `Connect ${provider.name}`}
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                {proofs.length > 0 ? 'Your credentials have been verified' : provider.description}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors p-2 hover:bg-gray-50 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Instructions */}
          {proofs.length === 0 && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-6">Follow these steps:</h3>
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{step.title}</p>
                        <p className="text-sm text-gray-500 mt-1">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Right side - QR Code or Proof */}
          <div
            className={`flex flex-col items-center justify-center space-y-8 ${proofs.length > 0 ? 'col-span-2' : ''}`}
          >
            {renderContent()}
            {errorMessage && <div className="mt-4 text-sm text-red-600 text-center">{errorMessage}</div>}
          </div>
        </div>
      </div>
    </Modal>
  );
};
