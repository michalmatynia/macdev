'use client' // this directive should be at top of the file, before any imports.
import React, { FC, ReactNode } from 'react'

// This is a Client Component
interface LocalProps {
  children: ReactNode
}

const DashboardLayout: FC<LocalProps> = ({ children }): React.ReactElement => {
  return (
    <div>
      <h2>My Dashboard</h2>
      {children}
    </div>
  )
}

export default DashboardLayout
