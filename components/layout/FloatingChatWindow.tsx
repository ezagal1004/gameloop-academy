'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    contact: '',
    message: '',
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Basic validation
    if (!formData.parentName.trim() || !formData.childName.trim() || !formData.contact.trim()) {
      setError('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xnnebovg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: 'New Quick Contact from Gameloop Academy',
          parentName: formData.parentName,
          childName: formData.childName,
          contact: formData.contact,
          message: formData.message || 'No additional message',
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsOpen(false);
          setIsSuccess(false);
          setFormData({
            parentName: '',
            childName: '',
            contact: '',
            message: '',
          });
        }, 3000);
      } else {
        setError('Oops! Something went wrong. Try again?');
      }
    } catch (err) {
      setError('Oops! Something went wrong. Try again?');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Backdrop with blur */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-[70] group"
          aria-label="Open contact form"
        >
          <div
            className="relative bg-[#FDB927] p-4 rounded-full border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
          >
            <MessageCircle className="w-7 h-7 text-black" strokeWidth={2.5} />
            
            {/* Pulsing dot indicator */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#3B9FD8] border-2 border-black rounded-full animate-pulse"></div>
          </div>
          
          {/* "Quick Contact" tooltip */}
          <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-white border-3 border-black rounded-lg px-4 py-2 shadow-[4px_4px_0_0_#000] whitespace-nowrap">
              <p className="text-black font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-sm">
                Quick Contact
              </p>
            </div>
          </div>
        </button>
      )}

      {/* Contact Form Window */}
      {isOpen && (
        <div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[90vw] max-w-md bg-white border-4 border-black shadow-[12px_12px_0_0_#000] overflow-hidden"
          style={{
            borderRadius: '95% 4% 92% 5%/4% 95% 6% 95%',
          }}
        >
          {/* Header */}
          <div 
            className="bg-[#3B9FD8] border-b-4 border-black p-4 flex items-center justify-between"
            style={{
              borderRadius: '95% 4% 0 0/4% 95% 0 0',
            }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-[#FDB927] p-2 rounded-full border-3 border-black">
                <MessageCircle className="w-5 h-5 text-black" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-white font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-lg leading-none">
                  Get in Touch
                </h3>
                <p className="text-white/80 text-xs font-sans">We'll respond within 24 hours</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-white p-2 rounded-full border-3 border-black hover:scale-110 transition-transform"
              aria-label="Close form"
            >
              <X className="w-5 h-5 text-black" strokeWidth={3} />
            </button>
          </div>

          {/* Form Body */}
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Parent Name */}
                <div>
                  <label htmlFor="parentName" className="block text-sm font-bold text-gray-700 mb-1 font-sans">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-3 border-black rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-[#3B9FD8] text-black placeholder:text-gray-400"
                    placeholder="John Doe"
                  />
                </div>

                {/* Child Name */}
                <div>
                  <label htmlFor="childName" className="block text-sm font-bold text-gray-700 mb-1 font-sans">
                    Child's Name *
                  </label>
                  <input
                    type="text"
                    id="childName"
                    name="childName"
                    required
                    value={formData.childName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-3 border-black rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-[#3B9FD8] text-black placeholder:text-gray-400"
                    placeholder="Jane Doe"
                  />
                </div>

                {/* Contact */}
                <div>
                  <label htmlFor="contact" className="block text-sm font-bold text-gray-700 mb-1 font-sans">
                    Email or Phone *
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    required
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-3 border-black rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-[#3B9FD8] text-black placeholder:text-gray-400"
                    placeholder="john@example.com or (555) 123-4567"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1 font-sans">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border-3 border-black rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-[#3B9FD8] text-black placeholder:text-gray-400 resize-none"
                    placeholder="Questions about classes, availability, etc..."
                  />
                </div>

                {error && (
                  <div className="bg-red-100 border-3 border-red-500 rounded-lg p-3">
                    <p className="text-red-700 font-sans text-sm font-bold">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-[#FDB927] text-black font-bold text-lg rounded-full shadow-[0_4px_0_0_#000] hover:shadow-[0_2px_0_0_#000] active:shadow-[0_1px_0_0_#000] transition-all duration-150 hover:translate-y-1 active:translate-y-2 border-3 border-black uppercase font-[family-name:var(--font-bm-hanna)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5" strokeWidth={2.5} />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-600 text-center font-sans">
                  We'll get back to you as soon as possible!
                </p>
              </form>
            ) : (
              // Success Message
              <div className="text-center py-8">
                <div className="bg-[#FDB927] p-4 rounded-full border-4 border-black w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">✓</span>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-normal leading-tight font-[family-name:var(--font-bm-hanna)] uppercase tracking-tight mb-3 text-[#3B9FD8]"
                  style={{
                    WebkitTextStroke: '2px black',
                    paintOrder: 'stroke fill',
                  }}
                >
                  Message Sent!
                </h3>
                <p className="text-gray-700 font-sans text-base mb-2 leading-relaxed">
                  Thanks, <strong>{formData.parentName}</strong>!
                </p>
                <p className="text-gray-600 font-sans text-sm">
                  We'll reach out to you within 24 hours about {formData.childName}'s classes.
                </p>
                <p className="text-xs text-gray-500 mt-4 font-sans italic">
                  This window will close automatically...
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}