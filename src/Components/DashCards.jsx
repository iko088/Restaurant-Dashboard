import React from 'react'

const DashCards = () => {
  return (
    <div className='flex items-center justify-between '>

      {/* CARD 1  */}
      <div className="bg-[#FFFFFF] flex items-center gap-4 py-3 px-6 rounded-lg ">
        <div className='py-5 px-4 bg-[#2ED6A3] rounded-full bg-opacity-20 '>
            <img src="/images/ordersimg.png" className='w-[40px] '  alt="" />
        </div>
        <div>
            <h1 className='text-3xl font-bold '>75</h1>
            <p className='text-sm'>Total Orders</p>
           <div className="flex items-center mt-1 gap-2">
           <img src="/images/smarrow.png" className='py-1 px-1 bg-[#2ED6A3] rounded-full bg-opacity-20 ' alt="" />
            <span className=' text-[9px] text-[#A3A3A3] '>4% (30 days)</span>
           </div>
        </div>
      </div>

       {/* CARD 2 */}
       <div className="bg-[#FFFFFF] flex items-center gap-4 py-3 px-6 rounded-lg ">
        <div className='py-5 px-4 bg-[#2ED6A3] rounded-full bg-opacity-20 '>
            <img src="/images/box.png" className='w-[40px] '  alt="" />
        </div>
        <div>
            <h1 className='text-3xl font-bold '>357</h1>
            <p className='text-sm'>Total Orders</p>
           <div className="flex items-center mt-1 gap-2">
           <img src="/images/smarrow.png" className='py-1 px-1 bg-[#2ED6A3] rounded-full bg-opacity-20 ' alt="" />
            <span className=' text-[9px] text-[#A3A3A3] '>4% (30 days)</span>
           </div>
        </div>
      </div>

       {/* CARD 3  */}
       <div className="bg-[#FFFFFF] flex items-center gap-4 py-3 px-6 rounded-lg ">
        <div className='py-5 px-4 bg-[#2ED6A3] rounded-full bg-opacity-20 '>
            <img src="/images/ordersimg.png" className='w-[40px] '  alt="" />
        </div>
        <div>
            <h1 className='text-3xl font-bold '>65</h1>
            <p className='text-sm'>Total Canceled</p>
           <div className="flex items-center mt-1 gap-2">
           <img src="/images/downarrow.png" className='py-1 px-1 bg-[#FF5B5B] rounded-full bg-opacity-20 ' alt="" />
            <span className=' text-[9px] text-[#A3A3A3] '>25% (30 days)</span>
           </div>
        </div>
      </div>

       {/* CARD 4  */}
       <div className="bg-[#FFFFFF] flex items-center gap-4 py-3 px-6 rounded-lg ">
        <div className='py-5 px-4 bg-[#2ED6A3] rounded-full bg-opacity-20 '>
            <img src="/images/bag.png" className='w-[40px] '  alt="" />
        </div>
        <div>
            <h1 className='text-3xl font-bold '>$128</h1>
            <p className='text-sm'>Total Revenue</p>
           <div className="flex items-center mt-1 gap-2">
           <img src="/images/downarrow.png" className='py-1 px-1 bg-[#FF5B5B] rounded-full bg-opacity-20 ' alt="" />
            <span className=' text-[9px] text-[#A3A3A3] '>12% (30 days)</span>
           </div>
        </div>
      </div>

      

      

      

      {/* END OF PARENT DIV  */}
    </div>
  )
}

export default DashCards
