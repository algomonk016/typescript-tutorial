import fs = require('fs')

export abstract class CsvFileReader<T> {
  data: T[] = [];
  constructor(public fileName: string) { }
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs.readFileSync(this.fileName, {
      encoding: 'utf-8'
    })
      .split('\n')
      .map((row: string): string[] => row.split(',')) // till this code, it is generous, will work on every csv
      .map(this.mapRow)
  }
}