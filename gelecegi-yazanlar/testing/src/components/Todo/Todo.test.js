import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Todo from './index'

describe('Todo Tests', () => {  // Todo componentinde yapabileceğimiz tesler, ınput içerisine girip yazı yazmak ve buttona tıklamak
    let button
    let input
    beforeEach(()=>{
        render(<Todo/>)
        button = screen.getByText('Add')
        input = screen.getByLabelText('Text')
    })

    test('varsayilan olarak verilen 3 nesne render edilmeli',()=>{
        const items = screen.getAllByText(/Item/i)

        expect(items.length).toEqual(3)
    })

    test('Input ve Button dokumanda bulunmali',()=>{
        expect(button).toBeInTheDocument()
        expect(input).toBeInTheDocument()
    })

    test('inputa string girilip butona basilinca listeye eklenmeli',()=>{
        const name = 'mehmet'
        userEvent.type(input,name)// inputu name ile doldur
        fireEvent.click(button)
        expect(screen.getByText(name)).toBeInTheDocument()
    })
})