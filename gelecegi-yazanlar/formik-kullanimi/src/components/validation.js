import { object, string} from 'yup';



const userSchema = object({
    name: string().required('Bu alan zorunludur'), // firstName alanının string ve zorunlu olduğunu belirttik
    lastName: string().required(),
    email: string().email().required(), // email alanının geçerli bir email olmasını ve zorunlu olduğunu belirttik
    message: string().min(5).required() // message alanının sting, en az 5 karakter ve zorunlu olduğunu belirttik
});


export default userSchema