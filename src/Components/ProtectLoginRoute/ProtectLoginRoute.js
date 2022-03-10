

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectLoginRoute(props) {

  return (
    <>
    {
        !props.IsAuth ? 
        <Outlet />
        :
        <Navigate to={{ pathname: '/AccountInfo'}}  />

    }
    </>
  )
}
