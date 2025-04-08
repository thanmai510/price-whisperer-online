
import React from 'react';
import { LineChart, ArrowRight, TrendingUp, BarChart3, History, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-24 text-white">
        <div className="container flex flex-col items-center text-center">
          <div className="animate-float mb-6">
            <LineChart size={56} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Predict Sales Prices with Confidence
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8">
            Our AI-powered algorithm analyzes market data to provide accurate price predictions for your products or properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg font-medium bg-white text-primary hover:bg-white/90">
              <Link to="/predict">Start Predicting Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg font-medium bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">
              How PriceWhisperer Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our advanced algorithm analyzes multiple factors to provide the most accurate price predictions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<TrendingUp className="h-8 w-8 text-primary" />}
              title="Advanced Analytics"
              description="Our system analyzes market trends and historical data to generate accurate predictions."
            />
            <FeatureCard 
              icon={<BarChart3 className="h-8 w-8 text-primary" />}
              title="Detailed Reports"
              description="Get comprehensive reports with visualizations to understand price factors."
            />
            <FeatureCard 
              icon={<History className="h-8 w-8 text-primary" />}
              title="Historical Tracking"
              description="Track price changes over time to identify patterns and optimize your strategy."
            />
            <FeatureCard 
              icon={<Zap className="h-8 w-8 text-primary" />}
              title="Instant Predictions"
              description="Get price predictions instantly with our fast and efficient algorithm."
            />
            <FeatureCard 
              icon={<LineChart className="h-8 w-8 text-primary" />}
              title="Multiple Models"
              description="Choose from different prediction models tailored to your specific needs."
            />
            <FeatureCard 
              icon={<ArrowRight className="h-8 w-8 text-primary" />}
              title="Easy to Use"
              description="Simple interface that makes price prediction accessible to everyone."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="bg-card rounded-lg shadow-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Predict Sales Prices?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Start using our powerful prediction tools today and make data-driven decisions for your business.
            </p>
            <Button asChild size="lg" className="text-lg font-medium">
              <Link to="/predict">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardContent className="pt-6 flex flex-col items-center text-center">
        <div className="p-3 bg-primary/10 rounded-full mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default Index;
