export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineMilestone[] = [
  {
    id: 'global-citizen',
    year: '2020',
    title: 'Global Citizen Award',
    description:
      'Recognized internationally for contributions to global health advocacy and community empowerment.',
  },
  {
    id: 'board-leadership',
    year: '2021',
    title: 'Board Leadership Role',
    description:
      'Appointed to a senior governance position guiding health policy and coalition strategy.',
  },
  {
    id: 'youth-program',
    year: '2023',
    title: 'Youth Leadership Program Launch',
    description:
      'Launched a program mentoring and training the next generation of health advocates.',
  },
  {
    id: 'self-injection',
    year: '2024',
    title: 'Self-Injection Ambassador',
    description:
      'Named a national ambassador advancing access to self-injected contraception for women.',
  },
];
