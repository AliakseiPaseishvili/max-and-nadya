import Heart from './Heart';

export default function FooterMonogram() {
  return (
    <footer
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: '72px 20px',
        minHeight: '234px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <span
          style={{
            fontFamily: 'var(--font-script), cursive',
            fontSize: 'clamp(4rem, 22vw, 6rem)',
            color: 'rgba(207,117,126,0.6)',
            lineHeight: 0.8,
          }}
        >
          М
        </span>
        <span
          style={{
            fontFamily: 'var(--font-script), cursive',
            fontSize: 'clamp(3.6rem, 20vw, 5.5rem)',
            color: 'rgba(207,117,126,0.6)',
            lineHeight: 0.8,
            marginLeft: '-0.2em',
          }}
        >
          Н
        </span>
      </div>
      <Heart size={32} />
    </footer>
  );
}
