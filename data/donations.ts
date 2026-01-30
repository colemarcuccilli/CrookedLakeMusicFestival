import { DonationTier, FundAllocation } from '@/types';

export const donationTiers: DonationTier[] = [
  { id: 'friend', amount: 25, name: 'Friend', description: 'Every bit helps!' },
  { id: 'supporter', amount: 50, name: 'Supporter', isPopular: true, description: 'Most popular choice' },
  { id: 'patron', amount: 100, name: 'Patron', description: 'Make a real impact' },
  { id: 'benefactor', amount: 250, name: 'Benefactor', perks: ['Name on donor wall'] },
  { id: 'champion', amount: 500, name: 'Champion', perks: ['Name on signage', 'Social media recognition', 'Donor wall'] },
];

export const fundAllocations: FundAllocation[] = [
  { category: 'Artist Fees & Sound', percentage: 40, icon: 'Guitar', color: 'bg-lake' },
  { category: 'Safety & Medical', percentage: 20, icon: 'Shield', color: 'bg-pink' },
  { category: 'Stage & Equipment', percentage: 20, icon: 'Tent', color: 'bg-sunset' },
  { category: 'Operations & Logistics', percentage: 15, icon: 'Truck', color: 'bg-lake-light' },
  { category: 'Marketing & Community', percentage: 5, icon: 'Megaphone', color: 'bg-sunset-light' },
];

export const taxInfo = {
  isNonProfit: true,
  ein: 'XX-XXXXXXX',
  organizationType: '501(c)(3)',
};
