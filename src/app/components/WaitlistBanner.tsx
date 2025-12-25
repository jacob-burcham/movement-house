import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export default function WaitlistBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-16 left-0 right-0 bg-brand-yellow/60 text-white z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-1">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <Sparkles className="w-5 h-5 flex-shrink-0 text-brand-yellow" />
            <p className="text-sm md:text-base text-white">
              <strong className="font-semibold">Join our waitlist</strong> to express your interest and be considered for <strong>exclusive early member benefits</strong>!
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/waitlist">
              <Button variant="secondary" className="px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                Join Waitlist
              </Button>
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-white/20 rounded-full transition"
              aria-label="Close banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
