import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {

    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "users", icon: "person-circle-outline", url: "users" },
        { title: "events", icon: "calendar-clear-outline", url: "events" },
        { title: "meetings", icon: "videocam-outline", url: "meetings" },
        { title: "Cancellation Requests ", icon: "ban-outline", url: "cancellationRequest" },
        { title: "Transactions", icon: "swap-horizontal-outline", url: "transactions" },
        { title: "Reported Users", icon: "people-circle-outline", url: "reportedUsers" },
        { title: "Feedbacks ", icon: "pricetags-outline", url: "feedbacks" },
    ];
    const style = {
        navLink: `flex rounded-lg rounded-r-none p-2 py-3 cursor-pointer hover:text-black text-BeeMG-dark-gray text-sm items-center gap-x-4 hover:bg-gradient-to-r from-BeeMG-yellow/50 border-BeeMG-yellow font-semibold ${!open && 'justify-center'} `,
        active: `flex rounded-lg rounded-r-none p-2 py-3 cursor-pointer hover:text-black text-BeeMG-dark-gray text-sm items-center gap-x-4 bg-gradient-to-r from-BeeMG-yellow/50 border-r-4 border-BeeMG-yellow text-black font-bold ${!open && 'justify-center'} `,
    }

    return (
        <div className="flex">
            <div className={` ${open ? "lg:w-72 md:w-52" : "lg:w-20 md:w-16 w-16"} bg-white h-screen pt-6 relative duration-300 shadow-md `}>
                <div className={`absolute cursor-pointer -right-3 inset-y-1/2 h-6 w-6  flex items-center justify-center bg-white hover:bg-BeeMG-yellow hover:text-black rounded-full  ${!open && "rotate-180"} shadow-md`}
                    onClick={() => setOpen(!open)}>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </div>
                <div className="flex gap-x-4 items-center justify-center">
                    <div >
                    <ion-icon name="aperture-outline" class="h-8 w-8  hover:bg-gray-100/20 rounded-full p-2">
                </ion-icon>
                    </div>
                </div>
                <ul className="pl-2 pt-6 flex flex-col gap-1  ">
                    {Menus.map((Menu, index) => (
                        <NavLink to={`/s/${Menu.url}`}
                            key={index}
                            className={(navData) => navData.isActive ? style.active : style.navLink}
                        >
                            <ion-icon name={Menu.icon} class="h-6 w-6"></ion-icon>
                            <div className="flex flex-row flex-none gap-1">
                                <span className={`${!open && "hidden"} origin-left duration-200 capitalize truncate`}>
                                    {Menu.title}
                                </span>
                            </div>
                        </NavLink>
                    ))}
                </ul>
            </div>
            <div className="flex-1 px-4 bg-gray-200">
                <div className="w-full h-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
export default Sidebar;