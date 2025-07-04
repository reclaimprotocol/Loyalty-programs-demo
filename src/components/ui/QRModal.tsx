import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { Modal } from './Modal';
import { Camera, LogIn, Clock, X, Shield } from 'lucide-react';

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
  provider: {
    name: string;
    description: string;
    providerId: string;
    logoUrl: string;
  };
  requestUrl: string | null;
}

export const QRModal = ({ isOpen, onClose, provider, requestUrl }: QRModalProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const qrValue = `reclaim-loyalty://${provider.providerId}`;

  const APP_ID = import.meta.env.VITE_RECLAIM_APP_ID;
  const APP_SECRET = import.meta.env.VITE_RECLAIM_APP_SECRET;

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
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

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8">
        {/* Header with Logo */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-white border border-gray-100 p-2 flex items-center justify-center">
              <img src={provider.logoUrl} alt={provider.name} className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Connect {provider.name}</h2>
              <p className="mt-1 text-sm text-gray-500">{provider.description}</p>
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

            {/* Additional Info */}
            <div className="bg-indigo-50 rounded-xl p-4">
              <p className="text-sm text-indigo-700">
                Your data is securely encrypted and we never store your login credentials.
              </p>
            </div>
          </div>

          {/* Right side - QR Code */}
          <div className="flex flex-col items-center justify-center space-y-8">
            {requestUrl ? (
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <QRCode value={requestUrl} size={200} />
                </div>
                <p className="mt-4 text-sm text-gray-500">Scan the QR code to verify your credentials</p>

                {/* Optional: Add a loading indicator for proofs */}
                <div className="mt-6">
                  <div className="animate-pulse flex space-x-2 justify-center">
                    <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
                    <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
                    <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Waiting for proofs...</p>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">Loading QR code...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};
