export interface Customer {
  firstName: string;
  lastName: string;
  address: Address;
  message?: string;
  orderStatus?: "pending" | "completed" | "cancelled" | "working";
  images?: string[];
  domesticShipping: boolean;
  willPayShipping: boolean;
}

export interface Address {
  streetAddress: string;
  streetAddress2?: string;
  city: string;
  state: string;
  zipcode: string;
} 