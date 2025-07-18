import React from 'react'
import StatusGrid from './StatusGrid.jsx'
import ChartSection from './ChartSection.jsx'
import TableSection from './TableSection.jsx'

const Dashboard = () => {
  return (
    <div className='space-y-6'>
        {/* status grid */}
        <StatusGrid/>

        {/* Chart section */}
        <ChartSection/>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <TableSection/>
          </div>
        </div>
        
      
    </div>
  )
}

export default Dashboard
