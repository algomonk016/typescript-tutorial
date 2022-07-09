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