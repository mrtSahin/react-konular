import { useSite } from '../context'

export default function SwitchTheme() {

    // App de Home a  <SiteContext.Provider value={data}></SiteContext.Provider> ile gönderdiğimiz verileri, Home Header ve Footer a iletiyor. Home ve Footer da SwitchTheme ve SwitchLanguage e iletiyor.
    // yani <SiteContext.Provider value={data}></SiteContext.Provider> (context yapısı) ile gönderilen veriler child lara da iletilir
    // const data = useContext(Context)
    // console.log(data)
    const { theme, dispatch } = useSite()

    const switchTheme = () => {
        dispatch({
            type:'TOGGLE_THEME',
        })
    }

    return (
        <>
            <br />
            Mevcut Tema = {theme}<br />
            <button onClick={switchTheme}>Temayı Değiştir</button>
        </>
    )

}