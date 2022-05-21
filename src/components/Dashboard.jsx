import _ from 'lodash';
import React, { useState, useEffect } from 'react'
import { Droppable, DragDropContext, Draggable } from 'react-beautiful-dnd'

function Dashboard() {

    const [round, setRound] = useState({
        "open": {
            title: "Open",
            color: "red",
            items: []
        },
        "contact": {
            title: "Contacted",
            color: "indigo",
            items: []
        },
        "written": {
            title: "Written",
            color: "orange",
            items: []
        },
        "selected": {
            title: "Selected",
            color: "green",
            items: []
        }
    })
    const [searchName, setSearchName] = useState("")

    useEffect(() => {
        fetch('https://randomuser.me/api?results=10')
            .then(res => res.json())
            .then(data => {
                setRound(prev => {
                    prev = { ...prev }
                    prev.open.items = data.results
                    return prev
                })
            })
        fetch('https://randomuser.me/api?results=5')
            .then(res => res.json())
            .then(data => {
                setRound(prev => {
                    prev = { ...prev }
                    prev.contact.items = data.results
                    return prev
                })
            })
        fetch('https://randomuser.me/api?results=7')
            .then(res => res.json())
            .then(data => {
                setRound(prev => {
                    prev = { ...prev }
                    prev.written.items = data.results
                    return prev
                })
            })
    }, []);
    const handleDragEnd = ({ destination, source }) => {
        if (!destination) {
            return
        }

        if (destination.index === source.index && destination.droppableId === source.droppableId) {
            return
        }

        // Creating a copy of item before removing it from state
        const itemCopy = { ...round[source.droppableId].items[source.index] }

        setRound(prev => {
            prev = { ...prev }
            // Remove from previous items array
            prev[source.droppableId].items.splice(source.index, 1)

            // Adding to new items array location
            prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

            return prev
        })
    }
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
                        <input type="search" name="Search" id="" placeholder='Search The Name' className='border-b focus:outline-none' onChange={(e) => { setSearchName(e.target.value) }} />
                    </div>
                    <button className='p-1 px-2 bg-indigo-900 text-white capitalize rounded-md text-sm flex items-center'><ion-icon name="add-outline" ></ion-icon> Add New</button>
                    <span className="relative inline-block">
                        <ion-icon name="gift-outline"
                            class="w-6 h-6  hover:bg-gray-100/20 rounded-full fill-current p-2">
                        </ion-icon>
                        <span className="absolute top-2 right-1 inline-flex  px-1.5 py-1 text-xs font-bold leading-none transform translate-x-1/2 -translate-y-1/2 text-white bg-red-600 rounded-full">2</span>
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
            <div className="w-full h-10 flex items-center justify-between bg-gray-200 px-5">
                <div className="font-bold flex items-center gap-x-2">All candidates - <span className='font-normal'>
                    <select className='bg-transparent px-2'>
                        <option value="Active ">Active (48)</option>
                        <option value="Active ">Active </option>
                    </select>
                </span></div>
                <div className="flex items-center gap-x-2 font-normal">Sort By - <span className='font-bold'>
                    <select className='bg-transparent px-2'>
                        <option value="Last Update">Last Update</option>
                        <option value="Last Update">Last Update</option>
                    </select>
                </span></div>
                <div className="font-bold flex items-center gap-x-2">
                    <ion-icon name="list-outline" class="w-6 h-6"></ion-icon>
                    <ion-icon name="funnel-outline" class="w-6 h-6"></ion-icon>
                    <ion-icon name="cloud-upload-outline" class="w-6 h-6"></ion-icon>
                </div>
            </div>
            {/* main area */}
            <div className="h-full bg-gray-200 p-5 shadow-md overflow-auto scrollbar-Custom">
                <div className="h-full overflow-auto scrollbar-Custom">
                    <div className='h-full flex gap-x-10'>
                        <DragDropContext onDragEnd={handleDragEnd}>
                            {_.map(round, (data, key) => {
                                return (
                                    <div className="div" key={key}>
                                        <div className={`w-80 h-12 my-5 bg-white border-l-4 pl-2 font-bold flex items-center shadow-sm rounded`} style={{ borderColor: data.color }}>{data.title} - {data.items.length}</div>
                                        <Droppable droppableId={key} >
                                            {(provided) => {
                                                return (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.droppableProps}
                                                        className='w-full bg-indigo-100 p-2 rounded-md flex flex-col h-fit min-h-[10rem]'
                                                    >
                                                        {data.items.filter((value) => {
                                                            if (searchName === '' || value.name.first.toLowerCase().includes(searchName.toLowerCase())) {
                                                                return value
                                                            }
                                                            return null
                                                        }).map((el, index) => {
                                                            return (
                                                                <Draggable key={el.login.uuid} draggableId={el.login.uuid} index={index}>
                                                                    {(provided) => {
                                                                        return (
                                                                            <li className="w-80 h-32 my-2 bg-white flex flex-none flex-col justify-between rounded" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                                                <div>
                                                                                    <div className='text-indigo-600 px-4 pt-4 font-bold '>{el.name.first}</div>
                                                                                    <div className='text-sm truncate px-4 font-semibold'>{el.email}</div>
                                                                                    <div className='text-sm truncate px-4 '>{el.location.city}</div>
                                                                                </div>
                                                                                <div className="w-full h-10 bg-gray-50 rounded flex items-center justify-between px-2">
                                                                                    <div className='flex gap-0.5'>
                                                                                        {[...Array(Math.floor(Math.random() * 5) + 1)].map((index) => (
                                                                                            <ion-icon name="star-outline" key={index}></ion-icon>
                                                                                        )
                                                                                        )}
                                                                                    </div>
                                                                                    <div className='gap-x-2 flex items-center'><img src={el.picture.medium} alt='' className='w-7 h-7 rounded-full bg-green-100 ' /><ion-icon name="ellipsis-vertical-outline"></ion-icon></div>
                                                                                </div>
                                                                            </li>
                                                                        )
                                                                    }}
                                                                </Draggable>
                                                            )
                                                        })}
                                                        {provided.placeholder}
                                                    </div>
                                                )
                                            }}
                                        </Droppable>
                                    </div>
                                )
                            })}
                        </DragDropContext>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Dashboard