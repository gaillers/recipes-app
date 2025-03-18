"use client";

import React, { Suspense } from "react";
import { HeroHomeContent } from "@/components/hero/HeroHomeContent";

export default function HomePage() {
  return (
    <Suspense fallback={<div className="text-center">Loading recipes...</div>}>
      <HeroHomeContent />
    </Suspense>
  );
}
