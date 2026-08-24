import { Link2, Linkedin, Mail, type LucideIcon } from 'lucide-react';

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nelly-munyasia',
    icon: Linkedin,
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:hello@nellymunyasia.com',
    icon: Mail,
  },
  {
    id: 'twitter',
    label: 'Twitter',
    href: 'https://twitter.com/nellymunyasia',
    icon: Link2,
  },
];
