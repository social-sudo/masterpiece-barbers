import { useState } from 'react'
import { Menu, X, Scissors } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-100/95 backdrop-blur-sm shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Scissors className="w-6 h-6 text-gold-500" />
                        <div className="flex-shrink-0">
                            <h1 className="text-xl md:text-2xl font-outfit font-semibold text-warm-800">
                                Masterpiece <span className="text-gold-500">Barbers</span>
                            </h1>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-warm-700 hover:text-gold-600 transition-colors duration-300 font-outfit text-sm font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="bg-gold-500 text-white px-5 py-2 rounded-full font-medium hover:bg-gold-600 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            Book Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-warm-700 hover:text-gold-600 transition-colors p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-cream-50 border-t border-cream-300">
                    <div className="px-4 pt-3 pb-4 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-warm-700 hover:text-gold-600 hover:bg-cream-200 transition-colors duration-300 font-outfit font-medium py-2 px-3 rounded-lg"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="block text-center bg-gold-500 text-white px-5 py-3 rounded-full font-medium hover:bg-gold-600 transition-all duration-300 mt-3"
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
