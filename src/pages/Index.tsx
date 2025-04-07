
import React, { useState } from 'react';
import AppLayout from '@/components/layouts/AppLayout';
import Calendar from '@/components/calendar/Calendar';
import { EventDetails } from '@/types/calendar';
import SmartSuggestions from '@/components/ai/SmartSuggestions';
import UpcomingMeetings from '@/components/calendar/UpcomingMeetings';

// Mock events
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

const Index = () => {
  const [events] = useState<EventDetails[]>(mockEvents);

  return (
    <AppLayout>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-3">
          <Calendar />
        </div>
        <div className="space-y-6">
          <SmartSuggestions />
          <UpcomingMeetings events={events} />
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
