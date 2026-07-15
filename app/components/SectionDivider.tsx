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
        style={{ display: 'block', width: '100%', height: 'clamp(90px, 14vw, 200px)', objectFit: 'cover', marginTop: '-5%' }}
      />

      <Image
        src="/figma/divider-corner.png"
        alt=""
        width={110}
        height={156}
        style={{
          position: 'absolute',
          left: '-7%',
          bottom: '-10%',
          width: 'clamp(96px, 22vw, 260px)',
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
          right: '-7%',
          bottom: '-10%',
          width: 'clamp(96px, 22vw, 260px)',
          height: 'auto',
          transform: 'scaleX(-1) rotate(180deg)',
        }}
      />
    </div>
  );
}
