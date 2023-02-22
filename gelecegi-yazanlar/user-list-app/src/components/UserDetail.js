import axios from "axios"
import { useEffect, useState } from "react"

export default function UserDetail({ activeUserId }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
        .then(res=>{setUser(res.data)})
        .finally(()=>{setLoading(false)})
    }, [activeUserId]) // activeUserId değiştiğinde elemizdeki veriyi kullanmak yerine api ye tekrar istekte bulunuyoruz.
    // gerçek hayat uygulamalarında da bu iş böyle yürüyor.

    return (
        <div>
            <h2>Detaylar</h2>
            {loading && <p>Yükleniyor</p>}
            {!loading&&<pre>{JSON.stringify(user, null, 2)}</pre>}
            
        </div>
    )
}