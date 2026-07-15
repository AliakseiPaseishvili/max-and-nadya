import Image from 'next/image';

/* Reusable optimized photo that fills a sized, aspect-ratio container */
export default function Photo({
  src,
  alt,
  ratio,
  className,
  style,
  priority,
  objectFit = 'cover',
}: {
  src: string;
  alt: string;
  ratio: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  objectFit?: React.CSSProperties['objectFit'];
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
        style={{ objectFit }}
        priority={priority}
      />
    </div>
  );
}
