import Image from 'next/image';
import Photo from './Photo';

const dressGallery = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `/figma/dress-${n}.png`);
// filenames on disk include crop suffixes for a few thumbs
const dressSrc: Record<number, string> = {
  3: '/figma/dress-3-55ad1f.png',
  5: '/figma/dress-5-4fc3ff.png',
};

export default function DressCodeSection() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        padding: '96px 0',
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
        <h2 className="script-title">Дресс-код</h2>
        <p className="body-text" style={{ color: '#606D31', textAlign: 'center' }}>
          Мы очень трепетно готовим наше торжество и будем благодарны, если Вы
          поддержите его цветовую гамму и стилистику в своих образах
        </p>
        <p className="body-text" style={{ color: '#606D31', textAlign: 'center' }}>
          Пожалуйста, воздержитесь от{' '}
          <span style={{ textDecoration: 'underline' }}>белого и чёрного</span> цвета
        </p>
      </div>

      {/* palette gallery */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          padding: '0 20px',
        }}
      >
        {dressGallery.map((_, idx) => {
          const n = idx + 1;
          const src = dressSrc[n] ?? `/figma/dress-${n}.png`;
          return (
            <div
              key={n}
              style={{
                position: 'relative',
                width: '63px',
                height: '63px',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <Image src={src} alt="" fill sizes="63px" style={{ objectFit: 'cover' }} />
            </div>
          );
        })}
      </div>

      {/* wide reference photos */}
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full md:w-1/2">
          <Photo src="/figma/dress-wide-1-6f103e.png" alt="" ratio="329 / 184" />
        </div>
        <div className="w-full md:w-1/2">
          <Photo src="/figma/dress-wide-2-55282d.png" alt="" ratio="329 / 189" />
        </div>
      </div>
    </section>
  );
}
