import {
  HeartPulse,
  ShieldCheck,
  Megaphone,
  Users,
  Sparkles,
  Handshake,
  type LucideIcon,
} from 'lucide-react';

export interface LeadershipArea {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const leadershipAreas: LeadershipArea[] = [
  {
    id: 'health-systems',
    icon: HeartPulse,
    title: 'Health Systems',
    description: 'Work in strengthening health systems and improving access to healthcare.',
  },
  {
    id: 'reproductive-health',
    icon: ShieldCheck,
    title: 'Reproductive Health & Rights',
    description: 'Advocacy and programmes supporting women, girls and communities.',
  },
  {
    id: 'advocacy',
    icon: Megaphone,
    title: 'Health Systems Strengthening',
    description: 'Supporting healthcare providers and institutions to deliver better services.',
  },
  {
    id: 'womens-health',
    icon: Users,
    title: 'Advocacy & Policy',
    description:
      'Contributing to national and regional conversations around reproductive health and health equity.',
  },
  {
    id: 'youth-leadership',
    icon: Sparkles,
    title: "Women's Leadership",
    description: 'Supporting and creating opportunities for women to lead and influence change.',
  },
  {
    id: 'partnerships',
    icon: Handshake,
    title: 'Mentorship',
    description: 'Supporting the next generation of leaders and professionals.',
  },
];
