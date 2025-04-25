import * as customerController from "@/server/controllers/customerController";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const customers = await customerController.getAllCustomers();
    return NextResponse.json(customers);
}

export async function POST(request: NextRequest) {
    const customer = await customerController.createCustomer(request);
    return NextResponse.json(customer);
}

