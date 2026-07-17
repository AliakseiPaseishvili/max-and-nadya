import Heart from "./Heart";
import Image from "next/image";

export default function FooterMonogram() {
  return (
    <footer
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        padding: "72px 20px",
        minHeight: "234px",
      }}
    >
      <Heart size={42} />
      <Image src="/figma/m-n.png" alt="" width={156} height={167} />
    </footer>
  );
}
