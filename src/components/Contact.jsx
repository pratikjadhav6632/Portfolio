import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ArrowUpRight, ArrowDown, Check, Copy, Send } from 'lucide-react';

const CONTACT_EMAIL = 'pratikjadhav6632@gmail.com';

const INQUIRY_TYPES = ['Freelance Project', 'Collaboration'];

const INITIAL_FORM = {
  inquiryType: 'Full-Time Role',
  name: '',
  email: '',
  company: '',
  phone: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedCompany = formData.company.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus({ type: 'error', text: 'Please fill in your name, email, and message.' });
      return;
    }

    const emailSubject = trimmedSubject
      ? `[${formData.inquiryType}] ${trimmedSubject} — ${trimmedName}`
      : `[${formData.inquiryType}] Portfolio Inquiry from ${trimmedName}`;

    const structuredMessage = [
      `Inquiry Type: ${formData.inquiryType}`,
      `Name: ${trimmedName}`,
      `Email: ${trimmedEmail}`,
      `Company / Organization: ${trimmedCompany || 'Not provided'}`,
      `Phone / WhatsApp: ${trimmedPhone || 'Not provided'}`,
      `Subject: ${trimmedSubject || 'General Portfolio Inquiry'}`,
      '',
      'Message:',
      trimmedMessage,
    ].join('\n');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    setStatus({ type: 'sending', text: 'Sending message...' });

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: trimmedName,
            from_email: trimmedEmail,
            reply_to: trimmedEmail,
            to_email: CONTACT_EMAIL,
            inquiry_type: formData.inquiryType,
            company: trimmedCompany || 'Not provided',
            phone: trimmedPhone || 'Not provided',
            subject: emailSubject,
            message: structuredMessage,
          },
          publicKey
        );
        setFormData(INITIAL_FORM);
        setStatus({
          type: 'success',
          text: 'Message sent! I will get back to you shortly.',
        });
        return;
      } catch {
        // Fall through to FormSubmit AJAX endpoint instead of opening an external email client
      }
    }

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: emailSubject,
          _replyto: trimmedEmail,
          _template: 'table',
          'Inquiry Type': formData.inquiryType,
          Name: trimmedName,
          Email: trimmedEmail,
          'Company / Organization': trimmedCompany || 'Not provided',
          'Phone / WhatsApp': trimmedPhone || 'Not provided',
          Subject: trimmedSubject || 'General Portfolio Inquiry',
          Message: trimmedMessage,
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === 'false' || result.success === false) {
        throw new Error('Delivery failed');
      }

      setFormData(INITIAL_FORM);
      setStatus({
        type: 'success',
        text: 'Message sent! I will get back to you shortly.',
      });
    } catch {
      setStatus({
        type: 'error',
        text: `Could not send directly right now. Please email ${CONTACT_EMAIL} directly.`,
      });
    }
  };

  return (
    <section
      id="contact"
      className="pt-24 sm:pt-32 lg:pt-36 pb-0 bg-[#13110e] text-[#f4f3ea] relative overflow-hidden border-t border-[#201c18]"
    >
      {/* Radiant Sunrise Dome Graphic at Bottom-Right */}
      <div
        className="absolute -bottom-44 sm:-bottom-56 -right-24 sm:-right-32 w-[520px] sm:w-[680px] lg:w-[750px] h-[520px] sm:h-[680px] lg:h-[750px] rounded-full bg-gradient-to-t from-[#ff6854] via-[#f97316] to-[#fdba74] opacity-90 pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

        {/* TOP BLOCK: Section Header, Headline & Quick Message Card */}
        <div>
          {/* Eyebrow Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 sm:pb-12 text-xs font-mono tracking-widest uppercase select-none text-[#8e9485] gap-3">
            <div className="flex items-center gap-3">
              <span className="text-[#d4ff32] font-bold">06</span>
              <span className="font-semibold text-[#8e9485]">GET IN TOUCH</span>
            </div>
            <div className="text-[#8e9485]">
              PUNE · REMOTE / ON-SITE
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-stretch pb-16 sm:pb-24">
            {/* Left: Huge Editorial Headline & Direct Email */}
            <div className="lg:col-span-7">
              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[100px] 2xl:text-[112px] font-normal leading-[0.88] tracking-[-0.035em] text-[#f4f3ea] mb-8 select-none [font-optical-sizing:auto]">
                Looking for an <br />
                engineer <br />
                who can <span className="italic text-[#ff6854]">own the </span> <br />
                <span className="italic text-[#ff6854]">build?</span>
              </h2>

              {/* Direct Email Link + One-Click Copy */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-mono text-xs sm:text-sm md:text-base text-[#f4f3ea] hover:text-[#d4ff32] transition-colors inline-flex items-center gap-2 group cursor-pointer break-all sm:break-normal"
                >
                  <span>{CONTACT_EMAIL}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8e9485] group-hover:text-[#d4ff32] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#2c251f] bg-[#1a1713] hover:border-[#d4ff32]/60 text-[11px] font-mono uppercase tracking-wider text-[#b5b0a6] hover:text-[#d4ff32] transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-[#d4ff32]" />
                      <span className="text-[#d4ff32]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right: Quick Message Card */}
            <div className="lg:col-span-5 w-full flex">
              <form
                onSubmit={handleSubmit}
                className="w-full h-full rounded-[2rem] border border-[#2c251f] bg-[#1a1713] p-6 sm:p-8 flex flex-col gap-4 shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-mono tracking-widest text-[#d4ff32] uppercase font-bold">
                    SEND A QUICK MESSAGE
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#827a70]">
                    DIRECT REPLY
                  </span>
                </div>

                <div className="flex flex-wrap gap-2" role="group" aria-label="Inquiry type">
                  {INQUIRY_TYPES.map((type) => {
                    const isSelected = formData.inquiryType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, inquiryType: type }))}
                        className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider border transition-colors cursor-pointer ${isSelected
                            ? 'bg-[#d4ff32]/15 border-[#d4ff32] text-[#d4ff32] font-semibold'
                            : 'bg-[#12100d] border-[#2c251f] text-[#9b9388] hover:border-[#493e35] hover:text-white'
                          }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    aria-label="Your name"
                    placeholder="Your name *"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full rounded-xl bg-[#12100d] border border-[#2c251f] focus:border-[#d4ff32] focus:outline-none focus:ring-1 focus:ring-[#d4ff32]/30 px-4 py-3 text-xs sm:text-sm text-white placeholder-[#787166] transition-colors"
                  />
                  <input
                    type="email"
                    aria-label="Your email"
                    placeholder="you@company.com *"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full rounded-xl bg-[#12100d] border border-[#2c251f] focus:border-[#d4ff32] focus:outline-none focus:ring-1 focus:ring-[#d4ff32]/30 px-4 py-3 text-xs sm:text-sm text-white placeholder-[#787166] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    aria-label="Company or organization"
                    placeholder="Company / Organization"
                    value={formData.company}
                    onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                    className="w-full rounded-xl bg-[#12100d] border border-[#2c251f] focus:border-[#d4ff32] focus:outline-none focus:ring-1 focus:ring-[#d4ff32]/30 px-4 py-3 text-xs sm:text-sm text-white placeholder-[#787166] transition-colors"
                  />
                  <input
                    type="tel"
                    aria-label="Phone or WhatsApp"
                    placeholder="Phone / WhatsApp (optional)"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    className="w-full rounded-xl bg-[#12100d] border border-[#2c251f] focus:border-[#d4ff32] focus:outline-none focus:ring-1 focus:ring-[#d4ff32]/30 px-4 py-3 text-xs sm:text-sm text-white placeholder-[#787166] transition-colors"
                  />
                </div>

                <input
                  type="text"
                  aria-label="Subject or topic"
                  placeholder="Subject (e.g. Full-Stack Role, SaaS MVP, Consultation)"
                  value={formData.subject}
                  onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                  className="w-full rounded-xl bg-[#12100d] border border-[#2c251f] focus:border-[#d4ff32] focus:outline-none focus:ring-1 focus:ring-[#d4ff32]/30 px-4 py-3 text-xs sm:text-sm text-white placeholder-[#787166] transition-colors"
                />

                <textarea
                  rows={4}
                  aria-label="Your message"
                  placeholder="Tell me about the product, role, timeline, or idea... *"
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full flex-1 min-h-[120px] rounded-xl bg-[#12100d] border border-[#2c251f] focus:border-[#d4ff32] focus:outline-none focus:ring-1 focus:ring-[#d4ff32]/30 px-4 py-3 text-xs sm:text-sm text-white placeholder-[#787166] resize-none transition-colors"
                />

                <div className="flex flex-col items-center justify-center gap-2.5 pt-2">
                  <button
                    type="submit"
                    disabled={status.type === 'sending'}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d4ff32] hover:bg-white text-neutral-950 font-sans font-bold text-xs sm:text-sm px-8 py-3 transition-colors cursor-pointer disabled:opacity-60"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{status.type === 'sending' ? 'Sending...' : 'Send message'}</span>
                  </button>

                  {status.text && (
                    <span
                      className={`text-xs font-mono text-center ${status.type === 'error' ? 'text-[#ff6854]' : 'text-[#d4ff32]'
                        }`}
                    >
                      {status.text}
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* LOWER BLOCK: The Next Chapter + 2x2 Action Tiles */}
        <div className="border-t border-[#26201b] pt-14 sm:pt-20 pb-24 sm:pb-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">

            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col justify-between self-stretch">
              <div>
                <div className="text-xs font-mono tracking-widest uppercase font-bold text-[#d4ff32] mb-6 select-none">
                  TECH DISCUSSIONS & COLLABORATIONS
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#f4f3ea] font-normal leading-[1.12] mb-8 max-w-lg">
                  Always open for in-depth tech discussions, brainstorming new ideas, and collaborating on ambitious products.
                </h3>
              </div>

              <div className="font-mono text-[10.5px] sm:text-[11px] tracking-wider text-[#8e9485] uppercase leading-relaxed mt-auto pt-4 space-y-1">
                <div><span className="text-[#d4ff32] font-bold">MERN STACK DEVELOPER</span> · REACT NATIVE · FULL-STACK ENGINEERING</div>
                <div>OPEN FOR COLLABORATIONS, CONSULTING & EXCITING BUILDS.</div>
              </div>
            </div>

            {/* Right Column: 2x2 Action Tiles */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

              {/* Tile 1: LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jadhavpratik-/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[1.75rem] border border-[#2c251f] bg-[#1a1713]/95 hover:border-[#4c4035] hover:bg-[#201c17] p-6 sm:p-7 flex items-center justify-between group transition-colors duration-200 cursor-pointer shadow-lg"
              >
                <div>
                  <div className="font-mono text-[10.5px] tracking-wider text-[#827a70] uppercase mb-1.5">
                    PROFESSIONAL PROFILE
                  </div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-white font-normal group-hover:text-[#d4ff32] transition-colors">
                    LinkedIn
                  </h4>
                </div>

                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4ff32] group-hover:scale-105 transition-all shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>

              {/* Tile 2: GitHub */}
              <a
                href="https://github.com/pratikjadhav6632"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[1.75rem] border border-[#2c251f] bg-[#1a1713]/95 hover:border-[#4c4035] hover:bg-[#201c17] p-6 sm:p-7 flex items-center justify-between group transition-colors duration-200 cursor-pointer shadow-lg"
              >
                <div>
                  <div className="font-mono text-[10.5px] tracking-wider text-[#827a70] uppercase mb-1.5">
                    EXPLORE MY CODE
                  </div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-white font-normal group-hover:text-[#d4ff32] transition-colors">
                    GitHub
                  </h4>
                </div>

                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4ff32] group-hover:scale-105 transition-all shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>

              {/* Tile 3: Résumé */}
              <a
                href="https://drive.google.com/file/d/1z41RRcAXd8IOUQFGXIIUZGlMrw-0Ksdb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[1.75rem] border border-[#2c251f] bg-[#1a1713]/95 hover:border-[#4c4035] hover:bg-[#201c17] p-6 sm:p-7 flex items-center justify-between group transition-colors duration-200 cursor-pointer shadow-lg"
              >
                <div>
                  <div className="font-mono text-[10.5px] tracking-wider text-[#827a70] uppercase mb-1.5">
                    DOWNLOAD THE PDF
                  </div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-white font-normal group-hover:text-[#d4ff32] transition-colors">
                    Résumé
                  </h4>
                </div>

                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4ff32] group-hover:scale-105 transition-all shadow-md">
                  <ArrowDown className="w-4 h-4" />
                </div>
              </a>

              {/* Tile 4: Call or Connect */}
              <a
                href="tel:+918408868107"
                className="rounded-[1.75rem] border border-[#2c251f] bg-[#1a1713]/95 hover:border-[#4c4035] hover:bg-[#201c17] p-6 sm:p-7 flex items-center justify-between group transition-colors duration-200 cursor-pointer shadow-lg"
              >
                <div>
                  <div className="font-mono text-[10.5px] tracking-wider text-[#827a70] uppercase mb-1.5">
                    CALL OR CONNECT
                  </div>
                  <h4 className="font-mono text-xl sm:text-2xl text-white font-bold tracking-tight group-hover:text-[#d4ff32] transition-colors">
                    +91 8408868107
                  </h4>
                </div>

                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4ff32] group-hover:scale-105 transition-all shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
