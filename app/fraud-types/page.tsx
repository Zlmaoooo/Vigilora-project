import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { 
  Shield, 
  Mail, 
  Globe, 
  AlertTriangle, 
  Building2, 
  DollarSign,
  Lock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fraud Types - Vigilora',
  description: 'Learn about different types of fraud and how to protect against them',
};

const fraudTypes = [
  {
    title: 'Email Breach & Data Leaks',
    icon: Mail,
    description: 'Comprehensive monitoring and detection of compromised email accounts and data breaches.',
    examples: [
      'Personal information exposure',
      'Corporate email compromises',
      'Database leaks detection'
    ],
  },
  {
    title: 'Dark Web Identity Theft',
    icon: Lock,
    description: 'Advanced monitoring of underground marketplaces for stolen personal and corporate data.',
    examples: [
      'Credential monitoring',
      'Identity information tracking',
      'Dark web surveillance'
    ],
  },
  {
    title: 'Phishing & Scam Websites',
    icon: Globe,
    description: 'Real-time detection and prevention of fraudulent websites and phishing attempts.',
    examples: [
      'Fake login pages',
      'Malicious website detection',
      'Social engineering attempts'
    ],
  },
  {
    title: 'Financial Fraud & AML Violations',
    icon: DollarSign,
    description: 'Sophisticated detection of suspicious financial activities and compliance violations.',
    examples: [
      'Money laundering detection',
      'Suspicious transactions',
      'Regulatory compliance monitoring'
    ],
  },
  {
    title: 'Fake Investment & Ponzi Schemes',
    icon: AlertTriangle,
    description: 'Identification and analysis of fraudulent investment schemes and scams.',
    examples: [
      'Investment fraud detection',
      'Pyramid scheme identification',
      'Risk assessment tools'
    ],
  },
  {
    title: 'Corporate & Business Fraud',
    icon: Building2,
    description: 'Comprehensive protection against various forms of business and corporate fraud.',
    examples: [
      'Identity verification',
      'Financial statement fraud',
      'Internal fraud detection'
    ],
  },
];

export default function FraudTypesPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-blue-900/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 text-blue-400 mx-auto mb-8 floating" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-up">
            Understanding <span className="gradient-text">Fraud Types</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Stay informed about different types of fraud and protect your business effectively
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fraudTypes.map((type, index) => (
            <Card 
              key={type.title} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <type.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold">{type.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <ul className="space-y-2">
                {type.examples.map((example) => (
                  <li key={example} className="flex items-center text-sm text-gray-500">
                    <Shield className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}