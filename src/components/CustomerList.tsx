import React from "react";
import CustomerCard from "./CustomerCard";


interface Customer {
  id: number;
  name: string;
  title: string;
}

interface Props {
  customers: Customer[];
  selectedCustomerId: number | null;
  onCustomerClick: (customerId: number) => void;
}

const CustomerList: React.FC<Props> = ({ customers, selectedCustomerId, onCustomerClick }) => {
  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          isSelected={customer.id === selectedCustomerId}
          onClick={() => onCustomerClick(customer.id)}
        />
      ))}
    </div>
  );
};

export default CustomerList;
