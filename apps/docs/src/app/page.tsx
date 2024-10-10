'use client';

import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div className="p-6">
      <div className="text-4xl font-bold pb-2">Document app</div>
      <Button onClick={() => console.log('documents')}>hello button</Button>
    </div>
  );
}
