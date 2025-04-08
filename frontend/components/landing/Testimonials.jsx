"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
    {
        name: "রাবেয়া ইসলাম",
        feedback:
            "UddoktaHut দিয়ে আমার অনলাইন ব্যবসা ১০ গুণ সহজ হয়েছে! অটোমেশন ফিচারগুলো অসাধারণ।",
    },
    {
        name: "সোহেল রানা",
        feedback:
            "ডেলিভারি, পেমেন্ট, অর্ডার – সব এক জায়গায় পেয়ে আমি এখন আরও বেশি অর্ডার হ্যান্ডল করতে পারি।",
    },
    {
        name: "তানভীর হোসেন",
        feedback:
            "ফেসবুক থেকে প্রোডাক্ট ইম্পোর্ট করেই পুরো দোকান বানিয়ে ফেললাম। Highly recommended!",
    },
];

const swipeVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        rotate: direction > 0 ? 5 : -5,
    }),
    center: {
        x: 0,
        opacity: 1,
        rotate: 0,
    },
    exit: (direction) => ({
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        rotate: direction < 0 ? 5 : -5,
    }),
};

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const paginate = (dir) => {
        setDirection(dir);
        setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-28 bg-background px-6 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    className="text-4xl sm:text-5xl font-bold mb-16 text-foreground tracking-tight"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    ব্যবহারকারীদের মতামত
                </motion.h2>

                <div className="relative h-[240px]">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={index}
                            custom={direction}
                            variants={swipeVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                            className="absolute inset-0 bg-white/80 dark:bg-white/5 backdrop-blur-lg border border-border dark:border-white/10 p-8 rounded-2xl shadow-xl text-left"
                        >
                            <p className="text-muted-foreground italic mb-6 text-lg leading-relaxed">
                                “{testimonials[index].feedback}”
                            </p>
                            <h4 className="text-green-600 dark:text-green-400 font-semibold text-right">
                                — {testimonials[index].name}
                            </h4>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center mt-12 gap-4">
                    <button
                        onClick={() => paginate(-1)}
                        className="p-3 rounded-full bg-muted hover:bg-muted/80 dark:bg-white/10 dark:hover:bg-white/20 transition"
                    >
                        <ArrowLeft className="w-5 h-5 text-foreground" />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="p-3 rounded-full bg-muted hover:bg-muted/80 dark:bg-white/10 dark:hover:bg-white/20 transition"
                    >
                        <ArrowRight className="w-5 h-5 text-foreground" />
                    </button>
                </div>
            </div>
        </section>
    );
}