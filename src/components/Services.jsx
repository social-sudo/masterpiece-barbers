const Services = () => {
    const services = [
        { name: 'Skin Fade', price: 'POA' },
        { name: 'Classic Cut', price: 'POA' },
        { name: 'Beard Sculpting', price: 'POA' },
        { name: 'Hot Towel Shave', price: 'POA' },
        { name: 'Hair & Beard Combo', price: 'POA' },
        { name: 'Kids Cut', price: 'POA' },
    ]

    return (
        <section id="services" className="bg-neutral-900 py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Services
                    </h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg">
                        Premium grooming services tailored to your style
                    </p>
                </div>

                <div className="bg-neutral-950 border border-neutral-800 rounded-sm overflow-hidden">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex justify-between items-center p-6 hover:bg-neutral-900 transition-colors duration-300 ${index !== services.length - 1 ? 'border-b border-neutral-800' : ''
                                }`}
                        >
                            <h3 className="font-inter text-lg text-white font-medium">
                                {service.name}
                            </h3>
                            <span className="font-playfair text-xl text-amber-500 font-semibold">
                                ${service.price}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <p className="text-gray-500 text-sm">
                        *POA - Price on Application. Contact us for current pricing.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services
