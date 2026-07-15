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
        padding: '112px 20px 0',
        marginTop: '140px',
      }}
    >
      <h2 className="script-title">Во сколько?</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
        {timeline.map((t) => (
          <div key={t.time} className="time-row">
            <Heart size={40} />
            <span className="time-row__time">{t.time}</span>
            <span className="time-row__desc">{t.desc}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
        <Photo src="/figma/timeline-1-75691b.png" alt="" ratio="584 / 290" />
        <Photo src="/figma/timeline-2-54f3ce.png" alt="" ratio="457 / 305" />
      </div>
    </section>
  );
}
