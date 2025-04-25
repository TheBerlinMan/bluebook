import mongoose from "mongoose";
import { Schema, Document, Model } from "mongoose";

import type { Customer as CustomerType, Address } from "@/types/Customer/";

export interface CustomerDocument extends CustomerType, Document {}

const AddressSchema = new Schema<Address>(
  {
    streetAddress: { type: String, required: true },
    streetAddress2: { type: String, required: false },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: String, required: true },
  },
  {
    _id: false,
  }
);

const CustomerSchema = new Schema<CustomerDocument>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: AddressSchema, required: true },
    message: { type: String, required: false },
    orderStatus: {
      type: String,
      required: true,
      enum: ["pending", "completed", "cancelled", "working"],
      default: "pending",
    },
    images: { type: [String], required: false },
    domesticShipping: { type: Boolean, required: true },
    willPayShipping: { type: Boolean, required: true },
    priority: { type: Number, required: true },
    completedOn: { type: Date, required: false },
  },
  {
    timestamps: true,
  }
);

const CustomerModel =
  (mongoose.models.Customer as Model<CustomerDocument>) ||
  mongoose.model<CustomerDocument>("Customer", CustomerSchema);

export default CustomerModel;
