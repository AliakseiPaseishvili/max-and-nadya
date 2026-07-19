import Photo from './Photo';

export default function GreetingSection() {
  return (
    <section
      className="card-olive"
      style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3rem',
        padding: '48px 0 120px',
      }}
    >
      <div
        style={{ position: 'relative', width: '75%', maxWidth: '294px' }}
      >
        <Photo
          src="/figma/greeting-21bea4.png"
          alt="Максим и Надежда"
          ratio="294 / 357"
          style={{ borderRadius: '52px 52px 0 0' }}
          priority
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '90px',
            background: 'linear-gradient(to top, #505521, transparent)',
            pointerEvents: 'none',
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          padding: '0 20px',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(1.7rem, 8vw, 2rem)',
            color: '#FFFBF0',
            textAlign: 'center',
          }}
        >
          Дорогие и любимые!
        </h1>
        <p
          className="body-text"
          style={{ color: '#CAC9B2', textAlign: 'center' }}
        >
          Наша свадьба без вас не будет такой счастливой, уютной и весёлой!
          Приглашаем отметить этот день вместе с нами!
        </p>
      </div>
    </section>
  );
}
