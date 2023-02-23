import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => { setUsers(data) })
    }, [])
    return (
        <div>
            <h2>Users</h2>
            <ul>
                {
                    users.map(user => (
                        // <li className="user" key={user.id}><Link to={`${user.id}`}>{user.name}</Link></li> // /user/userId ÖR : /user/3  adresine yönlendirir
                           <li className="user" key={user.id}><Link to={`${user.id}`} state={user}>{user.name}</Link></li>
                    ))
                }
            </ul>
        </div>
    )
}