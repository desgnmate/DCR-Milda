import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";

export default function NotFound() { return <main className="not-found"><p className="eyebrow">404 / Signal lost</p><h1>Wrong<br />room.</h1><p>The page moved on before you arrived.</p><Link href="/" className="button button-light">Return to the dance floor <ArrowUpRight /></Link></main>; }
