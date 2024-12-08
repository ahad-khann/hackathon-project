import React from 'react'

const Items = () => {
  return (
    <div className=' fill-items flex justify-center items-center gap-36'>
        <div className="flex flex-col">
            <img src="/table.png" alt="Side Table" width={350} />
            <h3 className='font-medium text-4xl px-4' >Side Table</h3>
            <a href="/shop" className='text-xl py-2 pb-4 underline px-4 font-medium'>View More</a>
        </div>
        <div className="side-table flex flex-col ">
            <img src="/cloud-sofa.png" alt="Cloud Sofa" width={350}/>
            <h3 className='font-medium text-4xl pt-8 px-8'>Side table</h3>
            <a href="/shop" className='text-xl py-2 pb-4 underline px-8 font-medium'>View More</a>
        </div>
    </div>
  )
}

export default Items