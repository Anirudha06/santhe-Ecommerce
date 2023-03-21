import React from 'react'
import { AiFillEdit } from 'react-icons/ai';
import "./sell.css";

const sell = () => {
  return (
    <div>
        <div className="container">
            <div className='left-container'>
                <div className="farmer-name">
                    <AiFillEdit/>
                    <div className="name">
                    {'Prakash Stall'}
                    </div>
                </div>

            </div>
            <div className='right-container'>

            </div>
        </div>
    </div>
  )
}

export default sell
