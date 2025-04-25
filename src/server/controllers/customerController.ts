import { NextRequest, NextResponse } from "next/server";

import CustomerModel from "../models/Customer";
import connectDB from "../database/mongodb";

export async function getAllCustomers() {
    try {
        await connectDB();
        const customers = await CustomerModel.find();
        return NextResponse.json(customers);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch customers" }, { status: 500 });
    }
}

export async function createCustomer(request: NextRequest) {
    try {
        await connectDB();
        const { firstName, lastName, address, message, domesticShipping, willPayShipping } = await request.json();
        const customer = await CustomerModel.create({ firstName, lastName, address, message, domesticShipping, willPayShipping });
        return NextResponse.json(customer);
    } catch (error) {
        return NextResponse.json({ error: "Failed to create customer" }, { status: 500 });
    }
}

export async function getCustomerById(id: string) {
    try {
        await connectDB();
        const customer = await CustomerModel.findById(id);
        return NextResponse.json(customer);
    } catch (error) {
        return NextResponse.json({ error: "Failed to get customer" }, { status: 500 });
    }
}

export async function updateCustomer(id: string, request: NextRequest) {
    try {
        await connectDB();
        const { firstName, lastName, address, message, orderStatus, images, domesticShipping, willPayShipping } = await request.json();
        const customer = await CustomerModel.findByIdAndUpdate(id, { firstName, lastName, address, message, orderStatus, images, domesticShipping, willPayShipping });
        return NextResponse.json(customer);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update customer" }, { status: 500 });
    }
}

export async function deleteCustomer(id: string) {
    try {
        await connectDB();
        const customer = await CustomerModel.findByIdAndDelete(id);
        return NextResponse.json(customer);
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete customer" }, { status: 500 });
    }
}


