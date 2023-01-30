import { useSite } from '../context'
export default function SwitchLanguage() {
    // const data = useContext(Context)
    // console.log(data)
    const { language, dispatch } = useSite()

    function setLanguage() {
        dispatch({
            type: 'TOGGLE_LANG',
        })
    }

    return (
        <>
            Language={language}
            <br />
            <button onClick={setLanguage}>Dili Değiştir</button>
        </>
    )
}