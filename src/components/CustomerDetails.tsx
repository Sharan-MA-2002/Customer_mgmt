import React from 'react';

interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
}

interface Props {
  customer: Customer | null;
}

const CustomerDetails: React.FC<Props> = ({ customer }) => {
  if (!customer) {
    return <div className="customer-details-none">Just one click onto the customers, you are in for a surprise!!!</div>;
  }

  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
    </div>
  );
};

export default CustomerDetails;
