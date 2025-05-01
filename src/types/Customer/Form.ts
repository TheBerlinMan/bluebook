export interface CustomerFormData {
    firstName: string;
    lastName: string;
    email: string;
    address: {
      streetAddress: string;
      streetAddress2: string;
      city: string;
      state: string;
      zipcode: string;
    };
    isInternational: boolean;
    willPayShipping: boolean;
    priority?: number;
    completedOn?: Date;
    message?: string;
  }