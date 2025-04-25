"use client";

import { useState, useEffect } from "react";
import { Customer } from "@/types/Customer";

export default function CustomerList() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await fetch('/api/customers');
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
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <table className="min-w-full border-collapse">
      <thead>
        <tr>
          <th className="border px-4 py-2 text-left">Priority</th>
          <th className="border px-4 py-2 text-left">Name</th>
          <th className="border px-4 py-2 text-left">Status</th>
          <th className="border px-4 py-2 text-left">Date Completed</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">
              {customer.priority ?? '-'}
            </td>
            <td className="border px-4 py-2">
              {customer.firstName} {customer.lastName}
            </td>
            <td className="border px-4 py-2">
              {customer.orderStatus ? customer.orderStatus : '-'}
            </td>
            <td className="border px-4 py-2">
              {customer.completedOn ? new Date(customer.completedOn).toLocaleDateString() : '-'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
