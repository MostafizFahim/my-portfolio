export interface SkillItem {
  name: string;
  category: string;
  level?: 'advanced' | 'intermediate' | 'exploring';
  highlight?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}
