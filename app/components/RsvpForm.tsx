'use client';

import { useState } from 'react';

type Attending = 'yes' | 'no' | null;

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-forum), serif',
  fontSize: 'clamp(0.95rem, 4vw, 1.1rem)',
  color: '#FFFBF0',
  display: 'block',
  marginBottom: '0.5rem',
};

export default function RsvpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attending, setAttending] = useState<Attending>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!attending || !name.trim() || !email.trim()) return;

    setLoading(true);
    // TODO: подключите свой бэкенд или email-сервис (например, Resend, EmailJS, Formspree)
    // Пример: await fetch('/api/rsvp', { method: 'POST', body: JSON.stringify({ name, email, attending }) });
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
        <p style={{ fontSize: 'clamp(1.4rem, 6vw, 1.8rem)', color: '#FFFBF0', marginBottom: '0.75rem' }}>
          {attending === 'yes' ? 'Ждём вас с нетерпением!' : 'Жаль, что вы не сможете прийти'}
        </p>
        <p style={{ fontSize: 'clamp(1rem, 4vw, 1.15rem)', color: '#CAC9B2' }}>
          {attending === 'yes'
            ? 'До встречи 3 сентября 2026 года'
            : 'Спасибо, что сообщили — мы будем скучать'}
        </p>
      </div>
    );
  }

  const isReady = Boolean(attending) && name.trim() !== '' && email.trim() !== '';

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Segmented control */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {(['yes', 'no'] as const).map((val) => {
            const isSelected = attending === val;
            return (
              <button
                key={val}
                type="button"
                onClick={() => setAttending(val)}
                className={`segmented ${isSelected ? 'segmented--active' : 'segmented--inactive'}`}
                style={{ flex: 1 }}
              >
                {val === 'yes' ? 'Буду' : 'Не смогу'}
              </button>
            );
          })}
        </div>

        {/* Name */}
        <div>
          <label htmlFor="rsvp-name" style={labelStyle}>
            Имя и фамилия
          </label>
          <input
            id="rsvp-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Иван Иванов"
            className="field-input"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="rsvp-email" style={labelStyle}>
            Электронная почта
          </label>
          <input
            id="rsvp-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ivan@gmail.com"
            className="field-input"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading || !isReady}
        className="pill-button pill-button--olive"
        style={{ width: '100%' }}
      >
        {loading ? 'Отправляем…' : 'Отправить'}
      </button>
    </form>
  );
}
