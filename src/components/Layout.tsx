
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, LineChart, History, Settings } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <LineChart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">PriceWhisperer</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/predict" className="text-sm font-medium hover:text-primary transition-colors">
              Predict
            </Link>
            <Link to="/history" className="text-sm font-medium hover:text-primary transition-colors">
              History
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              Get Started
            </button>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container py-6 md:py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <LineChart className="h-5 w-5 text-primary" />
            <span className="font-medium">PriceWhisperer</span>
          </div>
          <div className="text-center md:text-right text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PriceWhisperer. All rights reserved.
          </div>
        </div>
      </footer>
      
      {/* Mobile navigation */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-background md:hidden">
        <div className="flex justify-around py-3">
          <Link to="/" className="flex flex-col items-center text-xs">
            <Home className="h-5 w-5 mb-1" />
            Home
          </Link>
          <Link to="/predict" className="flex flex-col items-center text-xs">
            <LineChart className="h-5 w-5 mb-1" />
            Predict
          </Link>
          <Link to="/history" className="flex flex-col items-center text-xs">
            <History className="h-5 w-5 mb-1" />
            History
          </Link>
          <Link to="/about" className="flex flex-col items-center text-xs">
            <Settings className="h-5 w-5 mb-1" />
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Layout;
