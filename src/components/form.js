import React from 'react'
import Button from './Button';
import './form.css'

export default function Form(props) {
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert("Submitted")
    }
    return (
        <>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className='my-3 '>
                <label>Enter Your Name</label> &nbsp; &nbsp;
                <input type='text' required placeholder='Enter your Name'/><br/>
                </div>
                <div className='my-3'>
                <label>Enter Your Phone Number</label> &nbsp; &nbsp;
                <input required type='number' placeholder='Enter your Cell No'/><br/>
                </div>
                <div className="my-3">
                <label>Enter Your Message</label>&nbsp; &nbsp;
                <input required placeholder='Enter your Message'/><br/>
                </div>
                <Button value='Submit' />
            </form>
        </>
    )
}
