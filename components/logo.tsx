"use client";

import Image from "next/image";
import { useState } from "react";

export function Logo({ className }: { className?: string }) {
  const [imageError, setImageError] = useState(false);

  // Se a imagem não existir, mostra o SVG fallback
  if (imageError) {
    return (
      <svg
        viewBox="0 0 100 120"
        className={className || "h-8 w-8"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Left side - lower segment */}
        <path
          d="M10 110 L10 70 L28 70 L28 82 L18 82 L18 110 Z"
          fill="#DC2626"
        />
        {/* Left side - upper segment */}
        <path
          d="M10 60 L10 8 L18 8 L18 50 L28 50 L28 60 Z"
          fill="#DC2626"
        />
        {/* Right side */}
        <path
          d="M38 110 L38 8 L90 8 L90 110 Z"
          fill="#DC2626"
        />
        {/* Inner triangle */}
        <path
          d="M28 60 L28 82 L78 82 L78 60 Z"
          fill="currentColor"
          className="text-background"
        />
      </svg>
    );
  }

  return (
    <Image
      src="/logo.png"
      alt="Logo Access Global Logistics"
      width={32}
      height={32}
      className={className || "h-8 w-8 object-contain"}
      priority
      onError={() => setImageError(true)}
      unoptimized
    />
  );
}

