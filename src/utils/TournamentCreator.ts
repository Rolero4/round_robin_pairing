import { Player, Round, Game, Tournament } from "./Helpers";

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

  // Shuffle the array of players randomly
  for (let i = players.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [players[i], players[j]] = [players[j], players[i]];
  }

  const playerCount = players.length;
  const rounds: Round[] = [];
  const roundCount = playerCount - 1;

  for (let i = 0; i < roundCount; i++) {
    const round: Round = { games: [], isEditable: i === 0 };
    const firstHalf: Player[] = players.slice(playerCount / 2);
    const secondHalf: Player[] = players.slice(0, playerCount / 2).reverse();

    for (let j = 0; j < playerCount / 2; j++) {
      const game: Game = {
        round: i,
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
    const round: Round = { games: [], isEditable: false };
    rounds[i].games.forEach(game => {
      const swappedGame: Game = {
        round: roundCount * 2 - i - 1,
        white: game.black!,
        black: game.white,
      };
      round.games.push(swappedGame);
    });
    rounds.push(round);
  }

  const tournament: Tournament = {
    rounds,
    isFinished: false,
    currentRoundIndex: 0,
  };
  return tournament;
}
