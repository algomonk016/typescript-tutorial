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