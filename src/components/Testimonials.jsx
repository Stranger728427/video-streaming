import React from 'react';

const testimonials = [
    {
        quote: "This platform is amazing! High-quality streaming and easy to use.",
        author: "User A",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        quote: "I love the custom video player. It's so sleek and functional!",
        author: "User B",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        quote: "I love the custom video player. It's so sleek and functional!",
        author: "User C",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
];

const Testimonials = () => {
    return (
        <section className="my-10 px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
            <div className="flex flex-wrap gap-6 justify-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-80 h-80 p-6 bg-white bg-opacity-20 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between items-center text-center">
                        <img
                            src={testimonial.image}
                            alt={`Photo of ${testimonial.author}`}
                            className="w-24 h-24 rounded-full mb-4 object-cover"
                        />
                        <p className="text-lg text-gray-200 italic">{`"${testimonial.quote}"`}</p>
                        <p className="mt-4 text-right text-gray-300 font-semibold">- {testimonial.author}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
