import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";


const Sidebar = () => {

    const [open, setOpen] = useState(true);
    const TopMenus = [
        { title: "users", icon: "speedometer-outline", url: "#" },
        { title: "events", icon: "file-tray-full-outline", url: "#" },
        { title: "Cancellation Requests ", icon: "bag-add-outline", url: "#" },
        { title: "Transactions", icon: "people-outline", url: "#" },
        { title: "Reported Users", icon: "settings-outline", url: "#" },
    ];
    const BottomMenus = [
        { title: "Help", icon: "help-circle-outline", url: "#" },
        { title: "Message", icon: "chatbox-ellipses-outline", url: "#" },
        { title: "Apps", icon: "apps-outline", url: "#" },
    ];
    const style = {
        navLink: `flex rounded-lg p-2 py-3 cursor-pointer hover:text-black text-sm items-center gap-x-4 hover:bg-purple-500 border-purple-500 font-semibold ${!open && 'justify-center'} `,
        active: `flex rounded-lg p-2 py-3 cursor-pointer hover:text-black text-sm items-center gap-x-4 bg-gradient-to-r from-BeeMG-yellow/50 border-r-4 border-BeeMG-yellow text-black font-bold ${!open && 'justify-center'} `,
    }

    return (
        <div className="flex">
            <div className={` ${open ? "lg:w-60 md:w-52" : "lg:w-20 md:w-16 w-16"} bg-indigo-900 text-white h-screen pt-6 relative duration-300 shadow-md `}>
                <div className={`absolute cursor-pointer -right-3 inset-y-1/2 h-6 w-6  flex items-center justify-center bg-white text-black hover:bg-purple-500 hover:text-black rounded-full  ${!open && "rotate-180"} shadow-md`}
                    onClick={() => setOpen(!open)}>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </div>
                <div className="flex gap-x-4 items-center justify-center">
                    <div >
                    <ion-icon name="aperture-outline" class="h-8 w-8 hover:bg-gray-100/20 rounded-full p-2">
                </ion-icon>
                    </div>
                </div>
                <div className="px-2 mt-10 h-5/6 flex flex-col justify-between gap-1  ">
                    <div>
                        {TopMenus.map((Menu, index) => (
                            <NavLink to={`${Menu.url}`}
                                key={index}
                                className={ style.navLink}
                            >
                                <ion-icon name={Menu.icon} class="h-6 w-6"></ion-icon>
                                <div className="flex flex-row flex-none gap-1">
                                    <span className={`${!open && "hidden"} origin-left duration-200 capitalize truncate`}>
                                        {Menu.title}
                                    </span>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                    <div>
                        {BottomMenus.map((Menu, index) => (
                            <NavLink to={`${Menu.url}`}
                                key={index}
                                className={style.navLink}
                            >
                                <ion-icon name={Menu.icon} class="h-6 w-6"></ion-icon>
                                <div className="flex flex-row flex-none gap-1">
                                    <span className={`${!open && "hidden"} origin-left duration-200 capitalize truncate`}>
                                        {Menu.title}
                                    </span>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-gray-100 overflow-x-hidden">
                <div className="w-full h-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
export default Sidebar;