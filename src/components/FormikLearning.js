import React from "react";
import { useFormik } from "formik";
import { Input } from "./common/Input";
export default function FormikLearning() {
  const formik = useFormik({initialValues: {
    username: '',
    name: '',
    password: ''
  }, onSubmit: values => {
    console.log(formik)
  }})
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">username</label>
      <input type="text" id="username" onChange={formik.handleChange} value={formik.values.username}/>
      <label htmlFor="password">password</label>
      <input type="password" id="password" onChange={formik.handleChange} value={formik.values.password}/>
      <label htmlFor="name">name</label>
      <input type="text" id="name" onChange={formik.handleChange} value={formik.values.name}/>
      
      <button type='submit'>Submit</button>
    </form>
    
  );
}
