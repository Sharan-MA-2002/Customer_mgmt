import React,{useState} from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import customersData,{Customer} from './components/customerData';
import ImageGrid from './components/ImageGrid';
import Header from './components/Header';
import './App.css';

const App: React.FC = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);
  const [customers] = useState<Customer[]>(customersData);
  const selectedCustomer = selectedCustomerId ? customers.find((customer) => customer.id === selectedCustomerId) : null;

  const handleCustomerClick = (customerId: number) => {
    setSelectedCustomerId(customerId);
  };

  return (
    <div>
      <Header/>
    <div className="app-container">
      <CustomerList customers={customers} selectedCustomerId={selectedCustomerId} onCustomerClick={handleCustomerClick} />
      <div className="child-container">
      <CustomerDetails customer={selectedCustomer || null} />
      <ImageGrid/>
      </div>
    </div>
    </div>
  );
};

export default App;
