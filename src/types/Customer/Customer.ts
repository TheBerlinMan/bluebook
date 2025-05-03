import { Address } from "./Address";
export interface Customer {
    firstName: string;
    lastName: string;
    email: string;
    address?: Address;
    message?: string;
    orderStatus?: "pending" | "completed" | "cancelled" | "working";
    images?: string[];
    domesticShipping: boolean;
    willPayShipping: boolean;
    priority?: number;
    completedOn?: Date;
  }


