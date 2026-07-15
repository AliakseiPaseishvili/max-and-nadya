import Image from 'next/image';

/* Line-art illustration on a light tile so dark strokes read on the olive card */
export default function IllustTile({
  src,
  width,
  radius = '24px',
  align = 'center',
}: {
  src: string;
  width: string;
  radius?: string;
  align?: 'flex-start' | 'center' | 'flex-end';
}) {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: align }}>
      <div
        className="illust-tile"
        style={{ width, aspectRatio: '1 / 1', borderRadius: radius }}
      >
        <Image
          src={src}
          alt=""
          width={260}
          height={260}
          unoptimized
          loading="eager"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}
