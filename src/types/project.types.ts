export type ProjectCategory = 
  | 'ai-ml' 
  | 'backend' 
  | 'blockchain' 
  | 'fullstack' 
  | 'iot' 
  | 'academic';

export type ProjectTier = 'featured' | 'secondary' | 'academic';

export type ProjectOwnership = 'creator' | 'contribution' | 'group' | 'maintenance';

export interface ProjectMetric {
  label: string;
  value: string;
  notes?: string;
}

export interface ArchitecturalDecision {
  decision: string;
  justification: string;
}

export interface ImplementationDeepDive {
  sectionTitle: string;
  content: string;
  keyPoints: string[];
}

export interface ChallengeAndSolution {
  challenge: string;
  solution: string;
}

export interface ComparisonTable {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface DisclaimerBox {
  title: string;
  text: string;
  variant: 'warning' | 'info' | 'security';
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
  disclaimerBox?: DisclaimerBox;
  thumbnail: string;
  technologies: string[];
  metrics?: ProjectMetric[];
  problemStatement: string;
  engineeringSolutions: string[];
  highlights: string[];
  
  // Case Study & Architectural Deep Dive fields
  diagramType?: 'banking' | 'rag' | 'blockchain' | 'agronet' | 'iot';
  architectureOverview?: string;
  architecturalDecisions?: ArchitecturalDecision[];
  implementationDeepDive?: ImplementationDeepDive[];
  userContributionStatement?: string;
  challengesAndSolutions?: ChallengeAndSolution[];
  limitationsAndFutureWork?: string[];
  comparisonTable?: ComparisonTable;
  
  // Links
  githubUrl?: string;
  githubMobileUrl?: string;
  demoUrl?: string;
  apiHealthUrl?: string;
  videoUrl?: string;
  paperUrl?: string;
  isConfidential?: boolean;
}
