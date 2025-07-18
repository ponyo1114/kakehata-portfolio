"use client";

import dynamic from "next/dynamic";
import React from "react";

const SimplifyBGComponent = dynamic(
  () => import("./SimplifyBackground"),
  {
    ssr: false,
  }
);

const SimplifyBG = () => {
  return (
    <React.Suspense fallback={null}>
      <SimplifyBGComponent />
    </React.Suspense>
  );
};

export default SimplifyBG;
