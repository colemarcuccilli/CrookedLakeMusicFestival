import { ScheduleEvent } from '@/types';

export const schedule: ScheduleEvent[] = [
  { id: 'event-1', title: 'Gates Open', stage: 'general', day: 'friday', startTime: '12:00', endTime: '12:30', description: 'Boat up to the sandbar and grab your spot!' },
  { id: 'event-2', title: 'Angola Acoustic', artistId: 'artist-7', stage: 'main', day: 'friday', startTime: '13:00', endTime: '14:00' },
  { id: 'event-3', title: 'The Drifters', artistId: 'artist-5', stage: 'main', day: 'friday', startTime: '15:00', endTime: '16:30' },
  { id: 'event-4', title: 'Waves', artistId: 'artist-3', stage: 'main', day: 'friday', startTime: '18:00', endTime: '19:30' },
  { id: 'event-5', title: 'The Lakeside Band', artistId: 'artist-1', stage: 'main', day: 'friday', startTime: '21:00', endTime: '23:00', isHeadliner: true },
  { id: 'event-6', title: 'Gates Open', stage: 'general', day: 'saturday', startTime: '11:00', endTime: '11:30', description: 'Day two begins!' },
  { id: 'event-7', title: 'Crooked Creek', artistId: 'artist-8', stage: 'main', day: 'saturday', startTime: '13:00', endTime: '14:00' },
  { id: 'event-8', title: 'Lake Effect', artistId: 'artist-6', stage: 'main', day: 'saturday', startTime: '15:00', endTime: '16:30' },
  { id: 'event-9', title: 'Sandy Tones', artistId: 'artist-4', stage: 'main', day: 'saturday', startTime: '17:00', endTime: '18:30' },
  { id: 'event-10', title: 'Sunset Groove', artistId: 'artist-2', stage: 'main', day: 'saturday', startTime: '21:00', endTime: '23:00', isHeadliner: true },
];
