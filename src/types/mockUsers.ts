import type { User, UserStatus } from "./user";

const organizations = [
  "Lendsqr",
  "Iridia",
  "Lendstar",
  "Kuda",
  "GTBank",
  "Access Bank",
];
const statuses: UserStatus[] = ["Active", "Inactive", "Pending", "Blacklisted"];
const genders = ["Male", "Female"];
const maritalStatuses = ["Single", "Married", "Divorced"];
const educationLevels = ["B.Sc", "M.Sc", "Ph.D", "Diploma"];
const employmentStatuses = ["Employed", "Unemployed", "Self-Employed"];
const sectors = ["FinTech", "Engineering", "Education", "Medicine"];

export const generateMockUsers = (count: number): User[] => {
  const users: User[] = [];

  for (let i = 1; i <= count; i++) {
    const id = `user-${i}`;
    const fullName = `User ${i}`;
    const organization =
      organizations[Math.floor(Math.random() * organizations.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    users.push({
      id,
      fullName,
      username: `user_${i}`,
      email: `user${i}@example.com`,
      phoneNumber: `080${Math.floor(10000000 + Math.random() * 90000000)}`,
      organization,
      status,
      dateJoined: new Date(
        2020 + Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28)
      ).toISOString(),
      userTier: Math.floor(Math.random() * 3) + 1,
      accountNumber: `${Math.floor(1000000000 + Math.random() * 9000000000)}`,
      accountBalance: (Math.random() * 1000000).toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN",
      }),
      bankName: "Providus Bank",
      personalInfo: {
        fullName,
        phoneNumber: `080${Math.floor(10000000 + Math.random() * 90000000)}`,
        email: `user${i}@example.com`,
        bvn: `${Math.floor(10000000000 + Math.random() * 90000000000)}`,
        gender: genders[Math.floor(Math.random() * genders.length)],
        maritalStatus:
          maritalStatuses[Math.floor(Math.random() * maritalStatuses.length)],
        children: `${Math.floor(Math.random() * 5)}`,
        residenceType: "Parent's Apartment",
      },
      educationAndEmployment: {
        levelOfEducation:
          educationLevels[Math.floor(Math.random() * educationLevels.length)],
        employmentStatus:
          employmentStatuses[
            Math.floor(Math.random() * employmentStatuses.length)
          ],
        employmentSector: sectors[Math.floor(Math.random() * sectors.length)],
        employmentDuration: `${Math.floor(Math.random() * 10) + 1} years`,
        officeEmail: `office${i}@${organization.toLowerCase()}.com`,
        monthlyIncome: ["₦200,000.00", "₦400,000.00"],
        loanRepayment: "₦40,000.00",
      },
      socials: {
        twitter: `@user_${i}`,
        facebook: `User ${i}`,
        instagram: `@user_${i}`,
      },
      guarantors: [
        {
          fullName: `Guarantor ${i}`,
          phoneNumber: `070${Math.floor(10000000 + Math.random() * 90000000)}`,
          email: `guarantor${i}@example.com`,
          relationship: "Sister",
        },
      ],
    });
  }

  return users;
};
