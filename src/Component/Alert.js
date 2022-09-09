import React from 'react'

export default function Alert(props) {
    const capitalize=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
  return (
    <div style={{height:'50px'}}>
      {props.alert && 
      <div className="alert alert-primary alert-dismissible fade show" role="alert">
      <strong>{capitalize(props.alert.typ)}</strong> : {props.alert.msg}
    </div>}
</div>
  )
}
