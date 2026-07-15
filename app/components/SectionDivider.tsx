import Image from 'next/image';

/* Decorative divider that sits on the seam between two sections:
   a wavy deckled-edge line spanning the width, with a watercolor
   blossom branch tucked into each bottom corner (mirrored on the right). */
export default function SectionDivider() {
  return (
    <div
      aria-hidden
      style={{
        position: 'relative',
        zIndex: 20,
        width: '100%',
        margin: '-18px auto 0',
        lineHeight: 0,
        pointerEvents: 'none',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/figma/divider-border.svg"
        alt=""
        style={{ display: 'block', width: '100%', minHeight: '50px', height: 'auto' }}
      />

      <Image
        src="/figma/divider-corner.png"
        alt=""
        width={110}
        height={156}
        style={{
          position: 'absolute',
          left: '-45px',
          bottom: '-35px',
          width: 'clamp(88px, 26vw, 118px)',
          height: 'auto',
          transform: 'rotate(180deg)',
        }}
      />

      <Image
        src="/figma/divider-corner.png"
        alt=""
        width={110}
        height={156}
        style={{
          position: 'absolute',
          right: '-45px',
          bottom: '-35px',
          width: 'clamp(88px, 26vw, 118px)',
          height: 'auto',
          transform: 'scaleX(-1) rotate(180deg)',
        }}
      />
    </div>
  );
}
