export interface Player {
  id: number;
  firstName: string;
  lastName: string;
  rating: number | null;
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

export const ResultsTableColumns = ["Pos", "Fed", "Name", "Rtg"];

export const ResultsTableColumnKeys = [
  "id",
  "firstName",
  "lastName",
  "rating",
  "country",
];

export enum TabNames {
  Results = "results",
  Schedule = "schedule",
}

export interface Game {
  round: number;
  white: Player;
  whiteScore?: number;
  black: Player;
  blackScore?: number;
}

export interface Round {
  games: Game[];
  isEditable: boolean;
}

export interface Tournament {
  rounds: Round[];
  isFinished: boolean;
  currentRoundIndex: number;
}

export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
