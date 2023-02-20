import { Outlet,NavLink } from "react-router-dom"
import '../../link.css'

export default function HomeLayout() {
    function setBackground(isActive) {
        return isActive ? 'redBg' : 'grayBg'
    }

    
    return (
        <>
            <nav>
                <NavLink to='/' className={({ isActive }) => setBackground(isActive)}>Anasayfa</NavLink>
                <NavLink to='/blog' className={({ isActive }) => setBackground(isActive)}>Blog</NavLink>
                <NavLink to='/contact' className={({ isActive }) => setBackground(isActive)}>Contact</NavLink>
                <NavLink to='/profile' className={({ isActive }) => setBackground(isActive)}>Profile</NavLink>
            </nav>
            <Outlet />
        </>
    )
}