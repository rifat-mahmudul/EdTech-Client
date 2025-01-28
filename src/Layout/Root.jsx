import { Outlet } from "react-router"
import Navbar from "../components/common/Navbar"

const Root = () => {
  return (
    <section>
      <header className="sticky top-0 z-50 backdrop-blur-lg">
        <Navbar></Navbar>
      </header>

      <div>
        <Outlet></Outlet>
      </div>
    </section>
  )
}

export default Root
