import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contact" className="bg-cream-100 py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-block bg-gold-500/10 text-gold-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        Let's Connect
                    </span>
                    <h2 className="font-outfit text-3xl md:text-4xl font-bold text-warm-800 mb-4">
                        Book Your Appointment
                    </h2>
                    <p className="text-warm-600 text-lg">
                        Drop me a message or give me a call - I'd love to hear from you!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Contact Details */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="font-outfit text-xl font-semibold text-warm-800 mb-6">
                                Get In Touch
                            </h3>

                            <div className="space-y-5">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-gold-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-warm-800 font-semibold mb-1">Location</h4>
                                        <p className="text-warm-600">
                                            Cecil Hills, NSW 2171<br />
                                            <span className="text-sm">(Home-based - address provided on booking)</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 text-gold-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-warm-800 font-semibold mb-1">Available Hours</h4>
                                        <div className="text-warm-600 space-y-1 text-sm">
                                            <p>Monday - Friday: Flexible by appointment</p>
                                            <p>Saturday: 9:00 AM - 5:00 PM</p>
                                            <p>Sunday: By arrangement</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-gold-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-warm-800 font-semibold mb-1">Phone</h4>
                                        <a href="tel:+61234567890" className="text-warm-600 hover:text-gold-600 transition-colors">
                                            0412 345 678
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MessageCircle className="w-5 h-5 text-gold-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-warm-800 font-semibold mb-1">Text or WhatsApp</h4>
                                        <p className="text-warm-600 text-sm">
                                            Best way to reach me for quick bookings!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick booking CTA */}
                        <div className="bg-gold-500 p-6 rounded-2xl text-white">
                            <h4 className="font-outfit text-lg font-semibold mb-2">
                                Prefer to Text?
                            </h4>
                            <p className="text-white/90 mb-4 text-sm">
                                Just send me a message with your preferred date and time, and I'll get back to you ASAP!
                            </p>
                            <a
                                href="sms:+61412345678"
                                className="inline-flex items-center bg-white text-gold-600 px-5 py-2 rounded-full font-medium hover:bg-cream-50 transition-colors"
                            >
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Send a Text
                            </a>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-md">
                        <h3 className="font-outfit text-xl font-semibold text-warm-800 mb-6">
                            Send a Message
                        </h3>
                        <form className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-warm-700 mb-2 text-sm font-medium">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-cream-50 border border-cream-300 rounded-xl px-4 py-3 text-warm-800 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                    placeholder="What's your name?"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-warm-700 mb-2 text-sm font-medium">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full bg-cream-50 border border-cream-300 rounded-xl px-4 py-3 text-warm-800 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                    placeholder="0400 000 000"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-warm-700 mb-2 text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full bg-cream-50 border border-cream-300 rounded-xl px-4 py-3 text-warm-800 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all resize-none"
                                    placeholder="When would you like to book? Any particular style in mind?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gold-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-gold-600 transition-all duration-300 shadow-md hover:shadow-lg"
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
