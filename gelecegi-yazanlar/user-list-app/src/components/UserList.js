import { useEffect, useState } from "react";
import axios from 'axios'


export default function UserList({ setActiveUserId }) {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios("https://jsonplaceholder.typicode.com/users")
                setUsers(data)
            } finally {
                setLoading(false)
            }

        })()


    }, [])

    console.log(users)
    return (
        <div>
            <h2>Kullanıcılar</h2>
            {loading && <p>Yükleniyor</p>}
            <ul className="user-list">
                {
                    users.map(user => {
                        return <li key={user.id} onClick={()=>(setActiveUserId(user.id))}>{user.name}</li>
                    })
                }
            </ul>

        </div>
    );
}


