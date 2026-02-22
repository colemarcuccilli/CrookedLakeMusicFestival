'use client';

import { useState } from 'react';
import { Mail, MapPin, Facebook, Instagram, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Turnstile from '@/components/ui/Turnstile';
import TikTokIcon from '@/components/icons/TikTokIcon';
import { SITE_CONFIG } from '@/lib/constants';

const subjects = ['General Inquiry', 'Sponsorship', 'Volunteering', 'Press / Media', 'Vendor Application', 'Other'];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!turnstileToken) return;
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    try {
      const GOOGLE_SCRIPT_URL = SITE_CONFIG.googleSheetsUrl;
      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, turnstileToken, type: 'contact', timestamp: new Date().toISOString() }) });
      }
      setSubmitted(true);
    } catch { alert('Something went wrong. Please try again.'); }
    finally { setLoading(false); }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="GET IN TOUCH" subtitle="We'd love to hear from you" />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal animation="slideLeft">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-lake/10 flex items-center justify-center flex-shrink-0"><Mail size={22} className="text-lake" /></div>
                  <div><h3 className="font-display font-bold text-lake-950">Email</h3><a href={`mailto:${SITE_CONFIG.email}`} className="text-lake hover:underline text-sm">{SITE_CONFIG.email}</a></div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-lake/10 flex items-center justify-center flex-shrink-0"><MapPin size={22} className="text-lake" /></div>
                  <div><h3 className="font-display font-bold text-lake-950">Location</h3><p className="text-sand-800/70 text-sm">Crooked Lake Sandbar<br />Angola, Indiana 46703</p></div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-sand-800/50 mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-lake/10 hover:bg-lake hover:text-white flex items-center justify-center transition-all text-lake"><Facebook size={18} /></a>
                  <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-lake/10 hover:bg-lake hover:text-white flex items-center justify-center transition-all text-lake"><Instagram size={18} /></a>
                  <a href={SITE_CONFIG.social.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-lake/10 hover:bg-lake hover:text-white flex items-center justify-center transition-all text-lake"><TikTokIcon size={18} /></a>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-3">
            <ScrollReveal animation="fadeUp">
              {submitted ? (
                <div className="bg-lake-50 rounded-3xl p-12 text-center">
                  <CheckCircle size={48} className="text-lake mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-lake-950 mb-2">Message Sent!</h3>
                  <p className="text-sand-800/70">We&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-soft space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input label="Name" name="name" id="contactName" required placeholder="Your name" />
                    <Input label="Email" name="email" id="contactEmail" type="email" required placeholder="you@example.com" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-sm font-semibold text-lake-950">Subject</label>
                    <select name="subject" id="subject" className="w-full px-4 py-3 rounded-xl border-2 border-lake-100 bg-white text-lake-950 focus:outline-none focus:border-lake focus:ring-2 focus:ring-lake/20 transition-all">
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-sm font-semibold text-lake-950">Message</label>
                    <textarea name="message" id="message" rows={6} required placeholder="How can we help?" className="w-full px-4 py-3 rounded-xl border-2 border-lake-100 bg-white text-lake-950 placeholder:text-sand-800/40 focus:outline-none focus:border-lake focus:ring-2 focus:ring-lake/20 transition-all resize-none" />
                  </div>
                  <Turnstile onVerify={setTurnstileToken} />
                  <Button type="submit" size="lg" className="w-full justify-center" loading={loading} disabled={!turnstileToken}>Send Message</Button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
