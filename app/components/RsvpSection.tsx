import Image from 'next/image';
import RsvpForm from './RsvpForm';

export default function RsvpSection() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '60px 20px',
        backgroundImage: 'url(/figma/rsvp-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Image
        src="/figma/last-section-top-border.png"
        alt=""
        aria-hidden
        width={1170}
        height={201}
        className="last-section-border last-section-border--top"
      />
      <Image
        src="/figma/last-section-bottom-border.png"
        alt=""
        aria-hidden
        width={1170}
        height={201}
        className="last-section-border last-section-border--bottom"
      />
      <div
        className="card-olive round-80"
        style={{ position: 'relative', zIndex: 2, maxWidth: '600px', width: '100%', margin: '0 auto', padding: '64px 20px', display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <p style={{ fontSize: 'clamp(1.6rem, 7vw, 2rem)', color: '#FFFBF0', textAlign: 'center' }}>
            Будете ли вы с нами?
          </p>
          <p className="body-text" style={{ color: '#CAC9B2', textAlign: 'center', whiteSpace: 'pre-line' }}>
            {'Пожалуйста, сообщите\nдо 1 августа 2026'}
          </p>
        </div>
        <RsvpForm />
      </div>
    </section>
  );
}
