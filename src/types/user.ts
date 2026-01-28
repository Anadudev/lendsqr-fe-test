export interface PersonalInfo {
  fullName: string;
  phoneNumber: string;
  email: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: string;
  residenceType: string;
}

export interface EducationAndEmployment {
  levelOfEducation: string;
  employmentStatus: string;
  employmentSector: string;
  employmentDuration: string;
  officeEmail: string;
  monthlyIncome: string[];
  loanRepayment: string;
}

export interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

export interface Guarantor {
  fullName: string;
  phoneNumber: string;
  email: string;
  relationship: string;
}

export type UserStatus = "Active" | "Inactive" | "Pending" | "Blacklisted";

export interface User {
  id: string;
  fullName: string;
  username: string;
  email: string;
  phoneNumber: string;
  organization: string;
  status: UserStatus;
  dateJoined: string;
  userTier: number;
  accountNumber: string;
  accountBalance: string;
  bankName: string;
  personalInfo: PersonalInfo;
  educationAndEmployment: EducationAndEmployment;
  socials: Socials;
  guarantors: Guarantor[];
}
