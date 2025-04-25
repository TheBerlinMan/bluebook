
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

export interface CustomerFormData {
  firstName: string;
  lastName: string;
  address: {
    streetAddress: string;
    streetAddress2: string;
    city: string;
    state: string;
    zipcode: string;
  };
  isInternational: boolean;
  willPayShipping: boolean;
  message: string;
}