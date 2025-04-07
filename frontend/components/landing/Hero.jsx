"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-br from-green-100/60 via-white to-white dark:from-green-900/30 dark:via-muted dark:to-background">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-green-300/20 rounded-full blur-[120px] dark:bg-green-800/20" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                >
                    <Image
                        src="/favicon.ico"
                        alt="UddoktaHut Logo"
                        width={64}
                        height={64}
                        className="mx-auto"
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4"
                >
                    আপনার দোকান খুলুন, এক ক্লিকে
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                >
                    UddoktaHut – বাংলাদেশের উদ্যোক্তাদের জন্য একটি অল-ইন-ওয়ান সোশ্যাল কমার্স SaaS প্ল্যাটফর্ম। এক ক্লিকে প্রোডাক্ট ইম্পোর্ট, অর্ডার ম্যানেজ ও ডেলিভারি।
                </motion.p>

                <motion.a
                    href="/signup"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-green-500 hover:bg-green-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg transition"
                >
                    আজই শুরু করুন
                </motion.a>
            </div>
        </section>
    );
}
