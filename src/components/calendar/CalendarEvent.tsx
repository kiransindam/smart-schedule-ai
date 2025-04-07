
import React from 'react';
import { format, parseISO } from 'date-fns';
import { EventDetails } from '@/types/calendar';
import { cn } from '@/lib/utils';

interface CalendarEventProps {
  event: EventDetails;
  onClick: () => void;
}

const CalendarEvent = ({ event, onClick }: CalendarEventProps) => {
  // Determine event color based on type
  const eventColor = (() => {
    switch (event.type) {
      case 'meeting':
        return 'bg-calendar-event-meeting text-white';
      case 'focus':
        return 'bg-calendar-event-focus text-white';
      case 'personal':
        return 'bg-calendar-event-secondary text-white';
      default:
        return 'bg-calendar-event-primary text-white';
    }
  })();

  return (
    <div 
      className={cn("event-pill cursor-pointer", eventColor)}
      onClick={onClick}
    >
      <div className="flex items-center">
        <span className="truncate">{event.title}</span>
      </div>
    </div>
  );
};

export default CalendarEvent;
