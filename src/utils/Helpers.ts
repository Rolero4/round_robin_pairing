export interface Player {
  id: number;
  firstName: string;
  lastName: string;
  rating?: number;
  country?: string;
  score?: number;
}

export const RegistrationTableColumns = [
  "X",
  "First Name",
  "Last Name",
  "Rating",
  "Country",
  "Edit / Remove",
];

export const RegistrationTableColumnKeys = [
  "id",
  "firstName",
  "lastName",
  "rating",
  "country",
];
