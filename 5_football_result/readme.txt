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