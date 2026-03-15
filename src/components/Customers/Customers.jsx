import { use } from "react";
import CoustomerCard from "../CoustomerCard/CoustomerCard";

const Customers = ({ customersPromise }) => {
  const tickets = use(customersPromise);

  return (
    <div className="max-w-[1200px] mx-auto mt-20">
      <h1 className="text-2xl font-bold text-slate-700 mb-8 px-2 ml-5">
        Customer Tickets
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tickets.map(ticket =><CoustomerCard ticket={ticket}></CoustomerCard> )
        }
      </div>
    </div>
  );
};

export default Customers;
