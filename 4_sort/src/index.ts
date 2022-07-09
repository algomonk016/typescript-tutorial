import { CharacteresCollection } from './CharactersCollection'
import { LinkedList } from './LinkedListCollection'
import { NumbersCollection } from './NumbersCollection'
import { Sorter } from './Sorter'

// const numbersCollection = new NumbersCollection([10, 7, 12, -5])
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data)

// const charactersCollection = new CharacteresCollection('azaXabY');
// const sorter = new Sorter(charactersCollection)
// sorter.sort()
// console.log(charactersCollection.data)

const linkedList = new LinkedList();
linkedList.add(10)
linkedList.add(7)
linkedList.add(12)
linkedList.add(-5)

const sorter = new Sorter(linkedList)
sorter.sort()
linkedList.print()