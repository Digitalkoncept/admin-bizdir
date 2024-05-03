import TopNav from '../Admin/TopNav';  
import LeftSidebar from '../Admin/LeftSidebar/LeftSidebar';
import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';

const Layout = ({children}) => {
  return (
    <div>
      <>
        <TopNav/>
        <LeftSidebar/>
        {children}
    </>
    </div>
  )
}

export default Layout
