import useAuth from "@/Hooks/useAuth"
import { Navigate, useLocation } from "react-router";
import PropTypes from 'prop-types'
import LoadingSpinner from "@/components/share/LoadingSpinner";

const PrivateRoutes = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if(user) return children;

    <Navigate to={'/login'} state={location.pathname} replace={true}></Navigate>

  return 
}

PrivateRoutes.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PrivateRoutes
