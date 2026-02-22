import { DonationTier, FundAllocation } from '@/types';

export const donationTiers: DonationTier[] = [
  { id: 'supporter', amount: 10, name: 'Supporter', description: 'Every bit helps!' },
  { id: 'friend', amount: 25, name: 'Friend', description: 'Buy an artist lunch' },
  { id: 'backer', amount: 50, name: 'Backer', isPopular: true, description: 'Most popular choice' },
  { id: 'patron', amount: 100, name: 'Patron', description: 'Make a real impact' },
  { id: 'champion', amount: 500, name: 'Champion', perks: ['Name on signage', 'Social media recognition', 'Donor wall'] },
];

export const SWIPESIMPLE_LINKS: Record<number, string> = {
  10: 'https://swipesimple.com/links/lnk_ee86a42a4abbcd6dd6a6d4debe4bbc45',
  25: 'https://swipesimple.com/links/lnk_0c91eca3466f2874e56c9b046b341e4a',
  50: 'https://swipesimple.com/links/lnk_09a80297e96a9ac545e3e65f7e63b72b',
  100: 'https://swipesimple.com/links/lnk_45a48a4a7889ce1a752bc1320a733e50',
  500: 'https://swipesimple.com/links/lnk_68081934f49d3432fbfbed46fcf45b00',
};

export const SWIPESIMPLE_ANY_AMOUNT = 'https://swipesimple.com/links/lnk_a002f90a535e5bb21c9d30eb6cfe71d6';

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
