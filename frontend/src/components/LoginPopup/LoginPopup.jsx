import {  useContext, useState } from "react";
import { assets } from "../../assets/assets";
import './LoginPopup.css';

import axios from 'axios'
import { StoreContext } from "../../context/StoreContext";

function LoginPopup({setShowLogin}){

    const {url,setToken}=useContext(StoreContext)

    const [currState,setCurrState]= useState("Login");
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })

   

    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin=async (event)=>{
      event.preventDefault()
      let newUrl=url;
      if(currState==="Login"){
        newUrl+="/api/user/login";
      }
      else{
        newUrl+="/api/user/register";
      }

      const response= await axios.post(newUrl,data);
      if(response.data.success){
         setToken(response.data.token);
         localStorage.setItem("token",response.data.token);
         setShowLogin(false)
      }
      else{
        alert(response.data.message);
      }
      
    }
    
    return(
        <div className="login-popup">
           <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder="your name" required /> }
                
                <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder="your email" required/>
                <input name='password' onChange={onChangeHandler} value={data.password} type="text" placeholder="passward" required/>
            </div>
            <button type="submit">{currState==="Login"?"Login":"Create Account"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>I agree to terms of use and privacy policy</p>
            </div>
            {currState==="Login"?<p>Create a new Account? <span onClick={()=>setCurrState("Sign Up")}>click here</span></p>
                                :<p>Already have an account? <span onClick={()=>{setCurrState("Login")}}>Login here</span></p>}
            
            
           </form>
        </div>
    )
}
export default LoginPopup;
