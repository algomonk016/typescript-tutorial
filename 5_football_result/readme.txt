commit #4:
  football stats project setup

commit #5:
  reading and analysing csv file

commit #6:

  issues:
    comparison kya ho raha vo clear nahi hai, so
      using enum, we can fix it
      enum: used when we have closely related values

    agar hame csv file api se mangwaani pade, to kaafi change karna padega
      so make separate class for csv

    string[] has different data types, 
      numbers, date are wrapped in strings


  Type Assertion
    row[5] as Something,
    override typescripts default behaviour

    array = [string, number, date, string, matchResult, string]
    so, use tuple to fix position of type
    
    type MatchData = [Date, string, string, number, number, MatchResult, string]

commit #7:
  issue:
    right now, the code is only for current csv file only, because of type MatchData,
    is any other csv comes, we'll need to change the code

    so, turn CsvFileReader to an abstract class
    and use Generics,
    class ClassName<T> {}

commit #8:
  used composition instead of inheritance

  inheritance: ('is a' relationship)

    we can say, MatchReader 'is a' CsvFileReader, because, MatchReader 
    has all the methods & properties that belongs to CsvFileReader as well

    abstract class CsvFileReader        -> class MatchReader
      read(): void                            mapRow(string[]): MatchData
      mapRow(string[]): MatchData       -> class MovieReader
        (abstract method)                     mapRow(string[]): MovieData

  ------------------------------------------------------

  composition ('has a' relationship)

  MatchReader had a ref to outside reader

  interface DataReader
    read(): void, data: string[][]

      |
      v
    
  class MatchReader                  -> class ApiReader
    reader(): DataReader                read(): void, data: string[][]
    load(): void                    -> class CsvFileReader
                                        read(): void, data: string[][]

  example
    wall: {height, width, area, color}
    window: {height, width, area, open, toggleOpen}

    inheritance
      class Rectange: { height, width, area }

      class Wall: {color}
      class Window: {open, toggleOpen}

      window is a child of rectange

      there will be an issue if shape of window is circle or something else...
      we will need to create another parent class Circle, then another class CircleWindow and RectWindow
      to fix this issue, we can use composition based approach

    composition:
      class wall: { area(), color, shape }
      class window: { area(), open, toggleOpen, shape }

      window has a ref to Rectange

      class Rectange: {height, width, area}
      class Circle: {radius, area}

  misconception around composition

commit #9:
  issues:
    - variable named after a specific team, 'Man United'
    - analysis type is fixed, to count winCount
    - no ability to output the report in different formats


Generics
  class ClassName<T> {
    variable: T;
    constructor(public data: T) {}
  }

  function printAnything<T> (arr: T[]) {}

  Generics inference:
    apne aap hi type le lega
    printAnything(['a', 'b', 'c']) 
    const obj = new ClassName('a')

  ex: print array of objects, having print method
  interface Printable {
    print(): void;
  }

  function printAnything<T extends Printable>(arr: T[]) { }

  printAnything(['1', '2', '3']) -> shows error, doesn't have method print