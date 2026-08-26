import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@/components/icons";

export const metadata: Metadata = { title: "Privacy" };
export default function PrivacyPage() { return <main id="main" className="legal-page section-pad"><p className="eyebrow">Legal / 01</p><h1>Privacy</h1><div><p>This website does not store booking form submissions. When you submit an enquiry, your device opens your email application and sends the information only if you choose to send it.</p><p>External music, ticketing, and social platforms may process usage data under their own privacy policies when you follow an outbound link.</p><p>For privacy questions, contact <a href="mailto:dcrmilda@gmail.com">dcrmilda@gmail.com</a>.</p><Link href="/" className="icon-link"><ArrowLeft /> Return home</Link></div></main>; }
