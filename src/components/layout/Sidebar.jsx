import { BarChart3, ChevronDown,  LayoutDashboard, Package, ShoppingBag, Users, X, Zap } from "lucide-react";
import React, { useState } from "react";


const menuItems = [
    {
        id:'dashboard',
        icon:LayoutDashboard,
        label:"Dashboard",
        active:true,
        badge: "New",
    },
    {
        id:'analytics',
        label:'Analytics',
        icon:BarChart3,
        submenu:[
            { id:'overview', label:"Overview"},
            { id:'reports', label:"Reports"},
            { id:'insights', label:"Insights"},
        ]

    },
    {
        id:'users',
        label:'Users',
        icon:Users,
        count:"2.4k",
        submenu:[
            { id:'overview', label:"Overview"},
            { id:'reports', label:"Reports"},
            { id:'insights', label:"Insights"},
        ]

    },
    {
        id:'ecommerce',
        label:'E-Commerce',
        icon:ShoppingBag,
        submenu:[
            { id:'overview', label:"Overview"},
            { id:'reports', label:"Reports"},
            { id:'insights', label:"Insights"},
        ]

    },
    {
        id:"inventory",
        label:"Inventory",
        icon:Package,
        count:"847"
    },
    {
        id:"inventory2",
        label:"Inventory",
        icon:Package,
        count:"847"
    },
    {
        id:"inventory3",
        label:"Inventory",
        icon:Package,
        count:"847"
    },
    {
        id:"inventory4",
        label:"Inventory",
        icon:Package,
        count:"847"
    },
    {
        id:"inventory5",
        label:"Inventory",
        icon:Package,
        count:"847"
    },
    {
        id:"inventory6",
        label:"Inventory",
        icon:Package,
        count:"847"
    },
]

const Sidebar = ({ collapsed ,onToggle , currentPage , onPageChange}) => {
 const [expandItems , setExpandItems] = useState(new Set(["analytics"]))
 const toggleExpand = (itemId)=>{
    const newExpand = new Set(expandItems);
    if (newExpand?.has(itemId)) {
        newExpand.delete(itemId)
    } else {
        newExpand.add(itemId)
        
    }
    setExpandItems(newExpand)
 }
    return (
    <div className={`${collapsed ? 'w-20' :'w-72'} transition-all  duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}>
      {/* logo */}
      <div className="flex  justify-between p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          {/* Conditional rendering */}
        {!collapsed && 
        
          <div className="">
            <h1 className="text-xl font-bold to-slate-800 dark:text-white">Nexus</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin Panel
            </p>
          </div> 
          }
        </div>
         {!collapsed &&  
          <button onClick={onToggle} className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <X className="w-5 h-5 " />
          </button>
          }
      </div>
{/* Navigation I will display dynamic Menus */}
<nav className="flex-1 p-2.5 space-y-2 overflow-y-auto mx-auto">
{menuItems.map((item)=>(
<div className="" key={item?.id}>
    <button onClick={()=>{
        if (item.submenu) {
            toggleExpand(item.id)
        } else {
            onPageChange(item.id)
        }
    }}
     className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${currentPage === item.id || item?.active ? ' bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25  ':'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'}`}>
        <div className="flex items-center space-x-3">
            <item.icon className="w-5 h-5"/>
        {/* conditional rendering */}
        {!collapsed && (
        <>
        <span className="font-medium ml-2">{item?.label}</span>
        {item?.badge && 
        <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full ">{item?.badge}</span>
         }
        {item?.count && 
        <span className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full ">{item?.count}</span>
         }
        </>
          )}
        </div>
        {!collapsed && item?.submenu && <ChevronDown className="w-4 h-4 transition-transform "/> }
        
    </button>

    {/* Sub Menu */}
    
    {!collapsed && item?.submenu && expandItems.has(item.id) &&
    <div className="ml-8 mt-2 space-y-1">
        {item?.submenu.map((sItem)=>( <button className="w-full text-left p-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all " key={sItem.id} >{sItem?.label}</button>))}
    </div>
    }
</div>
))}
</nav>

{/* User Profile */}
{!collapsed && 

<div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
<div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
<img src="https://res.cloudinary.com/dgmo64b3z/image/upload/v1752526112/zg0x5o3l6xr1rnvuvfcf.jpg" alt="" className="w-10 h-10 rounded-full ring-2 ring-blue-500 " />
<div className="flex-1 min-w-0">
<div className="flex-1 min-w-0">
    <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
        Abdullah
    </p>
    <p className="text-xs text-slate-500 dark:text-slate-400 truncate ">
        Administrator
    </p>
</div>
</div>

</div>
</div>
}
    </div>
  );
};

export default Sidebar;
