commit #1:
  get length(): number{
    return this.data.length
  }

  we don't need to call length
  this.collection.length is the way to get length

commit #2:
  till now, Sorter class only accepts NumbersCollection,
  but now, we'll make it such that it accepts any collection of data, as long as
  the collection have:
    compare(i, j)
    swap(i, j)
    length

commit #3:
  till now, we need to make two object of classes
  one is our dataCollection, then the sorter to sort the collection

  to fix this: 
    NumbersCollection will extend Sorter class
    Sorter class will be an abstract class 
      abstract: Compare, Swap, length

  Interfaces vs Abstract classes
    interface:
      sets up a contract b/w different classes
      promotes loose coupling
      use when we have very different objects that we want to work together
    
    inheritance/abstract classes:
      sets up a contract b/w different classes
      strong coupling
      use when we are trying to build up a definition of an object