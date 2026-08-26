"use client";

import { ArrowDown } from "@/components/icons";

export function PrintButton() {
  return <button className="button" type="button" onClick={() => window.print()}>Save as PDF <ArrowDown /></button>;
}
