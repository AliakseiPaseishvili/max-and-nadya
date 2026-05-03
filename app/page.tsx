import Countdown from './components/Countdown';
import RsvpForm from './components/RsvpForm';

function BotanicalSpray() {
  return (
    <svg
      viewBox="0 0 360 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      style={{ maxWidth: '280px' }}
    >
      <path d="M180 130 Q180 80 180 15" stroke="#B8C4B1" strokeWidth="0.9" strokeLinecap="round" />

      <path d="M180 90 Q155 72 130 58" stroke="#B8C4B1" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M130 58 C118 44 128 32 140 38 C138 50 130 58 130 58Z" fill="rgba(184,196,177,0.35)" stroke="#B8C4B1" strokeWidth="0.65" />
      <path d="M155 73 Q138 60 122 50" stroke="#B8C4B1" strokeWidth="0.65" strokeLinecap="round" />
      <path d="M122 50 C112 38 122 28 132 35 C130 45 122 50 122 50Z" fill="rgba(184,196,177,0.25)" stroke="#B8C4B1" strokeWidth="0.55" />

      <path d="M180 60 Q158 45 138 28" stroke="#B8C4B1" strokeWidth="0.7" strokeLinecap="round" />
      <path d="M138 28 C126 16 138 6 148 14 C145 24 138 28 138 28Z" fill="rgba(184,196,177,0.3)" stroke="#B8C4B1" strokeWidth="0.6" />

      <path d="M180 75 Q148 62 118 68" stroke="#B8C4B1" strokeWidth="0.5" strokeLinecap="round" strokeDasharray="2 3" />

      <path d="M180 90 Q205 72 230 58" stroke="#B8C4B1" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M230 58 C242 44 232 32 220 38 C222 50 230 58 230 58Z" fill="rgba(184,196,177,0.35)" stroke="#B8C4B1" strokeWidth="0.65" />
      <path d="M205 73 Q222 60 238 50" stroke="#B8C4B1" strokeWidth="0.65" strokeLinecap="round" />
      <path d="M238 50 C248 38 238 28 228 35 C230 45 238 50 238 50Z" fill="rgba(184,196,177,0.25)" stroke="#B8C4B1" strokeWidth="0.55" />

      <path d="M180 60 Q202 45 222 28" stroke="#B8C4B1" strokeWidth="0.7" strokeLinecap="round" />
      <path d="M222 28 C234 16 222 6 212 14 C215 24 222 28 222 28Z" fill="rgba(184,196,177,0.3)" stroke="#B8C4B1" strokeWidth="0.6" />

      <path d="M180 75 Q212 62 242 68" stroke="#B8C4B1" strokeWidth="0.5" strokeLinecap="round" strokeDasharray="2 3" />

      <circle cx="180" cy="14" r="5.5" fill="rgba(212,165,160,0.25)" stroke="#D4A5A0" strokeWidth="0.9" />
      <circle cx="180" cy="14" r="2.5" fill="rgba(212,165,160,0.6)" />

      <circle cx="108" cy="72" r="2.5" fill="rgba(212,165,160,0.4)" />
      <circle cx="103" cy="66" r="1.8" fill="rgba(212,165,160,0.3)" />
      <circle cx="252" cy="72" r="2.5" fill="rgba(212,165,160,0.4)" />
      <circle cx="257" cy="66" r="1.8" fill="rgba(212,165,160,0.3)" />
    </svg>
  );
}

