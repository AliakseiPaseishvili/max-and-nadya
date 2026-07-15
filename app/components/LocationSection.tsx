import Photo from './Photo';

const VENUE_ADDRESS =
  'Минская область, Узденский район, деревня Русакова, улица Русаковская, дом 14';
const MAP_URL = `https://yandex.ru/maps/?text=${encodeURIComponent(VENUE_ADDRESS)}`;

export default function LocationSection() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '23px',
        paddingTop: '64px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          padding: '0 20px',
        }}
      >
        <h2 className="script-title">Локация</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p className="body-text" style={{ color: '#606D31', textAlign: 'center', whiteSpace: 'pre-line' }}>
            {'Праздник пройдёт\nв усадьбе «Дольче Вита»'}
          </p>
          <p className="body-text" style={{ color: '#606D31', textAlign: 'center' }}>
            {VENUE_ADDRESS}
          </p>
        </div>
      </div>

      <Photo src="/figma/venue-794df8.png" alt="Усадьба «Дольче Вита»" ratio="390 / 259" objectFit="contain" />

      <div style={{ padding: '8px 20px', display: 'flex', justifyContent: 'center' }}>
        <a
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-button pill-button--light"
        >
          Открыть карту
        </a>
      </div>
    </section>
  );
}
