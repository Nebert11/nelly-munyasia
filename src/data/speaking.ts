export interface SpeakingTopic {
  id: string;
  label: string;
}

export const speakingTopics: SpeakingTopic[] = [
  { id: 'public-health', label: 'Public Health' },
  { id: 'reproductive-health', label: 'Reproductive Health & Rights' },
  { id: 'womens-leadership', label: "Women's Leadership" },
  { id: 'health-systems', label: 'Health Systems' },
  { id: 'policy-advocacy', label: 'Policy & Advocacy' },
  { id: 'youth-leadership', label: 'Youth Leadership' },
  { id: 'gender-equality', label: 'Gender Equality' },
];
