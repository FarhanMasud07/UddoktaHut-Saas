"use client";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="relative overflow-hidden py-32 text-center bg-gradient-to-br from-green-500 to-green-600 text-white px-6">
            <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.3),transparent_70%)]" />
            <motion.h2
                className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                এখনই ব্যবসা অটোমেট করুন
            </motion.h2>
            <motion.p
                className="mb-8 text-lg text-white/90 max-w-xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
            >
                UddoktaHut দিয়ে খুব সহজেই চালান আপনার অনলাইন শপ—পেশাদার ও স্মার্টভাবে।
            </motion.p>
            <motion.a
                href="/signup"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
            >
                ফ্রি শুরু করুন
            </motion.a>
        </section>
    );
}