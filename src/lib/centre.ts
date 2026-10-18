export const roleLabels = {
  md: 'Managing Director', deputy_md: 'Deputy Managing Director',
  speech_therapist: 'Speech Therapist', occupational_therapist: 'Occupational Therapist',
  administrator: 'Administrator', assistant: 'Assistant Rehabilitation Specialist',
  client: 'Client', caregiver: 'Parent / Caregiver',
};
export type CentreRole = keyof typeof roleLabels;
export const isLeadership = (role: CentreRole | null) => role === 'md' || role === 'deputy_md';
export const managesClients = (role: CentreRole | null) => isLeadership(role) || role === 'administrator';
export const isFamily = (role: CentreRole | null) => role === 'client' || role === 'caregiver';
export const canWriteNotes = (role: CentreRole | null) => isLeadership(role) || role === 'speech_therapist' || role === 'occupational_therapist' || role === 'assistant';