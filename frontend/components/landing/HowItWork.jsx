"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
    "ফেসবুক লগইন দিয়ে রেজিস্ট্রেশন করুন।",
    "আপনার পেজ থেকে প্রোডাক্ট ইম্পোর্ট করুন।",
    "মেসেজ থেকে অর্ডার অটোমেটেডভাবে তৈরি হবে।",
    "পেমেন্ট নিন, ডেলিভারি বুক করুন—all in one।",
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-muted/40 dark:bg-muted px-6">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    className="text-4xl sm:text-5xl font-bold mb-12 text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    কিভাবে কাজ করে?
                </motion.h2>

                <ol className="relative border-l border-border dark:border-muted max-w-2xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="mb-10 ml-6"
                        >
                            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-green-500 rounded-full ring-8 ring-background dark:ring-muted text-white">
                                <CheckCircle className="w-4 h-4" />
                            </span>
                            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                                {step}
                            </h3>
                        </motion.li>
                    ))}
                </ol>
            </div>
        </section>
    );
}