import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import UseFormkKullanımı from './components/UseFormkKullanımı';
function App() {
  // formik içerisinde değerlere initial değerleri obje halinde verebiliyoruz
  // formik de input etiketleri yerine Field coponentleri kullanılır.
  // EorrorMessage türüne göre otomatik validaiton yapabilir. mesel email kısmında email yapısına uymazsa uyarı verir
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <hr/>

      <UseFormkKullanımı/>
    </div>
  );
}

export default App;
