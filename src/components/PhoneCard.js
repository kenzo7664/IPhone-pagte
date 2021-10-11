import React from 'react'

const PhoneCard = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden bg-purple-900 shadow-lg">
        <span className="border border-black float-right m-2 p-1">B1</span>
        <img src="https://source.unsplash.com/random" alt="" className ="h-15 px-6 py-4" />
        <div className="px-6 py-4">
          <div className="font-bold text-white text-xl mb-1">
            IPhone 7
          </div>
          <div className="font-semibold text-white"> Unlocked | 256Gb</div>
          <span className="font-normal text-white">Unit price</span>
          <h1 className="font-bold text-white">$450</h1>
          <span className="font-normal text-white">1500 available</span>
         
        </div>
        <div className="flex flex-col justify-center items-center mb-4">
         <button className="text-white border border-white p-2 w-20 rounded bg-blue-500 ">BUY</button>
         </div>
      </div> 
    )
}

export default PhoneCard
