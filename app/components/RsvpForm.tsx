'use client';

import { useState } from 'react';

type Attending = 'yes' | 'no' | null;

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-raleway), sans-serif',
  fontWeight: 300,
  fontSize: '0.6rem',
  textTransform: 'uppercase',
  letterSpacing: '0.25em',
  color: '#6B8A58',
  display: 'block',
  marginBottom: '0.5rem',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(198,169,122,0.4)',
  outline: 'none',
  fontFamily: 'var(--font-cormorant), serif',
  fontWeight: 300,
  fontStyle: 'italic',
  fontSize: '1.1rem',
  color: '#3E6830',
  padding: '0.35rem 0 0.5rem',
  transition: 'border-color 0.25s ease',
};

export default function RsvpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attending, setAttending] = useState<Attending>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        {attending === 'yes' ? (
          <>
            <p
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                color: '#3E6830',
                marginBottom: '0.75rem',
              }}
            >
              Ждём вас с нетерпением!
            </p>
            <p
              style={{
                fontFamily: 'var(--font-raleway), sans-serif',
                fontWeight: 300,
                fontSize: '0.8rem',
                color: '#6B8A58',
                letterSpacing: '0.08em',
              }}
            >
              До встречи 3 сентября 2026 года
            </p>
          </>
        ) : (
          <>
            <p
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                color: '#3E6830',
                marginBottom: '0.75rem',
              }}
            >
              Жаль, что вы не сможете прийти
            </p>
            <p
              style={{
                fontFamily: 'var(--font-raleway), sans-serif',
                fontWeight: 300,
                fontSize: '0.8rem',
                color: '#6B8A58',
                letterSpacing: '0.08em',
              }}
            >
              Спасибо, что сообщили — мы будем скучать
            </p>
          </>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '440px', margin: '0 auto' }}>
      {/* Присутствие */}
      <div style={{ marginBottom: '2.5rem' }}>
        <span style={labelStyle}>Буду ли я на свадьбе</span>
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem' }}>
          {(['yes', 'no'] as const).map((val) => {
            const isSelected = attending === val;
            return (
              <button
                key={val}
                type="button"
                onClick={() => setAttending(val)}
                style={{
                  flex: 1,
                  padding: '0.7rem 1rem',
                  border: `1px solid ${isSelected ? '#D4A5A0' : 'rgba(198,169,122,0.35)'}`,
                  borderRadius: '2px',
                  background: isSelected ? 'rgba(212,165,160,0.15)' : 'transparent',
                  fontFamily: 'var(--font-cormorant), serif',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: '1.05rem',
                  color: isSelected ? '#3E6830' : '#6B8A58',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.03em',
                }}
              >
                {val === 'yes' ? 'Буду' : 'Не смогу прийти'}
              </button>
            );
          })}
        </div>
      </div>

      {/* Имя и фамилия */}
      <div style={{ marginBottom: '2rem' }}>
        <label htmlFor="rsvp-name" style={labelStyle}>
          Имя и фамилия
        </label>
        <input
          id="rsvp-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setFocusedField('name')}
          onBlur={() => setFocusedField(null)}
          placeholder="Иван Иванов"
          style={{
            ...inputStyle,
            borderBottomColor: focusedField === 'name' ? '#D4A5A0' : 'rgba(198,169,122,0.4)',
          }}
        />
      </div>

      {/* Почта */}
      <div style={{ marginBottom: '2.5rem' }}>
        <label htmlFor="rsvp-email" style={labelStyle}>
          Электронная почта
        </label>
        <input
          id="rsvp-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
          placeholder="ivan@mail.ru"
          style={{
            ...inputStyle,
            borderBottomColor: focusedField === 'email' ? '#D4A5A0' : 'rgba(198,169,122,0.4)',
          }}
        />
      </div>

      {/* Кнопка */}
      <button
        type="submit"
        disabled={loading || !attending || !name.trim() || !email.trim()}
        style={{
          width: '100%',
          padding: '0.9rem 2rem',
          background: loading ? 'rgba(212,165,160,0.3)' : 'rgba(212,165,160,0.18)',
          border: '1px solid rgba(212,165,160,0.6)',
          borderRadius: '2px',
          fontFamily: 'var(--font-raleway), sans-serif',
          fontWeight: 300,
          fontSize: '0.68rem',
          textTransform: 'uppercase',
          letterSpacing: '0.28em',
          color: loading ? '#6A9455' : '#3E6830',
          cursor: loading || !attending || !name.trim() || !email.trim() ? 'not-allowed' : 'pointer',
          opacity: !attending || !name.trim() || !email.trim() ? 0.5 : 1,
          transition: 'all 0.25s ease',
          marginBottom: '1.5rem'
        }}
      >
        {loading ? 'Отправляем...' : 'Отправить'}
      </button>
    </form>
  );
}
