
import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Check, Car, Users, Coins, Fuel, Map, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface Question {
  id: string;
  question: string;
  description: string;
  options: {
    id: string;
    text: string;
    icon?: React.ReactNode;
  }[];
}

const questions: Question[] = [
  {
    id: 'usage',
    question: 'How will you primarily use your car?',
    description: 'Choose the main purpose for your vehicle.',
    options: [
      { id: 'commute', text: 'Daily commute', icon: <Car className="h-10 w-10 mb-3 text-syria-turquoise" /> },
      { id: 'family', text: 'Family transport', icon: <Users className="h-10 w-10 mb-3 text-syria-turquoise" /> },
      { id: 'business', text: 'Business use', icon: <Shield className="h-10 w-10 mb-3 text-syria-turquoise" /> },
      { id: 'travel', text: 'Long-distance travel', icon: <Map className="h-10 w-10 mb-3 text-syria-turquoise" /> },
    ],
  },
  {
    id: 'budget',
    question: 'What is your budget range?',
    description: 'Select the price range you are comfortable with.',
    options: [
      { id: 'budget_1', text: 'Under $10,000', icon: <Coins className="h-10 w-10 mb-3 text-syria-terracotta" /> },
      { id: 'budget_2', text: '$10,000 - $20,000', icon: <Coins className="h-10 w-10 mb-3 text-syria-terracotta" /> },
      { id: 'budget_3', text: '$20,000 - $30,000', icon: <Coins className="h-10 w-10 mb-3 text-syria-terracotta" /> },
      { id: 'budget_4', text: 'Above $30,000', icon: <Coins className="h-10 w-10 mb-3 text-syria-terracotta" /> },
    ],
  },
  {
    id: 'passengers',
    question: 'How many passengers do you regularly transport?',
    description: 'Select the typical number of people in your vehicle.',
    options: [
      { id: 'pass_1', text: '1-2 people' },
      { id: 'pass_2', text: '3-4 people' },
      { id: 'pass_3', text: '5-7 people' },
      { id: 'pass_4', text: '8+ people' },
    ],
  },
  {
    id: 'fuel',
    question: 'What type of fuel do you prefer?',
    description: 'Choose your preferred fuel type based on availability and cost in Syria.',
    options: [
      { id: 'petrol', text: 'Petrol', icon: <Fuel className="h-10 w-10 mb-3 text-syria-olive" /> },
      { id: 'diesel', text: 'Diesel', icon: <Fuel className="h-10 w-10 mb-3 text-syria-olive" /> },
      { id: 'hybrid', text: 'Hybrid', icon: <Fuel className="h-10 w-10 mb-3 text-syria-olive" /> },
      { id: 'any', text: 'No preference', icon: <Fuel className="h-10 w-10 mb-3 text-syria-olive" /> },
    ],
  },
  {
    id: 'condition',
    question: 'What condition of car are you looking for?',
    description: 'Select your preference for vehicle condition.',
    options: [
      { id: 'new', text: 'New' },
      { id: 'used_like_new', text: 'Used (Like New)' },
      { id: 'used_good', text: 'Used (Good Condition)' },
      { id: 'any_condition', text: 'Any Condition' },
    ],
  },
];

type AnswerKey = string;
type AnswerValue = string;
type Answers = Record<AnswerKey, AnswerValue>;

interface ResultCategory {
  title: string;
  description: string;
  recommendations: {
    model: string;
    price: string;
    image: string;
  }[];
}

// This is a simplified example of how recommendations would work
// In a real app, this would likely be more complex and data-driven
const getResults = (answers: Answers): ResultCategory[] => {
  // This is just for demo purposes - would be based on actual answers in a real app
  const isFamilyUse = answers.usage === 'family';
  const isHighBudget = ['budget_3', 'budget_4'].includes(answers.budget);
  const needsMoreSpace = ['pass_3', 'pass_4'].includes(answers.passengers);
  
  if (isFamilyUse || needsMoreSpace) {
    return [
      {
        title: 'Family SUVs & Minivans',
        description: 'Vehicles with ample space for passengers and cargo, ideal for family use.',
        recommendations: [
          {
            model: 'Toyota Fortuner',
            price: '$30,000 - $35,000',
            image: 'https://images.unsplash.com/photo-1625253560124-e776d0a5392e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
          },
          {
            model: 'Hyundai Santa Fe',
            price: '$25,000 - $32,000',
            image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80'
          },
          {
            model: 'Kia Carnival',
            price: '$28,000 - $34,000',
            image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80'
          }
        ]
      }
    ];
  } else if (isHighBudget) {
    return [
      {
        title: 'Premium Sedans',
        description: 'Luxury vehicles offering comfort, performance, and prestige.',
        recommendations: [
          {
            model: 'Mercedes-Benz C-Class',
            price: '$32,000 - $40,000',
            image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
          },
          {
            model: 'BMW 3 Series',
            price: '$30,000 - $38,000',
            image: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
          },
          {
            model: 'Audi A4',
            price: '$29,000 - $36,000',
            image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80'
          }
        ]
      }
    ];
  } else {
    return [
      {
        title: 'Practical & Economical',
        description: 'Reliable, fuel-efficient vehicles that are perfect for daily commuting or business use.',
        recommendations: [
          {
            model: 'Toyota Corolla',
            price: '$16,000 - $22,000',
            image: 'https://images.unsplash.com/photo-1623869675781-80aa31012a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80'
          },
          {
            model: 'Honda Civic',
            price: '$17,000 - $23,000',
            image: 'https://images.unsplash.com/photo-1590510696098-9cefc2c75b63?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80'
          },
          {
            model: 'Kia Cerato',
            price: '$15,000 - $21,000',
            image: 'https://images.unsplash.com/photo-1657656783833-2a0d109830ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
          }
        ]
      }
    ];
  }
};

const KnowYourNeeds = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [results, setResults] = useState<ResultCategory[] | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { toast } = useToast();

  const handleOptionSelect = (questionId: string, optionId: string) => {
    setSelectedOption(optionId);
    setAnswers({
      ...answers,
      [questionId]: optionId,
    });
  };

  const handleNext = () => {
    if (!selectedOption) {
      toast({
        title: "Please select an option",
        description: "You need to select an option before proceeding.",
        variant: "destructive",
      });
      return;
    }

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(answers[questions[currentStep + 1].id] || null);
    } else {
      // Last question, show results
      setResults(getResults(answers));
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedOption(answers[questions[currentStep - 1].id] || null);
    }
  };

  const handleStartOver = () => {
    setCurrentStep(0);
    setAnswers({});
    setResults(null);
    setSelectedOption(null);
  };

  const currentQuestion = questions[currentStep];

  return (
    <MainLayout>
      <section className="py-20 bg-muted/30 min-h-screen">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="heading-2 mb-4">Know Your Needs</h1>
            <p className="subtitle">
              Answer a few questions about your preferences and requirements, and we'll help you find the perfect car for your needs.
            </p>
          </div>

          <div className="glass-card max-w-3xl mx-auto p-8">
            {!results ? (
              <div className="animate-fade-in">
                {/* Progress indicator */}
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Question {currentStep + 1} of {questions.length}</span>
                    <span className="text-sm font-medium">{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div 
                      className="bg-syria-terracotta h-2.5 rounded-full transition-all duration-500" 
                      style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-medium mb-2">{currentQuestion.question}</h2>
                  <p className="text-muted-foreground">{currentQuestion.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {currentQuestion.options.map((option) => (
                    <div 
                      key={option.id}
                      className={`border rounded-lg p-5 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-md flex flex-col items-center text-center ${
                        selectedOption === option.id 
                          ? 'border-primary bg-primary/5 shadow-sm' 
                          : 'border-border'
                      }`}
                      onClick={() => handleOptionSelect(currentQuestion.id, option.id)}
                    >
                      {option.icon}
                      <span className="text-base font-medium">{option.text}</span>
                      {selectedOption === option.id && (
                        <div className="absolute top-3 right-3 text-primary">
                          <Check size={18} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft size={16} />
                    Previous
                  </Button>
                  <Button
                    onClick={handleNext}
                    className="flex items-center gap-2 bg-primary text-white hover:bg-primary/90"
                  >
                    {currentStep < questions.length - 1 ? 'Next' : 'See Results'}
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="animate-fade-in">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-medium mb-2">Your Recommended Vehicles</h2>
                  <p className="text-muted-foreground">
                    Based on your preferences, we've selected these vehicles that would be perfect for you.
                  </p>
                </div>

                {results.map((category, i) => (
                  <div key={i} className="mb-10">
                    <h3 className="text-xl font-medium mb-2">{category.title}</h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {category.recommendations.map((car, j) => (
                        <div key={j} className="border rounded-lg overflow-hidden premium-hover">
                          <div className="h-40 overflow-hidden">
                            <img 
                              src={car.image} 
                              alt={car.model} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h4 className="font-medium mb-1">{car.model}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{car.price}</p>
                            <Link 
                              to={`/car-listings?model=${car.model.split(' ')[0]}`}
                              className="text-sm text-syria-terracotta hover:text-syria-terracotta/80 font-medium"
                            >
                              View Similar Cars
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
                  <Button
                    variant="outline"
                    onClick={handleStartOver}
                    className="flex items-center gap-2"
                  >
                    Start Over
                  </Button>
                  <Link to="/car-listings">
                    <Button
                      className="flex items-center gap-2 bg-primary text-white hover:bg-primary/90 w-full sm:w-auto"
                    >
                      Browse All Cars
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default KnowYourNeeds;
