import { useState } from "react"
import DashNavItem from "../share/DashNavItem"

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

        <li>
            <DashNavItem 
            navName="Manage Course" 
            setIsOpen={setIsOpen}
            address="/dashboard/manage-course"
            ></DashNavItem>
        </li>
    </>

  return (
    <div>
      <ul className="text-xl flex flex-col gap-4">
        {dashNavItems}
      </ul>
    </div>
  )
}

export default DashNav
