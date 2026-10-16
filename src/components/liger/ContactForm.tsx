'use client';

import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { CONTACT } from '@/lib/liger-data';

/**
 * Spam-safe enquiry form: composes a prefilled WhatsApp message or email from
 * the visitor's own input. No data leaves the browser, no bot-attractive API.
 * Includes an invisible honeypot field for extra abuse resistance.
 */
export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [error, setError] = useState<string | null>(null);

  const compose = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in your name, email and message so we can reply.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('That email address does not look right. Please check it.');
      return;
    }
    setError(null);
    const text = [
      `Hello Liger Tours Namibia!`,
      ``,
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      subject.trim() ? `Subject: ${subject.trim()}` : '',
      ``,
      message.trim(),
    ]
      .filter(Boolean)
      .join('\n');
    const url = `${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const mailto = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in your name, email and message so we can reply.');
      return;
    }
    setError(null);
    const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject.trim() || 'Tour enquiry from the website'
    )}&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    'w-full rounded-lg border border-input bg-white px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2';

  return (
    <form
      className="bg-white rounded-2xl border border-border p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        compose();
      }}
      noValidate
    >
      <h2 className="font-body text-xl font-bold text-primary mb-1.5">Send Us a Message</h2>
      <p className="text-sm text-muted-foreground font-body mb-6">
        Let us help you plan your perfect Namibian adventure. Submitting opens
        WhatsApp or your email app with your message ready to send.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="cf-name" className="block text-sm font-semibold font-body text-primary mb-1.5">
            Name <span aria-hidden="true" className="text-[var(--color-liger-accent-deep)]">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-sm font-semibold font-body text-primary mb-1.5">
            Email <span aria-hidden="true" className="text-[var(--color-liger-accent-deep)]">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="cf-subject" className="block text-sm font-semibold font-body text-primary mb-1.5">
          Subject
        </label>
        <input
          id="cf-subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={inputClass}
          placeholder="Sossusvlei tour in June, family of four..."
        />
      </div>

      <div className="mb-2">
        <label htmlFor="cf-message" className="block text-sm font-semibold font-body text-primary mb-1.5">
          Comment or Message <span aria-hidden="true" className="text-[var(--color-liger-accent-deep)]">*</span>
        </label>
        <textarea
          id="cf-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-y`}
          placeholder="Tell us about the trip you have in mind: dates, group size, places you dream of..."
        />
      </div>

      {/* Honeypot: hidden from humans, bots tend to fill it */}
      <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden="true">
        <label htmlFor="cf-website">Do not fill this field</label>
        <input
          id="cf-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {error ? (
        <p role="alert" className="text-sm text-destructive font-body mb-4">
          {error}
        </p>
      ) : null}
      {honeypot ? (
        <p role="status" className="text-sm text-muted-foreground font-body mb-4">
          Thank you. Your message has been noted.
        </p>
      ) : null}

      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-[var(--color-liger-accent)] hover:bg-[var(--color-liger-accent-hover)] text-[#262115] font-body font-semibold rounded-lg px-6 py-3.5 transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
          Send via WhatsApp
        </button>
        <button
          type="button"
          onClick={mailto}
          className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-[var(--color-liger-primary-hover)] text-primary-foreground font-body font-semibold rounded-lg px-6 py-3.5 transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          <Send className="w-5 h-5" aria-hidden="true" />
          Send via Email
        </button>
      </div>
      <p className="text-xs text-muted-foreground/70 font-body mt-4">
        Or reach us directly at {CONTACT.phoneDisplay} between 7:30 AM and 11:00 PM.
      </p>
    </form>
  );
}
