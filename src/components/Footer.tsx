import React from 'react'
import { getCurrentDate } from '@/lib/utils'
const Footer = () => {
  return (
    <div className="flex justify-center items-center py-4 text-blue-800 text-sm"
      style={{ backgroundColor: 'var(--blue-book-blue)' }}
    >
      <p>Website by TNMA</p>
    </div>
  )
}

export default Footer;