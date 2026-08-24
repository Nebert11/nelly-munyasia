export interface Publication {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export const publications: Publication[] = [
  {
    id: 'reproductive-health-policy',
    category: 'Opinion',
    date: '2024',
    title: 'Why Reproductive Health Rights Are Central to Universal Health Coverage',
    excerpt:
      'Universal health coverage cannot be achieved without centering reproductive health and rights. Here is what it will take.',
    image:
      '/resources/nelly.jpg',
    imageAlt: 'Group of African women professionals collaborating around a laptop',
    featured: true,
  },
  {
    id: 'community-health-workers',
    category: 'Article',
    date: '2023',
    title: 'Community Health Workers: The Backbone of Resilient Health Systems',
    excerpt:
      'How investing in community health workers transforms outcomes and builds trust at the last mile.',
    image:
      '/resources/nelly2.jpg',
    imageAlt: 'Female healthcare worker smiling with two children outside',
  },
  {
    id: 'youth-advocacy',
    category: 'Speech',
    date: '2023',
    title: 'A Seat at the Table: Youth Leadership in Health Policy',
    excerpt:
      'Remarks delivered at a regional youth health summit on why young voices must shape the policies that affect them.',
    image:
      '/resources/nelly3.jpg',
    imageAlt: 'Businesswoman presenting with microphone at a conference',
  },
  {
    id: 'womens-health-equity',
    category: 'Interview',
    date: '2022',
    title: 'Women, Health, and Equity: A Conversation',
    excerpt:
      'An interview exploring the intersections of gender, health, and equity in East Africa.',
    image:
      '/resources/nelly.jpg',
    imageAlt: 'Five diverse women having a productive meeting in a modern office',
  },
];
