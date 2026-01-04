export type Skill = {
  name: string;
  category: 'Frontend' | 'Backend' | 'Languages' | 'Tools' | 'Design';
  level: string;
  description: string;
};

export const skills: Skill[] = [
  { name: 'React/Next.js', category: 'Frontend', level: 'Advanced', description: 'SSR & App Router' },
  { name: 'TypeScript', category: 'Languages', level: 'Expert', description: 'Strictly typed systems' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Expert', description: 'Utility-first design' },
  { name: 'PostgreSQL', category: 'Backend', level: 'Intermediate', description: 'Relational architecture' },
];
