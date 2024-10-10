'use client';

import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div className="p-6">
      <div className="text-4xl font-bold pb-2 text-magenta">Docs</div>
      <Button className="text-sm bg-yellow-600" onClick={() => window.alert("welcome to docs")}>Alert</Button>
    </div>
  );
}
