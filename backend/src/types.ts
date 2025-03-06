export interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
  birthDate: Date;
  october7thExperience: October7thExperience;
}

export enum UserRole {
  CLIENT = "client",
  ADMIN = "admin",
}

export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

export enum October7thExperience {
  FESTIVAL = "festival",
  GAZA_ENVELOPE_SETTLEMENTS = "gazaEnvelopeSettlements",
  DEFENCE_FORCES = "defenceForces",
  MEDICAL_STAFF = "medicalStaff",
  OTHER = "other",
}

export enum Status {
  PENDING = "pending",
  APPROVED = "approved",
  DENIED = "denied",
  PROCESSING = 'processing',
}

export enum ReviewFutureParticipationStatus {
  OF_COURSE = "ofCourse",
  HARD_TO_DECIDE = "hardToDecide",
  FULFILLED = "fulfilled",
}
