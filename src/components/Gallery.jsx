const Gallery = () => {
    const images = [
        {
            url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop',
            alt: 'Professional barber cut',
        },
        {
            url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop',
            alt: 'Beard grooming service',
        },
        {
            url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop',
            alt: 'Classic haircut style',
        },
        {
            url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2070&auto=format&fit=crop',
            alt: 'Modern fade haircut',
        },
    ]

    return (
        <section id="gallery" className="bg-neutral-950 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Work
                    </h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg">
                        A glimpse of the masterpieces we create every day
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-sm aspect-[4/3] group cursor-pointer"
                        >
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-neutral-950/0 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery
