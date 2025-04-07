
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Clock, Brain, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const SmartSuggestions = () => {
  const { toast } = useToast();

  const handleSuggestionClick = (suggestion: string) => {
    toast({
      title: "AI Suggestion",
      description: `${suggestion} has been added to your calendar!`,
      duration: 3000,
    });
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center">
          <Sparkles className="h-4 w-4 text-primary mr-2" />
          <CardTitle className="text-lg">AI Suggestions</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted/50 p-3 rounded-md">
          <div className="flex items-start">
            <Brain className="h-5 w-5 text-calendar-event-focus mr-2" />
            <div>
              <h4 className="font-medium text-sm">Focus Time Recommendation</h4>
              <p className="text-muted-foreground text-xs my-1">You have back-to-back meetings this afternoon. Schedule a 2-hour focus block tomorrow morning?</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2"
                onClick={() => handleSuggestionClick("Focus time block")}
              >
                Add to Calendar
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 p-3 rounded-md">
          <div className="flex items-start">
            <Calendar className="h-5 w-5 text-calendar-event-meeting mr-2" />
            <div>
              <h4 className="font-medium text-sm">Meeting Preparation</h4>
              <p className="text-muted-foreground text-xs my-1">Project review meeting in 2 days. Add a 30-minute prep session?</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2"
                onClick={() => handleSuggestionClick("Meeting prep session")}
              >
                Add to Calendar
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 p-3 rounded-md">
          <div className="flex items-start">
            <Clock className="h-5 w-5 text-calendar-event-secondary mr-2" />
            <div>
              <h4 className="font-medium text-sm">Optimal Meeting Times</h4>
              <p className="text-muted-foreground text-xs my-1">Based on your productivity patterns, your best meeting times are between 10AM-12PM.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SmartSuggestions;
