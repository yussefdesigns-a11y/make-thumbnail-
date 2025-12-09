export interface ThumbnailProject {
  id: string;
  title: string;
  category: 'Gaming' | 'Finance' | 'Vlogging' | 'Education' | 'Podcast';
  imageUrl: string;
  stats: {
    ctr: string;
    views: string;
  };
}

export interface ServiceStep {
  id: number;
  title: string;
  description: string;
  icon: 'search' | 'pen' | 'trending-up' | 'check';
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  quote: string;
  avatarUrl: string;
}