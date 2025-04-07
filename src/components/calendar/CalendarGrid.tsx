
import React from 'react';
import { format, isToday, isSameMonth, isWeekend } from 'date-fns';
import { cn } from '@/lib/utils';
import { EventDetails } from '@/types/calendar';
import CalendarEvent from './CalendarEvent';

interface EventsByDay {
  date: Date;
  events: EventDetails[];
}

interface CalendarGridProps {
  days: Date[];
  eventsByDay: EventsByDay[];
  currentDate: Date;
  onEventClick: (event: EventDetails) => void;
}

const CalendarGrid = ({ days, eventsByDay, currentDate, onEventClick }: CalendarGridProps) => {
  // Days of the week
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="flex-1 min-h-0 border rounded-lg overflow-hidden bg-white">
      {/* Week day headers */}
      <div className="calendar-grid border-b">
        {weekDays.map((day) => (
          <div key={day} className="py-2 text-center font-medium text-sm">
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar days */}
      <div className="calendar-grid h-full">
        {eventsByDay.map(({ date, events }) => (
          <div 
            key={date.toString()} 
            className={cn(
              "calendar-day border p-1 overflow-hidden",
              !isSameMonth(date, currentDate) && "bg-muted/20 text-muted-foreground",
              isWeekend(date) && "bg-muted/10",
              isToday(date) && "bg-calendar-hover"
            )}
          >
            <div className={cn(
              "calendar-day-number text-xs font-medium",
              isToday(date) && "bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center"
            )}>
              {format(date, 'd')}
            </div>
            
            <div className="mt-6 space-y-1 overflow-hidden">
              {events.map((event) => (
                <CalendarEvent 
                  key={event.id} 
                  event={event} 
                  onClick={() => onEventClick(event)} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
