import React from 'react'
import CustomerList from '@/components/CustomerList'
import CompletedOrders from '@/components/CompletedOrders'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const page = () => {
  return (
    <div className="py-8 mx-auto max-w-sm">
      <div className="text-blue-800 font-bold text-center text-2xl mb-4">The Blue Book Record</div>
      
      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="w-full mx-auto font-bold">
          <TabsTrigger value="pending" className=''>Pending</TabsTrigger>
          <TabsTrigger value="completed" className=''>Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pending">
          {/* <div className="text-blue-800 text-center font-thin mb-4">
            They take about a day to make all together, but realistically it will take me 13 days per person.
          </div> */}
          <CustomerList />
        </TabsContent>
        
        <TabsContent value="completed">
          {/* <div className="text-blue-800 text-center font-thin mb-4">
            Select the version to view scans of that blue book.
          </div> */}
          <CompletedOrders />
        </TabsContent>
      </Tabs>
    </div>  
  )
}

export default page