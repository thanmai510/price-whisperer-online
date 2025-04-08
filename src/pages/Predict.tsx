
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, BarChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Bar, Line } from 'recharts';
import { ArrowRight, InfoIcon } from 'lucide-react';
import Layout from '@/components/Layout';
import { toast } from 'sonner';

const Predict = () => {
  // Form state
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [features, setFeatures] = useState(3);
  const [condition, setCondition] = useState('new');
  const [basePrice, setBasePrice] = useState('');
  const [marketDemand, setMarketDemand] = useState('medium');
  const [seasonality, setSeasonality] = useState('');
  
  // Prediction results state
  const [prediction, setPrediction] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  
  // Mock data for charts
  const mockPriceFactors = [
    { name: 'Base Price', value: 70 },
    { name: 'Features', value: features * 5 },
    { name: 'Condition', value: condition === 'new' ? 20 : condition === 'good' ? 15 : 10 },
    { name: 'Market Demand', value: marketDemand === 'high' ? 25 : marketDemand === 'medium' ? 15 : 5 },
    { name: 'Seasonality', value: seasonality === 'peak' ? 20 : seasonality === 'regular' ? 10 : 0 },
  ];
  
  const mockHistoricalData = [
    { month: 'Jan', price: 150 },
    { month: 'Feb', price: 165 },
    { month: 'Mar', price: 180 },
    { month: 'Apr', price: 170 },
    { month: 'May', price: 190 },
    { month: 'Jun', price: 210 },
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!productName || !category || !basePrice || !seasonality) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // Mock prediction calculation
    const basePriceValue = parseFloat(basePrice);
    if (isNaN(basePriceValue)) {
      toast.error('Base price must be a valid number');
      return;
    }
    
    // Calculate predicted price based on factors
    const featureMultiplier = 1 + (features * 0.05);
    const conditionMultiplier = condition === 'new' ? 1.2 : condition === 'good' ? 1.1 : 1;
    const demandMultiplier = marketDemand === 'high' ? 1.15 : marketDemand === 'medium' ? 1 : 0.9;
    const seasonalityMultiplier = seasonality === 'peak' ? 1.2 : seasonality === 'regular' ? 1 : 0.9;
    
    const predictedPrice = basePriceValue * featureMultiplier * conditionMultiplier * demandMultiplier * seasonalityMultiplier;
    setPrediction(Math.round(predictedPrice * 100) / 100);
    setShowResults(true);
    
    toast.success('Prediction generated successfully!');
  };
  
  const resetForm = () => {
    setProductName('');
    setCategory('');
    setFeatures(3);
    setCondition('new');
    setBasePrice('');
    setMarketDemand('medium');
    setSeasonality('');
    setPrediction(null);
    setShowResults(false);
  };
  
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Sales Price Prediction</h1>
        <p className="text-muted-foreground mb-8">Fill in the details below to get an accurate price prediction</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Prediction Form */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
              <CardDescription>Enter information about your product</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="product-name">Product Name</Label>
                  <Input 
                    id="product-name" 
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Enter product name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="furniture">Furniture</SelectItem>
                      <SelectItem value="food">Food & Beverage</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="features">Number of Features</Label>
                    <span className="text-sm text-muted-foreground">{features}</span>
                  </div>
                  <Slider 
                    id="features"
                    min={1}
                    max={10}
                    step={1}
                    value={[features]}
                    onValueChange={(values) => setFeatures(values[0])}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="condition">Condition</Label>
                  <Select value={condition} onValueChange={setCondition}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="used">Used</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="base-price">Base Price ($)</Label>
                  <Input 
                    id="base-price" 
                    type="number"
                    value={basePrice}
                    onChange={(e) => setBasePrice(e.target.value)}
                    placeholder="0.00"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="market-demand">Market Demand</Label>
                  <Select value={marketDemand} onValueChange={setMarketDemand}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select market demand" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="seasonality">Seasonality</Label>
                  <Select value={seasonality} onValueChange={setSeasonality}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select seasonality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="peak">Peak Season</SelectItem>
                      <SelectItem value="regular">Regular Season</SelectItem>
                      <SelectItem value="off">Off Season</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="pt-4 flex gap-4">
                  <Button type="submit" className="flex-1">
                    Generate Prediction
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Reset
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {/* Results Section */}
          <div className="lg:col-span-2">
            {showResults ? (
              <>
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Prediction Result</CardTitle>
                    <CardDescription>Based on the provided information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center justify-center py-6">
                      <div className="text-sm text-muted-foreground mb-2">Predicted Sales Price</div>
                      <div className="text-5xl font-bold text-primary mb-4">${prediction?.toFixed(2)}</div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <InfoIcon className="h-4 w-4 mr-1" />
                        This price is calculated based on the factors you provided
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Tabs defaultValue="factors">
                  <TabsList className="grid grid-cols-2 mb-8">
                    <TabsTrigger value="factors">Price Factors</TabsTrigger>
                    <TabsTrigger value="history">Price History</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="factors">
                    <Card>
                      <CardHeader>
                        <CardTitle>Price Influencing Factors</CardTitle>
                        <CardDescription>See how different factors affect the price</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="h-[350px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                              data={mockPriceFactors}
                              margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                              }}
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="value" name="Impact Score" fill="#0080e6" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="history">
                    <Card>
                      <CardHeader>
                        <CardTitle>Historical Price Trends</CardTitle>
                        <CardDescription>Previous 6 months price data for similar products</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="h-[350px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                              data={mockHistoricalData}
                              margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                              }}
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="month" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              <Line
                                type="monotone"
                                dataKey="price"
                                name="Price ($)"
                                stroke="#0080e6"
                                activeDot={{ r: 8 }}
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="mt-4 p-4 bg-muted rounded-lg text-sm text-center">
                          Your predicted price: <span className="font-bold">${prediction?.toFixed(2)}</span> is {
                            prediction && prediction > 210 ? 
                              <span className="text-green-600">above</span> : 
                              <span className="text-red-600">below</span>
                          } the last month's average price.
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                    <LineChart className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Ready to Generate a Prediction</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Fill out the form with your product details and click "Generate Prediction" to see the results.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Predict;
