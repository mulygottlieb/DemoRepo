import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerUpdateInput = {
  address?: string | null;
  user?: UserWhereUniqueInput | null;
};
