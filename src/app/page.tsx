"use client";

import React, { Suspense } from "react";
import { HeroContent } from "@/components/hero/HeroContent";

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading recipes...</div>}>
      <HeroContent />
    </Suspense>
  );
}
