export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  span: 'tall' | 'wide' | 'normal';
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: '/resources/nelly.jpg',
    alt: 'Healthcare professionals engaging with villagers in a rural setting',
    caption: 'Community health outreach in rural Kenya',
    span: 'tall',
  },
  {
    id: 'g2',
    src: '/resources/nelly2.jpg',
    alt: 'Woman presenting at a conference with a microphone',
    caption: 'Speaking engagement on health policy',
    span: 'wide',
  },
  {
    id: 'g3',
    src: '/resources/nelly3.jpg',
    alt: 'Female healthcare worker smiling with two children outside',
    caption: 'Community care and child health',
    span: 'normal',
  },
  {
    id: 'g4',
    src: '/resources/nelly.jpg',
    alt: 'Group of African women professionals collaborating around a laptop',
    caption: 'Women in health leadership',
    span: 'normal',
  },
  {
    id: 'g5',
    src: '/resources/nelly2.jpg',
    alt: 'Female doctor giving a health lecture to a group of women',
    caption: 'Health education workshop',
    span: 'wide',
  },
  {
    id: 'g6',
    src: '/resources/nelly3.jpg',
    alt: 'Outdoor community gathering in Kenya',
    caption: 'Community gathering and engagement',
    span: 'tall',
  },
  {
    id: 'g7',
    src: '/resources/nelly.jpg',
    alt: 'Group of women in a community empowerment project',
    caption: "Women's empowerment project",
    span: 'normal',
  },
  {
    id: 'g8',
    src: '/resources/nelly2.jpg',
    alt: 'Woman delivering a speech at a conference podium',
    caption: 'Keynote address at an international forum',
    span: 'wide',
  },
];
