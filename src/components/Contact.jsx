import { MapPin, Clock, Phone, Mail } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contact" className="bg-neutral-900 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
                        Visit Us
                    </h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Location Details */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-playfair text-2xl font-semibold text-white mb-8">
                                Get In Touch
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Location</h4>
                                        <p className="text-gray-400">
                                            Shop 3, Cecil Hills Shopping Village<br />
                                            Cecil Hills, NSW 2171
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Clock className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Opening Hours</h4>
                                        <div className="text-gray-400 space-y-1">
                                            <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                                            <p>Saturday: 9:00 AM - 6:00 PM</p>
                                            <p>Sunday: 10:00 AM - 5:00 PM</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Phone className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Phone</h4>
                                        <a href="tel:+61234567890" className="text-gray-400 hover:text-amber-500 transition-colors">
                                            (02) 1234 5678
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Mail className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Email</h4>
                                        <a href="mailto:info@masterpiecebarbers.com.au" className="text-gray-400 hover:text-amber-500 transition-colors">
                                            info@masterpiecebarbers.com.au
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="bg-neutral-950 p-8 rounded-sm border border-neutral-800">
                        <h3 className="font-playfair text-2xl font-semibold text-white mb-6">
                            Send Us a Message
                        </h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-neutral-900 border border-neutral-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-neutral-900 border border-neutral-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full bg-neutral-900 border border-neutral-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                                    placeholder="Tell us how we can help..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-amber-500 text-neutral-950 px-6 py-3 rounded-sm font-semibold hover:bg-amber-400 transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
