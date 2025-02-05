import { NavLink } from "react-router"
import PropTypes from 'prop-types'

const DashNavItem = ({address, navName, setIsOpen}) => {
  return (
    <NavLink
    to={address}
    className={
        ({isActive}) => isActive ? "transition font-bold text-blue-500" : 'hover:text-blue-500 transition font-bold text-gray-200'
    }
    onClick={() => setIsOpen(false)}
    >
        {navName}
    </NavLink>
  )
}

DashNavItem.propTypes = {
    address: PropTypes.string,
    navName: PropTypes.string,
    setIsOpen: PropTypes.func,
}

export default DashNavItem
