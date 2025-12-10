'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface SignupModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
    const [formData, setFormData] = useState({
        parentName: '',
        parentEmail: '',
        studentName: '',
        studentAge: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        if (parseInt(formData.studentAge) < 10 || parseInt(formData.studentAge) > 14) {
            setError('Student must be between 10-14 years old for this class.');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('https://formspree.io/f/xnnebovg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSuccess(true);
                setTimeout(() => {
                    onClose();
                    setIsSuccess(false);
                    setFormData({
                        parentName: '',
                        parentEmail: '',
                        studentName: '',
                        studentAge: '',
                    });
                }, 5000);
            } else {
                setError('Something went wrong. Please try again.');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div
                className="bg-white border-4 border-black rounded-2xl max-w-lg w-full relative shadow-[12px_12px_0_0_#000]"
                style={{
                    borderRadius: '95% 4% 92% 5%/4% 95% 6% 95%',
                }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute -top-3 -right-3 bg-[#FDB927] p-2 rounded-full border-3 border-black hover:scale-110 transition-transform"
                    aria-label="Close modal"
                >
                    <X className="w-6 h-6 text-black" strokeWidth={3} />
                </button>

                <div className="p-6 md:p-8">
                    {!isSuccess ? (
                        <>
                            {/* Header */}
                            <div className="text-center mb-6">
                                <h3
                                    className="text-2xl md:text-3xl font-normal leading-tight font-[family-name:var(--font-bm-hanna)] uppercase tracking-tight mb-2 text-[#3B9FD8]"
                                    style={{
                                        WebkitTextStroke: '2px black',
                                        paintOrder: 'stroke fill',
                                    }}
                                >
                                    Reserve Your Spot!
                                </h3>
                                <p className="text-gray-700 font-sans text-sm md:text-base">
                                    Space Invaders • Saturday, Dec 20th • 10-11 AM
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Class Selection - Read Only */}
                                <div>
                                    <label htmlFor="class" className="block text-sm font-bold text-gray-700 mb-1 font-sans">
                                        Class
                                    </label>
                                    <input
                                        type="text"
                                        id="class"
                                        name="class"
                                        readOnly
                                        value="Space Invaders - Saturday, Dec 20th, 10-11 AM"
                                        className="w-full px-4 py-3 border-3 border-black rounded-lg font-sans bg-[#FDB927] text-black font-bold cursor-not-allowed"
                                    />
                                </div>

                                {/* Hidden field for email subject */}
                                <input type="hidden" name="_subject" value="New Registration: Space Invaders Class - Dec 20th" />

                                <div>
                                    <label htmlFor="parentName" className="block text-sm font-bold text-gray-700 mb-1 font-sans">
                                        Parent Name *
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

                                <div>
                                    <label htmlFor="parentEmail" className="block text-sm font-bold text-gray-700 mb-1 font-sans">
                                        Parent Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="parentEmail"
                                        name="parentEmail"
                                        required
                                        value={formData.parentEmail}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-3 border-black rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-[#3B9FD8] text-black placeholder:text-gray-400"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="studentName" className="block text-sm font-bold text-gray-700 mb-1 font-sans">
                                        Student Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="studentName"
                                        name="studentName"
                                        required
                                        value={formData.studentName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-3 border-black rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-[#3B9FD8] text-black placeholder:text-gray-400"
                                        placeholder="Jane Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="studentAge" className="block text-sm font-bold text-gray-700 mb-1 font-sans">
                                        Student Age * (must be 10-14)
                                    </label>
                                    <input
                                        type="number"
                                        id="studentAge"
                                        name="studentAge"
                                        required
                                        min="10"
                                        max="14"
                                        value={formData.studentAge}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-3 border-black rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-[#3B9FD8] text-black placeholder:text-gray-400"
                                        placeholder="12"
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
                                    className="w-full px-6 py-4 bg-[#3B9FD8] text-white font-bold text-lg rounded-full shadow-[0_4px_0_0_#000] hover:shadow-[0_2px_0_0_#000] active:shadow-[0_1px_0_0_#000] transition-all duration-150 hover:translate-y-1 active:translate-y-2 border-3 border-black uppercase font-[family-name:var(--font-bm-hanna)] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                                </button>

                                <p className="text-xs text-gray-600 text-center font-sans">
                                    You'll receive payment and Google Meet details via email within 24 hours
                                </p>
                            </form>
                        </>
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
                                You're Almost There!
                            </h3>
                            <p className="text-gray-700 font-sans text-base mb-4 leading-relaxed">
                                Thank you for registering <strong>{formData.studentName}</strong> for Space Invaders!
                            </p>
                            <div className="bg-[#FDB927] border-3 border-black rounded-lg p-4 text-left">
                                <p className="text-black font-sans text-sm font-bold mb-2">
                                    📧 Check your email: <span className="font-normal">{formData.parentEmail}</span>
                                </p>
                                <p className="text-black font-sans text-sm">
                                    Within 24 hours you'll receive:
                                </p>
                                <ul className="text-black font-sans text-sm mt-2 space-y-1 list-disc list-inside">
                                    <li>PayPal payment link ($25)</li>
                                    <li>Google Meet link</li>
                                    <li>Pre-class instructions</li>
                                </ul>
                            </div>
                            <p className="text-xs text-gray-600 mt-4 font-sans italic">
                                This window will close automatically...
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}