
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, FileText, Users, MessageSquare } from 'lucide-react';
import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="container py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About PriceWhisperer</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enabling data-driven pricing decisions through advanced AI prediction technology
          </p>
        </div>
        
        <Tabs defaultValue="about" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="about">
              <FileText className="h-4 w-4 mr-2" />
              About
            </TabsTrigger>
            <TabsTrigger value="team">
              <Users className="h-4 w-4 mr-2" />
              Our Team
            </TabsTrigger>
            <TabsTrigger value="faq">
              <MessageSquare className="h-4 w-4 mr-2" />
              FAQ
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="about">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <LineChart className="h-10 w-10 text-primary" />
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-center mb-6">Our Mission</h2>
                
                <p className="mb-4">
                  PriceWhisperer was founded with a clear mission: to democratize access to sophisticated price prediction 
                  technology. We believe that accurate pricing insights shouldn't be exclusive to large corporations with 
                  extensive resources.
                </p>
                
                <p className="mb-4">
                  Our platform leverages advanced machine learning algorithms to analyze market trends, product features, 
                  and historical data to provide accurate price predictions for businesses of all sizes. By empowering 
                  sellers with data-driven pricing insights, we help them maximize revenue, optimize inventory, and make 
                  more informed business decisions.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-6">Our Technology</h2>
                
                <p className="mb-4">
                  At the heart of PriceWhisperer is our proprietary prediction engine that processes multiple data points 
                  to generate accurate price forecasts. Our algorithms consider factors such as:
                </p>
                
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Product specifications and features</li>
                  <li>Market demand and trends</li>
                  <li>Seasonal variations</li>
                  <li>Competitive pricing</li>
                  <li>Historical sales data</li>
                  <li>Economic indicators</li>
                </ul>
                
                <p className="mb-4">
                  We continuously refine our models based on new data and feedback to ensure our predictions maintain 
                  high accuracy levels across different product categories and market conditions.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-6">Our Commitment</h2>
                
                <p className="mb-4">
                  We are committed to providing a user-friendly, reliable, and transparent platform. We believe in:
                </p>
                
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li><span className="font-medium">Accuracy</span> - Continuously improving our prediction models</li>
                  <li><span className="font-medium">Accessibility</span> - Making price predictions available to businesses of all sizes</li>
                  <li><span className="font-medium">Transparency</span> - Clearly explaining the factors behind our predictions</li>
                  <li><span className="font-medium">Privacy</span> - Safeguarding your data with industry-standard security</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="team">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-center mb-8">Meet Our Team</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <TeamMember 
                    name="Alex Morgan" 
                    role="Founder & CEO" 
                    bio="Alex has 15+ years of experience in pricing analytics and machine learning. Previously led data science teams at major tech companies."
                  />
                  <TeamMember 
                    name="Sam Chen" 
                    role="CTO" 
                    bio="Sam specializes in AI and predictive algorithms. Has a PhD in Computer Science and previously worked on price optimization at Amazon."
                  />
                  <TeamMember 
                    name="Jordan Taylor" 
                    role="Head of Product" 
                    bio="Jordan brings 10 years of product management expertise, previously developing pricing tools for enterprise clients."
                  />
                  <TeamMember 
                    name="Morgan Lee" 
                    role="Lead Data Scientist" 
                    bio="Morgan leads our data science efforts, with expertise in statistical modeling and market analysis from previous roles at fintech startups."
                  />
                  <TeamMember 
                    name="Casey Zhang" 
                    role="UX/UI Designer" 
                    bio="Casey crafts our user experience with a focus on making complex data accessible and actionable for all users."
                  />
                  <TeamMember 
                    name="Jamie Wilson" 
                    role="Customer Success" 
                    bio="Jamie ensures our clients get maximum value from our platform through training and dedicated support."
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="faq">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <FaqItem 
                    question="How accurate are your price predictions?" 
                    answer="Our predictions typically achieve 90-95% accuracy when compared to actual market prices. The accuracy varies by product category and the completeness of information provided. We continuously improve our models based on new data."
                  />
                  <FaqItem 
                    question="What data do you need to make a prediction?" 
                    answer="The basic requirements include product name, category, features, condition, and base price. Additional information like market demand and seasonality further improves prediction accuracy."
                  />
                  <FaqItem 
                    question="How is my data used and protected?" 
                    answer="We use your data only to generate price predictions and improve our models. We employ industry-standard security measures to protect your information and never sell individual data to third parties."
                  />
                  <FaqItem 
                    question="Can I use PriceWhisperer for any type of product?" 
                    answer="Yes, our platform supports predictions across multiple product categories. However, accuracy may vary for extremely niche or unique items with limited market data."
                  />
                  <FaqItem 
                    question="How often should I update my price predictions?" 
                    answer="For most products, we recommend refreshing predictions monthly or quarterly. However, for highly seasonal items or volatile markets, more frequent updates may be beneficial."
                  />
                  <FaqItem 
                    question="Do you offer bulk predictions for multiple products?" 
                    answer="Yes, our premium plans include API access for bulk predictions, allowing you to integrate our prediction engine directly into your inventory management system."
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio }) => {
  return (
    <div className="p-4 border rounded-lg text-center">
      <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-xl font-bold text-primary">{name.split(' ').map(n => n[0]).join('')}</span>
      </div>
      <h3 className="font-bold text-lg mb-1">{name}</h3>
      <div className="text-sm text-primary mb-2">{role}</div>
      <p className="text-sm text-muted-foreground">{bio}</p>
    </div>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <div className="border-b pb-4">
      <h3 className="font-bold text-lg mb-2">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  );
};

export default About;
