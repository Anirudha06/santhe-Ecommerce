import {useState} from "react";
import { motion } from "framer-motion";
import "./login.css";
import { NavLink , redirect } from "react-router-dom";
import Bg from '../static/market-login.png'

const Login = () => {

  const [no, setno]= useState('')

  const handlechange = (e)=>{
    setno(e.target.value)
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(no)
   redirect('/main')
  };

  return (
    <>
      <div className="login-main" style={{'backgroundImage':`url(${Bg})`}}>
        <motion.div className=""
          initial={{x:-100 }}
          animate={{x:0}}
          exit={{ x:600, opacity:0 , transition:{
            duration:0.4
          }}}
          transition={{
            duration:0.6,
            type: "spring",
            damping: 4,
            stiffness: 20,
          }}
        >

            <p className="txt">Welcome to <span style={{'color':'#609966'}}>Santhe</span></p>

              <form  className="formm">
                <label style={{'color':'#609966'}}>Phone n.o.</label>
                <input type="number" placeholder="Ex:0000" onChange={handlechange}/>
                <button onClick={handlesubmit}style={{'color':'#609966'}}><NavLink to={'/main'}>Submit</NavLink></button>
              </form>


        </motion.div>
      </div>
    </>
  );
};

export default Login;
