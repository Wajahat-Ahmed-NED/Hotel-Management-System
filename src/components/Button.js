import React from 'react'

export default function Button(props) {
    let {value,onClick}=props;
    return (
        <>
          <button onSubmit={props.onSubmit} onClick={onClick} className="btn btn-outline-primary">{value}</button>  
        </>
    )
}
