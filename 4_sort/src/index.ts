import { CharacteresCollection } from './CharactersCollection'
import { LinkedList } from './LinkedListCollection'
import { NumbersCollection } from './NumbersCollection'

const numbersCollection = new NumbersCollection([10, 7, 12, -5])
numbersCollection.sort();
console.log(numbersCollection.data)

const charactersCollection = new CharacteresCollection('azaXabY');
charactersCollection.sort()
console.log(charactersCollection.data)

const linkedList = new LinkedList();
linkedList.add(10)
linkedList.add(7)
linkedList.add(12)
linkedList.add(-5)

linkedList.sort()
linkedList.print()