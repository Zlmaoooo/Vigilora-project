"use client";

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, Search, AlertTriangle, CheckCircle2, Loader2 } from 'lucide-react';

export default function DetectionPage() {
  const [scanning, setScanning] = useState(false);
  const [url, setUrl] = useState('');
  const [scanResult, setScanResult] = useState<null | {
    safe: boolean;
    threats: string[];
    score: number;
  }>(null);

  const handleScan = async () => {
    setScanning(true);
    // Simulate scan
    await new Promise(resolve => setTimeout(resolve, 2000));
    setScanResult({
      safe: Math.random() > 0.5,
      threats: ['Suspicious activity detected', 'Potential phishing attempt'],
      score: Math.floor(Math.random() * 100),
    });
    setScanning(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Fraud Detection</h1>
          <p className="text-gray-600">Scan URLs and transactions for potential threats</p>
        </div>
      </div>

      <Card className="p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <Input
              placeholder="Enter URL or transaction ID to scan"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1"
            />
            <Button
              onClick={handleScan}
              disabled={scanning || !url}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white"
            >
              {scanning ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Scanning...
                </>
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  Scan Now
                </>
              )}
            </Button>
          </div>

          {scanResult && (
            <div className={`mt-6 p-6 rounded-lg ${
              scanResult.safe ? 'bg-green-50' : 'bg-red-50'
            }`}>
              <div className="flex items-center space-x-3 mb-4">
                {scanResult.safe ? (
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                ) : (
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                )}
                <h3 className="text-lg font-semibold">
                  {scanResult.safe ? 'No threats detected' : 'Threats detected'}
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Safety Score</span>
                  <span className={`font-bold ${
                    scanResult.score > 70 ? 'text-green-600' :
                    scanResult.score > 30 ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {scanResult.score}/100
                  </span>
                </div>

                {!scanResult.safe && (
                  <div>
                    <h4 className="font-medium mb-2">Detected Threats:</h4>
                    <ul className="space-y-2">
                      {scanResult.threats.map((threat, index) => (
                        <li key={index} className="flex items-center text-red-600">
                          <AlertTriangle className="h-4 w-4 mr-2" />
                          {threat}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <Shield className="h-8 w-8 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">URL Scanning</h3>
          <p className="text-gray-600">
            Check websites for potential phishing attempts and malicious content.
          </p>
        </Card>

        <Card className="p-6">
          <AlertTriangle className="h-8 w-8 text-yellow-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Transaction Analysis</h3>
          <p className="text-gray-600">
            Analyze transactions for suspicious patterns and fraud indicators.
          </p>
        </Card>

        <Card className="p-6">
          <Search className="h-8 w-8 text-green-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Deep Scanning</h3>
          <p className="text-gray-600">
            Perform thorough security analysis using our advanced AI algorithms.
          </p>
        </Card>
      </div>
    </div>
  );
}