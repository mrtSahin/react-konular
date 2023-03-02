import React, { useCallback, useMemo, useState } from 'react'
import Header from './Header'
//import User from './User'

// const userData = {
//     id: 1,
//     name: 'murat'
// };// User ı -- export default React.memo(User) -- şeklinde export ettiğimizde artık tekrar render etmeyecektir.

function Counter() {

    const [count, setCount] = useState(0)
    //const [name, setName] = useState('Ahmet')

    console.log("Counter component re-render")

    // const userData = {
    //     id: 1,
    //     name: 'murat'
    // }  // bu obje User componentine gönderiliyor ve hiç değişmiyor. 
    // değişmemesine rağmen Counter componenti her render edildiğinde bu değişken yeniden oluşturulduğu için referansı değişiyor(obje bir referans tiptir. Primitive tiplerde olmaz)
    // bu değişiklik nedeniyle User copmonentini -- export default React.memo(User) -- şeklinde export etsek de burada referans karşılaştırması yağıldığı için User componenti tekrar render edilecektir.
    // bunun için basit bir çözüm bu değişkeni Counter fonksiyonu dışında tanımlayıp Counter her render edildiğinde tanımlanmasının önüne geçebiliriz.


    // eğer bu bileşeni bu scope da tutmak zorundaysak useMemo yu kullanabiliriz.

    // const userData2 = useMemo(() => { // kullanımı aynı useEffect gibidir. ilk kısıma bir fonksiyon ikinci kısıma da bağlılık-bağlılıklar girilir.
    //     return {
    //         id: 1,
    //         name
    //     }
    // }, [name]) // artık User componenti artık name değişkeni değiştiğinde re-render edilecektir.
    // eğer bağımlılık girilmezse data üzerindeki değişiklik uygulanmaz


    // const increment = () => {
    //     setCount(count + 1)
    // }
    // Counter üzerinden butona bastığımızda hem Counter ı hem de Header ı yeniden render etmektedir.
    // Ama Header da bir değişiklik olmadı onu yeniden render etmesini istemeyiz. Burada tekrar render etmesinin 
    // nedeni Counter yeniden render edildiğinde increment metodu yeniden oluşturulduğu için referensı değişmektedir.
    // Böylece Header a prop olarak geçilen increment metodunun referansı değiştiğinden dolayı Header da yeniden render edilecektir.
    // bunun önüne geçmek için useCallback  kullanırız.
    const increment = useCallback(()=>{
        setCount((prev)=>prev+1);
    },[])


    // Counter componentinde her butona bastığımızda state değiştiği için Counter dahilindeki her şeyi her seferinde yeniden ekrana basacaktır.
    // ama User componenti ni her seferinde ekrana yeniden basmasına gerk yok. Çünkü User componentinde bir değişiklik olmuyor.

    return (
        <div>
            <Header increment={increment} />
            {/* <User data={userData2} /> */}
            {/* <button onClick={() => { setName(name == 'Mehmet' ? 'Ahmet' : 'Mehmet') }}>İsmi Değiş</button> */}
            <hr />
            <h3>{count}</h3>
            <button onClick={increment}>Arttır</button>
        </div>
    )
}

export default Counter