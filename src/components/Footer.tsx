import React from 'react'
import { getCurrentDate } from '@/lib/utils'
const Footer = () => {
  return (
    <div className="flex font-bold justify-center items-center py-4 text-blue-800 text-sm shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"
      style={{ backgroundColor: 'var(--blue-book-blue)' }}
    >
      <p>by TNMA</p>
    </div>
  )
}

export default Footer;