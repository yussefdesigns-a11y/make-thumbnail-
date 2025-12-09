import { ThumbnailProject, ServiceStep, Testimonial } from './types';

export const PROJECTS: ThumbnailProject[] = [
  {
    id: '1',
    title: 'High Intensity Training',
    category: 'Education',
    // Matches the heavy dumbbell/gym aesthetic
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    stats: { ctr: '16.2%', views: '3.5M' }
  },
  {
    id: '2',
    title: 'David Laid: Natural Transformation',
    category: 'Education',
    // Matches the David Laid bodybuilder aesthetic
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
    stats: { ctr: '14.8%', views: '1.2M' }
  },
  {
    id: '3',
    title: 'The 4 Best AI Tools',
    category: 'Education',
    // High tech AI visual
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    stats: { ctr: '19.5%', views: '850K' }
  },
  {
    id: '4',
    title: 'Pranking a Millionaire',
    category: 'Podcast',
    // Podcast studio vibe
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    stats: { ctr: '12.4%', views: '4.1M' }
  },
  {
    id: '5',
    title: 'The 2026 Financial Plan',
    category: 'Finance',
    // Finance/Charts dark mode
    imageUrl: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80',
    stats: { ctr: '15.6%', views: '2.9M' }
  },
  {
    id: '6',
    title: 'I Bought a $1M House',
    category: 'Finance',
    // Modern Luxury Mansion
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-6ad4c42792b9?auto=format&fit=crop&w=800&q=80',
    stats: { ctr: '13.9%', views: '1.5M' }
  }
];

export const SERVICES: ServiceStep[] = [
  {
    id: 1,
    title: 'Strategy',
    description: 'Analyzing competitor thumbnails and identifying viral hooks.',
    icon: 'search'
  },
  {
    id: 2,
    title: 'Design',
    description: 'High-fidelity 3D compositing, lighting, and text manipulation.',
    icon: 'pen'
  },
  {
    id: 3,
    title: 'Optimization',
    description: 'A/B testing preparation and color contrast checks.',
    icon: 'trending-up'
  },
  {
    id: 4,
    title: 'Launch',
    description: 'Final delivery in multiple formats ready for upload.',
    icon: 'check'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    clientName: 'Alex Hormozi Style',
    role: 'Business Creator',
    quote: "The CTR on my videos jumped by 40% after switching to these thumbnails. The 3D text is unmatched.",
    avatarUrl: 'https://picsum.photos/seed/avatar1/100/100'
  },
  {
    id: 't2',
    clientName: 'Sarah Digital',
    role: 'Tech Reviewer',
    quote: "Professional, fast, and understands the psychology of the click. Worth every penny.",
    avatarUrl: 'https://picsum.photos/seed/avatar2/100/100'
  }
];
