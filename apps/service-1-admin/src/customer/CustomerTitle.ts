import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "address";

export const CustomerTitle = (record: TCustomer): string => {
  return record.address?.toString() || String(record.id);
};
