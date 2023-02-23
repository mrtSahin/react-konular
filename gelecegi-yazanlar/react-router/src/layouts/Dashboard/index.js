import React from 'react'
import { Outlet } from 'react-router-dom';
import Menu from '../../components/Menu';

function DashboardLayout() {
  return (
    <div>
      <Menu />
      DashboardLayout
      <Outlet />
    </div>

  )
}

export default DashboardLayout