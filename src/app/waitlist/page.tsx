import React from 'react'
import CustomerList from '@/components/CustomerList'

const page = () => {
  return (
    <div className="py-2 px-3 mx-auto max-w-sm">
      <div className="text-blue-800 font-bold text-center text-xl mt-4">Pending Orders</div>
      <CustomerList />
      <div className="py-2">
        <p className="text-blue-800 text-center">
          They take about a day to make all together, but I'm a salaryman so
          realistically it will take me about a week per person.
          </p>
        </div>
    </div>  
  )
}

export default page