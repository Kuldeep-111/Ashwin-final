"use client";

import { createObserverCircleReveal } from "@/utils/Circlereveal";
import { useRouter } from "next/navigation";
import React from "react";
// import { createObserverCircleReveal } from "@/utils/circleReveal";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  bgColor?: string;
  className?: string;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({
  href,
  children,
  bgColor = "#000",
  className,
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const overlay = document.getElementById(
      "page-transition-overlay"
    ) as HTMLDivElement;

    if (!overlay) {
      router.push(href);
      return;
    }

    overlay.style.pointerEvents = "auto";

    createObserverCircleReveal(overlay, bgColor, {
      onComplete: () => {
        overlay.style.pointerEvents = "none";
        router.push(href);
      },
    });
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default TransitionLink;
