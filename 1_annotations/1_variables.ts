// type annotations
// developers tell typescript the type
let apples: number = 5;

// object literal
let point: {x: number; y: number} = {
  x: 19,
  y: 10
};

// class
class Car {}
let car: Car = new Car()

// function
// annotation = (separator) function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}


// const pepsi: [string, boolean, number] = ['brown', true, 50]
type Drink = [string, boolean, number]
const pepsi: Drink = ['brown', true, 50]