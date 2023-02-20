import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


export default function PrivateRoute({ children }) {
    //kullanıcı oturum açmış mı?
    // eğer oturum açmamışsa, yönlendirme işlemi yap
    // eğer oturum açmışsa, children ı return et
    const {user}=useAuth()
    const location=useLocation()
    if(!user){
        return <Navigate to="/auth/login" state={{ // nerden gittiğini belirtmek için state kullanılır. bunu Login de useLocation kullanarak alıcaz
            return_url:location.pathname+location.search // bulunduğu sekmenin path ini verir. böylece giriş yapıldığında direkt profil sekmesine atar
        }}/> // eğer kullanıcı yoksa login sayfasına yönlendir
    }
    return children
}