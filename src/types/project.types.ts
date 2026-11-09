export type ProjectCategory = 
  | 'ai-ml' 
  | 'backend' 
  | 'blockchain' 
  | 'fullstack' 
  | 'iot' 
  | 'academic';

export type ProjectTier = 'featured' | 'secondary' | 'academic';

export type ProjectOwnership = 'creator' | 'contribution' | 'group';

export interface ProjectMetric {
  label: string;
  value: string;
  notes?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  tier: ProjectTier;
  ownership: ProjectOwnership;
  ownershipNote?: string;
  disclaimer?: string;
  thumbnail: string;
  technologies: string[];
  metrics?: ProjectMetric[];
  problemStatement: string;
  engineeringSolutions: string[];
  highlights: string[];
  githubUrl?: string;
  githubMobileUrl?: string;
  demoUrl?: string;
  apiHealthUrl?: string;
  videoUrl?: string;
  paperUrl?: string;
  isConfidential?: boolean;
}
