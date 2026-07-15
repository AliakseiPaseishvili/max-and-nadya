import Image from 'next/image';

/* Opening block from the design: a floral-backed oval invitation card with the
   arched "приглашение на свадьбу" caption, butterfly, the couple's names over a
   translucent ampersand, and the date. Sizes are expressed in container-query
   units so the oval scales as one piece across screen widths. */
export default function HeroSection() {
  return (
    <section
      className="animate-fade-in"
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        padding: '11% 20px max(9%, 76px)',
        backgroundImage: "url('/figma/rsvp-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Oval card — cream fill with a double olive outline */}
      <div
        style={{
          containerType: 'size',
          position: 'relative',
          width: '100%',
          maxWidth: '350px',
          aspectRatio: '350 / 630',
          background: '#FFFBF0',
          border: '2px solid #606D31',
          borderRadius: '256px',
        }}
      >
        {/* Inner hairline outline */}
        <div
          style={{
            position: 'absolute',
            inset: '8px',
            border: '1px solid #606D31',
            borderRadius: '256px',
            pointerEvents: 'none',
          }}
        />

        {/* Arched caption following the top of the oval */}
        <svg
          viewBox="0 0 350 630"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          aria-hidden
        >
          <defs>
            <path id="hero-arc" d="M 41 137.5 A 155 155 0 0 1 309 137.5" fill="none" />
          </defs>
          <text
            fill="#606D31"
            style={{
              fontFamily: 'var(--font-forum), serif',
              fontSize: '24px',
              letterSpacing: '1.5px',
            }}
          >
            <textPath href="#hero-arc" startOffset="50%" textAnchor="middle">
              приглашение на свадьбу
            </textPath>
          </text>
        </svg>

        {/* Butterfly */}
        <div
          className="animate-float"
          style={{
            position: 'absolute',
            top: '16cqh',
            left: '33%',
            transform: 'translateX(-62%)',
            width: '35cqw',
            aspectRatio: '1 / 1',
            zIndex: 1,
          }}
        >
          <Image
            src="/figma/hero-butterfly.png"
            alt=""
            fill
            sizes="200px"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Names over the translucent ampersand */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span
            aria-hidden
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontFamily: 'var(--font-script), cursive',
              fontSize: '62cqw',
              lineHeight: 1,
              color: 'rgba(229, 139, 148, 0.22)',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          >
            &amp;
          </span>
          <h1
            style={{
              position: 'relative',
              zIndex: 1,
              margin: 0,
              fontFamily: 'var(--font-script), cursive',
              fontSize: '21cqw',
              lineHeight: 1.05,
              fontWeight: 400,
              color: '#284503',
              textAlign: 'center',
            }}
          >
            <span style={{ display: 'block' }}>Максим</span>
            <span style={{ display: 'block' }}>Надежда</span>
          </h1>
        </div>

        {/* Date and time */}
        <div
          style={{
            position: 'absolute',
            bottom: '11cqh',
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6cqh',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '3.5cqw',
              fontFamily: 'var(--font-forum), serif',
              fontSize: '12cqw',
              color: '#284503',
              lineHeight: 1,
            }}
          >
            <span>03</span>
            <span style={{ width: '1px', height: '1.1em', background: '#606D31' }} />
            <span>09</span>
            <span style={{ width: '1px', height: '1.1em', background: '#606D31' }} />
            <span>26</span>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-forum), serif',
              fontSize: '6.8cqw',
              color: '#606D31',
              lineHeight: 1,
            }}
          >
            четверг 15:00
          </span>
        </div>
      </div>

      {/* Olive rounded band bridging into the greeting section below */}
      <div
        className="card-olive round-top-80"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '60px',
        }}
      />
    </section>
  );
}
