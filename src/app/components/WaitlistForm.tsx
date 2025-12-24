import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import logo from '@/assets/a8269d17c5866bc6a6d515c1fb2f6649e366ef00.png';

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    membership: 'unlimited'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://formspree.io/f/xeejdalw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Failed to submit. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle2 className="w-20 h-20 text-brand-red mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Welcome to <span className="text-brand-purple">The Station</span> Waitlist!
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Thank you for your interest! We'll be in touch soon with exclusive early member benefits and updates about our launch.
          </p>
          <Link to="/">
            <Button className="bg-brand-red hover:bg-brand-red-dark text-white">
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-red to-brand-yellow">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/">
              <img src={logo} alt="The Station Logo" className="h-30" />
            </Link>
            <Link to="/">
              <Button variant="ghost" className="text-gray-700 hover:text-brand-red">
                <ArrowLeft className="mr-2" size={20} />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Form Content */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 text-white">
            <h1 className="text-4xl md:text-6xl mb-6">
              Join the Waitlist
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Be among the first to experience The Station and receive exclusive early member benefits
            </p>
          </div>

          <Card className="shadow-2xl border-none">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-900">
                    Full Name <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-900">
                    Email Address <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-gray-900">
                    Phone Number <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="age" className="block mb-2 text-gray-900">
                    Age <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    required
                    min="13"
                    max="120"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                    placeholder="Enter your age"
                  />
                </div>

                <div>
                  <label htmlFor="membership" className="block mb-2 text-gray-900">
                    Membership Interest <span className="text-brand-red">*</span>
                  </label>
                  <select
                    id="membership"
                    name="membership"
                    required
                    value={formData.membership}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                  >
                    <option value="starter">Starter - $40/month</option>
                    <option value="unlimited">Unlimited - $80/month</option>
                    <option value="elite">Elite - $120/month</option>
                  </select>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Early Member Benefits:</strong> As a waitlist member, you'll receive discounted membership rates, exclusive launch events, and special perks when we open our doors.
                  </p>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-red hover:bg-brand-red-dark text-white py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Join the Waitlist'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 The Station. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
