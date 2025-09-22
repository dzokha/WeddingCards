import React from "react";
import "./FlowerAnimation.css";

export default function FlowerAnimation() {
  return (
    <div className="flower-container">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="flower">🌸</div>
      ))}
    </div>
  );
}
