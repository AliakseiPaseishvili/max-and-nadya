import Image from 'next/image';

/* Reusable optimized photo that fills a sized, aspect-ratio container */
export default function Photo({
  src,
  alt,
  ratio,
  className,
  style,
  priority,
}: {
  src: string;
  alt: string;
  ratio: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}) {
  return (
    <div
      className={className}
      style={{ position: 'relative', width: '100%', aspectRatio: ratio, overflow: 'hidden', ...style }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 430px) 100vw, 430px"
        style={{ objectFit: 'cover' }}
        priority={priority}
      />
    </div>
  );
}
