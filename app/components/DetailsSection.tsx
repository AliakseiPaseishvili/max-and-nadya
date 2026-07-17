import Image from 'next/image';

export default function DetailsSection() {
  return (
    <section style={{ position: 'relative', marginBottom: '120px' }}>
       <Image
              src="/figma/divider-corner.png"
              alt=""
              width={110}
              height={156}
              className="details-divider-corner--top"
              style={{
                height: 'auto',
                transform: 'rotate(90deg)',
              }}
            />
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
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', paddingRight: '36%' }}>
          <h3 style={{ fontSize: 'clamp(1.7rem, 8vw, 2rem)', color: '#FFFBF0' }}>Подарки</h3>
          <p style={{ fontSize: '18px', color: '#CAC9B2', lineHeight: 1, letterSpacing: 0 }}>
            Ваши улыбки и смех подарят нам незабываемое счастье в этот день, а пожелания
            в конвертах помогут осуществить наши мечты!
          </p>
          <Image
            src="/figma/gifts.png"
            alt=""
            width={260}
            height={260}
            unoptimized
            aria-hidden
            style={{
              position: 'absolute',
              top: '30%',
              right: '-24px',
              transform: 'translateY(-50%)',
              width: 300,
              height: 'auto',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Flowers */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem', width: '100%', paddingLeft: '20%' }}>
          <h3 style={{ fontSize: 'clamp(1.7rem, 8vw, 2rem)', color: '#FFFBF0' }}>Цветы</h3>
          <p style={{ fontSize: '18px', color: '#CAC9B2', lineHeight: 1, letterSpacing: 0, textAlign: 'right' }}>
            Мы очень ценим вашу любовь и поддержку в этот особенный день.
          </p>
          <p style={{ fontSize: '18px', color: '#CAC9B2', lineHeight: 1, letterSpacing: 0, textAlign: 'right' }}>
            К сожалению, у нас не будет возможности позаботиться о букетах, поэтому будем
            признательны, если букеты Вы замените на подарочные сертификаты в магазины
            (строительные, товары для дома и другие)
          </p>
          <Image
            src="/figma/flowers.png"
            alt=""
            width={322}
            height={373}
            unoptimized
            aria-hidden
            className="details-illust--flowers"
            style={{
              position: 'absolute',
              left: '-24px',
              transform: 'translateY(-50%)',
              width: 200,
              height: 'auto',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Contacts */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', paddingRight: '42%' }}>
          <h3 style={{ fontSize: 'clamp(1.7rem, 8vw, 2rem)', color: '#FFFBF0' }}>Контакты</h3>
          <p style={{ fontSize: '18px', color: '#CAC9B2', lineHeight: 1, letterSpacing: 0 }}>
            Наш свадебный организатор Елена будет рада ответить на все ваши вопросы
          </p>
          <a
            href="tel:+375447250574"
            style={{ fontSize: 'clamp(1.15rem, 5vw, 1.4rem)', color: '#FFFBF0', letterSpacing: '0.02em' }}
          >
            +375 44 725 05 74
          </a>
          <Image
            src="/figma/contacts.png"
            alt=""
            width={260}
            height={260}
            unoptimized
            aria-hidden
            style={{
              position: 'absolute',
              top: '48%',
              right: '-24px',
              transform: 'translateY(-50%)',
              width: 180,
              height: 'auto',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* P.S. */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem', width: '100%', paddingLeft: '20%' }}>
          <h3 style={{ fontSize: 'clamp(1.7rem, 8vw, 2rem)', color: '#FFFBF0' }}>P. S.</h3>
          <p style={{ fontSize: '18px', color: '#CAC9B2', lineHeight: 1, letterSpacing: 0, textAlign: 'right', whiteSpace: 'pre-line' }}>
            {'Будем очень признательны,\nесли Вы воздержитесь от криков «Горько».\nВедь поцелуй — это знак выражения чувств,\nи он не может быть по заказу.'}
          </p>
          <p style={{ fontSize: '18px', color: '#CAC9B2', lineHeight: 1, letterSpacing: 0, textAlign: 'right' }}>
            Для тех, кто хотел бы испытать удачу, на торжестве будет проведена супер-игра,
            стоимость участия <span style={{ color: '#FFFBF0' }}>20 бел. руб.</span>
          </p>
          <p style={{ fontSize: '18px', color: '#CAC9B2', lineHeight: 1, letterSpacing: 0, textAlign: 'right', whiteSpace: 'pre-line' }}>
            {'Будем рады видеть вас,\nно просим приходить без детей.\nСпасибо за понимание!'}
          </p>
          <Image
            src="/figma/ps-ring.png"
            alt=""
            width={260}
            height={260}
            unoptimized
            aria-hidden
            style={{
              position: 'absolute',
              top: '10%',
              left: '-24px',
              transform: 'translateY(-50%)',
              width: 300,
              height: 'auto',
              pointerEvents: 'none',
            }}
          />
           <Image
            src="/figma/stars.png"
            alt=""
            width={260}
            height={260}
            unoptimized
            aria-hidden
            style={{
              position: 'absolute',
              bottom: '10%',
              left: '-24px',
              transform: 'translateY(50%)',
              width: 150,
              height: 'auto',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
       <Image
              src="/figma/divider-corner.png"
              alt=""
              width={110}
              height={156}
              className="details-divider-corner--bottom"
              style={{
                height: 'auto',
                transform: 'rotate(270deg)',
              }}
            />
    </section>
  );
}
