'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <Send className="w-8 h-8 text-accent" />
        </div>
        <h2 className="font-serif text-3xl text-navy mb-4">Thank You</h2>
        <p className="text-gray-600 font-sans leading-relaxed mb-8">
          We've received your message and will be in touch within one business day.
          We look forward to discussing your leadership requirements.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-accent font-sans font-medium text-sm hover:text-accent/80 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block font-sans font-medium text-navy text-sm mb-2">
            Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 font-sans text-gray-700 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-sans font-medium text-navy text-sm mb-2">
            Email <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 font-sans text-gray-700 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block font-sans font-medium text-navy text-sm mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 font-sans text-gray-700 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
            placeholder="Your company name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-sans font-medium text-navy text-sm mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 font-sans text-gray-700 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block font-sans font-medium text-navy text-sm mb-2">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 font-sans text-gray-700 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors resize-none"
          placeholder="Please describe your leadership requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-navy text-white font-sans font-medium text-base rounded-lg hover:bg-navy-deep transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
