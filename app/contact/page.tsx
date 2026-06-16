import { Metadata } from 'next';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Schedule a confidential conversation to discuss your leadership requirements. CXOEnable Advisors responds to all inquiries within one business day.',
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <h1 className="font-serif text-4xl sm:text-5xl text-navy mb-8 leading-tight">
              Contact
            </h1>
            <p className="text-lg text-gray-600 font-sans leading-relaxed">
              Schedule a confidential conversation to discuss your leadership
              requirements. We respond to all inquiries within one business day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <ContactForm />
            </div>

            <div className="lg:pl-8">
              <div className="space-y-8">
                <div>
                  <h3 className="font-sans font-semibold text-navy text-sm uppercase tracking-wider mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <a
                      href="mailto:contact@cxoenable.com"
                      className="flex items-center gap-4 text-gray-600 hover:text-navy transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                        <Mail className="w-5 h-5 text-navy" />
                      </div>
                      <span className="font-sans text-sm">contact@cxoenable.com</span>
                    </a>
                    <a
                      href="tel:+15551234567"
                      className="flex items-center gap-4 text-gray-600 hover:text-navy transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                        <Phone className="w-5 h-5 text-navy" />
                      </div>
                      <span className="font-sans text-sm">+1 (555) 123-4567</span>
                    </a>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-navy" />
                      </div>
                      <span className="font-sans text-sm">
                        100 Executive Plaza, Suite 500<br />
                        New York, NY 10001
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-navy text-sm uppercase tracking-wider mb-6">
                    Connect
                  </h3>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-gray-600 hover:text-navy transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                      <Linkedin className="w-5 h-5 text-navy" />
                    </div>
                    <span className="font-sans text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <div className="aspect-auto h-64 rounded-lg bg-gray-100 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <MapPin className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
