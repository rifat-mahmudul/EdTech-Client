import DashNav from "@/components/Dashboard/DashNav"
import HelmetTitle from "@/components/share/HelmetTitle"
import { Outlet } from "react-router"

const Dashboard = () => {
  return (
    <section className="max-w-[1200px] mx-auto">

        <HelmetTitle title="Dashboard"></HelmetTitle>

        <div className="flex gap-14">

            <div className="w-[22%] h-screen bg-[#0000ff1a] px-4 pt-10 sticky top-0 overflow-auto">
                <DashNav></DashNav>
            </div>

            <div className="w-[80%] border border-red-400 mx-auto pt-10">
                <Outlet></Outlet>
            </div>

        </div>
        
    </section>
  )
}

export default Dashboard
