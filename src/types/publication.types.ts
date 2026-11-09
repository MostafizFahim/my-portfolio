export interface Publication {
  id: string;
  slug: string;
  title: string;
  authorship: string; // e.g. "2nd Author"
  authorList: string;
  venue: string;
  venueType: 'conference' | 'journal';
  status: 'published' | 'accepted' | 'under-review';
  year: number;
  publisher?: string;
  paperUrl?: string;
  doiUrl?: string;
  certificateUrl?: string;
  abstract: string;
  researchMotivation?: string;
  methodology?: string;
  findingsAndResults?: string[];
  keyContributions: string[];
  tags: string[];
  bibtex: string;
  relatedProjectSlug?: string;
}
