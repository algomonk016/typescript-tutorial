auth type website

commit #10
  issues of using typescript with packages and modules:
  middleware:
    1. take request and response, and do required action, add or remove properties
    and has ref to next middleware
    if no ref has been provided, then next fun will be our req handler

    i.e (req, res) => {} // this one

    ts understands properties of the object
    thus, middlewares are counter productive to ts
    because middlewares are coded in js, so ts has no idea what properties are added or removed
    ex bodyparser middleware

    2. type definition files don't tell us whole story, 
    and sometimes it tells wrong story

commit #11
  login and logout feature
  used session for storing session details

commit #12
  protected routes
  using middlewares

commit #13
  re-write the code
  make express work with classes when atleast one of the following is satisfied
    - better type safety
    - significantly enhance the developer experience

  using decorators



  Prototypes:
    js doesn't have classes, they were introduced so that developers working with java, c#
    can use classes in js too.
    it uses prototypal classes

    ts:
      class Boat {
        color: string = 'red';
        pilot(): void {
          console.log('pilot');
        }
      }

    js:
      var Boat = ( function() {
        function Boat() {
          this.color = 'red';
        } 

        Boat.prototype.pilot = function () {
          console.log('pilot')
        }
      }());

    properties like color are added as an element in Boat object
    where are methods like pilot are added in __proto__ (prototype)
    prototypes are hidded
    we can update prototypes even after creating instance of object

  Decorators:
    - functions that can be used to modify/anything different properties/methods in class
    - not same as js decorators
    - used inside/on classes only
    - understanding the order in which decorators are ran are the key to understanding them
    - experimental

    - are applied only once, when the code for the class is ran
      (not when the instance is created)