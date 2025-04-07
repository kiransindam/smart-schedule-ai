
export type EventType = 'meeting' | 'focus' | 'personal' | 'other';

export interface EventDetails {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  type: EventType;
  description?: string;
  location?: string;
  participants?: string[];
}
