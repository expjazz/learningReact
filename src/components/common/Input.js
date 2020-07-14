import React from 'react'

export default function Input({name, onChange, value, label}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        value={value}
        id={name}
        name={name}
        className="form-control"
        onChange={onChange}
      />
  </div>
  )
}


















// import React from 'react'

// export default function Input({ type, name, label, value, error, onChange }) {
//   return (
//     <div className="form-group">
//     <label htmlFor={name}> {label} </label>
//     <input
//       value={value}
//       autoFocus
//       type={type}
//       onChange={onChange}
//       id={name}
//       name={name}
//       className="form-control"
//     />
// { error &&   <div className="alert alert-danger">
//       {error}
//     </div>}
//   </div>
//   )
// }
