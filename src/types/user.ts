export interface User{
  id : number;
  name : string;
  username: string;
  email: string;
  address: Object;
  // address: {
  //   street: string;
  //   suite: string;
  //   city: string;
  //   zipcode: string;
  //   geo: {
  //     lat: number;
  //     lng: number;
  //   }
  //   }
  phone: string;
  website: string;
  company: Object;
  // company: {
  //   name: string;
  //   catchPhrase: string;
  //   bs: string;
  //   }

}