import Countdown from './Countdown';
import Photo from './Photo';

export default function CountdownSection() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '0 20px 120px',
      }}
    >
      <p
        style={{
          fontSize: 'clamp(1.6rem, 7vw, 2rem)',
          color: '#284503',
          textAlign: 'center',
          lineHeight: 1.25,
        }}
      >
        До торжества осталось совсем немного времени
      </p>

      <div style={{ position: 'relative', width: '100%' }}>
        <Photo src="/figma/countdown-strip-798a59.png" alt="" ratio="422 / 108" />
      </div>

      <Countdown />
    </section>
  );
}
