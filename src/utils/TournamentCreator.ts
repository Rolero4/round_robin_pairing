import { Player, Round, Game, Tournament } from "./Helpers";

// export function createTournament(players: Player[]): void {
//   const tourney: Tournament = {
//     isFinished: false,
//     rounds: []
//   };
//   if (players.length % 2 !== 0) {
// const byePlayer: Player = {
//   id: -1,
//   firstName: "Bye",
//   lastName: "Bye",
//   rating: 0,
//   country: "Bye",
//   score: 0,
// }
//     players.push(fixedPlayer);
//   }
//   const numberOfRounds = (players.length - 1) * 2;
// }

export function doubleRoundRobin(players: Player[]): Tournament {
  if (players.length % 2 !== 0) {
    players.push({
      id: -1,
      firstName: "Bye",
      lastName: "Bye",
      rating: 0,
      country: "Bye",
      score: 0,
    });
  }
  const playerCount = players.length;

  const rounds: Round[] = [];
  const roundCount = playerCount - 1;

  for (let i = 0; i < roundCount; i++) {
    const round: Round = { games: [], isEditable: true };
    const firstHalf: Player[] = players.slice(0, playerCount / 2);
    const secondHalf: Player[] = players.slice(playerCount / 2).reverse();

    for (let j = 0; j < playerCount / 2; j++) {
      const game: Game = {
        round: i + 1,
        white: firstHalf[j],
        black: secondHalf[j],
      };
      round.games.push(game);
    }
    rounds.push(round);

    // Rotate players for the next round
    players.splice(1, 0, players.pop()!);
  }

  // Generate second half of rounds with swapped home/away players
  for (let i = roundCount - 1; i >= 0; i--) {
    const round: Round = { games: [], isEditable: true };
    rounds[i].games.forEach(game => {
      const swappedGame: Game = {
        round: roundCount * 2 - i,
        white: game.black!,
        black: game.white,
      };
      round.games.push(swappedGame);
    });
    rounds.push(round);
  }

  const tournament: Tournament = { rounds, isFinished: false };
  return tournament;
}
