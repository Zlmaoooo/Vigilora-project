"use client";

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  FileText, 
  Search,
  ChevronRight,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { useScrollAnimation } from '@/components/scroll-animation ';

export default function SupportPage() {
  useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
    priority: 'medium',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ subject: '', message: '', priority: 'medium' });
  };

  const faqItems = [
    {
      question: 'How does the AI fraud detection work?',
      answer: 'Our AI fraud detection system uses machine learning algorithms to analyze patterns and behaviors in real-time. It identifies anomalies and suspicious activities based on historical data and known fraud patterns.'
    },
    {
      question: 'Can I integrate Vigilora with my existing systems?',
      answer: 'Yes, Vigilora offers API integration with most major platforms and systems. Our team can help you set up custom integrations to work seamlessly with your existing infrastructure.'
    },
    {
      question: 'How often are security updates released?',
      answer: 'We release security updates on a bi-weekly basis, with critical security patches deployed immediately when necessary. All updates are automatically applied to your account.'
    },
    {
      question: 'What should I do if I detect a security breach?',
      answer: 'If you detect a security breach, immediately report it through the Reports section in your dashboard. Our security team will investigate and provide guidance on next steps.'
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Support Center</h1>
          <p className="text-gray-600">Get help with your fraud detection and security needs</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 hover:shadow-lg transition-all duration-300">
          <div className="p-3 bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
            <MessageSquare className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
          <p className="text-gray-600 mb-4">Chat with our support team in real-time for immediate assistance.</p>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Start Chat
          </Button>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-all duration-300">
          <div className="p-3 bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
            <Phone className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
          <p className="text-gray-600 mb-4">Call our dedicated support line for personalized assistance.</p>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
            +1 (555) 123-4567
          </Button>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-all duration-300">
          <div className="p-3 bg-purple-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
            <Mail className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Email Support</h3>
          <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours.</p>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            support@vigilora.com
          </Button>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Support Ticket Form */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Submit a Support Ticket</h2>
          
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Ticket Submitted!</h3>
              <p className="text-gray-600 mb-6">
                We've received your support request and will get back to you shortly.
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Submit Another Ticket
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input
                  placeholder="Brief description of your issue"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="input-animate"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Priority</label>
                <select
                  value={formData.priority}
                  onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Please describe your issue in detail..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="h-32 input-animate"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white group button-hover"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    Submitting<span className="loading-dots"></span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Submit Ticket
                  </span>
                )}
              </Button>
            </form>
          )}
        </Card>

        {/* FAQ Section */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search FAQs..."
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                <button
                  className="flex justify-between items-center w-full text-left font-medium hover:text-blue-600 transition-colors"
                  onClick={() => {}}
                >
                  <span>{item.question}</span>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
                <p className="mt-2 text-gray-600 text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <Button variant="outline" className="text-blue-600 border-blue-600">
              View All FAQs
            </Button>
          </div>
        </Card>
      </div>

      {/* Documentation Section */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Documentation & Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
            <FileText className="h-8 w-8 text-blue-600 mb-3" />
            <h3 className="font-medium mb-2">User Guides</h3>
            <p className="text-sm text-gray-600 mb-3">Comprehensive guides for using all Vigilora features.</p>
            <Button variant="link" className="text-blue-600 p-0">
              View Guides
            </Button>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
            <FileText className="h-8 w-8 text-green-600 mb-3" />
            <h3 className="font-medium mb-2">API Documentation</h3>
            <p className="text-sm text-gray-600 mb-3">Technical documentation for integrating with our API.</p>
            <Button variant="link" className="text-blue-600 p-0">
              View API Docs
            </Button>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
            <FileText className="h-8 w-8 text-purple-600 mb-3" />
            <h3 className="font-medium mb-2">Security Best Practices</h3>
            <p className="text-sm text-gray-600 mb-3">Learn how to maximize your security with Vigilora.</p>
            <Button variant="link" className="text-blue-600 p-0">
              View Best Practices
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}