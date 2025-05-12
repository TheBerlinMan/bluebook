"use client";

import { useState, useEffect } from "react";
import { Customer } from "@/types/Customer";
import { Card } from "@/components/ui/card";
import { CircularProgress } from "@mui/material";

export default function CustomerList() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await fetch("/api/customers");
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const data: Customer[] = await res.json();
        setCustomers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCustomers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-13">
        <CircularProgress size={45} />
      </div>
    );
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Card className="min-w-full my-4 p-4 border border-blue-800">

    
        <table className="min-w-full text-blue-800">
          <thead>
            <tr className="border-b border-blue-800">
              <th className=" px-4 py-3 text-center">Priority</th>
              <th className=" px-4 py-3 text-center border-r border-l border-blue-800">
                Name
              </th>
              <th className=" px-4 py-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {customers
              .filter(
                (customer) =>
                  customer.orderStatus === "working" ||
                  customer.orderStatus === "pending"
              )
              .map((customer, index, filteredCustomers) => {
                const workingCustomers = filteredCustomers.filter(
                  (c) => c.orderStatus === "working"
                ).length;
                const displayPriority =
                  customer.orderStatus === "working" ? index + 1 : index + 1;

                return (
                  <tr key={index}>
                    <td className=" px-2 py-2 text-center">
                      {displayPriority}
                    </td>
                    <td className=" px-2 py-2 text-center border-r border-l border-blue-800">
                      {customer.firstName} {customer.lastName}
                    </td>
                    <td className=" px-2 py-2 text-center">
                      { customer.orderStatus &&
                      customer.orderStatus?.charAt(0).toUpperCase() + customer.orderStatus?.slice(1)}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
