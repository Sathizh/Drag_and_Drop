import React from 'react'

function Dashboard() {
    return (
        <div className='flex flex-col h-screen'>
            <div className="h-16 w-full bg-white flex justify-between items-center px-5 border-b">
                <div className='flex items-center gap-x-3'>
                    <ion-icon name="aperture-outline" class="h-8 w-8 hover:bg-gray-100/20 rounded-full p-2"></ion-icon>
                    <div className='font-semibold text-lg'>iamneo.ai</div>
                    <div className='font-semibold text-xl'>Talent Center</div>
                </div>
                <div className='flex items-center gap-x-3 text-black'>
                    <div className='gap-x-3 flex items-center'>
                        <ion-icon name="search-outline"></ion-icon>
                        <input type="search" name="Search" id="" placeholder='search' className='border-b focus:outline-none' />
                    </div>
                    <button className='p-1 px-2 bg-indigo-900 text-white capitalize rounded-md text-sm flex items-center'><ion-icon name="add-outline" ></ion-icon> Add New</button>
                    <span class="relative inline-block">
                        <ion-icon name="gift-outline"
                            class="w-6 h-6  hover:bg-gray-100/20 rounded-full fill-current p-2">
                        </ion-icon>
                        <span class="absolute top-2 right-1 inline-flex  px-1.5 py-1 text-xs font-bold leading-none transform translate-x-1/2 -translate-y-1/2 text-white bg-red-600 rounded-full">2</span>
                    </span>
                    <div className="w-10 h-10 rounded-full bg-yellow-200 flex justify-center items-center font-semibold text-xl">S</div>
                </div>
            </div>
            <div className="h-16 w-full bg-gray-50 flex border-b justify-between items-center px-5 shadow-sm">
                <div className='flex items-center gap-x-1'>
                    <ion-icon name="qr-code-outline"></ion-icon>
                    <div className='font-semibold text-lg'>Jobs</div>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                    <div className='font-semibold text-lg'>Full-Stack Engineer</div>
                    <div className="px-1 p-0.5 ml-2 shadow-sm border rounded-md">View Job Details</div>
                </div>
                <div className='flex items-center gap-x-3 text-black'>
                    <div className='gap-x-3 flex items-center'>
                        <select name="addCandidates" id="" className='border p-2 pr-3'>
                            <option value="add Candidates">add Candidates</option>
                            <option value="add Candidates">add Candidates</option>
                            <option value="add Candidates">add Candidates</option>
                            <option value="add Candidates">add Candidates</option>
                        </select>
                    </div>
                    <button className='p-1 px-2 bg-indigo-900 text-white capitalize rounded-sm text-sm flex items-center gap-1'><ion-icon name="earth-outline" ></ion-icon> Published <ion-icon name="chevron-down-outline"></ion-icon></button>

                </div>
            </div>
            <div className="w-full h-full bg-gray-200 p-5 shadow-md">
                <div className="font-bold flex items-center gap-x-2">All candidates - <span className='font-normal'>Active (48) <ion-icon name="chevron-down-outline"></ion-icon></span></div>
                <div className="w-80 h-12 my-5 bg-white border-l-4 pl-2  border-indigo-500 font-bold flex items-center">Open  - 11</div>
                <div className="w-80 h-40 my-5 bg-white relative">
                    <div className='text-indigo-600 px-4 pt-4 font-bold '>Sathish M</div>
                    <div className='text-sm truncate px-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
                    <div className="w-full h-10 bg-gray-50 absolute b-0 l-0">s</div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard