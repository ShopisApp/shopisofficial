import React, { useEffect } from 'react';
import { PieChart, BarChart, LineChart, Newspaper } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const StatsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Statistics & Advice - ShoppingListApp';
  }, []);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-blue-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Statistics & Advice</h1>
            <p className="text-xl text-blue-100">
              Track your shopping habits, gain insights, and discover tips to save money and time.
            </p>
          </div>
        </div>
      </section>

      {/* Shopping Insights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Personal Shopping Insights"
            subtitle="Get detailed statistics about your shopping habits to make informed decisions and save money."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-full">
                  <PieChart className="h-6 w-6 text-blue-800" />
                </div>
                <h3 className="text-xl font-semibold">Spending by Category</h3>
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full relative">
                  {/* Simplified Pie Chart Visualization */}
                  <div className="absolute inset-0 rounded-full" style={{ 
                    background: 'conic-gradient(#1E40AF 0% 30%, #3B82F6 30% 55%, #93C5FD 55% 70%, #BFDBFE 70% 85%, #DBEAFE 85% 100%)' 
                  }}></div>
                  <div className="absolute inset-0 rounded-full bg-white w-1/2 h-1/2 m-auto"></div>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-900 rounded-full"></span>
                  <span className="text-sm text-gray-600">Groceries - 30%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                  <span className="text-sm text-gray-600">Fresh Produce - 25%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                  <span className="text-sm text-gray-600">Meat & Dairy - 15%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                  <span className="text-sm text-gray-600">Household - 15%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-100 rounded-full"></span>
                  <span className="text-sm text-gray-600">Other - 15%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-full">
                  <BarChart className="h-6 w-6 text-blue-800" />
                </div>
                <h3 className="text-xl font-semibold">Monthly Spending</h3>
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg flex items-end justify-around p-4">
                {/* Simplified Bar Chart Visualization */}
                <div className="w-[8%] bg-blue-800 rounded-t" style={{ height: '75%' }}></div>
                <div className="w-[8%] bg-blue-800 rounded-t" style={{ height: '60%' }}></div>
                <div className="w-[8%] bg-blue-800 rounded-t" style={{ height: '80%' }}></div>
                <div className="w-[8%] bg-blue-800 rounded-t" style={{ height: '65%' }}></div>
                <div className="w-[8%] bg-blue-800 rounded-t" style={{ height: '70%' }}></div>
                <div className="w-[8%] bg-blue-800 rounded-t" style={{ height: '55%' }}></div>
                <div className="w-[8%] bg-blue-800 rounded-t" style={{ height: '90%' }}></div>
                <div className="w-[8%] bg-blue-800 rounded-t" style={{ height: '50%' }}></div>
                <div className="w-[8%] bg-blue-800 rounded-t" style={{ height: '65%' }}></div>
                <div className="w-[8%] bg-blue-800 rounded-t" style={{ height: '70%' }}></div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-600 mb-2">Average monthly spending: <span className="font-semibold">$420</span></p>
                <p className="text-sm text-gray-600">Highest spending month: <span className="font-semibold">July - $520</span></p>
                <p className="text-sm text-gray-600">Lowest spending month: <span className="font-semibold">February - $340</span></p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-full">
                  <LineChart className="h-6 w-6 text-blue-800" />
                </div>
                <h3 className="text-xl font-semibold">Savings Trends</h3>
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg relative p-4">
                {/* Simplified Line Chart Visualization */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polyline
                    points="0,80 10,75 20,70 30,72 40,65 50,60 60,50 70,48 80,35 90,30 100,20"
                    fill="none"
                    stroke="#1E40AF"
                    strokeWidth="3"
                  />
                </svg>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-600 mb-2">Total savings this year: <span className="font-semibold">$340</span></p>
                <p className="text-sm text-gray-600">Average savings per month: <span className="font-semibold">$42.50</span></p>
                <p className="text-sm text-gray-600 text-green-600">Trend: <span className="font-semibold">+12% increase</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Shopping Tips */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Smart Shopping Tips"
            subtitle="Practical advice to help you save money and shop more efficiently."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Seasonal Buying Guide</h3>
              <p className="text-gray-600 mb-6">
                Shopping for produce in season not only ensures you get the freshest items but also saves you money.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Spring (March - May)</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Asparagus</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Peas</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Strawberries</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Rhubarb</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Summer (June - August)</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Tomatoes</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Berries</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Corn</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Cucumbers</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Fall (September - November)</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Apples</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Pumpkins</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Squash</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Pears</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Winter (December - February)</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Citrus</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Kale</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Brussels Sprouts</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Root Vegetables</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Money-Saving Strategies</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-800 font-bold h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Shop with a list</h4>
                    <p className="text-gray-600">
                      Plan your meals for the week and create a detailed list to avoid impulse purchases, which can add 20-30% to your bill.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-800 font-bold h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Compare unit prices</h4>
                    <p className="text-gray-600">
                      Look at the price per unit (oz, lb, etc.) rather than the package price to ensure you're getting the best value.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-800 font-bold h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Shop the perimeter</h4>
                    <p className="text-gray-600">
                      Fresh foods are usually located around the edges of the store. Processed foods in the center aisles often cost more for less nutritional value.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-800 font-bold h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Buy in bulk selectively</h4>
                    <p className="text-gray-600">
                      Only buy large quantities of non-perishable items or things you know you'll use before they expire.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="From Our Blog"
            subtitle="Latest articles and tips from our shopping experts."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="aspect-video bg-gray-200 rounded-t-lg mb-4 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Grocery shopping with reusable bags" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <span className="text-sm text-blue-600 font-medium">Sustainability</span>
                <h3 className="text-xl font-semibold mt-1 mb-2 group-hover:text-blue-800 transition-colors">
                  10 Ways to Reduce Waste While Grocery Shopping
                </h3>
                <p className="text-gray-600 mb-4">
                  Simple strategies to minimize packaging waste and make environmentally friendly choices during your weekly shop.
                </p>
                <a href="#" className="text-blue-800 font-medium hover:underline">
                  Read Article →
                </a>
              </div>
            </div>
            
            <div className="group">
              <div className="aspect-video bg-gray-200 rounded-t-lg mb-4 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Person comparing prices on mobile phone" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <span className="text-sm text-blue-600 font-medium">Budgeting</span>
                <h3 className="text-xl font-semibold mt-1 mb-2 group-hover:text-blue-800 transition-colors">
                  How to Cut Your Grocery Bill by 30% Without Coupons
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover practical strategies that go beyond couponing to significantly reduce your monthly food expenses.
                </p>
                <a href="#" className="text-blue-800 font-medium hover:underline">
                  Read Article →
                </a>
              </div>
            </div>
            
            <div className="group">
              <div className="aspect-video bg-gray-200 rounded-t-lg mb-4 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7129720/pexels-photo-7129720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Person organizing refrigerator" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <span className="text-sm text-blue-600 font-medium">Organization</span>
                <h3 className="text-xl font-semibold mt-1 mb-2 group-hover:text-blue-800 transition-colors">
                  The Ultimate Guide to Organizing Your Pantry and Fridge
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to organize your food storage spaces to reduce waste, save money, and make meal planning easier.
                </p>
                <a href="#" className="text-blue-800 font-medium hover:underline">
                  Read Article →
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-flex items-center space-x-2 text-blue-800 font-semibold hover:text-blue-700 transition-colors"
            >
              <Newspaper className="h-5 w-5" />
              <span>View All Blog Posts</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsPage;