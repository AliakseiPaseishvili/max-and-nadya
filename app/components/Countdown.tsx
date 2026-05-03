'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

function pluralize(n: number, one: string, few: string, many: string) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculate = () => {
      const target = new Date('2026-09-03T16:00:00');
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div style={{ height: '140px' }} />
    );
  }

  const units = [
    {
      value: timeLeft.days,
      label: pluralize(timeLeft.days, 'день', 'дня', 'дней'),
    },
    {
      value: timeLeft.hours,
      label: pluralize(timeLeft.hours, 'час', 'часа', 'часов'),
    },
    {
      value: timeLeft.minutes,
      label: pluralize(timeLeft.minutes, 'минута', 'минуты', 'минут'),
    },
    {
      value: timeLeft.seconds,
      label: pluralize(timeLeft.seconds, 'секунда', 'секунды', 'секунд'),
    },
  ];

  return (
    <div className="flex gap-3 md:gap-6 justify-center flex-wrap">
      {units.map(({ value, label }, i) => (
        <div
          key={i}
          className="countdown-card flex flex-col items-center animate-fade-in-up"
          style={{
            padding: 'clamp(1rem, 3vw, 1.75rem) 0',
            animationDelay: `${0.1 + i * 0.12}s`,
            width: 'clamp(80px, 20vw, 120px)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(2.8rem, 7vw, 4.5rem)',
              color: '#4A3728',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {pad(value)}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-raleway), sans-serif',
              fontWeight: 300,
              fontSize: '0.6rem',
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
              color: '#9B8070',
              marginTop: '0.6rem',
              whiteSpace: 'nowrap',
            }}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