function BotanicalInverted() {
  return (
    <svg
      viewBox="0 0 360 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      style={{ maxWidth: '240px', transform: 'scaleY(-1)' }}
    >
      <path d="M180 95 Q180 60 180 15" stroke="#B8C4B1" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M180 65 Q158 50 140 38" stroke="#B8C4B1" strokeWidth="0.7" strokeLinecap="round" />
      <path d="M140 38 C130 26 140 16 150 24 C148 34 140 38 140 38Z" fill="rgba(184,196,177,0.3)" stroke="#B8C4B1" strokeWidth="0.6" />
      <path d="M180 45 Q162 32 148 20" stroke="#B8C4B1" strokeWidth="0.6" strokeLinecap="round" />
      <path d="M148 20 C138 10 150 2 158 10 C156 18 148 20 148 20Z" fill="rgba(184,196,177,0.25)" stroke="#B8C4B1" strokeWidth="0.5" />
      <path d="M180 65 Q202 50 220 38" stroke="#B8C4B1" strokeWidth="0.7" strokeLinecap="round" />
      <path d="M220 38 C230 26 220 16 210 24 C212 34 220 38 220 38Z" fill="rgba(184,196,177,0.3)" stroke="#B8C4B1" strokeWidth="0.6" />
      <path d="M180 45 Q198 32 212 20" stroke="#B8C4B1" strokeWidth="0.6" strokeLinecap="round" />
      <path d="M212 20 C222 10 210 2 202 10 C204 18 212 20 212 20Z" fill="rgba(184,196,177,0.25)" stroke="#B8C4B1" strokeWidth="0.5" />
      <circle cx="180" cy="13" r="4" fill="rgba(212,165,160,0.35)" stroke="#D4A5A0" strokeWidth="0.8" />
      <circle cx="180" cy="13" r="1.8" fill="rgba(212,165,160,0.6)" />
    </svg>
  );
}

