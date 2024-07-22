import React, { useState } from 'react';

const Pricing = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const plans = [
        {
            name: 'Free',
            price: '$0/month',
            features: ['Basic support', 'Access to all features'],
            highlighted: false,
        },
        {
            name: 'Basic',
            price: '$9.99/month',
            features: ['Priority support', 'Access to premium features', 'Ad-free experience'],
            highlighted: false,
        },
        {
            name: 'Premium',
            price: '$19.99/month',
            features: ['24/7 support', 'Access to all features', 'Early access to new features', 'Customizable settings'],
            highlighted: true,
        }
    ];

    const handleSelect = (planName) => {
        setSelectedPlan(planName);
    }

    return (
        <section className="my-16 py-12 bg-gray-100">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Pricing Plans</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`w-full max-w-xs bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl p-6 text-center ${selectedPlan === plan.name ? 'border-2 border-blue-500' : ''}`}
                        onClick={() => handleSelect(plan.name)}
                    >
                        <h3 className="text-3xl font-bold mb-2 text-gray-800">{plan.name}</h3>
                        <p className="text-2xl font-semibold mb-4 text-gray-700">{plan.price}</p>
                        <ul className="list-disc list-inside mb-4 text-left mx-auto max-w-xs">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="text-gray-600">{feature}</li>
                            ))}
                        </ul>
                        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors text-lg font-semibold">
                            Choose Plan
                        </button>
                    </div>
                ))}
            </div>
            {selectedPlan && <div className="text-center mt-8 text-lg text-gray-700">You have selected the {selectedPlan} plan.</div>}
        </section>
    );
};

export default Pricing;
