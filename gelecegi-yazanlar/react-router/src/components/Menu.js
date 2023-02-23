import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Menu() {

    // sayfa yönlendirmesini Link ile yapabildiğimiz gibi useNavigate hook unu da kullanarak yapabiliriz.
    const navigate = useNavigate()

    return (
        <div className='menu'>
            <ul className='menuUl'>
                <li className='menuLi' onClick={() => { navigate(-1) }}>Geri(hook)</li>{/* useNavigate hook una -1 dönersek geri gidecektir */}
                <li className='menuLi'><Link to="/">Ana Sayfa</Link></li> {/* Link üserine tıklanınca to ile belirtilen linke gider */}
                <li className='menuLi'><Link to="/users">Kullanıcılar</Link></li>
                <li className='menuLi'><Link to="/contact">İletişim</Link></li>
                <li className='menuLi' onClick={() => { navigate("contact") }}>İletişim(hook)</li>
            </ul>
        </div>
    )
}

export default Menu