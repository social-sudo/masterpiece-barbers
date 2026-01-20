import { Camera } from 'lucide-react'

const Gallery = () => {
    const images = [
        {
            url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop',
            alt: 'Fresh fade haircut',
        },
        {
            url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop',
            alt: 'Beard grooming',
        },
        {
            url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop',
            alt: 'Classic haircut',
        },
        {
            url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2070&auto=format&fit=crop',
            alt: 'Modern fade style',
        },
    ]

    return (
        <section id="gallery" className="bg-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-flex items-center bg-gold-500/10 text-gold-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Camera className="w-4 h-4 mr-2" />
                        Recent Work
                    </span>
                    <h2 className="font-outfit text-3xl md:text-4xl font-bold text-warm-800 mb-4">
                        See the Results
                    </h2>
                    <p className="text-warm-600 text-lg">
                        Some of the fresh cuts walking out of my home studio
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-2xl aspect-square group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-warm-800/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-medium text-sm">{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <p className="text-warm-600 mb-4">
                        Follow me on Instagram for more cuts!
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center text-gold-600 font-medium hover:text-gold-700 transition-colors"
                    >
                        @masterpiecebarbers
                        <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Gallery
