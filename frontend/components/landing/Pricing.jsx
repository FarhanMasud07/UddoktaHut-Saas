"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
    {
        name: "ফ্রি প্ল্যান",
        price: "৳০",
        features: [
            "সীমিত প্রোডাক্ট ইম্পোর্ট",
            "অর্ডার ম্যানুয়ালি ম্যানেজ",
            "বেসিক সাপোর্ট",
        ],
        gradient: "from-gray-200 to-gray-100 dark:from-muted dark:to-background",
    },
    {
        name: "প্রিমিয়াম প্ল্যান",
        price: "৳৭৯৯ /মাস",
        features: [
            "অটো অর্ডার জেনারেশন",
            "ডেলিভারি ও পেমেন্ট অটোমেশন",
            "AI রিটার্গেটিং ও ইনভয়েস",
            "কাস্টম ডোমেইন ও রিপোর্টিং",
        ],
        gradient: "from-green-400 to-green-600",
    },
];

export default function Pricing() {
    return (
        <section className="py-24 bg-background dark:bg-muted px-6">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-4xl sm:text-5xl font-bold mb-12 text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    মূল্য নির্ধারণ
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="rounded-2xl p-8 shadow-xl border border-border dark:border-white/10 backdrop-blur-lg bg-white/80 dark:bg-white/5 text-left"
                        >
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                                {plan.name}
                            </h3>
                            <p className="text-3xl font-bold text-green-600 dark:text-green-400 mb-6">
                                {plan.price}
                            </p>
                            <ul className="space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                        <Check className="w-5 h-5 text-green-500" /> {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
