import { MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

const TableSection = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "cancelled":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
    }
  };

  const topProducts = [
    {
      name: "Smartphone",
      sales: 1240,
      revenue: 620000,
      trend: "up",
      change: 12.5,
    },
    {
      name: "Laptop",
      sales: 930,
      revenue: 744000,
      trend: "up",
      change: 8.2,
    },
    {
      name: "Air Conditioner",
      sales: 530,
      revenue: 689000,
      trend: "down",
      change: -4.1,
    },
    {
      name: "LED TV",
      sales: 780,
      revenue: 546000,
      trend: "up",
      change: 6.7,
    },
    {
      name: "Washing Machine",
      sales: 410,
      revenue: 287000,
      trend: "down",
      change: -3.8,
    },
    {
      name: "Tablet",
      sales: 670,
      revenue: 301500,
      trend: "up",
      change: 5.9,
    },
    {
      name: "Refrigerator",
      sales: 360,
      revenue: 432000,
      trend: "down",
      change: -2.4,
    },
    {
      name: "Microwave Oven",
      sales: 490,
      revenue: 147000,
      trend: "up",
      change: 3.2,
    },
    {
      name: "Gaming Console",
      sales: 580,
      revenue: 493000,
      trend: "up",
      change: 7.5,
    },
    {
      name: "Hair Dryer",
      sales: 300,
      revenue: 18000,
      trend: "down",
      change: -1.7,
    },
  ];

  const orders = [
    {
      id: "ORD001",
      customer: "Ali Raza",
      product: "Smartphone",
      status: "completed",
      date: "2025-07-01",
      amount: 52000,
    },
    {
      id: "ORD002",
      customer: "Fatima Khan",
      product: "Washing Machine",
      status: "pending",
      date: "2025-07-02",
      amount: 43000,
    },
    {
      id: "ORD003",
      customer: "Usman Tariq",
      product: "LED TV",
      status: "cancelled",
      date: "2025-07-03",
      amount: 60000,
    },
    {
      id: "ORD004",
      customer: "Hina Sheikh",
      product: "Laptop",
      status: "completed",
      date: "2025-07-04",
      amount: 88000,
    },
    {
      id: "ORD005",
      customer: "Zain Ali",
      product: "Microwave Oven",
      status: "pending",
      date: "2025-07-05",
      amount: 21000,
    },
    {
      id: "ORD006",
      customer: "Ayesha Noor",
      product: "Air Conditioner",
      status: "completed",
      date: "2025-07-06",
      amount: 99000,
    },
    {
      id: "ORD007",
      customer: "Hassan Javed",
      product: "Refrigerator",
      status: "cancelled",
      date: "2025-07-07",
      amount: 76000,
    },
    {
      id: "ORD008",
      customer: "Sara Yousuf",
      product: "Tablet",
      status: "pending",
      date: "2025-07-08",
      amount: 33000,
    },
    {
      id: "ORD009",
      customer: "Noman Qureshi",
      product: "Gaming Console",
      status: "completed",
      date: "2025-07-09",
      amount: 47000,
    },
    {
      id: "ORD010",
      customer: "Mehwish Anwar",
      product: "Hair Dryer",
      status: "cancelled",
      date: "2025-07-10",
      amount: 6000,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Recent Order */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50 ">
          <div className="flex items-center justify-between">
            <div className="">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Recent Orders
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Latest customer orders
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 text-sm font-semibold text-slate-600 ">
                  Order Id
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600 ">
                  Product
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600 ">
                  Amount
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600 ">
                  Status
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600 ">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 hover:dark:bg-slate-800/50 transition-colors"
                >
                  <td className="p-4">
                    <span className="text-sm text-blue font-medium">
                      {order.id}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white ">
                      {order.customer}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white ">
                      {order.product}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white ">
                      {order.amount}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`text-xs px-3 py-1 rounded-full text-slate-400 dark:text-white ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.date}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white">
                      <MoreHorizontal className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Top products */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold text-slate-800 dark:text-white">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Top Products
              </h3>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Best performing products
            </p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>
        {/* Dynamic Data */}
        <div className="p-6 space-y-4">
          {topProducts.map((pro, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ">
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-white ">
                  {pro.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 ">
                 {pro.sales}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-800 dark:text-white">
                  {pro.revenue}
                </p>
                <div className="flex items-center space-x-1">
                    {pro.trend == "up" ? <TrendingUp className="w-3 h-3 text-emerald-500" /> : <TrendingDown className="w-3 h-3 text-red-500" />}
                  <span className={`text-xs font-medium ${pro.trend == "up" ? "text-emerald-500": "text-red-500"}`}>{pro.sales}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableSection;
