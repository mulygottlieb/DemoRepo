import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  muly?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
