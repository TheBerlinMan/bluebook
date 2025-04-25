
export interface Customer {
  firstName: string;
  lastName: string;
  address: Address;
  //product: Product; ?
}

export interface Address {
  streetAddress: string;
  streetAddress2?: string;
  city: string;
  state: string;
  zipcode: string;
}