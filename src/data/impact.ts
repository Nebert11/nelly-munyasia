export interface ImpactStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const impactStats: ImpactStat[] = [
  {
    id: 'health-professionals',
    value: 600,
    suffix: '+',
    label: 'Health Professionals',
    description: 'Reached through leadership, mentorship, and network-building across the region.',
  },
  {
    id: 'advocacy-platforms',
    value: 10,
    suffix: '+',
    label: 'Advocacy Platforms',
    description: 'National and international platforms engaged for policy and systems change.',
  },
  {
    id: 'years-leadership',
    value: 10,
    suffix: '+',
    label: 'Years of Leadership',
    description: 'Dedicated to public health, advocacy, and community empowerment.',
  },
  {
    id: 'awards',
    value: 5,
    suffix: '+',
    label: 'Awards & Recognitions',
    description: 'Honored by local and international organizations for impact and service.',
  },
];
