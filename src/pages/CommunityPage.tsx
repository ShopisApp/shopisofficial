import React, { useEffect, useState } from 'react';
import { 
  MessageSquare, HelpCircle, Heart, Users, Clock, 
  ThumbsUp, MessagesSquare, Send 
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const CommunityPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Community - ShoppingListApp';
  }, []);
  
  const [activeTab, setActiveTab] = useState('forum');

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-blue-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Community</h1>
            <p className="text-xl text-blue-100">
              Join our vibrant community of shoppers to share tips, get help, and participate in our food donation initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            <button 
              className={`py-4 px-6 font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'forum' ? 'border-blue-800 text-blue-800' : 'border-transparent text-gray-600 hover:text-blue-800'
              }`}
              onClick={() => setActiveTab('forum')}
            >
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>Forum</span>
              </div>
            </button>
            <button 
              className={`py-4 px-6 font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'support' ? 'border-blue-800 text-blue-800' : 'border-transparent text-gray-600 hover:text-blue-800'
              }`}
              onClick={() => setActiveTab('support')}
            >
              <div className="flex items-center space-x-2">
                <HelpCircle className="h-5 w-5" />
                <span>Support & FAQs</span>
              </div>
            </button>
            <button 
              className={`py-4 px-6 font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'donations' ? 'border-blue-800 text-blue-800' : 'border-transparent text-gray-600 hover:text-blue-800'
              }`}
              onClick={() => setActiveTab('donations')}
            >
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Food Donations</span>
              </div>
            </button>
          </div>
        </div>
      </section>
      
      {/* Forum Tab Content */}
      {activeTab === 'forum' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                  <div className="bg-blue-50 p-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Community Forum</h2>
                    <p className="text-gray-600 mt-2">
                      Join discussions with other shoppers to share tips, recipes, and shopping strategies.
                    </p>
                  </div>
                  
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold hover:text-blue-800 cursor-pointer">Best stores for organic produce in Chicago?</h3>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Hot Topic</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="mr-4">Started by Sarah82</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>2 hours ago</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MessagesSquare className="h-4 w-4 mr-1" />
                        <span>24 replies</span>
                      </div>
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>18 likes</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold hover:text-blue-800 cursor-pointer">Weekly meal prep tips for busy families</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Popular</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="mr-4">Started by MomOf3</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>1 day ago</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MessagesSquare className="h-4 w-4 mr-1" />
                        <span>42 replies</span>
                      </div>
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>31 likes</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold hover:text-blue-800 cursor-pointer">How to save 50% on groceries without extreme couponing</h3>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="mr-4">Started by BudgetPro</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>3 days ago</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MessagesSquare className="h-4 w-4 mr-1" />
                        <span>19 replies</span>
                      </div>
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>27 likes</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold hover:text-blue-800 cursor-pointer">Voice command feature not working on Android</h3>
                      <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Technical</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="mr-4">Started by TechGuy</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>5 days ago</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MessagesSquare className="h-4 w-4 mr-1" />
                        <span>8 replies</span>
                      </div>
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>3 likes</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <a href="#" className="text-blue-800 font-medium hover:underline flex items-center justify-center">
                      View All Forum Topics
                    </a>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-xl font-semibold mb-4">Start a New Topic</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="topic-title" className="block text-sm font-medium text-gray-700 mb-1">
                          Title
                        </label>
                        <input 
                          type="text" 
                          id="topic-title" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="What's on your mind?"
                        />
                      </div>
                      <div>
                        <label htmlFor="topic-content" className="block text-sm font-medium text-gray-700 mb-1">
                          Content
                        </label>
                        <textarea 
                          id="topic-content" 
                          rows={4} 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Share your thoughts, questions, or ideas with the community..."
                        ></textarea>
                      </div>
                      <div>
                        <button className="px-6 py-2 bg-blue-800 hover:bg-blue-700 text-white rounded-md transition-colors">
                          Post Topic
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-xl font-semibold mb-4">Community Stats</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Active Members:</span>
                        <span className="font-medium">12,487</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Topics Created:</span>
                        <span className="font-medium">5,842</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Replies Posted:</span>
                        <span className="font-medium">27,935</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">New Members Today:</span>
                        <span className="font-medium">34</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-xl font-semibold mb-4">Top Contributors</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <img 
                          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" 
                          alt="User Avatar" 
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium">Mike Johnson</p>
                          <p className="text-sm text-gray-500">423 posts</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <img 
                          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" 
                          alt="User Avatar" 
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium">Sarah Wilson</p>
                          <p className="text-sm text-gray-500">387 posts</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <img 
                          src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                          alt="User Avatar" 
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium">Jennifer Kim</p>
                          <p className="text-sm text-gray-500">342 posts</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <img 
                          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" 
                          alt="User Avatar" 
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium">David Brown</p>
                          <p className="text-sm text-gray-500">298 posts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-xl font-semibold mb-4">Community Guidelines</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start space-x-2">
                        <span>•</span>
                        <span>Be respectful to other community members</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span>•</span>
                        <span>No promotional or spam content</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span>•</span>
                        <span>Keep discussions relevant to shopping and the app</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span>•</span>
                        <span>Do not share personal identification information</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span>•</span>
                        <span>Report inappropriate content to moderators</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Support Tab Content */}
      {activeTab === 'support' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="bg-blue-50 p-6">
                  <h2 className="text-2xl font-semibold text-gray-900">Frequently Asked Questions</h2>
                  <p className="text-gray-600 mt-2">
                    Find answers to common questions about using ShoppingListApp.
                  </p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">How do I share my shopping list with family members?</h3>
                      <p className="mt-2 text-gray-600">
                        To share a list, open the list you want to share, tap the "Share" icon in the top right corner, and enter the email addresses of people you want to share with. They'll receive an invitation to view and edit the list.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Can I use the app offline?</h3>
                      <p className="mt-2 text-gray-600">
                        Yes, ShoppingListApp works offline. Your lists will sync when you're back online. You can create and edit lists, check off items, and use most features without an internet connection.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">How does the price comparison feature work?</h3>
                      <p className="mt-2 text-gray-600">
                        The price comparison feature uses crowdsourced data and partnerships with stores to show you prices for items on your list at nearby stores. To use it, simply add items to your list and tap on the "Compare Prices" button.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Is there a limit to how many items I can add to a list?</h3>
                      <p className="mt-2 text-gray-600">
                        There's no limit to the number of items you can add to a list in the free version. Premium subscribers get additional features like categorization and priority sorting for very large lists.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">How do I set up voice commands?</h3>
                      <p className="mt-2 text-gray-600">
                        To use voice commands, tap the microphone icon on the main screen or in any list view. You'll need to grant the app permission to use your device's microphone. Then simply speak commands like "Add milk to my grocery list" or "Check off eggs."
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">What's the difference between the free and premium versions?</h3>
                      <p className="mt-2 text-gray-600">
                        The free version includes basic list management, sharing with up to 2 people, and basic budget tracking. Premium adds unlimited sharing, price comparison, meal planning, special deals, and an ad-free experience for $4.99/month.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">Still Have Questions?</h3>
                  <p className="text-gray-600 mb-6">
                    Contact our support team and we'll get back to you as soon as possible.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="support-email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        id="support-email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="support-subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input 
                        type="text" 
                        id="support-subject" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="What do you need help with?"
                      />
                    </div>
                    <div>
                      <label htmlFor="support-message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea 
                        id="support-message" 
                        rows={4} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Please describe your issue in detail..."
                      ></textarea>
                    </div>
                    <div>
                      <button className="flex items-center space-x-2 px-6 py-2 bg-blue-800 hover:bg-blue-700 text-white rounded-md transition-colors">
                        <Send className="h-4 w-4" />
                        <span>Submit Request</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">Video Tutorials</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="aspect-video bg-gray-200 rounded-lg mb-2 flex items-center justify-center">
                        <div className="p-4 bg-blue-800 rounded-full opacity-80">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </div>
                      </div>
                      <h4 className="font-medium">Getting Started with ShoppingListApp</h4>
                      <p className="text-sm text-gray-500">3:24 mins</p>
                    </div>
                    <div>
                      <div className="aspect-video bg-gray-200 rounded-lg mb-2 flex items-center justify-center">
                        <div className="p-4 bg-blue-800 rounded-full opacity-80">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </div>
                      </div>
                      <h4 className="font-medium">Advanced Price Comparison Features</h4>
                      <p className="text-sm text-gray-500">4:12 mins</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Donations Tab Content */}
      {activeTab === 'donations' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-green-800 to-green-600 p-8 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Food Donation Initiative</h2>
                  <p className="text-lg">
                    Join our mission to reduce food waste and help families in need through our integrated donation program.
                  </p>
                </div>
                
                <div className="p-8">
                  <div className="prose max-w-none">
                    <p>
                      At ShoppingListApp, we believe in giving back to the community. Our food donation initiative makes it easy for you to support local food banks and families in need, right from within the app.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-8 mb-4">How It Works</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center p-4 border border-gray-200 rounded-lg">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-800 rounded-full mb-4">
                          1
                        </div>
                        <h4 className="font-semibold mb-2">Choose Items to Donate</h4>
                        <p className="text-sm text-gray-600">
                          Select non-perishable items from your shopping list to donate.
                        </p>
                      </div>
                      <div className="text-center p-4 border border-gray-200 rounded-lg">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-800 rounded-full mb-4">
                          2
                        </div>
                        <h4 className="font-semibold mb-2">Purchase at Checkout</h4>
                        <p className="text-sm text-gray-600">
                          Buy the donated items along with your regular groceries.
                        </p>
                      </div>
                      <div className="text-center p-4 border border-gray-200 rounded-lg">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-800 rounded-full mb-4">
                          3
                        </div>
                        <h4 className="font-semibold mb-2">Drop at Collection Point</h4>
                        <p className="text-sm text-gray-600">
                          Leave donations at the store's collection point or a local food bank.
                        </p>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mt-8 mb-4">Partner Food Banks</h3>
                    
                    <p>
                      We've partnered with these organizations to ensure your donations reach those who need them most:
                    </p>
                    
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold">Feeding America</h4>
                        <p className="text-sm text-gray-600">
                          The nation's largest domestic hunger-relief organization.
                        </p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold">Local Food Bank Network</h4>
                        <p className="text-sm text-gray-600">
                          A coalition of community-based food assistance programs.
                        </p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold">City Harvest</h4>
                        <p className="text-sm text-gray-600">
                          Collecting surplus food to distribute to those in need.
                        </p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold">No Kid Hungry</h4>
                        <p className="text-sm text-gray-600">
                          Working to end childhood hunger in America.
                        </p>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mt-8 mb-4">Most Needed Items</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <span className="text-green-600">•</span>
                          <span>Canned proteins (tuna, chicken, beans)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-green-600">•</span>
                          <span>Peanut butter and nut butters</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-green-600">•</span>
                          <span>Whole grain pasta and rice</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-green-600">•</span>
                          <span>Canned fruits and vegetables</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <span className="text-green-600">•</span>
                          <span>Shelf-stable milk</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-green-600">•</span>
                          <span>Cooking oils</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-green-600">•</span>
                          <span>Infant formula and baby food</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="text-green-600">•</span>
                          <span>Low-sodium soups and stews</span>
                        </li>
                      </ul>
                    </div>
                    
                    <h3 className="text-xl font-semibold mt-8 mb-4">Our Impact</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-800 mb-2">128,750</div>
                        <p className="text-gray-700">Meals Donated</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-800 mb-2">42,360</div>
                        <p className="text-gray-700">Donors</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-800 mb-2">217</div>
                        <p className="text-gray-700">Partner Stores</p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Ready to make a difference?</h3>
                      <p className="mb-4">
                        Start donating today by downloading ShoppingListApp and looking for the "Donate" option in your shopping lists.
                      </p>
                      <button className="px-6 py-2 bg-blue-800 hover:bg-blue-700 text-white rounded-md transition-colors">
                        Download App to Start Donating
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-semibold mb-6">Find Donation Centers Near You</h3>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Interactive map will be displayed here</p>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium">Search for Food Banks</h4>
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="Enter ZIP code" 
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                      </div>
                    </div>
                    <button className="w-full py-2 bg-green-600 hover:bg-green-500 text-white rounded-md transition-colors">
                      Find Nearby Donation Centers
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CommunityPage;