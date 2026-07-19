import { prisma } from '@/app/lib/prisma';

export const metadata = {
  title: 'Ответы гостей · Максим & Надя',
};

// Always read fresh data from the database on each request.
export const dynamic = 'force-dynamic';

const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
  day: 'numeric',
  month: 'long',
  hour: '2-digit',
  minute: '2-digit',
});

const cellStyle: React.CSSProperties = {
  padding: '0.85rem 1rem',
  borderBottom: '1px solid #CACCB0',
  textAlign: 'left',
  fontSize: 'clamp(0.9rem, 3.5vw, 1.05rem)',
};

const headStyle: React.CSSProperties = {
  ...cellStyle,
  color: '#505521',
  fontWeight: 400,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  fontSize: 'clamp(0.75rem, 3vw, 0.85rem)',
};

export default async function ResultsPage() {
  const rsvps = await prisma.rsvp.findMany({ orderBy: { createdAt: 'desc' } });

  const going = rsvps.filter((r) => r.attending === 'yes').length;

  return (
    <main
      style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '860px',
        margin: '0 auto',
        padding: 'clamp(2.5rem, 8vw, 5rem) 1.25rem',
        fontFamily: 'var(--font-forum), serif',
        color: '#284503',
      }}
    >
      <h1 style={{ fontSize: 'clamp(1.8rem, 8vw, 2.6rem)', marginBottom: '0.5rem' }}>
        Ответы гостей
      </h1>
      <p style={{ color: '#606D31', marginBottom: '2.5rem' }}>
        Всего ответов: {rsvps.length} · Придут: {going}
      </p>

      {rsvps.length === 0 ? (
        <p style={{ color: '#606D31', fontSize: 'clamp(1rem, 4vw, 1.15rem)' }}>
          Пока нет ни одного ответа.
        </p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={headStyle}>Имя и фамилия</th>
                <th style={headStyle}>Электронная почта</th>
                <th style={headStyle}>Ответ</th>
                <th style={headStyle}>Когда</th>
              </tr>
            </thead>
            <tbody>
              {rsvps.map((r) => (
                <tr key={r.id}>
                  <td style={cellStyle}>{r.name}</td>
                  <td style={cellStyle}>{r.email}</td>
                  <td style={cellStyle}>
                    {r.attending === 'yes' ? 'Буду' : 'Не смогу'}
                  </td>
                  <td style={cellStyle}>{dateFormatter.format(r.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
