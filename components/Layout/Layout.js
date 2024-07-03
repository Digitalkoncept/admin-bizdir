
import Spinner from '../Spinner';
import React from 'react'
import { useSession } from 'next-auth/react';

const Layout = ({children}) => {
 const {data:session,status} = useSession();
console.log("loading is =>",status)
 if(status === 'loading'){
   return <Spinner loading={true}/>;
} else
  return (
      <>
        {children}
    </>
  )
}

export default Layout
