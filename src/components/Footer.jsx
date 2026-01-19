import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-neutral-950 border-t border-neutral-800 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Copyright */}
                    <div className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Masterpiece Barbers. All rights reserved.
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-6">
                        <a
                            href="#"
                            className="text-gray-500 hover:text-amber-500 transition-colors duration-300"
                            aria-label="Facebook"
                        >
                            <Facebook size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-amber-500 transition-colors duration-300"
                            aria-label="Instagram"
                        >
                            <Instagram size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-amber-500 transition-colors duration-300"
                            aria-label="Twitter"
                        >
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
