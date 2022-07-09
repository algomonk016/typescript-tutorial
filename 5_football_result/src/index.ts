import fs = require('fs');

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'
})
.split('\n')
.map((row: string): string[] => row.split(','))

let manUnitedWins = 0;
for(const match of matches){
    manUnitedWins += (match[1] === 'Man United' && match[5] === 'H') ? 1 : 0; 
    manUnitedWins += (match[2] === 'Man United' && match[5] === 'A') ? 1 : 0;
}

console.log(manUnitedWins)