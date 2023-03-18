import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "./index"


describe("Counter Tests", () => { // describe icerisinde tüm testlerden önce veya sonra yapılacaklar ekleyebiliriz.

    let count, increaseBtn, decreaseBtn

    beforeAll(()=>{ // her seyden önce sadece bir kere çalışıyor. Daha çalışmıyor.
        console.log('En basta bir kere calisir')
    })

    beforeEach(() => { // her testten önce calisir. Kod tekrarından kaçınmamızı sağlıyor.
        console.log('Her testten once calisir')
        render(<Counter />)
        count = screen.getByText("0")// farkli yakalam turleri de var
        increaseBtn = screen.getByText("Increase") // butonu aliyoruz (içinde Increase yazan elementi bul)
        decreaseBtn = screen.getByText("Decrease") // butonu aliyoruz (içinde Decrease yazan elementi bul)
    })
    // bunlarin after versiyonu da mevcuttur.


    
    // it should be ...
    // it yerine test yazabiliriz.
    test(' increase btn ', () => {
        fireEvent.click(increaseBtn) // butona click ediyor.
        expect(count).toHaveTextContent('1') // butona tiklandiktan sonraki beklentilerimizi buraya yaziyoruz
        // toHaveTextContent  şu contente sahip olmalı 

    })

    it(' decrease btn ', () => {
        fireEvent.click(decreaseBtn) // butona click ediyor.
        expect(count).toHaveTextContent('-1') // butona tiklandiktan sonraki beklentilerimizi buraya yaziyoruz
        // toHaveTextContent  şu contente sahip olmalı 
    })


})

