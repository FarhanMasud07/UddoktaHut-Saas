"use client"

import { useShow } from "@/app/context/ShowContext";
import Link from "next/link";

export default function Hero() {
    const { show } = useShow()
    return (
        <div className="container mx-auto px-6  my-12 md:my-28 flex items-center justify-between max-w-6xl flex-col lg:flex-row">
            <div className="max-w-lg space-y-6 text-center lg:text-left">
                <h1 className={`text-4xl font-extrabold ${show ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
                    Empowering Bangladeshi Entrepreneurs to Build Their Online Stores
                </h1>
                <p className={`text-lg ${show ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
                    Create, manage, and grow your business with ease. Get started now!
                </p>
                <div className={`mt-6 ${show ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
                    <Link
                        href="/signup"
                        className="bg-green-700 text-green-100  px-6 py-3 text-lg font-semibold rounded-lg shadow-lg
                     hover:bg-green-800 cursor-pointer transition-colors"
                    >
                        Get Started
                    </Link>
                </div>
            </div>

            <div className="max-w-md mt-12 lg:mt-0 lg:ml-6">
                <img
                    src="assets/images/entrepreneur-illustration.png"
                    alt="Entrepreneur with laptop and store"
                    className="mx-auto"
                />
            </div>
        </div>
    )
}