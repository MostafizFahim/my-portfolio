export interface ExperienceRole {
  title: string;
  type: 'permanent' | 'internship';
  period: string;
  startDate: string;
  endDate: string;
  summary: string;
  responsibilities: string[];
  deliverables?: {
    name: string;
    description: string;
    technologies: string[];
  }[];
}

export interface Experience {
  id: string;
  company: string;
  companyShort: string;
  location: string;
  companyContext: string;
  roles: ExperienceRole[];
  technologies: string[];
}
