import React, { FC } from "react"
import { useLocation, Navigate, Route } from "react-router-dom"
import { useSelector } from "../../services/hooks"
import { Location } from "history"

interface IAuth {
  onlyUnAuth?: boolean
  children: JSX.Element
}

interface locationStateProps {
  from: { pathname: string }
}

const ProtectedRoute: FC<IAuth> = ({ onlyUnAuth = false, children }) => {
  const { authChecked } = useSelector((store) => store.auth)
  const { email } = useSelector((store) => store.auth)
  const location = useLocation()
  const myState: locationStateProps = location.state as locationStateProps

  if (!authChecked) {
    return <h1>Данные загружаются!</h1>
  }

  if (onlyUnAuth && email) {
    const { from } = myState || { from: { pathname: "/" } }
    return <Navigate to={from.pathname} />
  }

  if (!onlyUnAuth && !email) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return <>{children}</>
}

export default ProtectedRoute
