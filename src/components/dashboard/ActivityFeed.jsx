import {
  AlertTriangle,
  Ban,
  Clock,
  CreditCard,
  MessageSquare,
  ShoppingCart,
  Undo2,
} from "lucide-react";

const ActivityFeed = () => {
  const activities = [
    {
      id: "NTF001",
      type: "order",
      icon: ShoppingCart,
      title: "New Order Received",
      description: "Ali Raza placed an order for 2 smartphones.",
      time: "5 minutes ago",
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-800",
    },
    {
      id: "NTF002",
      type: "payment",
      icon: CreditCard,
      title: "Payment Successful",
      description: "Payment of $1,240 received from Fatima Khan.",
      time: "12 minutes ago",
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-800",
    },
    {
      id: "NTF003",
      type: "cancel",
      icon: Ban,
      title: "Order Cancelled",
      description: "Order #ORD007 by Hassan Javed was cancelled.",
      time: "20 minutes ago",
      color: "text-red-600",
      bgColor: "bg-red-100 dark:bg-red-800",
    },
    {
      id: "NTF004",
      type: "message",
      icon: MessageSquare,
      title: "New Message",
      description: "Ayesha Noor sent a message regarding her order.",
      time: "30 minutes ago",
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-800",
    },
    {
      id: "NTF005",
      type: "refund",
      icon: Undo2,
      title: "Refund Processed",
      description: "Refund issued for cancelled order by Zain Ali.",
      time: "45 minutes ago",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100 dark:bg-yellow-800",
    },
    {
      id: "NTF006",
      type: "alert",
      icon: AlertTriangle,
      title: "Low Stock Alert",
      description: "Only 5 units left of LED TV in inventory.",
      time: "1 hour ago",
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-800",
    },
  ];

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 ">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="">
          <h3 className="text-lg font-bold dark:text-slate-400">
            Activity Feed
          </h3>
          <p className="text-sm text-slate-500 dark:text-white ">
            Recent System Activities
          </p>
        </div>
        <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
          View All
        </button>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {activities.map((act, index) => (
            <div key={index} className="flex items-start space-x-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ">
              <div className={`p-2 rounded-lg ${act.bgColor} `}>
                <act.icon className={`${act.color} w-4 h-4`} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-white ">
                  {act.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                  {act.description}
                </p>
                <div className="flex items-center-safe space-x-1 mt-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {act.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
