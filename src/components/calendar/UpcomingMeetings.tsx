
import React from 'react';
import { format, parseISO } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, Video, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EventDetails } from '@/types/calendar';
import { useToast } from '@/components/ui/use-toast';

interface UpcomingMeetingsProps {
  events: EventDetails[];
}

const UpcomingMeetings = ({ events }: UpcomingMeetingsProps) => {
  const { toast } = useToast();

  const handleJoinMeeting = (event: EventDetails) => {
    toast({
      title: "Join Meeting",
      description: `Joining ${event.title}...`,
      duration: 3000,
    });
  };

  // Only show meetings and limit to 3
  const upcomingMeetings = events
    .filter(event => event.type === 'meeting')
    .slice(0, 3);

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center">
          <Users className="h-4 w-4 text-primary mr-2" />
          <CardTitle className="text-lg">Upcoming Meetings</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingMeetings.length === 0 ? (
          <p className="text-muted-foreground text-sm">No upcoming meetings</p>
        ) : (
          upcomingMeetings.map((event) => (
            <div key={event.id} className="bg-muted/50 p-3 rounded-md">
              <h4 className="font-medium text-sm">{event.title}</h4>
              <div className="flex items-center mt-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{format(parseISO(event.startTime), 'MMM d, h:mm a')} - {format(parseISO(event.endTime), 'h:mm a')}</span>
              </div>
              {event.location && (
                <div className="flex items-center mt-1 text-xs text-muted-foreground">
                  {event.location.toLowerCase().includes('zoom') || 
                   event.location.toLowerCase().includes('teams') || 
                   event.location.toLowerCase().includes('meet') ? (
                    <Video className="h-3 w-3 mr-1" />
                  ) : (
                    <MapPin className="h-3 w-3 mr-1" />
                  )}
                  <span>{event.location}</span>
                </div>
              )}
              <div className="mt-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-xs"
                  onClick={() => handleJoinMeeting(event)}
                >
                  {event.location && 
                   (event.location.toLowerCase().includes('zoom') || 
                    event.location.toLowerCase().includes('teams') || 
                    event.location.toLowerCase().includes('meet')) ? 
                    'Join Meeting' : 'View Details'}
                </Button>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default UpcomingMeetings;
