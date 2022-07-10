export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

export type MatchData = [Date, string, string, number, number, MatchResult, string]