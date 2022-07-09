import { NumbersCollection } from './NumbersCollection'
import { Sorter } from './Sorter'

const numbersCollection = new NumbersCollection([10, 7, 12, -5])
const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log(numbersCollection.data)
