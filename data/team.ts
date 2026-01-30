import { TeamMember } from '@/types';

export const teamMembers: TeamMember[] = [
  { id: 'member-1', name: 'Board Member 1', title: 'President', image: '/images/team/placeholder.jpg', bio: 'Leading the charge to bring great music to Crooked Lake.', category: 'board', order: 1 },
  { id: 'member-2', name: 'Board Member 2', title: 'Vice President', image: '/images/team/placeholder.jpg', category: 'board', order: 2 },
  { id: 'member-3', name: 'Board Member 3', title: 'Treasurer', image: '/images/team/placeholder.jpg', category: 'board', order: 3 },
  { id: 'member-4', name: 'Board Member 4', title: 'Secretary', image: '/images/team/placeholder.jpg', category: 'board', order: 4 },
  { id: 'member-5', name: 'Team Lead 1', title: 'Stage Manager', image: '/images/team/placeholder.jpg', category: 'team', order: 5 },
  { id: 'member-6', name: 'Team Lead 2', title: 'Volunteer Coordinator', image: '/images/team/placeholder.jpg', category: 'team', order: 6 },
];

export const festivalStory = `The Crooked Lake Sandbar Music Festival started as a dream shared by a group of friends who love music, community, and the lake. What began as a small gathering on the sandbar has grown into a beloved annual tradition that brings together hundreds of people for a weekend of live music, fun on the water, and giving back. As a charity event, every dollar raised goes directly to supporting our community. From auctions and merchandise to generous sponsors and donors, our festival proves that great music and great causes go hand in hand.`;
