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

export const ResultsTableColumns = [
  "Pos",
  "Fed",
  "Name",
  "Rtg",
  "1", // ZMIENIC NA TWORZENIE KOLUMN NA PODSTAWIE ILOSCI ZAWODNIKOW
  "2",
  "3",
  "Pts",
];

export const ResultsTableColumnKeys = [
  // ZMIENIC NA DOCELOWE
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
  black?: Player;
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
