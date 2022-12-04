import { IOrder } from "../utils/types";
import { Schema, model, Types } from "mongoose";

enum ETypeOrder {
  ORDERED = "ORDERED",
  COMPLETED = "COMPLETED",
  DELIVERING = "DELIVERING",
}

const OrderSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: "User" },
    fullname: { type: String, required: true },
    email: String,
    address: { type: Types.ObjectId, required: "Address" },
    orderItem: { type: Types.ObjectId, ref: "Product" },
    orderStatus: {
      type: String,
      default: ETypeOrder.ORDERED,
      enum: Object.values(ETypeOrder),
    },
    amount: { type: Number, default: 1 },
    size: { type: String, required: true },
    paymentID: { type: String, default: "" },
  },
  { timestamps: true }
);

export const OrderModel = model<IOrder>("Order", OrderSchema);
