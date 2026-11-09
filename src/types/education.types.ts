export interface Education {
  degree: string;
  field: string;
  institution: string;
  institutionShort: string;
  location: string;
  period: string;
  graduationDate: string;
  cgpa: string;
  thesis: {
    title: string;
    description: string;
    supervisor: string;
    publications: string[];
  };
  relevantCoursework: string[];
}
