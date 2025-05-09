import React from 'react'
import CustomerList from '@/components/CustomerList'

const page = () => {
  return (
    <div className="p-4 mx-auto max-w-sm">
      <CustomerList />
      <div className="py-2">
        <p className="text-blue-800 font-thin text-center">
          They take about a day to make all together, but I'm a salaryman so
          realistically it will take me about a week per person.
          </p>
        </div>
    </div>  
  )
}

export default page