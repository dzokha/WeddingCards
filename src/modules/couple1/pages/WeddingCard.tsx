import React from "react";
import FlowerAnimation from "@/components/ui/FlowerAnimation";
import useMusic from "@/hooks/useMusic";

export default function WeddingCard() {
  const { playing, toggle } = useMusic("/music.mp3");

  return (
    <div className="wedding-card">
      <FlowerAnimation />
      <h1 className="text-4xl font-serif text-pink-600">Hải ❤ Trang</h1>
      <p className="text-lg mt-4">Trân trọng kính mời bạn đến dự lễ cưới của chúng tôi</p>
      <button onClick={toggle}>
        {playing ? "⏸ Dừng nhạc" : "▶ Phát nhạc"}
      </button>
    </div>
  );
}
