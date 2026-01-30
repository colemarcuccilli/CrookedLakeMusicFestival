'use client';

import { useState } from 'react';
import { Send, Check } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const GOOGLE_SCRIPT_URL = '';
      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, type: 'newsletter', timestamp: new Date().toISOString() }),
        });
      }
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-lake via-lake-dark to-lake-950" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sunset/20 rounded-full blur-3xl" />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal animation="fadeUp">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-white/70 mb-8">Get lineup announcements, event updates, and more delivered to your inbox.</p>
          {status === 'success' ? (
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20">
              <Check size={24} className="text-sunset" />
              <span className="text-white font-semibold">You&apos;re on the list! See you at the sandbar.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/10 transition-all" />
              <button type="submit" disabled={status === 'loading'} className="px-8 py-4 rounded-full bg-white text-lake-950 font-display font-bold hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50">
                {status === 'loading' ? <span className="animate-spin">&#x27F3;</span> : <><span>Subscribe</span><Send size={16} /></>}
              </button>
            </form>
          )}
          {status === 'error' && <p className="text-pink-300 mt-4 text-sm">Something went wrong. Please try again.</p>}
        </ScrollReveal>
      </div>
    </section>
  );
}
