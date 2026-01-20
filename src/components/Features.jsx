import { Scissors, Heart, Clock, Star } from 'lucide-react'

const Features = () => {
    const features = [
        {
            icon: <Heart className="w-10 h-10 text-gold-500" />,
            title: 'Personal Attention',
            description: 'No rushing, no crowds. Just you, me, and getting your cut exactly how you want it. Every visit feels like catching up with a mate.',
        },
        {
            icon: <Scissors className="w-10 h-10 text-gold-500" />,
            title: 'Quality Cuts',
            description: 'From classic cuts to modern fades, I take pride in every haircut. Your satisfaction is what keeps me going!',
        },
        {
            icon: <Clock className="w-10 h-10 text-gold-500" />,
            title: 'Flexible Booking',
            description: 'Running a home-based business means I can work around your schedule. Before work, weekends - let\'s find a time that suits.',
        },
        {
            icon: <Star className="w-10 h-10 text-gold-500" />,
            title: 'Community Focused',
            description: 'I live and work right here in Cecil Hills. When you support my business, you\'re supporting a local family.',
        },
    ]

    return (
        <section id="about" className="bg-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block bg-gold-500/10 text-gold-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        Why Choose Local?
                    </span>
                    <h2 className="font-outfit text-3xl md:text-4xl font-bold text-warm-800 mb-4">
                        More Than Just a Haircut
                    </h2>
                    <p className="text-warm-600 text-lg max-w-2xl mx-auto">
                        When you visit Masterpiece Barbers, you're not just another customer - you're a neighbour and a friend.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-cream-50 p-8 rounded-2xl border border-cream-300 hover:border-gold-400 hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="mb-5 inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="font-outfit text-xl font-semibold text-warm-800 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-warm-600 leading-relaxed">
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
