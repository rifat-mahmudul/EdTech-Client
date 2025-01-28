import { Outlet } from "react-router"
import Navbar from "../components/common/Navbar"

const Root = () => {
  return (
    <section>
      <header>
        <Navbar></Navbar>
      </header>

      <div>
        <Outlet></Outlet>
      </div>
    </section>
  )
}

export default Root
