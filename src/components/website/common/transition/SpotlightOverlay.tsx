import React from "react";

const SpotlightOverlay = ({ holeSize = 150 }) => {
  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none"
      style={{
        background: `radial-gradient(circle ${holeSize}px at center, rgba(254,247,240,0) 0%, rgba(254,247,240,0) ${holeSize}px, #fef7f0 ${holeSize}px, #fef7f0 100%)`,
      }}
    />
  );
};

export default SpotlightOverlay;
