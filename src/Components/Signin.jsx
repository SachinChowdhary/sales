import React from "react"; 
import { Link  } from "react-router-dom";
import Font from "./Font";
export default function SignIn({settoken}) {
    const[Email, setEmail] = React.useState('')
    const[Password, setPassword] = React.useState('')
    React.useEffect(() => {
        const root = document.getElementById("root");
        root.classList.add("white-bg");
        return () => {
          root.classList.remove("white-bg");
        };
      }, []);

    async function login(){
      if(Email!=='' && Password!==''){
            const response = await fetch('https://loginsignupbanckend-7.onrender.com/auth/login',{
                                   headers: {
                                        'Content-Type': 'application/json',
                                           },
                                   method:'POST',
                                   body: JSON.stringify({
                                              email:Email,
                                              password:Password
                                              })
                                   })
              const json = await response.json()
            if('error' in json){
             alert(json.error)
             }
           else{
              localStorage.setItem('Token',json.access_token)
              settoken(!!localStorage.getItem('Token'))
             }
       }
        
     }
    return (    
    <div className="flex items-center justify-center m-10">
        <div className="flex flex-col gap-4 w-[80%] sm:w-[50%] md:w-[30%]">
          <Font className='font-medium'>Work Email</Font>
          <input
            type="email"
            placeholder="Work Email"
            className="border border-gray-300 focus:border-blue-500 outline-none rounded-md h-10 px-4 font-serif placeholder:font-serif"
            onChange={(e)=>setEmail(e.target.value)}
            value={Email}
          />
          {
           Email === "" && <Font className="text-white text-[10px] bg-red-500 px-2 rounded-sm">Work Email must not be empty </Font>
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
            <Font>Not a member yet? <Link to='/signup' className="text-blue-500 font-serif">Join</Link></Font>
            <button className="bg-blue-500 rounded-md h-8 font-serif" onClick={()=>{login()}}>Sign In</button>
        </div>
     </div>
    )
}
