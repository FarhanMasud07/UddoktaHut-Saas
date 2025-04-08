import Link from "next/link"

const Navbar = () => {
    return (
        <header className="relative bg-gradient-to-br from-green-500 via-emerald-600 to-green-700 text-white dark:bg-gradient-to-br dark:from-green-900 dark:via-emerald-950 dark:to-green-900">
            <nav className="sticky top-0 z-50 backdrop-blur-md bg-green-900/60 dark:bg-green-950/80 border-b border-white/10 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold">
                        UddoktaHut
                    </Link>
                    <div className="space-x-6 hidden sm:block">
                        <Link href="#features" className="hover:text-white dark:hover:text-green-300 transition">ফিচার</Link>
                        <Link href="#pricing" className="hover:text-white dark:hover:text-green-300 transition">মূল্য</Link>
                        <Link href="#testimonials" className="hover:text-white dark:hover:text-green-300 transition">মতামত</Link>
                        <Link href="#newsletter" className="hover:text-white dark:hover:text-green-300 transition">যোগ দিন</Link>
                    </div>
                    <Link
                        href="/register"
                        className="bg-white text-green-700 px-5 py-2 rounded-full font-semibold transition hover:bg-gray-100 dark:bg-green-500 dark:text-white dark:hover:bg-green-600"
                    >
                        Get Started
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar