import { Home, Heart, MapPin } from 'lucide-react'

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-cream-100 via-cream-50 to-cream-200"
        >
            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-48 h-48 bg-sage-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-left">
                        <div className="inline-flex items-center bg-sage-100 text-sage-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Home className="w-4 h-4 mr-2" />
                            Home-Based Barber in Cecil Hills
                        </div>

                        <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-warm-800 mb-4 leading-tight">
                            Your Local
                            <span className="text-gold-500 block">Community Barber</span>
                        </h1>

                        <p className="text-warm-600 text-lg md:text-xl mb-6 leading-relaxed max-w-lg">
                            Hey neighbour! I'm your friendly local barber right here in Cecil Hills. Quality cuts with a personal touch, from my home to yours.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8 text-warm-600 text-sm">
                            <span className="flex items-center">
                                <Heart className="w-4 h-4 mr-2 text-gold-500" />
                                Personal Service
                            </span>
                            <span className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2 text-gold-500" />
                                Cecil Hills Local
                            </span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center bg-gold-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Book Your Cut
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center border-2 border-warm-700 text-warm-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-warm-700 hover:text-white transition-all duration-300"
                            >
                                See Services
                            </a>
                        </div>

                        {/* Scripture reference - keeping the personal faith element */}
                        <p className="mt-8 text-warm-600 text-sm italic">
                            "For we are God's handiwork..." - Ephesians 2:10
                        </p>
                    </div>

                    {/* Right - Image/Logo area */}
                    <div className="relative">
                        <div className="bg-cream-300/50 rounded-3xl p-8 shadow-xl">
                            <img
                                src="/Logo-smaller.png"
                                alt="Masterpiece Barbers Logo"
                                className="w-full h-auto rounded-2xl"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=500&auto=format&fit=crop';
                                }}
                            />
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -bottom-4 -left-4 bg-white px-6 py-3 rounded-2xl shadow-lg">
                            <p className="text-warm-800 font-semibold">Serving Cecil Hills</p>
                            <p className="text-gold-500 text-sm">& surrounding areas</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
