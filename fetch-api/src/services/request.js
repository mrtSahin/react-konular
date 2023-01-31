
function parseData(data){
    const formData=new FormData()
    for(let [key, value] of Object.entries(data)){ // datanın içeriğini bilmediğimizden dolayı böyle yapıyoruz
        formData.append(key,value)
    }
    return formData
}

function request(url, data = false, method = 'GET', type = 'FORM_DATA') {
    // normalde fetch zaten promise base bir şey ama daha kontrollü yapmak için promise dönüyorum
    return new Promise(async (resolve, reject) => {

        const options = {
            method
        }

        if (data && method === 'POST') { // eğer data var ve metod POST ise (ekstra kontrol)
            options.body = type === 'JSON' ? JSON.stringify(data) : parseData(data)
        }
        const response = await fetch(process.env.REACT_APP_API_URL+url, options) // base url i .env de tutuyorum
        const result = await response.json()
        if (response.ok) {
            resolve(result)
        } else {
            reject(result)
        }
    })
}

export const post = (url, data) => request(url, data, 'POST')
export const postJSON = (url, data) => request(url, data, 'POST', 'JSON')
export const get = url => request(url)