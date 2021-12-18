import React from 'react'
import FloatingActionButtons from '../components/MuiButton'
import Navbar from '../components/Navbar'

export default function Payment() {
    return (
        <>
            <Navbar />
            <h1 className='my-3'>Payment Details</h1>
            <div className="container"><hr />
                <label htmlFor="pay">Select Payment Option</label><br />
                <select id="pay" className="p-2 my-4 " required>
                    <option >Select One Option</option>
                    <option value="1">EasyPaisa</option>
                    <option value="2">JazzCash</option>
                    <option value="3">Bank Transfer</option>
                    <option value="4">Credit Card</option>
                </select>
                <FloatingActionButtons value='Confirm Booking'  />

        

                

            </div>
        </>
    )
}
