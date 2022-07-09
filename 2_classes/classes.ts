class Vehicle{
  
  /*
  color: string
  constructor(color: string){
    this.color = color
  }
  */ 
  constructor (public color: string){}


  drive(): void{
    console.log('chaiiya chaiiya')
  }

  honk(): void{
    console.log('beep')
  }
}

// class Car extends Vehicle {

//   drive(): void{
//     console.log('overrided drive')
//   }
// }

const vehicle = new Vehicle('red');
// const car = new Car();

// by default public,

// interface + classes = really strong code reuse in TS
