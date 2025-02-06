import { useState } from "react"
import DashNavItem from "../share/DashNavItem"
import Logo from "../share/Logo";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const DashNav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const dashNavItems = <>
        <li>
            <DashNavItem 
            navName="Add Course" 
            setIsOpen={setIsOpen}
            address="/dashboard/add-course"
            ></DashNavItem>
        </li>

        <li>
            <DashNavItem 
            navName="Manage Course" 
            setIsOpen={setIsOpen}
            address="/dashboard/manage-course"
            ></DashNavItem>
        </li>

        <li>
            <DashNavItem 
            navName="Manage Course" 
            setIsOpen={setIsOpen}
            address="/dashboard/manage-course"
            ></DashNavItem>
        </li>
    </>

  return (
    <div className="flex justify-between items-center">

        <div className="lg:hidden">
            <Logo></Logo>
        </div>
        
        <ul className="text-xl lg:flex flex-col gap-4 hidden">
            {dashNavItems}
        </ul>

        <div className='lg:hidden'>
            <button className='text-3xl font-bold' onClick={() => setIsOpen(!isOpen)}>
                { isOpen ?
                    <RxCross2 />
                    :
                    <RiMenu3Fill/>
                }
            </button>
        </div>

        {
            isOpen &&
            <div className="absolute top-14 w-full right-0 lg:hidden block bg-[#030922ed] h-screen overflow-auto scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-800 p-5">
                <nav>
                    <ul className='flex flex-col text-center space-y-4 font-semibold'>
                        {dashNavItems}
                    </ul>
                </nav>
            </div>
        }

    </div>
  )
}

export default DashNav
