import React from 'react'

export default function Input({ name, label, value, onChange }) {
  return (
    <div className="form-group">
    <label htmlFor={name}> {label} </label>
    <input
      value={value}
      autoFocus
      onChange={onChange}
      type="text"
      id={name}
      name={name}
      className="form-control"
    />
  </div>
  )
}
