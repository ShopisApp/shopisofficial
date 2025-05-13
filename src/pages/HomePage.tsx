import React, { useEffect } from 'react';
import { CheckCircle2, ListTodo, ShoppingCart, PieChart, Award, BadgeDollarSign, MessageCircle, Check, DollarSign, Share } from 'lucide-react';
import DownloadButtons from '../components/DownloadButtons';
import FeatureCard from '../components/FeatureCard';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Shopyz - Simplify Your Shopping';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 z-0"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Simplify Your <br className="hidden md:block" />
                <span className="text-blue-300">Shopping Experience</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 md:max-w-md">
                Organize your shopping list, save money, and never forget an item again with our intuitive app designed for modern shoppers.
              </p>
              
              <DownloadButtons className="justify-center md:justify-start" />
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span className="text-blue-100">Easy list sharing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span className="text-blue-100">Price comparison</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span className="text-blue-100">Budget tracking</span>
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-[320px] md:w-[380px] scale-90 md:scale-100">
                <div className="bg-white p-6 rounded-lg shadow-lg transform rotate-3 animate-float">
                  <div className="font-medium text-gray-900 mb-3">Weekly Groceries</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 border border-gray-300 rounded-sm mr-2"></div>
                        <span>Milk</span>
                      </div>
                      <span className="text-gray-600">$3.99</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-blue-500 text-white border border-blue-500 rounded-sm flex items-center justify-center mr-2">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="line-through text-gray-500">Eggs</span>
                      </div>
                      <span className="text-gray-500">$2.49</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 border border-gray-300 rounded-sm mr-2"></div>
                        <span>Bread</span>
                      </div>
                      <span className="text-gray-600">$1.99</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between">
                    <span className="font-medium">Total</span>
                    <span className="font-bold">$8.47</span>
                  </div>
                </div>
                
                <div className="absolute top-1/4 -right-4 bg-white p-4 rounded-lg shadow-lg transform -rotate-6 animate-float-delayed">
                  <div className="w-16 h-14 flex items-center justify-center">
                    <DollarSign className="h-10 w-10 text-green-500" />
                  </div>
                </div>
                
                <div className="absolute bottom-0 -left-6 bg-white p-4 rounded-lg shadow-lg transform rotate-12 animate-float">
                  <div className="w-14 h-14 flex items-center justify-center">
                    <Share className="h-7 w-7 text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,80C672,85,768,75,864,58.7C960,43,1056,21,1152,21.3C1248,21,1344,43,1392,53.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Powerful Features" 
            subtitle="Discover how Shopyz transforms your shopping experience with these powerful features."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={ListTodo}
              title="Smart Lists" 
              description="Create, edit, and share shopping lists with family members in real-time. Organize items by categories and stores."
            />
            <FeatureCard 
              icon={ShoppingCart}
              title="Price Comparison" 
              description="Compare prices across different stores to find the best deals and save money on your grocery shopping."
            />
            <FeatureCard 
              icon={PieChart}
              title="Budget Tracking" 
              description="Monitor your spending with detailed statistics and insights to help you stay within your budget."
            />
            <FeatureCard 
              icon={Award}
              title="Loyalty Programs" 
              description="Integrate with store loyalty programs to automatically apply discounts and earn rewards while you shop."
            />
            <FeatureCard 
              icon={BadgeDollarSign}
              title="Special Offers" 
              description="Get notified about special offers and discounts on items from your shopping list at nearby stores."
            />
            <FeatureCard 
              icon={MessageCircle}
              title="Voice Commands" 
              description="Add items to your list using voice commands while cooking or when your hands are full."
            />
          </div>
        </div>
      </section>
      
      {/* App Statistics */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">4.8</div>
              <p className="text-gray-600">App Store Rating</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">2M+</div>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">15%</div>
              <p className="text-gray-600">Average Savings</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">30K+</div>
              <p className="text-gray-600">Store Partners</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What Our Users Say" 
            subtitle="Join thousands of satisfied shoppers who have transformed their shopping experience."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Sophie Williams"
              role="Busy Mom"
              content="Shopyz has been a game-changer for our family. We can all add items to the shared list, and I never forget anything at the store anymore."
              rating={5}
              avatarUrl="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <TestimonialCard 
              name="Mark Johnson"
              role="Budget Conscious"
              content="The price comparison feature has saved me at least 15% on my monthly grocery bill. I can quickly see which store has the best deals on items I need."
              rating={5}
              avatarUrl="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <TestimonialCard 
              name="Tina Chen"
              role="College Student"
              content="As a student on a tight budget, this app helps me plan meals, track expenses, and find student discounts. The voice command feature is super convenient!"
              rating={4}
              avatarUrl="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-blue-700 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Shopping Experience?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Join millions of happy shoppers who save time and money with Shopyz.
            </p>
            
            <DownloadButtons className="justify-center" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;