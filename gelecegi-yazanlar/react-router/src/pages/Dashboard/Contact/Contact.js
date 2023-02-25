import React from 'react'
import { useFormik } from 'formik'
import validationSchema from './validation'
function Contact() {



    // Formik componenti kullanmadaın useFormik hook u kullanılarak da form yönetimi yapılabilir. useFormik in property leri obje olarak belirtilir.
    // useFormik in içinde handleSubmit , handleChange gibi metodlr bulunur. name input içerisindeki değeri value  a yüklemek için input un onChange özelliğine   formik.handleChange('name')   eklenmelidir. 
    // bu metodlar formik. olarak kullanılabildiği gibi formik tanımlanırken
    // const {handleChange, handleSubmit } =useformik({…})   şeklinde de tanımlanıp direk handleChange yazılarak kullanılabilir.

    // useFormik içerisinde isSubmiting adında bir property vardır. bunu tüm form elemanlarının disable özelliğini kontrol etmek için kullanabiliriz.

    // thouched bir inputa tıklayıp geri çıktığımızda true döner
    const { handleSubmit, handleChange, isSubmitting, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            email: '',
            message: ''
        },
        onSubmit: async (values, bag) => { // onSubmit bize bir de bag isminde bir değişken döndürür. bu bag içerisindeki metodlar ile form üzerinde işlemler yapabiliriz
            //await new Promise((r)=>setTimeout(r,1000)) // gerçek bir backend den veri geliyormuş gibi gecikme ekledik
            console.log(values)
            if(values.email==='murat@gmail.com'){
                return bag.setErrors({email:"Bu mail alani zaten kullanilmis!!!"})
            }// butona basıldıktan sonra email in veritabanında herhangi bir mail le eşleşip eşleşmediği
            //  kontrol edilerek eğer eşleşiyorsa bag.setErrors({email:"Bu mail alani zaten kullanilmis!!!"})  ile email inputu için belirlenen 
            //  error mesajını bu şekilde ayarlayabiliriz. Bu hata validation hatalarının gösterildiği yerde gösterilir.

            bag.resetForm() // resetForm ile input alanları initial value değerlerine döner 

        },
        validationSchema, // useFormik e validation ı ekleme. import ederken direkt bu isimle import ettiğimiz için bu şekilde de formik e ekleyebiliriz
    })
    //console.log(touched)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>First Name</label><br/>
                    <input disabled={isSubmitting} id='name' name='name' placeholder={'name'} value={values.name} onChange={handleChange('name')} onBlur={handleBlur('name')} /> {/** onBlur bir inputtan ayrıldığımızda çalışır */}
                    {errors.name && touched.name && (<div style={{ color: 'red' }}>{errors.name}</div>)}{/** döndürülen errors içerisinde name ile alakalı bir error varsa uyarı mesajını gösterir */}
                    {/** handleBlur ve touched ı beraber kullandık. bir inputtan çıktığımızda onBlur metodu çalışır. Biz de burda handleBlur a input un name ini vererek bu inputa girip çıkıldığını belirtiyoruz ve touched a name:true değeri giriliyor. */}
                    {/** böylece bu input alanına girip çıkıldığını anlıyoruz ve uyarı mesajını input alanı doldurulurken gösterilmiyor. input alanına girip geçersiz değer girilip çıkıldığında uyarı mesajı görünüyor */}
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name</label><br/>
                    <input disabled={isSubmitting} id='lastName' name='lastName' placeholder={'lastName'} value={values.lastName} onChange={handleChange('lastName')} onBlur={handleBlur('lastName')} />
                    {errors.lastName && touched.lastName && (<div style={{ color: 'red' }}>{errors.lastName}</div>)}

                </div>
                <div>
                    <label htmlFor='email'>Email</label><br/>
                    <input disabled={isSubmitting} id='email' name='email' placeholder={'email'} value={values.email} onChange={handleChange('email')} onBlur={handleBlur('email')} />
                    {errors.email && touched.email && (<div style={{ color: 'red' }}>{errors.email}</div>)}

                </div>
                <div>
                    <label htmlFor='message'>Message</label><br/>
                    <textarea disabled={isSubmitting} id='message' name='message' type={"message"} placeholder={'message'} value={values.message} onChange={handleChange('message')} onBlur={handleBlur('message')} />
                    {errors.message && touched.message && (<div style={{ color: 'red' }}>{errors.message}</div>)}

                </div>
                <button disabled={isSubmitting} type='submit' onClick={handleSubmit}>Submit</button>
            </form>

        </div>
    )
}

export default Contact