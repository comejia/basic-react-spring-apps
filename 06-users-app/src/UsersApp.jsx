import { LoginPage } from "./auth/pages/LoginPage"
import { Navigate, Route, Routes } from "react-router-dom"
import { UserRoutes } from "./routers/UserRoutes"
import { useContext } from "react"
import { AuthContext } from "./auth/context/AuthContext"

export const UsersApp = () => {

    const {login} = useContext(AuthContext)

    return (
        <Routes>
            {
                login.isAuth
                    ? (
                        <Route path="/*" element={<UserRoutes />} />
                    ) : 
                        <>
                            <Route path="/*" element={<Navigate to="/login" />}/>
                            <Route path="/login" element={<LoginPage />} />
                        </>
            }
        </Routes>
    )
}
