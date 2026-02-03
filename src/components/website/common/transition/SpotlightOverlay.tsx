"use client"
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const SpotlightOverlay: React.FC<{ initialSize?: number; duration?: number }> = ({
  initialSize = 0,
  duration = 2,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [finalSize, setFinalSize] = useState(0);

  // Calculate max radius to cover the screen
  useEffect(() => {
    const maxRadius = Math.hypot(window.innerWidth, window.innerHeight);
    setFinalSize(maxRadius);
  }, []);

  // Animate with GSAP
  useEffect(() => {
    if (finalSize > 0 && overlayRef.current) {
      let hole = { size: initialSize }; // GSAP animates object properties
      gsap.to(hole, {
        size: finalSize,
        duration: duration,
        ease: "power2.inOut",
        onUpdate: () => {
          if (overlayRef.current) {
            overlayRef.current.style.background = `radial-gradient(circle ${hole.size}px at center, rgba(254,247,240,0) 0%, rgba(254,247,240,0) ${hole.size}px, #fef7f0 ${hole.size}px, #fef7f0 100%)`;
          }
        },
      });
    }
  }, [finalSize, initialSize, duration]);

  return <div ref={overlayRef} className="fixed inset-0 z-50 pointer-events-none" />;
};

export default SpotlightOverlay;

