import { Facebook, Instagram, Heart } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-warm-800 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center text-center space-y-6">
                    {/* Logo/Brand */}
                    <div>
                        <h3 className="font-outfit text-2xl font-semibold text-white mb-2">
                            Masterpiece <span className="text-gold-400">Barbers</span>
                        </h3>
                        <p className="text-cream-300 text-sm">
                            Your friendly local barber in Cecil Hills
                        </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="w-10 h-10 bg-warm-700 rounded-full flex items-center justify-center text-cream-300 hover:bg-gold-500 hover:text-white transition-all duration-300"
                            aria-label="Facebook"
                        >
                            <Facebook size={18} />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 bg-warm-700 rounded-full flex items-center justify-center text-cream-300 hover:bg-gold-500 hover:text-white transition-all duration-300"
                            aria-label="Instagram"
                        >
                            <Instagram size={18} />
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="w-24 h-px bg-warm-700"></div>

                    {/* Copyright & Made with love */}
                    <div className="text-cream-400 text-sm space-y-2">
                        <p>© {new Date().getFullYear()} Masterpiece Barbers. All rights reserved.</p>
                        <p className="flex items-center justify-center text-xs">
                            Made with <Heart className="w-3 h-3 mx-1 text-gold-400" /> in Cecil Hills
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
