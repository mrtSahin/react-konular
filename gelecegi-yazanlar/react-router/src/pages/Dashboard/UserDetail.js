import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import axios from 'axios'

function UserDetail() {
    //const params = useParams() // id değerini alıyoruz
    //<Route path="users/:id" element={<UserDetail />} />
    // burdaki id(farklı bir isim verilebilir) değerini alıyoruz

    const { id } = useParams() //buşekilde de alabiliriz

    const location=useLocation()
    console.log(location)
    const [user, setUser] = useState(location.state)

    useEffect(() => {
        if(!user?.id){
            axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => { setUser(res.data) })
        }
        
    }, [id,user])

    return (
        <div>
            <pre>{user&&JSON.stringify(user, null, 2)}</pre>
            {/*<pre>{user&&JSON.stringify(location.state, null, 2)}</pre>*/}
            <Link to={`/users/${id<10?Number(id)+1:Number(id)-Number(id)+1}`}>Sonraki Kullanıcı</Link>
        </div>
    )
}

export default UserDetail