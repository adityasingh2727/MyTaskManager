import React from 'react'
import { useUserAuth } from '../../hooks/useUserAuth'

const UserDashboard = () => {
  useUserAuth()
  return (
    <div>
      UDash
    </div>
  )
}

export default UserDashboard
