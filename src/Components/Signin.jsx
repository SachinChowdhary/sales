import React from "react"; 
import { useNavigate  } from "react-router-dom";
export default function SignIn({settoken}) {
    const[Email, setEmail] = React.useState('')
    const[Password, setPassword] = React.useState('')
    const navigate = useNavigate()
    React.useEffect(() => {
        const root = document.getElementById("root");
        root.classList.add("white-bg");
        return () => {
          root.classList.remove("white-bg");
        };
      }, []);

    async function login(){
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
    return (    
    <div className="flex items-center justify-center m-10">
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="border border-gray-300 focus:border-blue-500 outline-none rounded-md h-10 px-4"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="border border-gray-300 focus:border-blue-500 outline-none rounded-md h-10 px-4"
            onChange={(e)=>setPassword(e.target.value)}
          />
            <button className="bg-blue-500 rounded-md h-8" onClick={()=>{login()}}>Submit</button>
        </div>
     </div>
    )
}
