import React from 'react'
import {motion} from 'framer-motion'
import './login.css'
import { NavLink } from 'react-router-dom'

const Login = () => {

    const handlesubmit = (e)=>{
        e.preventDefault()


    }

  return (
    <>
    <div className='login-main'>

        <div className="loginform">
            <form onSubmit='handlesubmit' className='formm'>
                <p>PHONE NUMBER:</p>
                <input type="number" placeholder='Ex: 9999999' />
                <NavLink to={'/main'}> <button>  Submit  </button></NavLink>
            </form>
            <div className='loginimage'>

            </div>
        </div>
    </div>
    </>
  )
}

export default Login
