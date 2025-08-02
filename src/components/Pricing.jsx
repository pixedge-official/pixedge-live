import React from 'react';

const pricingPlans = [
  {
    name: "Starter",
    price: "₹1,999/mo",
    features: [
      "Up to 5 camera feeds",
      "Basic safety alerts",
      "Email support",
      "Dashboard access"
    ],
    highlighted: false
  },
  {
    name: "Professional",
    price: "₹4,999/mo",
    features: [
      "Up to 20 camera feeds",
      "Real-time AI detection",
      "PPE & zone intrusion alerts",
      "Priority support"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited camera feeds",
      "Custom AI model tuning",
      "Integration support",
      "Dedicated account manager"
    ],
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-6">💰 Pricing</h2>
        <p className="text-gray-600 text-lg mb-12">Choose a plan that fits your safety needs and scale.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className={`border rounded-xl p-6 shadow-sm transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-indigo-50 border-indigo-600 shadow-md scale-105'
                  : 'bg-gray-50 hover:shadow-md hover:scale-105'
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold text-indigo-600 mb-4">{plan.price}</p>
              <ul className="text-gray-600 space-y-2 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✅ {feature}</li>
                ))}
              </ul>
              <button className={`mt-6 w-full py-2 rounded-lg text-white font-semibold ${
                plan.highlighted ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-700 hover:bg-gray-800'
              }`}>
                {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
