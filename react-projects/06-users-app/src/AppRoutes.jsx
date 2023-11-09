import { LoginPage } from "./auth/pages/LoginPage"
import { Navigate, Route, Routes } from "react-router-dom"
import { UserRoutes } from "./routers/UserRoutes"
import { useAuth } from "./auth/hooks/useAuth"

export const AppRoutes = () => {
    const { login } = useAuth()

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