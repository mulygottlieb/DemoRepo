import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  muly?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
