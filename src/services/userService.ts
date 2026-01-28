import type { User } from "../types/user";
import { generateMockUsers } from "../types/mockUsers";

const MOCK_USERS = generateMockUsers(500);

export const userService = {
  getUsers: async (
    page: number = 1,
    limit: number = 10
  ): Promise<{ data: User[]; total: number }> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const start = (page - 1) * limit;
    const end = start + limit;

    return {
      data: MOCK_USERS.slice(start, end),
      total: MOCK_USERS.length,
    };
  },

  getUserById: async (id: string): Promise<User | undefined> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return MOCK_USERS.find((user) => user.id === id);
  },
};
