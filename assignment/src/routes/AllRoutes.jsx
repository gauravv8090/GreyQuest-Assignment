

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import UserDetail from '../pages/UserDetail'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}  ></Route>
        <Route path='/detail' element={<UserDetail/>} ></Route>
    </Routes>

  )
}
