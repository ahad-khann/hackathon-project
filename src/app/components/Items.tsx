import React from 'react'

const Items = () => {
  return (
    <>
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
    <div className="top-picks ">
      <h2 className='text-center text-4xl font-bold pt-16'>Top Picks For You</h2>
      <p className='text-center p-9 text-lg'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
      <div className="img-container">
        <div className="image">
        <img src="/granite-dining-table.png" alt="" />
        <h5 className='font-medium pt-24'>Granite Dining Table with chair</h5>
        <h4 className='font-bold'>Rs. 25,000</h4>
        </div>
        
        <div className="image">
        <img src="/trenton-sofa.png" alt="" />
        <h5 className='font-medium pt-18'>Trenton modular sofa_3</h5>
        <h4 className='font-bold'>Rs. 25,000</h4>
        </div>
        <div className="image">
        <img src="/outdoor-table.png" alt="" />
        <h5 className='font-medium pt-16'>Outdoor bar table and mirror</h5>
        <h4 className='font-bold'>Rs. 25,000</h4>
        </div>
        <div className="image">
        <img src="/plain-console.png" alt="" />
        <h5 className='font-medium pt-24'>Plain Console with teak mirror</h5>
        <h4 className='font-bold'>Rs. 25,000</h4>
        </div>
        
      </div>
      <a href="/shop"><h5 className='text-center pt-12 underline font-semibold text-3xl pb-8'>View More</h5></a>

      <div className="asgard-fill flex justify-around items-center">
        <img src="/asgaard-sofa .png" alt="asgard sofa" width={700} />
        <div className="text-portion flex flex-col gap-12">
          <h3 className='font-semibold text-4xl'>New Arrivals</h3>
          <h1 className='font-bold text-6xl'>Asgard Sofa</h1>
          <button className='button-container'>Order Now</button>
        </div>
      </div>
      <div className="blog-page">
  <h2 className='font-bold text-4xl text-center pt-8'>Our Blog</h2>
  <p className='text-center text-lg pt-6'>Find a bright ideal to suit your taste with our great selection</p>
  
  <div className="cont flex flex-row gap-20 justify-center items-center mt-4 pb-8">
    <div className="img-containerr flex flex-col justify-between items-center gap-4">
      <img src="/Rectangle 13.png" alt="" width={300}/>
      <h6>Going all-in with millennial design</h6>
      <h3>Read More</h3>
      <p>5 min     12th Oct 2022</p>
    </div>
    <div className="img-containerr flex flex-col justify-between items-center gap-4">
      <img src="/Rectangle 14.png" alt="" width={300}/>
      <h6>Going all-in with millennial design</h6>
      <h3>Read More</h3>
      <p>5 min     12th Oct 2022</p>
    </div>
    <div className="img-containerr flex flex-col justify-between items-center gap-4">
      <img src="/Rectangle 15.png" alt="" width={300}/>
      <h6>Going all-in with millennial design</h6>
      <h3>Read More</h3>
      <p>5 min     12th Oct 2022</p>
    </div>
  </div>
</div>
<div className="insta-section bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center gap-10">
<h1 className='font-bold text-5xl pt-10'>Our Instagram</h1>
<h5>Follow our store on Instagram</h5>
<button className='button-style'>Follow Us</button>
  
</div>
    </div>
    </>
  )
} 

export default Items