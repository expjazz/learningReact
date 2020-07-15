import React from "react";
import { useFormik } from "formik";
import { Input } from "./common/Input";
export default function FormikLearning() {
  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 15) {
      errors.name = 'Must be 15 characters or less';
    }
  
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length > 20) {
      errors.password = 'Must be 20 characters or less';
    }
  
    if (!values.username) {
      errors.username = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
      errors.username = 'Invalid email address';
    }
  
    return errors;
  }
  const formik = useFormik({initialValues: {
    username: '',
    name: '',
    password: ''
  }, validate, onSubmit: values => {
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
