import React, { Suspense } from "react";
import { HeroHomeContent } from "@/components/hero/HeroHomeContent";

export default function HomePage() {
  return (
    <main className="main">
      <Suspense fallback={<div className="text-center">Loading recipes...</div>}>
        <HeroHomeContent />
      </Suspense>
    </main>
  );
}
