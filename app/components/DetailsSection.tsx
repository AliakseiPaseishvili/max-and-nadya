import Image from 'next/image';
import IllustTile from './IllustTile';

export default function DetailsSection() {
  return (
    <section style={{ padding: '0 20px', marginBottom: '120px' }}>
      <div
        className="card-olive round-80"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4rem',
          padding: '112px 24px',
        }}
      >
        <h2 className="script-title script-title--light">Детали</h2>

        {/* Gifts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
          <h3 style={{ fontSize: 'clamp(1.7rem, 8vw, 2rem)', color: '#FFFBF0' }}>Подарки</h3>
          <p style={{ fontSize: 'clamp(1rem, 4.4vw, 1.15rem)', color: '#CAC9B2', lineHeight: 1.6 }}>
            Ваши улыбки и смех подарят нам незабываемое счастье в этот день, а пожелания
            в конвертах помогут осуществить наши мечты!
          </p>
          <IllustTile src="/figma/gifts.png" width="58%" align="center" />
        </div>

        {/* Flowers */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem', width: '100%' }}>
          <h3 style={{ fontSize: 'clamp(1.7rem, 8vw, 2rem)', color: '#FFFBF0' }}>Цветы</h3>
          <p style={{ fontSize: 'clamp(1rem, 4.4vw, 1.15rem)', color: '#CAC9B2', lineHeight: 1.6, textAlign: 'right' }}>
            Мы очень ценим вашу любовь и поддержку в этот особенный день.
          </p>
          <p style={{ fontSize: 'clamp(1rem, 4.4vw, 1.15rem)', color: '#CAC9B2', lineHeight: 1.6, textAlign: 'right' }}>
            К сожалению, у нас не будет возможности позаботиться о букетах, поэтому будем
            признательны, если букеты Вы замените на подарочные сертификаты в магазины
            (строительные, товары для дома и другие)
          </p>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
            <div className="illust-tile" style={{ width: '52%', aspectRatio: '322 / 373', borderRadius: '24px' }}>
              <Image
                src="/figma/flowers.png"
                alt=""
                width={240}
                height={278}
                unoptimized
                loading="eager"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>

        {/* Contacts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
          <h3 style={{ fontSize: 'clamp(1.7rem, 8vw, 2rem)', color: '#FFFBF0' }}>Контакты</h3>
          <p style={{ fontSize: 'clamp(1rem, 4.4vw, 1.15rem)', color: '#CAC9B2', lineHeight: 1.6 }}>
            Наш свадебный организатор Елена будет рада ответить на все ваши вопросы
          </p>
          <a
            href="tel:+375447250574"
            style={{ fontSize: 'clamp(1.15rem, 5vw, 1.4rem)', color: '#FFFBF0', letterSpacing: '0.02em' }}
          >
            +375 44 725 05 74
          </a>
          <IllustTile src="/figma/contacts.png" width="58%" align="flex-end" />
        </div>

        {/* P.S. */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem', width: '100%' }}>
          <h3 style={{ fontSize: 'clamp(1.7rem, 8vw, 2rem)', color: '#FFFBF0' }}>P. S.</h3>
          <p style={{ fontSize: 'clamp(1rem, 4.4vw, 1.15rem)', color: '#CAC9B2', lineHeight: 1.6, textAlign: 'right', whiteSpace: 'pre-line' }}>
            {'Будем очень признательны,\nесли Вы воздержитесь от криков «Горько».\nВедь поцелуй — это знак выражения чувств,\nи он не может быть по заказу.'}
          </p>
          <p style={{ fontSize: 'clamp(1rem, 4.4vw, 1.15rem)', color: '#CAC9B2', lineHeight: 1.6, textAlign: 'right' }}>
            Для тех, кто хотел бы испытать удачу, на торжестве будет проведена супер-игра,
            стоимость участия <span style={{ color: '#FFFBF0' }}>20 бел. руб.</span>
          </p>
          <p style={{ fontSize: 'clamp(1rem, 4.4vw, 1.15rem)', color: '#CAC9B2', lineHeight: 1.6, textAlign: 'right', whiteSpace: 'pre-line' }}>
            {'Будем рады видеть вас,\nно просим приходить без детей.\nСпасибо за понимание!'}
          </p>
          <IllustTile src="/figma/ps-ring.png" width="56%" align="flex-start" radius="50%" />
        </div>
      </div>
    </section>
  );
}
