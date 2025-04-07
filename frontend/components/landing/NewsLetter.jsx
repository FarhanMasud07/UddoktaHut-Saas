"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Subscribed with ${email}`);
        setEmail("");
    };

    return (
        <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-white via-muted to-white dark:from-background dark:via-muted dark:to-background">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-300/20 dark:bg-green-800/20 rounded-full blur-[120px] z-0"></div>

            <div className="relative z-10 max-w-xl mx-auto text-center">
                <motion.h2
                    className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    📬 আমাদের আপডেটে যুক্ত হোন
                </motion.h2>
                <motion.p
                    className="text-muted-foreground mb-10 text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    নতুন ফিচার, অফার ও গাইড পেতে ইমেইলে যুক্ত হোন।
                </motion.p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                    <div className="relative w-full sm:max-w-xs">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <input
                            type="email"
                            placeholder="আপনার ইমেইল"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-full border border-border dark:border-white/10 bg-white/80 dark:bg-white/5 text-sm text-gray-900 dark:text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition shadow-md"
                    >
                        সাবস্ক্রাইব
                    </button>
                </form>
            </div>
        </section>
    );
}