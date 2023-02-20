import { useNavigate,useLocation } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"


export default function Login(){
    const navigate =useNavigate()
    const location=useLocation()
    console.log(location)

    const {setUser}=useAuth()
    
    console.log(location)
    function loginHandle(){
        setUser({
            name:'Murat',
            lastName:'Şahin',
            age:21
        })
        navigate(location?.state?.return_url || '/') // buraya girdiğimiz url noktasına döner
    }          // PrivateRoute dan useLocation kullanarak aldığımız return_url adresine git. eğer bu değer yoksa main sayfaya dön
    return(
        <div>
            Login Sayfası
            <button onClick={loginHandle}>Giriş Yap</button>
        </div>
    )
}