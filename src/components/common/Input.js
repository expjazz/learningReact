import React from 'react'

export default function Input({ type, name, label, value, error, onChange }) {
  return (
    <div className="form-group">
    <label htmlFor={name}> {label} </label>
    <input
      value={value}
      autoFocus
      onChange={onChange}
      type={type}
      id={name}
      name={name}
      className="form-control"
    />
{ error &&   <div className="alert alert-danger">
      {error}
    </div>}
  </div>
  )
}
