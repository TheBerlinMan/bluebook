"use client";

import { useState, useEffect } from "react";
import { Customer } from "@/types/Customer";
import { Card } from "@/components/ui/card";
import { CircularProgress } from "@mui/material";

const formatDate = (dateString: string | Date | undefined): string => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('en-US', { timeZone: 'UTC' });
};

const CompletedOrders = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  console.log(customers);

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
              <th className="px-4 py-3 text-center ">
                Name
              </th>
              <th className="px-4 py-3 text-center border-r border-l border-blue-800">Version</th>
              <th className="px-4 py-3 text-center">Finished</th>
            </tr>
          </thead>
          <tbody>
            {customers
              .filter(
                (customer) =>
                  customer.orderStatus === "completed"
              )
              .map((customer, index) => (
                <tr key={index} className="mb-2">
                  <td className="px-4 py-2 text-center">
                    {customer.firstName} {customer.lastName}
                  </td>
                  <td className="px-4 py-2 text-center border-r border-l border-blue-800">
                    v.{customer.firstName}
                  </td>
                  <td className="px-4 py-2 text-center">
                    {formatDate(customer.completedOn)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default CompletedOrders