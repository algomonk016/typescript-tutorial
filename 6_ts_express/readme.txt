auth type website

issues of using typescript with packages and modules:
  middleware:
    1. take request and response, and do required action, add or remove properties
    and has ref to next middleware
    if no ref has been provided, then next fun will be our req handler

    i.e (req, res) => {} // this one

    ts understands properties of the object
    thus, middlerwares are counter productive to ts
    because middlewares are coded in js, so ts has no idea what properties are added or removed
    ex bodyparser middleware

    2. type definition files don't tell us whole story, 
    and sometimes it tells wrong story