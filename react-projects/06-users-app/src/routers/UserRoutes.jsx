import { Navigate, Route, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { Navbar } from "../components/layout/Navbar"
import { RegisterPage } from "../pages/RegisterPage"
import { UserProvider } from "../context/UserProvider"
import { AuthContext } from "../auth/context/AuthContext"
import { useContext } from "react"

export const UserRoutes = () => {

    const { login } = useContext(AuthContext)

    return (
        <>
            <UserProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Navigate to="/users" />} />
                    <Route path="/users" element={<UsersPage />} />

                    { !login.isAdmin ||
                        <>
                            <Route path="/register" element={<RegisterPage />} />
                            <Route path="/edit/:id" element={<RegisterPage />} />
                        </>
                    }
                </Routes>
            </UserProvider>
        </>
    )
}
