import { ArrowDownRight, ArrowRight, ArrowUpRight, DollarSign } from "lucide-react";
import React from "react";

const StatusGrid = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$124,533",
      change: "+12.4%",
      trend: "up",
      icon: DollarSign,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      textColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      title: "Total Revenue",
      value: "$124,533",
      change: "+12.4%",
      trend: "up",
      icon: DollarSign,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      textColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      title: "Total Revenue",
      value: "$124,533",
      change: "+12.4%",
      trend: "up",
      icon: DollarSign,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      textColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      title: "Total Revenue",
      value: "$124,533",
      change: "+12.4%",
      trend: "up",
      icon: DollarSign,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      textColor: "text-emerald-600 dark:text-emerald-400",
    },
  ];
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
        {stats?.map((stat)=>(

       
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20 transition-all duration-300 group ">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2  ">
              {stat.title}
            </p>
            <p className="text-3xl font-bold text-slate-800 dark:text-white mb-4  ">
              {stat.value}
            </p>
            <div className="flex items-center space-x-2">
             {stat?.trend == "up" ?  <ArrowUpRight className="w-4 h-4 text-emerald-500"  />: <ArrowDownRight className="w-4 h-4 text-red-500" />}
              <span className={`text-sm font-semibold ${stat.trend ? "text-emerald-500" : "text-red-500 "}`}>
                {stat.change  }
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                vs last month
              </span>
            </div>
          </div>
          <div
            className={` ${stat.bgColor} p-3 rounded-xl group-hover:scale-110 transition-all duration-300`}
          >
            <stat.icon className={`${stat.textColor} w-6 h-6`}/>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className={` h-2  bg-gradient-to-r ${stat.color} rounded-full transition-all duration-100 ${stat.trend == "up"? "w-3/4" : "w-2/5"}`}
          ></div>
        </div>
      </div>
       ))}
    </div>
  );
};

export default StatusGrid;
