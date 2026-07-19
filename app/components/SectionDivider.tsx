import Image from "next/image";

/* Decorative divider that sits on the seam between two sections:
   a wavy deckled-edge line spanning the width, with a watercolor
   blossom branch tucked into each bottom corner (mirrored on the right). */
export default function SectionDivider() {
  return (
    <div
      aria-hidden
      style={{
        position: "relative",
        zIndex: 20,
        width: "100%",
        margin: "-18px auto 0",
        lineHeight: 0,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(90px, 14vw, 200px)",
          marginTop: "-5%",
        }}
      >
        <Image
          src="/figma/divider-border.svg"
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/figma/divider-corner.png"
          alt=""
          width={110}
          height={156}
          className="divider-corner divider-corner--left"
          style={{ transform: "rotate(180deg)" }}
        />
        <Image
          src="/figma/divider-corner.png"
          alt=""
          width={110}
          height={156}
          className="divider-corner divider-corner--right"
          style={{ transform: "scaleX(-1) rotate(180deg)" }}
        />
      </div>
    </div>
  );
}
