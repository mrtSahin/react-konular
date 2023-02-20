import { useAuth } from "../context/AuthContext"



export default function Profile(){
    const {setUser}=useAuth()


    function logout(){
        setUser(false)
        if(JSON.parse(localStorage.getItem('user'))){
            localStorage.removeItem('user')
        }
    }
    return(
        <div>
            Profile
            <button onClick={logout}>Çıkış Yap</button>
            
        </div>
    )
}