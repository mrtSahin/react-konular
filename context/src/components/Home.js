import { useAuth } from "../context";
import Footer from "./Footer";
import Header from "./Header";

export default function Home() {
    const { user } = useAuth() // normalde AuthContext de data olarak  const data = {...state,dispatch}  yollanıyor ama ben burda sadece user verisini istediğimden sadece { user } yazıyorum dispatch i almıyorum

    //aynı zamanda burda ada prop yazmamıza gerek kalmıyor.
    return (
        <>
            <Header />
            App
            {user && <div>burası login yapıldığında görünür</div>}
            <Footer />
        </>
    )
}