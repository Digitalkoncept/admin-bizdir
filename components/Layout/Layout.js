import TopNav from '../Admin/TopNav';  
import LeftSidebar from '../Admin/LeftSidebar/LeftSidebar';
import Spinner from '../Spinner';
import React from 'react'
import { useSession } from 'next-auth/react';
import 'bootstrap/dist/css/bootstrap.css';

const Layout = ({children}) => {
 const {data:session,loading} = useSession();
 console.log('loading is ',session)
 if(!session){
   return <Spinner loading={true}/>;
} else
  return (
      <>
        {children}
    </>
  )
}

export default Layout
