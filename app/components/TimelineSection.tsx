import Heart from './Heart';
import Photo from './Photo';

const timeline = [
  { time: '15:00', desc: 'Изысканный аперитив:\nвремя приятных знакомств' },
  { time: '16:00', desc: 'Главное «Да»:\nцеремония обмена клятвами' },
  { time: '17:00', desc: 'Праздничный ужин\nв кругу самых близких' },
  { time: '22:30', desc: 'Сладкий аккорд:\nторжественное разрезание торта' },
];

export default function TimelineSection() {
  return (
    <section
      className="card-olive round-top-80"
      style={{
        background: '#FFFBF0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3rem',
        padding: '20px 0',
        marginTop: '140px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          width: '100%',
          backgroundImage: 'url(/figma/decor.png)',
          backgroundSize: '100% auto',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h2 className="script-title" style={{ marginTop: 'clamp(4rem, 20vw, 16rem)' }}>Во сколько?</h2>

        {timeline.map((t) => (
          <div key={t.time} className="time-row">
            <Heart size={40} />
            <span className="time-row__time">{t.time}</span>
            <span className="time-row__desc">{t.desc}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
        <Photo src="/figma/flowers-and-table.png" alt="" ratio="1170 / 870" />
      </div>
    </section>
  );
}
