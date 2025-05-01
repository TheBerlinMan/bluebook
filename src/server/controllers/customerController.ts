import { NextRequest, NextResponse } from "next/server";

import CustomerModel from "../models/Customer";
import connectDB from "../database/mongodb";

export async function getAllCustomers() {
    try {
        await connectDB();
        const customers = await CustomerModel.find();
        return NextResponse.json(customers);
    } catch (error: any) {
        console.error("getAllCustomers error:", error);
        return NextResponse.json({ error: error.message || "Failed to fetch customers" }, { status: 500 });
    }
}

export async function createCustomer(request: NextRequest) {
    try {
        await connectDB();
        const body = await request.json();
        // Determine priority: use provided override or auto-increment based on last customer
        let newPriority: number;
        if (typeof body.priority === 'number') {
            newPriority = body.priority;
        } else {
            const lastCustomer = await CustomerModel.findOne().sort({ priority: -1 }).select('priority').lean();
            newPriority = lastCustomer?.priority != null ? lastCustomer.priority + 1 : 1;
        }
        const { firstName, lastName, address, message, domesticShipping, willPayShipping, email } = body;
        const customer = await CustomerModel.create({
            firstName,
            lastName,
            email,
            address,
            message,
            domesticShipping,
            willPayShipping,
            priority: newPriority,
        });
        return NextResponse.json(customer);
    } catch (error: any) {
        console.error("createCustomer error:", error);
        return NextResponse.json({ error: error.message || "Failed to create customer" }, { status: 500 });
    }
}

export async function getCustomerById(id: string) {
    try {
        await connectDB();
        const customer = await CustomerModel.findById(id);
        return NextResponse.json(customer);
    } catch (error: any) {
        console.error("getCustomerById error:", error);
        return NextResponse.json({ error: error.message || "Failed to get customer" }, { status: 500 });
    }
}

export async function updateCustomer(id: string, request: NextRequest) {
    try {
        await connectDB();
        const { firstName, lastName, address, message, orderStatus, images, domesticShipping, willPayShipping, priority } = await request.json();
        const customer = await CustomerModel.findByIdAndUpdate(id, { firstName, lastName, address, message, orderStatus, images, domesticShipping, willPayShipping, priority });
        return NextResponse.json(customer);
    } catch (error: any) {
        console.error("updateCustomer error:", error);
        return NextResponse.json({ error: error.message || "Failed to update customer" }, { status: 500 });
    }
}

export async function deleteCustomer(id: string) {
    try {
        await connectDB();
        const customer = await CustomerModel.findByIdAndDelete(id);
        return NextResponse.json(customer);
    } catch (error: any) {
        console.error("deleteCustomer error:", error);
        return NextResponse.json({ error: error.message || "Failed to delete customer" }, { status: 500 });
    }
}


