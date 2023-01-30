import SwitchLanguage from "./SwitchLanguage"
import SwitchTheme from "./SwitchTheme"
import { useAuth } from "../context"

export default function Header() {

    const { user, dispatch } = useAuth()

    const login = () => {
        // kullanıcı adı ve şifreyi api ye iletiyorum
        // cevap dönüyor
        dispatch({
            type: 'LOGIN',
            payload: { // dönen cevap burası oluyor
                name: 'murat',
                id: 1
            }
        })
    }

    const logout = () => {
        console.log('asada')
        dispatch({
            type: 'LOGOUT'
        })
    }

    return (
        <div>
            HEADER<br />
            {user && <button onClick={logout}>Çıkış Yap</button> || <button onClick={login}>Giriş Yap</button>}
            <hr />
            <SwitchTheme />
            <br />
            <SwitchLanguage />
        </div>
    )
}