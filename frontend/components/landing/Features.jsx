"use client";
import { motion } from "framer-motion";
import { ShoppingCart, Wallet, Truck } from "lucide-react";

const features = [
    {
        title: "এক ক্লিকে দোকান তৈরি",
        description: "Facebook প্রোডাক্ট থেকে শুরু করে সম্পূর্ণ অনলাইন শপ মাত্র এক ক্লিকে তৈরি করুন।",
        icon: ShoppingCart,
        color: "from-green-400 to-green-600",
    },
    {
        title: "অর্ডার অটোমেশন",
        description: "মেসেজ, কমেন্ট ও ইনবক্স থেকে অর্ডার নিজে নিজেই তৈরি হবে। সময় বাঁচান, ব্যবসা বাড়ান।",
        icon: Wallet,
        color: "from-purple-500 to-purple-700",
    },
    {
        title: "পেমেন্ট ও ডেলিভারি",
        description: "bKash/Nagad পেমেন্ট ও Pathao/RedX দিয়ে ডেলিভারি বুকিং—সব কিছু একসাথে।",
        icon: Truck,
        color: "from-blue-500 to-blue-700",
    },
];

export default function Features() {
    return (
        <section className="py-24 bg-white dark:bg-background px-6">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-4xl sm:text-5xl font-bold mb-12 text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    আমাদের অসাধারণ ফিচারসমূহ
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-border dark:border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300"
                            >
                                <div
                                    className={`w-14 h-14 mx-auto mb-6 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-white`}
                                >
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}