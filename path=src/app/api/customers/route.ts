import * as customerController from "@/server/controllers/customerController";
import { NextRequest } from "next/server";

// GET all customers
export async function GET(request: NextRequest) {
  return await customerController.getAllCustomers();
}

// CREATE a new customer
export async function POST(request: NextRequest) {
  return await customerController.createCustomer(request);
} 