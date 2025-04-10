export const dynamic = 'force-static';

import Features from "@/components/landing/Features";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import { ShowProvider } from "./context/ShowContext";

export const metadata = {
  title: "UddoktaHut - আপনার ব্যবসা ডিজিটাল করুন এক ক্লিকে",
  description: "UddoktaHut - বাংলাদেশের সোশ্যাল কমার্স উদ্যোক্তাদের জন্য অল-ইন-ওয়ান SaaS প্ল্যাটফর্ম। সহজেই অনলাইন দোকান খুলুন ও অর্ডার ম্যানেজ করুন।",
  openGraph: {
    title: "UddoktaHut - আপনার ব্যবসা ডিজিটাল করুন এক ক্লিকে",
    description: "UddoktaHut দিয়ে আপনার ফেসবুক ব্যবসা হোক আরো সহজ, স্মার্ট এবং অটোমেটেড।",
    url: "https://uddoktahut.com",
    siteName: "UddoktaHut",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UddoktaHut Landing Page"
      }
    ],
    locale: "bn_BD",
    type: "website"
  },
};

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <ShowProvider>
        <Header>
          <Hero />
          <Features />
        </Header>
      </ShowProvider>

    </main>
  );
}