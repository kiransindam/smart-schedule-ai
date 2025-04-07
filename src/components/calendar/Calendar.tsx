
import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, parseISO, isSameDay } from 'date-fns';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import { EventDetails } from '@/types/calendar';
import { useToast } from '@/components/ui/use-toast';

const mockEvents: EventDetails[] = [
  {
    id: '1',
    title: 'Team Meeting',
    startTime: '2025-04-08T10:00:00',
    endTime: '2025-04-08T11:00:00',
    type: 'meeting',
    description: 'Weekly team sync',
    location: 'Conference Room A'
  },
  {
    id: '2',
    title: 'Project Review',
    startTime: '2025-04-09T14:00:00',
    endTime: '2025-04-09T15:30:00',
    type: 'meeting',
    description: 'Review Q2 project milestones',
    location: 'Zoom'
  },
  {
    id: '3',
    title: 'Focus Time',
    startTime: '2025-04-10T09:00:00',
    endTime: '2025-04-10T12:00:00',
    type: 'focus',
    description: 'Deep work on product design',
  },
  {
    id: '4',
    title: 'Client Call',
    startTime: '2025-04-12T13:00:00',
    endTime: '2025-04-12T14:00:00',
    type: 'meeting',
    description: 'Discuss new requirements',
    location: 'Microsoft Teams'
  },
  {
    id: '5',
    title: 'Lunch with Jane',
    startTime: '2025-04-15T12:30:00',
    endTime: '2025-04-15T13:30:00',
    type: 'personal',
    description: 'Catch up over lunch',
    location: 'Cafe Misto'
  }
];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events] = useState<EventDetails[]>(mockEvents);
  const [selectedEvent, setSelectedEvent] = useState<EventDetails | null>(null);
  const { toast } = useToast();

  // Navigation functions
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const today = () => setCurrentDate(new Date());

  // Get days for current month view
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Function to handle event click
  const handleEventClick = (event: EventDetails) => {
    setSelectedEvent(event);
    toast({
      title: event.title,
      description: `${format(parseISO(event.startTime), 'MMM d, h:mm a')} - ${format(parseISO(event.endTime), 'h:mm a')}`,
      duration: 3000,
    });
  };

  // Filter events for the current month
  const currentMonthEvents = events.filter(event => 
    isSameMonth(parseISO(event.startTime), currentDate)
  );

  // Group events by day
  const eventsByDay = days.map(day => {
    return {
      date: day,
      events: currentMonthEvents.filter(event => 
        isSameDay(parseISO(event.startTime), day)
      )
    };
  });

  return (
    <div className="h-full flex flex-col">
      <CalendarHeader 
        currentDate={currentDate} 
        onPrev={prevMonth}
        onNext={nextMonth}
        onToday={today}
      />
      <CalendarGrid 
        days={days} 
        eventsByDay={eventsByDay}
        currentDate={currentDate}
        onEventClick={handleEventClick}
      />
    </div>
  );
};

export default Calendar;
