import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Mail, 
  Search,
  Lock,
  Globe,
  FileCheck,
  Footprints,
  AlertTriangle,
  ArrowRight,
  Brain,
  Database,
  Eye
} from 'lucide-react';
import Link from 'next/link';

const aiTools = [
  {
    category: 'Proactive Protection',
    icon: Shield,
    description: 'Stay ahead of threats with our advanced detection systems',
    tools: [
      {
        title: 'AI Fraud Detector',
        description: 'Our flagship AI-powered system that detects and prevents fraud in real-time.',
        features: ['Pattern recognition', 'Behavioral analysis', 'Instant alerts'],
        icon: Brain,
      },
      {
        title: 'Dark Web Scanner',
        description: 'Continuous monitoring of dark web for compromised data.',
        features: ['24/7 monitoring', 'Instant alerts', 'Threat assessment'],
        icon: Eye,
      },
    ],
  },
  {
    category: 'Data Security',
    icon: Database,
    description: 'Protect your sensitive information across all channels',
    tools: [
      {
        title: 'Email Guardian',
        description: 'Comprehensive email security and breach detection system.',
        features: ['Breach detection', 'Real-time monitoring', 'Threat prevention'],
        icon: Mail,
      },
      {
        title: 'Digital Footprint Tracker',
        description: 'Map and secure your entire digital presence.',
        features: ['Data mapping', 'Risk assessment', 'Privacy protection'],
        icon: Footprints,
      },
    ],
  },
  {
    category: 'Financial Protection',
    icon: Lock,
    description: 'Secure your transactions and prevent financial fraud',
    tools: [
      {
        title: 'Transaction Shield',
        description: 'AI-powered financial transaction monitoring and protection.',
        features: ['Fraud detection', 'AML compliance', 'Risk scoring'],
        icon: Shield,
      },
      {
        title: 'Document Analyzer',
        description: 'Advanced document verification and fraud detection.',
        features: ['AI verification', 'Forgery detection', 'Risk analysis'],
        icon: FileCheck,
      },
    ],
  },
  {
    category: 'Web Security',
    icon: Globe,
    description: 'Protect against online threats and malicious activities',
    tools: [
      {
        title: 'Phishing Defender',
        description: 'Real-time protection against phishing and scam attempts.',
        features: ['URL analysis', 'Smart detection', 'Instant blocking'],
        icon: AlertTriangle,
      },
      {
        title: 'Site Inspector',
        description: 'Deep analysis of websites for potential security threats.',
        features: ['Threat detection', 'Safety scoring', 'Real-time scanning'],
        icon: Search,
      },
    ],
  },
];

export default function AIToolsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-blue-900/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 text-blue-400 mx-auto mb-8 floating" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI-Powered <span className="gradient-text">Protection</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Cutting-edge tools designed to detect and prevent fraud before it happens
          </p>
          <p className="text-md text-blue-200 max-w-3xl mx-auto">
            Born from a vision of proactive security, our AI tools empower you to stay ahead of evolving cyber threats
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {aiTools.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20 last:mb-0">
              <div className="flex flex-col items-center text-center mb-12">
                <div className="p-3 bg-blue-100 rounded-lg mb-4">
                  <category.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {category.category}
                </h2>
                <p className="text-gray-600 max-w-2xl">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.tools.map((tool, toolIndex) => (
                  <Card 
                    key={toolIndex}
                    className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <tool.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">{tool.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    <ul className="space-y-2 mb-6">
                      {tool.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-500">
                          <Shield className="h-4 w-4 text-blue-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white group"
                      asChild
                    >
                      <Link href="/dashboard" className="flex items-center justify-center">
                        Try Now
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}