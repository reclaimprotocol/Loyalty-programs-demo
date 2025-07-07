import React, { useState } from 'react';
import { Modal } from './Modal';
import { X, Send, Sparkles } from 'lucide-react';
import { sendSlackMessage } from '../../utils/slack';

interface RequestProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
  category?: string;
}

export const RequestProgramModal = ({ isOpen, onClose, category }: RequestProgramModalProps) => {
  const [formData, setFormData] = useState({
    programName: '',
    providerName: '',
    email: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const message = `✨ *New Program Request*

*Loyalty Program Name:* ${formData.programName}

*Provider:* ${formData.providerName}

*Requester:* ${formData.email}

${
  formData.notes ? `*Additional Notes:* ${formData.notes}\n\n` : ''
}📅 Request received on ${new Date().toLocaleString()}`;

      await sendSlackMessage('C087CGC8A2Y', message);
      setIsSuccess(true);

      // Reset form
      setFormData({
        programName: '',
        providerName: '',
        email: '',
        notes: '',
      });

      // Close modal after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error sending request:', error);
      // You might want to show an error message to the user here
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {isSuccess ? (
        <div className="p-8 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-500 max-w-sm">
            Your program request has been received. We'll review it and get back to you within 24 hours via email.
          </p>
        </div>
      ) : (
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Request New Loyalty Program</h2>
                <p className="mt-1 text-sm text-gray-500">We'll add your requested program within 24 hours</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 transition-colors p-2 hover:bg-gray-50 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="programName" className="block text-sm font-medium text-gray-700 mb-2">
                    Loyalty Program Name *
                  </label>
                  <input
                    type="text"
                    id="programName"
                    name="programName"
                    required
                    placeholder="e.g., United MileagePlus"
                    value={formData.programName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 
                      focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="providerName" className="block text-sm font-medium text-gray-700 mb-2">
                    Provider Name *
                  </label>
                  <input
                    type="text"
                    id="providerName"
                    name="providerName"
                    required
                    placeholder="e.g., United Airlines"
                    value={formData.providerName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 
                      focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 
                      focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={6}
                    placeholder="Any specific requirements or details about the program..."
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 
                      focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors resize-none"
                  />
                </div>

                <div className="bg-indigo-50 rounded-xl p-4">
                  <p className="text-sm text-indigo-700">
                    We'll review your request and add the program within 24 hours. We'll notify you via email once it's
                    ready.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg
                  text-sm font-medium hover:bg-indigo-700 transition-colors focus:outline-none 
                  focus:ring-2 focus:ring-indigo-600/20 focus:ring-offset-2 disabled:opacity-50
                  disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Request
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </Modal>
  );
};
