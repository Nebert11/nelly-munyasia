export interface Award {
  id: string;
  name: string;
  organization: string;
  year: string;
  description: string;
}

export const awards: Award[] = [
  {
    id: 'global-citizen-award',
    name: 'Global Citizen Award',
    organization: 'Global Citizen',
    year: '2020',
    description:
      'Recognized for outstanding contributions to global health advocacy and community empowerment.',
  },
  {
    id: 'leadership-board-role',
    name: 'Board Leadership Appointment',
    organization: 'Health Coalition',
    year: '2021',
    description:
      'Appointed to a senior governance role guiding health policy and program direction.',
  },
  {
    id: 'self-injection-ambassador',
    name: 'Self-Injection Ambassador',
    organization: 'Pathfinder International',
    year: '2024',
    description:
      'Honored as a national ambassador advancing access to self-injected contraception.',
  },
];
