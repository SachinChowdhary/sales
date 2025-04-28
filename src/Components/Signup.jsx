import React from "react"; 
import { Link } from "react-router-dom";
import Font from "./Font";
export default function SignUp() {
     const[userName, setUserName]=React.useState('')
     const[Email, setEmail] = React.useState('')
     const[Password, setPassword] = React.useState('')
     const[message, setMessage] = React.useState('')
    const SignUp=async()=>{
        if(Email!=='' && Password!=="" && userName!==''){
           const response = await fetch('https://loginsignupbanckend-7.onrender.com/auth/signup',{
                                 headers:{
                                         'Content-Type': 'application/json',
                                        },
                                 method:'POST',
                                 body:JSON.stringify({
                                    username:userName,
                                    email: Email,
                                    password: Password
                                 })
                                 })
          const data = await response.json()
          if(data.error){
            setMessage(data.error)
          }
          else{
            setMessage(data.message)
          }
        }
    }
    React.useEffect(()=>{
    const root = document.getElementById('root')
    root.classList.add('white-bg')
    return(()=>{
        root.classList.remove('white-bg')
    })
    },[])
    return (
        <div className="flex justify-center items-center m-10">
            <div className="flex flex-col gap-4 w-[80%] sm:w-[50%] md:w-[30%]">
              <Font className='font-medium'>User Name</Font>
              <input 
              type="text" 
              placeholder="User Name" 
              className="border border-gray-300 focus:border-blue-500 outline-none rounded-md font-serif h-10 px-4 placeholder:font-serif"
              onChange={(e)=>setUserName(e.target.value)}
              />
              {
                userName==="" && <Font className='text-white text-[10px] bg-red-500 px-1 rounded-sm'>User Name must not be empty</Font>
              }
              <Font className='font-medium'>Work Email</Font>
              <input 
              type="email" 
              placeholder="Work Email" 
              className="border border-gray-300 font-serif focus:border-blue-500 outline-none rounded-md h-10 px-4 placeholder:font-serif"
              onChange={(e)=>setEmail(e.target.value)}
              />
              {
               Email==="" && <Font className='text-white text-[10px] bg-red-500 px-1 rounded-sm'>Work Email must not be empty</Font>
              }
              <Font className='font-medium'>Password</Font>
              <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 focus:border-blue-500 outline-none rounded-md h-10 px-4 font-serif placeholder:font-serif"
              onChange={(e)=>setPassword(e.target.value)}
             />
              {
               Password==="" && <Font className='text-white text-[10px] bg-red-500 px-1 rounded-sm'>Password must not be empty</Font>
              }
              <Font>Are you a member? <Link to='/' className="text-blue-500 font-serif">Sign In</Link></Font>
              <button className="bg-blue-500 rounded-md h-8 font-serif" onClick={()=>SignUp()}>Sign Up</button>
              {
                message && <Font className={`${message.includes('exists') ? 'text-red-500' : 'text-blue-500'}`}>{message}</Font>
              }
             </div>
        </div>
    )
}
