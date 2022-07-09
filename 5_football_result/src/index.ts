import { CsvFileReader } from './CsvFileReader'
import { MatchResult } from './MatchResult';
const reader = new CsvFileReader('football.csv')
reader.read();

let manUnitedWins = 0;
for(const match of reader.data){
  manUnitedWins += (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ? 1 : 0; 
  manUnitedWins += (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) ? 1 : 0;
}

console.log(manUnitedWins)