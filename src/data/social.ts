import { Facebook, Linkedin, Link2, type LucideIcon } from 'lucide-react';

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://web.facebook.com/Nelly.Munyasia',
    icon: Facebook,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nelly-munyasia-0751b2166/',
    icon: Linkedin,
  },
  {
    id: 'twitter',
    label: 'X',
    href: 'https://x.com/nellymunyasia',
    icon: Link2,
  },
];
