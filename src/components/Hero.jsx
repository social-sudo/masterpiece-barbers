const Hero = () => {
    return (
        <section
            id="home"
            className="relative h-screen flex items-center justify-center"
            style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-neutral-950/75"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
                    Masterpiece Barbers
                </h1>
                <p className="font-playfair text-2xl md:text-3xl text-amber-500 mb-8 tracking-widest">
                    EST. CECIL HILLS
                </p>
                <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                    Where traditional craftsmanship meets modern style. Experience the art of grooming at its finest.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#contact"
                        className="bg-amber-500 text-neutral-950 px-8 py-4 rounded-sm font-semibold text-lg hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-amber-500/50 w-full sm:w-auto"
                    >
                        Book Appointment
                    </a>
                    <a
                        href="#services"
                        className="border-2 border-white text-white px-8 py-4 rounded-sm font-semibold text-lg hover:bg-white hover:text-neutral-950 transition-all duration-300 w-full sm:w-auto"
                    >
                        View Services
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-amber-500 rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero
