import * as customerController from "@/server/controllers/customerController";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const customer = await customerController.getCustomerById(id);
    return NextResponse.json(customer);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const customer = await customerController.updateCustomer(id, request);
    return NextResponse.json(customer);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const customer = await customerController.deleteCustomer(id);
    return NextResponse.json(customer);
}   