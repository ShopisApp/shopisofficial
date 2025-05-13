import React, { useEffect } from 'react';
import { 
  Repeat, Mic, Scan, Bell, Navigation, ShoppingBag, 
  Smartphone, CircleDollarSign, Cpu 
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const FeaturesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Advanced Features - ShoppingListApp';
  }, []);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-blue-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Advanced Features</h1>
            <p className="text-xl text-blue-100">
              Discover the innovative features that make ShoppingListApp the smartest way to shop.
            </p>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-Time Price Comparison</h2>
              <p className="text-lg text-gray-600 mb-6">
                Never overpay for groceries again. Our app compares prices across multiple stores in your area in real-time, helping you find the best deals.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-gray-700">Compare prices across multiple stores simultaneously</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-gray-700">Get notified when prices drop for items on your list</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-gray-700">View historical price trends for your most purchased items</span>
                </li>
              </ul>
            </div>
            <div className="order-first lg:order-last flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute top-0 left-0 w-full h-full bg-blue-100 rounded-full opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Repeat className="w-32 h-32 text-blue-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Voice and Barcode */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Quick Input Methods"
            subtitle="Add items to your shopping list faster than ever with these convenient input methods."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Mic className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-2xl font-semibold">Voice Recognition</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Simply speak to add items to your shopping list. Perfect for when your hands are busy cooking or you're on the go.
              </p>
              <div className="relative rounded-lg overflow-hidden h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-12 bg-white rounded-full shadow-md flex items-center justify-center px-4">
                    <div className="animate-pulse flex space-x-2 items-center">
                      <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                      <div className="h-2 w-32 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Scan className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-2xl font-semibold">Barcode Scanner</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Scan product barcodes to instantly add items to your list with accurate product names, sizes, and even price estimates.
              </p>
              <div className="relative rounded-lg overflow-hidden h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 border-2 border-blue-500 rounded relative">
                    <div className="absolute top-1/2 w-full h-0.5 bg-red-500 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Smart Notifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-first lg:order-last">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Smart Notifications & Reminders</h2>
              <p className="text-lg text-gray-600 mb-6">
                Never forget an item or miss a deal with our intelligent notification system that delivers the right information at the right time.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 flex-shrink-0 mt-1">
                    <Bell className="h-4 w-4" />
                  </span>
                  <span className="text-gray-700">Location-based reminders when you're near a store with items on your list</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 flex-shrink-0 mt-1">
                    <Bell className="h-4 w-4" />
                  </span>
                  <span className="text-gray-700">Price drop alerts for items you regularly purchase</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 flex-shrink-0 mt-1">
                    <Bell className="h-4 w-4" />
                  </span>
                  <span className="text-gray-700">Weekly shopping reminders based on your usual shopping patterns</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 flex-shrink-0 mt-1">
                    <Bell className="h-4 w-4" />
                  </span>
                  <span className="text-gray-700">Smart suggestions for items you might be running low on</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute top-0 left-0 w-full h-full bg-blue-100 rounded-full opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Bell className="w-32 h-32 text-blue-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* In-Store Navigation & Voice Assistant */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Hands-Free Shopping Experience"
            subtitle="Let our app guide you through the store and help you find everything on your list."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Navigation className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-2xl font-semibold">In-Store Navigation</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Navigate through the store with aisle-by-aisle directions to find every item on your list in the most efficient order.
              </p>
              <div className="rounded-lg overflow-hidden h-64 bg-gray-200 relative">
                <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
                <div className="absolute inset-0 p-4">
                  <div className="h-full w-full bg-white rounded-lg flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <div className="absolute top-0 left-0 w-full h-full">
                        <div className="grid grid-cols-4 grid-rows-4 gap-1 h-full">
                          {[...Array(16)].map((_, i) => (
                            <div key={i} className="bg-gray-100 border border-gray-200"></div>
                          ))}
                        </div>
                      </div>
                      <div className="absolute top-1/4 left-1/4 h-3 w-3 bg-blue-500 rounded-full animate-ping"></div>
                      <div className="absolute bottom-1/3 right-1/4 h-3 w-3 bg-green-500 rounded-full"></div>
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="w-3/4 h-0.5 bg-blue-500 transform rotate-45"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-full">
                  <ShoppingBag className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-2xl font-semibold">Voice Assistant</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Our integrated voice assistant reads your shopping list aloud, allowing for a hands-free shopping experience.
              </p>
              <div className="rounded-lg overflow-hidden h-64 bg-gray-200 flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-blue-100 opacity-50 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-blue-200 opacity-60 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-blue-300 opacity-70 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-blue-400 opacity-80 flex items-center justify-center animate-pulse">
                          <Mic className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology Behind */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Technology Behind ShoppingListApp"
            subtitle="Learn about the advanced technologies that power our features and make your shopping experience seamless."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
              <div className="p-3 bg-blue-100 rounded-full inline-block mb-4">
                <Smartphone className="h-6 w-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile-First Design</h3>
              <p className="text-gray-600">
                Our app is designed for optimal mobile experience with intuitive gestures, offline functionality, and battery-efficient operation.
              </p>
            </div>
            
            <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
              <div className="p-3 bg-blue-100 rounded-full inline-block mb-4">
                <CircleDollarSign className="h-6 w-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Price Intelligence</h3>
              <p className="text-gray-600">
                Our proprietary price tracking algorithms collect and analyze millions of price points to provide accurate comparisons and predictions.
              </p>
            </div>
            
            <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
              <div className="p-3 bg-blue-100 rounded-full inline-block mb-4">
                <Cpu className="h-6 w-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI & Machine Learning</h3>
              <p className="text-gray-600">
                Advanced machine learning models analyze your shopping patterns to provide personalized recommendations and optimize your shopping experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;