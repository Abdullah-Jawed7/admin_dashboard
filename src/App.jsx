import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header.jsx'
import Sidebar from './components/layout/Sidebar.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'

function App() {
 const [sidebarCollapsed , setSidebarCollapsed] = useState(false)
 const [currentPage , setCurrentPage] = useState("dashboard")
  return (
    <>
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500 ' >
      <div className="flex h-screen overflow-hidden">
        <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={()=>setSidebarCollapsed(!sidebarCollapsed)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}

        />
        <div className="flex flex-1 flex-col overflow-hidden">
          <Header 
          onToggleSidebar={()=>setSidebarCollapsed(!sidebarCollapsed)}
          sidebarCollapsed={sidebarCollapsed}/>
<main className="flex-1 overflow-y-auto bg-transparent">
  <div className="p-6 space-y-6">
    {currentPage === "dashboard" && <Dashboard/>}
  </div>
</main>

          
        </div>
      </div>
    </div>
    </>
  )
}

export default App

// 1:03:00