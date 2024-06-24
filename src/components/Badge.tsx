import React from 'react'
import './Badge.css'

function Badge({ children }: { children: React.ReactNode } ) {
  return (
    <div className="badge">
      {children}
    </div>
  )
}

export default Badge