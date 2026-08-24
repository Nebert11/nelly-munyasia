export interface Project {
  id: string;
  title: string;
  year: string;
  organization: string;
  role: string;
  description: string;
  impact: string;
  image: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    id: 'self-injection-advocacy',
    title: 'Self-Injection Advocacy Initiative',
    year: '2024',
    organization: 'Pathfinder International',
    role: 'Self-Injection Ambassador',
    description:
      'Led national advocacy to expand access to self-injected contraception, giving women greater autonomy and convenience in family planning.',
    impact:
      'Helped advance policy adoption and community awareness around self-injection as a reproductive health option.',
    image:
      '/assets/hero-background.jpg',
    imageAlt: 'Healthcare worker checking blood pressure of an elderly woman in a rural clinic',
  },
  {
    id: 'health-systems-strengthening',
    title: 'Health Systems Strengthening',
    year: '2022',
    organization: 'Ministry of Health & Partners',
    role: 'Technical Advisor',
    description:
      'Supported the design and implementation of health systems strengthening initiatives to improve service delivery and health outcomes.',
    impact:
      'Contributed to improved access to quality healthcare in underserved communities.',
    image:
      '/assets/health.jpg',
    imageAlt: 'Healthcare professionals engaging with villagers in a rural setting',
  },
  {
    id: 'youth-leadership-program',
    title: 'Youth Leadership in Health Program',
    year: '2023',
    organization: 'Civil Society Coalition',
    role: 'Program Lead',
    description:
      'Mentored and trained young health advocates, equipping them with the tools and platforms to drive change in their communities.',
    impact:
      'Built a network of young leaders championing health and rights across multiple counties.',
    image:
      '/assets/leadership.jpg',
    imageAlt: 'A diverse group of adults engaged in a business seminar',
  },
];
