import LoveSlideshow from "@/components/LoveSlideshow";
import ConfettiClient from "@/components/ConfettiClient";

export default function Home() {
  return (
    <>
      <ConfettiClient recycle={false} numberOfPieces={150} colors={["#ff6da0", "#ffbdd4", "#ffe4ef", "#ffc0cb"]} />
      <LoveSlideshow />
    </>
  );
}
