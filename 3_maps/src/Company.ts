import faker from 'faker'

export class Company {
  companyName: string;
  catchPhrase: string;

  location: {
    lng: number;
    lat: number;
  }

  constructor(){
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lng: parseFloat(faker.address.longitude()),
      lat: parseFloat(faker.address.latitude())
    }
  }
}