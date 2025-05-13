import React, { useEffect } from 'react';
import { ClipboardList, Utensils, DollarSign, Gift, Heart } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services - ShoppingListApp';
  }, []);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-blue-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
              Discover the full suite of powerful tools and services designed to make your shopping experience better than ever.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Core Services"
            subtitle="Our core services are designed to simplify your shopping experience from planning to checkout."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <ClipboardList className="h-24 w-24 text-blue-800" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">List Management</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-800 font-bold">•</span>
                    <span>Create multiple shopping lists for different purposes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-800 font-bold">•</span>
                    <span>Share lists with family members and roommates</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-800 font-bold">•</span>
                    <span>Organize items by categories or stores</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-800 font-bold">•</span>
                    <span>Save favorite items for quick addition</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <Utensils className="h-24 w-24 text-blue-800" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Meal Planning</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-800 font-bold">•</span>
                    <span>Get recipe suggestions based on items you have</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-800 font-bold">•</span>
                    <span>Plan meals for the week with automatic list creation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-800 font-bold">•</span>
                    <span>Nutritional information and dietary filters</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-800 font-bold">•</span>
                    <span>Prevent food waste by suggesting recipes for expiring items</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <DollarSign className="h-24 w-24 text-blue-800" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Budget Management</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-800 font-bold">•</span>
                    <span>Track spending by category and store</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-800 font-bold">•</span>
                    <span>Set monthly or weekly grocery budgets</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-800 font-bold">•</span>
                    <span>Compare prices across multiple stores</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-800 font-bold">•</span>
                    <span>Receive alerts when approaching budget limits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Special Programs"
            subtitle="We've developed special programs to enhance your shopping experience and provide additional value."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <Gift className="h-12 w-12 text-blue-800 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Loyalty & Special Offers</h3>
              <p className="text-gray-600 mb-6">
                Our partnership program connects you with stores and brands to provide exclusive discounts and special offers.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Exclusive discounts at partner stores</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Student discounts (16-25 years)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Cash back rewards on select purchases</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Premium membership benefits</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <Heart className="h-12 w-12 text-blue-800 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Food Donation Initiative</h3>
              <p className="text-gray-600 mb-6">
                We're committed to fighting food insecurity through our donation program that connects users with local food banks.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Donate items directly through the app</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Find local food banks and donation centers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Round up your purchase to donate the difference</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Partner with local stores for donation matching</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Table of Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Service Plans"
            subtitle="Choose the plan that fits your needs, from our free basic plan to premium features for power users."
          />
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">Features</th>
                  <th className="px-6 py-4 text-center text-gray-700 font-semibold">Free</th>
                  <th className="px-6 py-4 text-center text-gray-700 font-semibold">Premium <span className="text-xs font-normal text-blue-600">$4.99/month</span></th>
                  <th className="px-6 py-4 text-center text-gray-700 font-semibold">Family <span className="text-xs font-normal text-blue-600">$7.99/month</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-gray-700">Basic list management</td>
                  <td className="px-6 py-4 text-center text-green-600">✓</td>
                  <td className="px-6 py-4 text-center text-green-600">✓</td>
                  <td className="px-6 py-4 text-center text-green-600">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Shared lists</td>
                  <td className="px-6 py-4 text-center text-green-600">Up to 2</td>
                  <td className="px-6 py-4 text-center text-green-600">Unlimited</td>
                  <td className="px-6 py-4 text-center text-green-600">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Budget tracking</td>
                  <td className="px-6 py-4 text-center text-green-600">Basic</td>
                  <td className="px-6 py-4 text-center text-green-600">Advanced</td>
                  <td className="px-6 py-4 text-center text-green-600">Advanced</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Price comparison</td>
                  <td className="px-6 py-4 text-center text-red-600">✗</td>
                  <td className="px-6 py-4 text-center text-green-600">✓</td>
                  <td className="px-6 py-4 text-center text-green-600">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Meal planning</td>
                  <td className="px-6 py-4 text-center text-red-600">✗</td>
                  <td className="px-6 py-4 text-center text-green-600">✓</td>
                  <td className="px-6 py-4 text-center text-green-600">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Family accounts</td>
                  <td className="px-6 py-4 text-center text-red-600">✗</td>
                  <td className="px-6 py-4 text-center text-red-600">✗</td>
                  <td className="px-6 py-4 text-center text-green-600">Up to 6</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Special deals & coupons</td>
                  <td className="px-6 py-4 text-center text-red-600">✗</td>
                  <td className="px-6 py-4 text-center text-green-600">✓</td>
                  <td className="px-6 py-4 text-center text-green-600">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Ad-free experience</td>
                  <td className="px-6 py-4 text-center text-red-600">✗</td>
                  <td className="px-6 py-4 text-center text-green-600">✓</td>
                  <td className="px-6 py-4 text-center text-green-600">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;