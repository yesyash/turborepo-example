'use client'

import { Button } from "@repo/ui/button"

export const AlertButton = () => {
  return (
    <Button className="text-sm bg-yellow-600" onClick={() => window.alert("welcome to docs")}>Alert</Button>
  )
}