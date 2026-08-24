export interface Resource {
  id: string;
  title: string;
  type: string;
  date: string;
  description: string;
  duration?: string;
  url?: string;
}

export const resources: Resource[] = [
  {
    id: 'r1',
    title: 'Ms. Nelly Munyasia, Executive Director, RHNK | RHNK Pan-African Conference 2026',
    type: 'Videos',
    date: '',
    description: 'Reproductive Health Network Kenya',
    duration: '13:06',
    url: 'https://www.youtube.com/watch?v=KZN6LGPQVYI&t=93s',
  },
  {
    id: 'r2',
    title: 'Nelly Munyasia - RHNK | 9th RHNK Pan-African AYSRHR Conference',
    type: 'Videos',
    date: '',
    description: 'Reproductive Health Network Kenya',
    duration: '0:36',
    url: 'https://www.youtube.com/watch?v=a-pS8EuOGaY',
  },
  {
    id: 'r3',
    title: 'Powerful Speech by RHNK E.D Nelly Munyasia | Inspiring Student Story',
    type: 'Videos',
    date: '',
    description: 'Reproductive Health Network Kenya',
    duration: '14:44',
    url: 'https://www.youtube.com/watch?v=69S3KRzodMA&t=15s',
  },
  {
    id: 'r4',
    title: 'Nelly Munyasia - Executive Director, RHNK | 7th RHNK Conference Opening Remarks',
    type: 'Videos',
    date: '',
    description: 'Reproductive Health Network Kenya',
    duration: '9:18',
    url: 'https://www.youtube.com/watch?v=jJrEAum9pDg&t=26s',
  },
  {
    id: 'r5',
    title: 'The Chaguo Mkononi Campaign Launch | Nelly Munyasia, Executive Director RHNK',
    type: 'Videos',
    date: '',
    description: 'Reproductive Health Network Kenya',
    duration: '2:05',
    url: 'https://www.youtube.com/watch?v=C3F74jX5Zs0',
  },
  {
    id: 'r6',
    title: 'Conference Website',
    type: 'Resources',
    date: '',
    description: 'https://rhnk.org/conference/',
    url: 'https://rhnk.org/conference/',
  },
  {
    id: 'r7',
    title: 'Read Policy Briefs',
    type: 'Resources',
    date: '',
    description: 'https://rhnk.org/conference/resources#resources-policy-briefs',
    url: 'https://rhnk.org/conference/resources#resources-policy-briefs',
  },
];
