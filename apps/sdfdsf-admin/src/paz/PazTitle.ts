import { Paz as TPaz } from "../api/paz/Paz";

export const PAZ_TITLE_FIELD = "id";

export const PazTitle = (record: TPaz): string => {
  return record.id?.toString() || String(record.id);
};
