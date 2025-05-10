import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivetRoute = ({children}) => {
const {user,loding} = use(AuthContext);
const location = useLocation()

if(loding){
    return <Loading></Loading>
}

if(user && user?.email){
 return children;
}
return <Navigate state={location.pathname} to='/auth/login'></Navigate>
     
    
};

export default PrivetRoute;