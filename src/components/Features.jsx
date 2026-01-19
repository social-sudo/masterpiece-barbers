import { Scissors, Sparkles, User } from 'lucide-react'

const Features = () => {
    const features = [
        {
            icon: <Scissors className="w-12 h-12 text-amber-500" />,
            title: 'Expert Cuts',
            description: 'Our master barbers bring years of experience and precision to every cut, ensuring you leave looking sharp and confident.',
        },
        {
            icon: <Sparkles className="w-12 h-12 text-amber-500" />,
            title: 'Hot Towel Shaves',
            description: 'Experience the ultimate in relaxation with our traditional hot towel shave service using premium products.',
        },
        {
            icon: <User className="w-12 h-12 text-amber-500" />,
            title: 'Beard Grooming',
            description: 'From sculpting to conditioning, we provide complete beard care to keep you looking your absolute best.',
        },
    ]

    return (
        <section id="about" className="bg-neutral-950 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
                        The Masterpiece Experience
                    </h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-neutral-900 p-8 rounded-sm border border-neutral-800 hover:border-amber-500 transition-all duration-300 group"
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="font-playfair text-2xl font-semibold text-white mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
