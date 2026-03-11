import { use } from "react";

const Customers = ({ customersPromise }) => {
  const tickets = use(customersPromise); 

  return (
    <div className="max-w-[1200px] mx-auto mt-20">
      <h1 className="text-2xl font-bold text-slate-700 mb-8 px-2">
        Customer Tickets
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm flex flex-col w-[300px] hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-1.5 min-w-0">
                <h2 className="text-sm font-semibold text-slate-800 truncate">
                  {ticket.title}
                </h2>
                <span className="text-gray-400 text-[11px] font-medium shrink-0">
                  {ticket.id}
                </span>
              </div>

              <div className="flex items-center gap-1 shrink-0 ml-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${
                    ticket.status === "Open"
                      ? "bg-green-500"
                      : ticket.status === "In-Progress"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }`}
                ></span>
                <span className="text-[11px] font-medium text-green-700">
                  {ticket.status}
                </span>
              </div>
            </div>

            <p className="text-gray-500 text-[11px] leading-relaxed mb-2.5 line-clamp-2">
              {ticket.description}
            </p>

            <div className="flex items-center justify-between text-[11px]">
              <span className="font-bold uppercase tracking-tight text-red-500">
                {ticket.priority}
              </span>

              <div className="flex items-center gap-2 text-gray-400">
                <span className="truncate max-w-[80px]">
                  {ticket.customer_name}
                </span>

                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            </div>

            <p className="text-[10px] text-gray-400 mt-1">{ticket.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
