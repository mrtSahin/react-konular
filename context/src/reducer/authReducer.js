export default function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            // kullanıcı adı ve şifreyi apiye iletiyorum
            // cevap dönüyor
            localStorage.setItem('user', JSON.stringify(action.payload))
            console.log(action.payload)
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            localStorage.removeItem('user')
            return {
                ...state,
                user: false
            }
    }
}