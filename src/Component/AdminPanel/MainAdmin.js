import React from 'react'
import { Routes,Route } from "react-router-dom";

import Adminpanel from './Adminpanel'
import Dashboard from './Dashboard'
import UseList from './UseList'
import AddUser from './AddUser'
import Settings from './Settings'
import Tables from './Tables'
import UserProfile from './UserProfile'

export default function MainAdmin() {
  return (
    <>
    <Adminpanel />
     <Routes>
          <Route path="/" element={<Dashboard /> } />
          <Route path="/userlist" element={<UseList  /> } />
          <Route path="/adduser" element={<AddUser  /> } />
          <Route path="/settings" element={<Settings  /> } />
          <Route path="/table" element={<Tables  /> } />
          <Route path="/userprofile" element={<UserProfile  /> } />
     </Routes>
    </>
  )
}
