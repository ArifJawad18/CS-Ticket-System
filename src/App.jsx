import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Customers/Banner/banner";
import Customers from "./components/Customers/Customers";
import Footer from "./components/Footer/footer";


const fetchCustomers = async () => {
  const res = await fetch("/customers.json");
  return res.json();
};
function App() {
  const customersPromise = fetchCustomers();

  return (
    <div>
      {/* Nabar start */}
      <div className="navbar bg-base-100 shadow-md border-b border-base-200 px-4">
        <div className="flex-1 gap-2">
          <a className="text-xl font-bold tracking-tight cursor-pointer">
            CS — Ticket System
          </a>
        </div>

        <div className="navbar-end gap-3">
          <div className="lg:flex">
            <ul className="menu menu-horizontal px-1 gap-1">
              <li>
                <a className="rounded-lg active:bg-primary">Dashboard</a>
              </li>
              <li>
                <a className="rounded-lg">Tickets</a>
              </li>
              <li>
                <a className="rounded-lg">Customers</a>
              </li>
              <li>
                <a className="rounded-lg">Reports</a>
              </li>
            </ul>
          </div>

          <button className="btn btn-primary btn-sm md:btn-md shadow-lg shadow-primary/20">
            <span className="hidden md:inline">+ New Ticket</span>
            <span className="md:hidden">+ New Ticket</span>
          </button>
        </div>
      </div>

      <Banner></Banner>

      <Suspense
        fallback={<span className="loading loading-ring loading-xs"></span>}
      >
        <Customers customersPromise={customersPromise} />
      </Suspense>

      <Footer></Footer>
    </div>
  );
}

export default App;