function FloatingPetals() {
  const petals = [
    { left: '7%',  w: 10, h: 16, delay: 0,    dur: 14, color: 'rgba(212,165,160,0.45)', rotate: '30deg' },
    { left: '18%', w: 13, h: 20, delay: 2.5,  dur: 17, color: 'rgba(184,196,177,0.4)',  rotate: '120deg' },
    { left: '30%', w: 8,  h: 13, delay: 5,    dur: 12, color: 'rgba(212,165,160,0.5)',  rotate: '60deg' },
    { left: '45%', w: 11, h: 18, delay: 1.2,  dur: 16, color: 'rgba(198,169,122,0.28)', rotate: '200deg' },
    { left: '58%', w: 14, h: 22, delay: 7,    dur: 18, color: 'rgba(212,165,160,0.38)', rotate: '85deg' },
    { left: '70%', w: 9,  h: 14, delay: 3.8,  dur: 13, color: 'rgba(184,196,177,0.42)', rotate: '150deg' },
    { left: '82%', w: 12, h: 19, delay: 9,    dur: 15, color: 'rgba(212,165,160,0.42)', rotate: '45deg' },
    { left: '93%', w: 10, h: 16, delay: 4.5,  dur: 19, color: 'rgba(198,169,122,0.22)', rotate: '270deg' },
    { left: '24%', w: 7,  h: 11, delay: 11,   dur: 14, color: 'rgba(212,165,160,0.35)', rotate: '180deg' },
    { left: '63%', w: 15, h: 24, delay: 6.5,  dur: 20, color: 'rgba(184,196,177,0.32)', rotate: '310deg' },
  ];

  return (
    <>
      {petals.map((p, i) => (
        <div
          key={i}
          className="petal"
          style={{
            left: p.left,
            width: p.w,
            height: p.h,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            transform: `rotate(${p.rotate})`,
          }}
        />
      ))}
    </>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <FloatingPetals />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center">

        <div className="animate-float mb-6" style={{ animationDelay: '0.5s' }}>
          <BotanicalSpray />
        </div>

        <p
          className="animate-fade-in-up"
          style={{
            fontFamily: 'var(--font-raleway), sans-serif',
            fontWeight: 300,
            fontSize: '0.68rem',
            textTransform: 'uppercase',
            letterSpacing: '0.32em',
            color: '#9B8070',
            marginBottom: '2rem',
            animationDelay: '0.3s',
          }}
        >
          Приглашение на свадьбу
        </p>

        <h1
          className="animate-fade-in-up"
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: 'clamp(3.5rem, 12vw, 8rem)',
            color: '#4A3728',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            marginBottom: '1.25rem',
            animationDelay: '0.5s',
          }}
        >
          Максим
          <span style={{ color: '#D4A5A0', margin: '0 0.15em', fontWeight: 300 }}>&</span>
          Надя
        </h1>

        <p
          className="animate-fade-in-up"
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(1rem, 3vw, 1.4rem)',
            color: '#B8A090',
            letterSpacing: '0.04em',
            marginBottom: '2.5rem',
            animationDelay: '0.7s',
          }}
        >
          соединяют свои сердца навсегда
        </p>

        <div
          className="animate-fade-in-up"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            width: '100%',
            maxWidth: '260px',
            marginBottom: '2.5rem',
            animationDelay: '0.9s',
          }}
        >
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, #C6A97A)' }} />
          <span style={{ color: '#C6A97A', fontSize: '0.55rem', lineHeight: 1 }}>✦</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, #C6A97A)' }} />
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '1.0s', marginBottom: '0.6rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontWeight: 400,
              fontSize: 'clamp(1.6rem, 5vw, 2.4rem)',
              color: '#4A3728',
              letterSpacing: '0.04em',
            }}
          >
            3 сентября 2026 года
          </p>
        </div>

        <p
          className="animate-fade-in-up"
          style={{
            fontFamily: 'var(--font-raleway), sans-serif',
            fontWeight: 300,
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
            color: '#9B8070',
            marginBottom: '0.5rem',
            animationDelay: '1.1s',
          }}
        >
          Начало в 16:00
        </p>

        <p
          className="animate-fade-in-up"
          style={{
            fontFamily: 'var(--font-raleway), sans-serif',
            fontWeight: 300,
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            color: '#B8C4B1',
            marginBottom: '3rem',
            animationDelay: '1.2s',
          }}
        >
          Место проведения будет сообщено дополнительно
        </p>

        <div className="animate-fade-in" style={{ animationDelay: '1.3s' }}>
          <BotanicalInverted />
        </div>
      </section>

      {/* Photos */}
      <section className="relative z-10 py-20 px-6">
        <p
          style={{
            fontFamily: 'var(--font-raleway), sans-serif',
            fontWeight: 300,
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: '#9B8070',
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          Жених и невеста
        </p>

        <div
          style={{
            display: 'flex',
            gap: 'clamp(1rem, 4vw, 3rem)',
            justifyContent: 'center',
            alignItems: 'flex-end',
            maxWidth: '680px',
            margin: '0 auto',
          }}
        >
          {/* Максим */}
          <div style={{ flex: 1, maxWidth: '280px' }}>
            {/* Замените div на <Image> когда будут готовы фотографии */}
            <div
              style={{
                aspectRatio: '3 / 4',
                background: 'linear-gradient(135deg, rgba(242,216,208,0.5) 0%, rgba(184,196,177,0.35) 100%)',
                border: '1px solid rgba(198,169,122,0.25)',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Заменить на: <Image src="/photos/maxim.jpg" alt="Максим" fill style={{ objectFit: 'cover' }} /> */}
              <span
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  color: '#B8A090',
                  opacity: 0.6,
                  userSelect: 'none',
                }}
              >
                Фото
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(1.4rem, 4vw, 1.9rem)',
                color: '#4A3728',
                textAlign: 'center',
                marginTop: '1rem',
                letterSpacing: '0.03em',
              }}
            >
              Максим
            </p>
          </div>

          {/* Золотой разделитель */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              paddingBottom: '3rem',
              flexShrink: 0,
            }}
          >
            <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, transparent, #C6A97A)' }} />
            <span style={{ color: '#C6A97A', fontSize: '0.6rem' }}>✦</span>
            <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to top, transparent, #C6A97A)' }} />
          </div>

          {/* Надя — чуть выше для асимметрии */}
          <div style={{ flex: 1, maxWidth: '280px', marginBottom: '2rem' }}>
            <div
              style={{
                aspectRatio: '3 / 4',
                background: 'linear-gradient(135deg, rgba(212,165,160,0.35) 0%, rgba(242,216,208,0.5) 100%)',
                border: '1px solid rgba(198,169,122,0.25)',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Заменить на: <Image src="/photos/nadya.jpg" alt="Надя" fill style={{ objectFit: 'cover' }} /> */}
              <span
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  color: '#B8A090',
                  opacity: 0.6,
                  userSelect: 'none',
                }}
              >
                Фото
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(1.4rem, 4vw, 1.9rem)',
                color: '#4A3728',
                textAlign: 'center',
                marginTop: '1rem',
                letterSpacing: '0.03em',
              }}
            >
              Надя
            </p>
          </div>
        </div>
      </section>

      {/* Dress code */}
      <section
        className="relative z-10 py-20 px-6 text-center"
        style={{ borderTop: '1px solid rgba(198,169,122,0.15)' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-raleway), sans-serif',
            fontWeight: 300,
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: '#9B8070',
            marginBottom: '0.75rem',
          }}
        >
          Дресс-код
        </p>

        <p
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            color: '#4A3728',
            marginBottom: '1.25rem',
          }}
        >
          Нежные пастельные тона
        </p>

        <p
          style={{
            fontFamily: 'var(--font-raleway), sans-serif',
            fontWeight: 300,
            fontSize: '0.85rem',
            color: '#9B8070',
            maxWidth: '420px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.75,
            letterSpacing: '0.04em',
          }}
        >
          Мы будем рады видеть вас в нарядах мягких пастельных оттенков.
          Пожалуйста, воздержитесь от белого и чёрного цвета.
        </p>

        {/* Color swatches */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            maxWidth: '360px',
            margin: '0 auto 2rem',
          }}
        >
          {[
            { color: '#F2D8D0', name: 'Пудровый' },
            { color: '#D4A5A0', name: 'Пыльная роза' },
            { color: '#E8D5C0', name: 'Шампань' },
            { color: '#B8C4B1', name: 'Шалфей' },
            { color: '#D4C5B0', name: 'Тауп' },
            { color: '#C8D4D8', name: 'Пудровый голубой' },
          ].map(({ color, name }) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: color,
                  border: '1px solid rgba(198,169,122,0.3)',
                  boxShadow: '0 2px 8px rgba(74,55,40,0.08)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-raleway), sans-serif',
                  fontWeight: 300,
                  fontSize: '0.55rem',
                  color: '#9B8070',
                  letterSpacing: '0.05em',
                  textAlign: 'center',
                  maxWidth: '50px',
                  lineHeight: 1.3,
                }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.6rem 1.25rem',
            border: '1px solid rgba(212,165,160,0.4)',
            borderRadius: '2px',
            background: 'rgba(242,216,208,0.2)',
            marginBottom: '1.5rem',
          }}
        >
          <span style={{ color: '#D4A5A0', fontSize: '0.7rem' }}>✕</span>
          <span
            style={{
              fontFamily: 'var(--font-raleway), sans-serif',
              fontWeight: 300,
              fontSize: '0.72rem',
              color: '#9B8070',
              letterSpacing: '0.08em',
            }}
          >
            Белый и чёрный — только для жениха и невесты
          </span>
        </div>
      </section>

      {/* Countdown */}
      <section
        className="relative z-10 py-24 px-6 text-center"
        style={{
          background: 'linear-gradient(to bottom, rgba(242,216,208,0.18), rgba(242,216,208,0.28), rgba(242,216,208,0.18))',
          borderTop: '1px solid rgba(198,169,122,0.18)',
          borderBottom: '1px solid rgba(198,169,122,0.18)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-raleway), sans-serif',
            fontWeight: 300,
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: '#9B8070',
            marginBottom: '0.75rem',
          }}
        >
          До торжества осталось
        </p>

        <p
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(1.3rem, 4vw, 1.9rem)',
            color: '#4A3728',
            marginBottom: '3rem',
          }}
        >
          совсем немного времени
        </p>

        <Countdown />

        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '3.5rem', marginBottom: '1.5rem' }}>
          {[0.4, 0.65, 0.9].map((opacity, i) => (
            <div
              key={i}
              style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#D4A5A0', opacity }}
            />
          ))}
        </div>
      </section>

      {/* RSVP */}
      <section
        className="relative z-10 py-20 px-6 text-center"
        style={{
          borderTop: '1px solid rgba(198,169,122,0.15)',
          borderBottom: '1px solid rgba(198,169,122,0.15)',
          background: 'linear-gradient(to bottom, rgba(250,246,240,0), rgba(242,216,208,0.12), rgba(250,246,240,0))',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-raleway), sans-serif',
            fontWeight: 300,
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: '#9B8070',
            marginBottom: '0.75rem',
            marginTop: '1.5rem',
          }}
        >
          Подтверждение участия
        </p>

        <p
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(1.4rem, 4vw, 2rem)',
            color: '#4A3728',
            marginBottom: '0.75rem',
          }}
        >
          Будете ли вы с нами?
        </p>

        <p
          style={{
            fontFamily: 'var(--font-raleway), sans-serif',
            fontWeight: 300,
            fontSize: '0.8rem',
            color: '#9B8070',
            letterSpacing: '0.05em',
            marginBottom: '2.5rem',
          }}
        >
          Пожалуйста, сообщите до 1 августа 2026 года
        </p>

        <RsvpForm />
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6 text-center flex flex-col items-center gap-4">
        <div style={{ marginBottom: '0.5rem', opacity: 0.6 }}>
          <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '80px' }}>
            <path d="M60 38 L60 5" stroke="#B8C4B1" strokeWidth="0.7" strokeLinecap="round" />
            <path d="M60 25 Q48 18 40 12" stroke="#B8C4B1" strokeWidth="0.6" strokeLinecap="round" />
            <path d="M40 12 C33 5 40 -1 48 5 C46 12 40 12 40 12Z" fill="rgba(184,196,177,0.3)" stroke="#B8C4B1" strokeWidth="0.5" />
            <path d="M60 25 Q72 18 80 12" stroke="#B8C4B1" strokeWidth="0.6" strokeLinecap="round" />
            <path d="M80 12 C87 5 80 -1 72 5 C74 12 80 12 80 12Z" fill="rgba(184,196,177,0.3)" stroke="#B8C4B1" strokeWidth="0.5" />
            <circle cx="60" cy="4" r="3" fill="rgba(212,165,160,0.45)" stroke="#D4A5A0" strokeWidth="0.6" />
          </svg>
        </div>

        <blockquote
          className="quote-text"
          style={{ fontSize: 'clamp(1rem, 3vw, 1.35rem)', maxWidth: '400px' }}
        >
          «Любовь долготерпит, милосердствует, любовь не завидует»
        </blockquote>

        <p
          style={{
            fontFamily: 'var(--font-raleway), sans-serif',
            fontWeight: 300,
            fontSize: '0.62rem',
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
            color: '#C6A97A',
            opacity: 0.8,
          }}
        >
          1 Коринфянам 13
        </p>

        <div
          style={{
            marginTop: '1.5rem',
            height: '1px',
            width: '120px',
            background: 'linear-gradient(to right, transparent, rgba(198,169,122,0.4), transparent)',
          }}
        />

        <p
          style={{
            fontFamily: 'var(--font-raleway), sans-serif',
            fontWeight: 300,
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            color: '#B8C4B1',
          }}
        >
          Максим & Надя · 03.09.2026
        </p>
      </footer>
    </main>
  );
}
