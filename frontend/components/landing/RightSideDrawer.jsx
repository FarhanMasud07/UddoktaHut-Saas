import Link from "next/link";

export default function RightSideDrawer({ isMenuOpen, toggleMenu }) {
    return (
        <div
            className={`fixed top-0 right-0 z-50 w-64 h-full bg-green-800 text-white 
        transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
        >
            <div className="p-6">
                <button onClick={toggleMenu} className="text-white mb-6">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <ul className="space-y-6">
                    <li><Link href="#" className="hover:text-green-300 transition-colors">Features</Link></li>
                    <li><Link href="#" className="hover:text-green-300 transition-colors">Pricing</Link></li>
                    <li><Link href="#" className="hover:text-green-300 transition-colors">About</Link></li>
                    <li><Link href="#" className="hover:text-green-300 transition-colors">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}