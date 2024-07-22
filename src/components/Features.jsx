import React from 'react';
import { CheckCircle } from '@mui/icons-material';

const features = [
    { title: 'High-quality streaming', icon: <CheckCircle className="text-green-500" /> },
    { title: 'Custom video player', icon: <CheckCircle className="text-green-500" /> },
    { title: 'Affordable pricing', icon: <CheckCircle className="text-green-500" /> },
    { title: 'Multi-device support', icon: <CheckCircle className="text-green-500" /> },
];

const Features = () => {
    return (
        <section className="my-12 py-8 bg-gray-100">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Our Features</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center space-y-4"
                    >
                        <div className="text-4xl text-green-500">{feature.icon}</div>
                        <h3 className="text-2xl font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600">Explore this feature to enhance your experience with our platform.</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
