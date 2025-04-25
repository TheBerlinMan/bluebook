const CustomerSchema = new Schema<CustomerDocument>(
  {
    // ...
    orderStatus: {
      type: String,
      enum: ["pending", "completed", "cancelled", "working"],
      default: "pending",
      required: true,
    },
    // ...
  },
  {
    timestamps: true,
  }
); 