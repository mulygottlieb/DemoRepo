import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerCreateInput = {
  address?: string | null;
  user?: UserWhereUniqueInput | null;
};
