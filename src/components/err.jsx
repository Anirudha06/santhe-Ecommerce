import React from 'react'
//import {redirect} from 'react-router-dom'

const Err = () => {

   

   
   const s = {
        'width':'100vw',
        'height':'100vh',
        'display':'flex',
        'flex-direction':'column',
        'justify-content':'center',
        'align-items':'center',
    }

  return (
    <div className='err' style={s}>
        <h1 style={{'font-size':'50px'}}><strong>404 </strong></h1>
        <p>Page not found...</p>
    </div>
  )
}


export default Err
