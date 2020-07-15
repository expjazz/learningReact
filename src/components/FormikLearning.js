import React from "react";
import { useFormik } from "formik";
import  * as Yup from 'yup';
import { Input } from "./common/Input";
export default function FormikLearning() {
  const formik = useFormik({initialValues: {
    username: '',
    name: '',
    password: ''
  }, validationSchema: Yup.object({
    username: Yup.string().email('invalidEmail').required('Required'),
    password: Yup.string().max(3, 'min of three').required('required'),
    name: Yup.string().max(3, 'must be 3').required('required')
  }), onSubmit: values => {
    console.log(formik.values)
  }})
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">username</label>
      <input type="text" id="username" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.username}/>
      {formik.touched.username && formik.errors.username ? <div>{formik.errors.username}</div> : null}

      <label htmlFor="password">password</label>
      <input type="password" id="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password}/>
      {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}

      <label htmlFor="name">name</label>
      <input type="text" id="name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name}/>
      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

      
      <button type='submit'>Submit</button>
    </form>
    
  );
}
