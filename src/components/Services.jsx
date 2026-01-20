const Services = () => {
    const services = [
        { name: 'Skin Fade', price: 'POA', description: 'Sharp, clean fade tailored to your style' },
        { name: 'Classic Cut', price: 'POA', description: 'Timeless style for the modern gent' },
        { name: 'Beard Trim', price: 'POA', description: 'Shape up and keep it looking fresh' },
        { name: 'Hot Towel Shave', price: 'POA', description: 'The full relaxing experience' },
        { name: 'Hair & Beard Combo', price: 'POA', description: 'The complete package deal' },
        { name: 'Kids Cut', price: 'POA', description: 'Patient cuts for the little ones' },
    ]

    return (
        <section id="services" className="bg-cream-100 py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-block bg-gold-500/10 text-gold-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        What I Offer
                    </span>
                    <h2 className="font-outfit text-3xl md:text-4xl font-bold text-warm-800 mb-4">
                        Services & Pricing
                    </h2>
                    <p className="text-warm-600 text-lg">
                        Quality haircuts with honest, fair pricing
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-6 hover:bg-cream-50 transition-colors duration-300 ${index !== services.length - 1 ? 'border-b border-cream-200' : ''
                                }`}
                        >
                            <div className="mb-2 sm:mb-0">
                                <h3 className="font-outfit text-lg text-warm-800 font-semibold">
                                    {service.name}
                                </h3>
                                <p className="text-warm-600 text-sm">
                                    {service.description}
                                </p>
                            </div>
                            <span className="font-outfit text-xl text-gold-500 font-bold">
                                {service.price}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <p className="text-warm-600 text-sm mb-4">
                        *POA - Price on Application. Give me a call or text for current pricing!
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center bg-gold-500 text-white px-6 py-3 rounded-full font-medium hover:bg-gold-600 transition-all duration-300 shadow-md"
                    >
                        Get in Touch for Pricing
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Services
