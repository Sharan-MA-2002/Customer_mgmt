// @ts-ignore
import { randAccessory, randAddress, randFullName} from '@ngneat/falso';

export interface Customer {
    id: number;
    name: string;
    title: string;
    address: string;
  }

  //Imported random data from Falso Library 
const generateRandomCustomerData = (count:number) => {
    const customers = [];
    for (let i = 0; i < count; i++) {
      const customer = {
        id: i + 1,
        name: randFullName().toString(),
        title: randAccessory().toString(),
        address: randAddress().street,
      };
      customers.push(customer);
    }
    return customers;
  };
  
  const customersData=generateRandomCustomerData(1000);
  export default customersData;
  