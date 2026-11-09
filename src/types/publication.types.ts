export interface Publication {
  id: string;
  slug: string;
  title: string;
  authorship: string; // "2nd Author"
  authorList: string;
  venue: string;
  venueType: 'conference' | 'journal';
  status: 'published' | 'accepted' | 'under-review';
  year: number;
  paperUrl?: string;
  doiUrl?: string;
  certificateUrl?: string;
  abstract: string;
  keyContributions: string[];
  tags: string[];
  bibtex: string;
}
