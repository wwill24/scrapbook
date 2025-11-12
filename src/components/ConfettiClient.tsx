"use client";

import Confetti from "react-confetti";
import { useEffect, useState } from "react";

type Props = {
  numberOfPieces?: number;
  recycle?: boolean;
  colors?: string[];
};

export default function ConfettiClient({ numberOfPieces = 150, recycle = false, colors }: Props) {
  const [mounted, setMounted] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setMounted(true);
    const update = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!mounted) return null;

  return (
    <Confetti
      width={size.width}
      height={size.height}
      numberOfPieces={numberOfPieces}
      recycle={recycle}
      colors={colors}
    />
  );
}


