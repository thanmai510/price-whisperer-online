
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LineChart, BarChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Bar, Line } from 'recharts';
import { Calendar, Clock, BarChart2, ArrowUpRight, ArrowDownRight, Trash2 } from 'lucide-react';
import Layout from '@/components/Layout';
import { toast } from 'sonner';

// Mock data for previous predictions
const mockPredictions = [
  {
    id: 1,
    productName: 'Smartphone X23',
    category: 'electronics',
    predictedPrice: 799.99,
    actualPrice: 849.99,
    date: '2025-04-05T14:30:00',
    accuracy: 94
  },
  {
    id: 2,
    productName: 'Designer Jeans',
    category: 'clothing',
    predictedPrice: 89.95,
    actualPrice: 79.99,
    date: '2025-04-03T09:15:00',
    accuracy: 88
  },
  {
    id: 3,
    productName: 'Coffee Table',
    category: 'furniture',
    predictedPrice: 249.50,
    actualPrice: 259.99,
    date: '2025-04-01T11:45:00',
    accuracy: 96
  },
  {
    id: 4,
    productName: 'Fitness Tracker',
    category: 'electronics',
    predictedPrice: 129.99,
    actualPrice: 119.99,
    date: '2025-03-28T16:20:00',
    accuracy: 92
  },
  {
    id: 5,
    productName: 'Desk Lamp',
    category: 'furniture',
    predictedPrice: 45.99,
    actualPrice: 49.99,
    date: '2025-03-25T10:30:00',
    accuracy: 92
  }
];

// Mock data for charts
const mockAccuracyData = [
  { date: 'Mar 25', accuracy: 92 },
  { date: 'Mar 28', accuracy: 92 },
  { date: 'Apr 01', accuracy: 96 },
  { date: 'Apr 03', accuracy: 88 },
  { date: 'Apr 05', accuracy: 94 }
];

const mockCategoryData = [
  { category: 'Electronics', count: 2, avgAccuracy: 93 },
  { category: 'Clothing', count: 1, avgAccuracy: 88 },
  { category: 'Furniture', count: 2, avgAccuracy: 94 }
];

const History = () => {
  const [predictions, setPredictions] = React.useState(mockPredictions);
  
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  const deletePrediction = (id: number) => {
    setPredictions(predictions.filter(pred => pred.id !== id));
    toast.success('Prediction deleted successfully');
  };
  
  const getPriceComparisonStyle = (predicted: number, actual: number) => {
    const diff = actual - predicted;
    if (diff > 0) {
      return { icon: <ArrowUpRight className="h-4 w-4" />, class: "text-green-600" };
    } else if (diff < 0) {
      return { icon: <ArrowDownRight className="h-4 w-4" />, class: "text-red-600" };
    }
    return { icon: null, class: "" };
  };
  
  const getAccuracyColor = (accuracy: number) => {
    if (accuracy >= 95) return "bg-green-100 text-green-800";
    if (accuracy >= 90) return "bg-blue-100 text-blue-800";
    if (accuracy >= 80) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };
  
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Prediction History</h1>
        <p className="text-muted-foreground mb-8">View and analyze your previous price predictions</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* History list */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Predictions</CardTitle>
                <CardDescription>Your last 5 price predictions</CardDescription>
              </CardHeader>
              <CardContent>
                {predictions.length > 0 ? (
                  <div className="space-y-6">
                    {predictions.map((prediction) => (
                      <div key={prediction.id} className="flex flex-col p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">{prediction.productName}</h3>
                            <Badge variant="outline" className="capitalize">
                              {prediction.category}
                            </Badge>
                          </div>
                          <Badge className={getAccuracyColor(prediction.accuracy)}>
                            {prediction.accuracy}% Accuracy
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                          <div>
                            <div className="text-sm text-muted-foreground">Predicted Price</div>
                            <div className="font-medium">${prediction.predictedPrice.toFixed(2)}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Actual Price</div>
                            <div className="font-medium flex items-center gap-1">
                              ${prediction.actualPrice.toFixed(2)}
                              <span className={getPriceComparisonStyle(prediction.predictedPrice, prediction.actualPrice).class}>
                                {getPriceComparisonStyle(prediction.predictedPrice, prediction.actualPrice).icon}
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Difference</div>
                            <div className={`font-medium ${getPriceComparisonStyle(prediction.predictedPrice, prediction.actualPrice).class}`}>
                              ${Math.abs(prediction.actualPrice - prediction.predictedPrice).toFixed(2)}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3 w-3" /> Date
                            </div>
                            <div className="font-medium">{formatDate(prediction.date)}</div>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex justify-end">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => deletePrediction(prediction.id)}
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <BarChart2 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">No predictions yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Your prediction history will appear here once you make predictions.
                    </p>
                    <Button asChild>
                      <a href="/predict">Make Your First Prediction</a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Stats and Insights */}
          <div className="lg:col-span-1">
            <Tabs defaultValue="accuracy">
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="accuracy">Accuracy</TabsTrigger>
                <TabsTrigger value="categories">Categories</TabsTrigger>
              </TabsList>
              
              <TabsContent value="accuracy">
                <Card>
                  <CardHeader>
                    <CardTitle>Prediction Accuracy</CardTitle>
                    <CardDescription>Tracking your prediction accuracy over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={mockAccuracyData}
                          margin={{
                            top: 10,
                            right: 10,
                            left: 0,
                            bottom: 0,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis domain={[80, 100]} />
                          <Tooltip />
                          <Line 
                            type="monotone" 
                            dataKey="accuracy" 
                            stroke="#0080e6" 
                            strokeWidth={2}
                            activeDot={{ r: 8 }} 
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="mt-6">
                      <div className="text-sm font-medium mb-1">Average Accuracy</div>
                      <div className="text-3xl font-bold text-primary">
                        {predictions.length > 0 
                          ? (predictions.reduce((acc, pred) => acc + pred.accuracy, 0) / predictions.length).toFixed(2) 
                          : 0}%
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="categories">
                <Card>
                  <CardHeader>
                    <CardTitle>Category Analysis</CardTitle>
                    <CardDescription>Prediction counts and accuracy by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={mockCategoryData}
                          margin={{
                            top: 10,
                            right: 10,
                            left: 0,
                            bottom: 0,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="category" />
                          <YAxis yAxisId="left" orientation="left" stroke="#0080e6" />
                          <YAxis yAxisId="right" orientation="right" stroke="#00e6c7" />
                          <Tooltip />
                          <Legend />
                          <Bar yAxisId="left" dataKey="count" name="Predictions" fill="#0080e6" />
                          <Bar yAxisId="right" dataKey="avgAccuracy" name="Avg. Accuracy (%)" fill="#00e6c7" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Most Accurate Category</div>
                        <div className="font-medium">Furniture (94%)</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Total Predictions</div>
                        <div className="font-medium">{predictions.length}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default History;
