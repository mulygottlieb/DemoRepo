import { User } from "../user/User";

export type Customer = {
  address: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
