
import React from 'react';
import { format } from 'date-fns';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface CalendarHeaderProps {
  currentDate: Date;
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
}

const CalendarHeader = ({ currentDate, onPrev, onNext, onToday }: CalendarHeaderProps) => {
  const { toast } = useToast();

  const handleNewEvent = () => {
    toast({
      title: "Coming Soon",
      description: "Event creation will be available in the next update!",
      duration: 3000,
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
      <div>
        <h1 className="text-3xl font-bold mb-1">{format(currentDate, 'MMMM yyyy')}</h1>
        <p className="text-muted-foreground">View and manage your schedule</p>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" onClick={onToday}>Today</Button>
        <Button variant="outline" size="icon" onClick={onPrev}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={onNext}>
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button onClick={handleNewEvent} className="ml-2">
          <Plus className="h-4 w-4 mr-2" />
          New Event
        </Button>
      </div>
    </div>
  );
};

export default CalendarHeader;
