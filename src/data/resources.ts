export interface SupportResource {
  id: string;
  category: 'Confidential Helpline' | 'Peer Support' | 'Unit Medical' | 'Welfare SOP';
  title: string;
  description: string;
  contact: string;
  availability: string;
  confidentialityNotice: string;
}

export const WELFARE_RESOURCES: SupportResource[] = [
  {
    id: 'res-1',
    category: 'Confidential Helpline',
    title: 'CRPF Welfare & Counselling Helpdesk (Sampark)',
    description: 'Direct telephonic support with qualified psychological counsellors and senior welfare officers. Strictest confidentiality maintained.',
    contact: 'Toll Free: 1800-11-2024 / 011-2436-1234',
    availability: '24/7 round-the-clock service',
    confidentialityNotice: 'Calls are not recorded or linked to disciplinary files.',
  },
  {
    id: 'res-2',
    category: 'Peer Support',
    title: 'Buddy Care & Peer Listener Cell',
    description: 'Trained fellow personnel from companion battalions available for informal conversation, family stress navigation, and operational fatigue sharing.',
    contact: 'Unit Welfare Officer or Camp Welfare Tent',
    availability: 'Daily 08:00 - 20:00',
    confidentialityNotice: 'Peer discussions are strictly non-evaluative.',
  },
  {
    id: 'res-3',
    category: 'Unit Medical',
    title: 'Composite Hospital / Unit Medical Inspection (MI) Room',
    description: 'Medical officers available for sleep hygiene guidance, physical fatigue assessments, and general health screenings.',
    contact: 'Unit MI Room, Extension 402',
    availability: 'Emergency 24/7 | Routine 09:00 - 13:00',
    confidentialityNotice: 'Medical consultation follows standard doctor-patient privilege.',
  },
  {
    id: 'res-4',
    category: 'Welfare SOP',
    title: 'MHA Standing Order on Force Rest & Recuperation (R&R)',
    description: 'Overview of entitlement guidelines for field operational rest, mandatory 15-day rotation cycles, and family emergency leave expediting.',
    contact: 'Internal Portal / Bn Adjutant Office',
    availability: 'Published SOP Reference Document',
    confidentialityNotice: 'Official welfare policy guidance.',
  },
];
