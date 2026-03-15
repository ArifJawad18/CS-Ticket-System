import { useState } from "react";





const CoustomerCard = ({ticket}) => {
     const [isSelected,setSelected] = useState(false)
  return (
    <div>
      <div
        key={ticket.id}
        className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm  w-[350px] hover:shadow-md transition-shadow mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
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
            
            <button onClick={()=>setSelected(true)} className="text-[11px] font-medium text-green-700">
              {isSelected===true?"In Progress":"Open"}
            </button>
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
    </div>
  );
};

export default CoustomerCard;
