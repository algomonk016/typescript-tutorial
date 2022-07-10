import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

// create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')

// create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load();

let manUnitedWins = 0;
for(const match of matchReader.matches){
  manUnitedWins += (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ? 1 : 0; 
  manUnitedWins += (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) ? 1 : 0;
}

console.log(manUnitedWins)