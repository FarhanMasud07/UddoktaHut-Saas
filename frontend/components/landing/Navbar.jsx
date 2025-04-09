import Link from "next/link"

const Navbar = ({ toggleMenu }) => {
    return (
        <nav className="sticky top-4 bg-gradient-to-r backdrop-blur-lg bg-opacity-60 
        rounded-2xl p-6 z-20 from-green-600 to-green-800 
        dark:from-green-800 dark:to-green-600 shadow-lg
        container mx-auto flex items-center justify-between max-w-6xl"
        >
            <div className="text-xl font-bold">
                <Link href="/" className="text-white">UddoktaHut</Link>
            </div>

            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <nav className={`lg:flex space-x-6 hidden`}>
                <ul className="flex space-x-6">
                    <li><a href="#keyfeatures" className="hover:text-green-300 transition-colors">Features</a></li>
                    <li><a href="#" className="hover:text-green-300 transition-colors">Pricing</a></li>
                    <li><a href="#" className="hover:text-green-300 transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-green-300 transition-colors">Contact</a></li>
                </ul>
            </nav>
        </nav>
    )
}

export default Navbar