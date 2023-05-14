import { Player, Round, Game, Tournament } from "./Helpers";
import {
  roundRobin4,
  roundRobin6,
  roundRobin8,
  roundRobin10,
  roundRobin12,
  roundrobin14,
  roundrobin16,
} from "./RoundRobinArrays";

export function roundRobin(players: Player[]): Tournament {
  if (players.length % 2 !== 0) {
    players.push({
      id: -1,
      firstName: "",
      lastName: "",
      rating: null,
      country: "",
      score: undefined,
    });
  }

  // Shuffle the array of players randomly
  // for (let i = players.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   [players[i], players[j]] = [players[j], players[i]];
  // }

  const playerCount = players.length;
  const roundsPattern: number[][][] = chooseArray(playerCount);

  const rounds: Round[] = [];
  let roundIndex = 0;
  roundsPattern.forEach((roundPattern: number[][]) => {
    const round: Round = { games: [], isEditable: roundIndex === 0 };
    roundPattern.forEach((gamePattern: number[]) => {
      const game: Game = {
        round: roundIndex,
        white: players[gamePattern[0]],
        black: players[gamePattern[1]],
        whiteScore: undefined,
        blackScore: undefined,
      };
      if (game.white.id === -1) {
        game.whiteScore = 0;
        game.blackScore = 1;
      } else if (game.black.id === -1) {
        game.whiteScore = 1;
        game.blackScore = 0;
      }
      round.games.push(game);
    });
    rounds.push(round);
    roundIndex++;
  });
  rounds[0].isEditable = true;

  const tournament: Tournament = {
    rounds,
    isFinished: false,
    currentRoundIndex: 0,
  };
  return tournament;
}

function chooseArray(numPlayers: number): number[][][] {
  switch (numPlayers) {
    case 4:
      return roundRobin4;
    case 6:
      return roundRobin6;
    case 8:
      return roundRobin8;
    case 10:
      return roundRobin10;
    case 12:
      return roundRobin12;
    case 14:
      return roundrobin14;
    case 16:
      return roundrobin16;
    default:
      return [[[]]];
  }
}
