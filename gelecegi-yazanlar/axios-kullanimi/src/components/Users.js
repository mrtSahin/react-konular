import axios from 'axios'
import { useEffect, useState } from 'react'
export default function Users() {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (async () => {
            try {
                const { data: users } = await axios("https://jsonplaceholder.typicode.com/usersdasfa") // url nin sonun arandom harfleri ekledik. yani var olmayan bir siteye istek attık
                console.log(users)
            }
            catch (error) {
                console.log(error)
            }
        })()
    }, [])



    return (
        <div>
            {loading && <p>Yükleniyor...</p>}
        </div>
    )
}