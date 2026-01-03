export type Skill = {
  name: string;
  level: string;
  description: string;
};

export const skills: Skill[] = [
  { name: 'React/Next.js', level: 'Advanced', description: 'SSR & App Router' },
  { name: 'TypeScript', level: 'Expert', description: 'Strictly typed systems' },
  { name: 'Tailwind CSS', level: 'Expert', description: 'Utility-first design' },
  { name: 'PostgreSQL', level: 'Intermediate', description: 'Relational architecture' },
];
