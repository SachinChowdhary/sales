import React, { useState } from "react"; 
import { Link  } from "react-router-dom";
import Font from "./Font";
import { Formik, Form, Field, ErrorMessage } from "formik";
export default function SignIn({settoken}) {
    const [message, setMessage] = useState('')
    React.useEffect(() => {
        const root = document.getElementById("root");
        root.classList.add("white-bg");
        return () => {
          root.classList.remove("white-bg");
        };
      }, []);
    const validate=(values) => {
      const errors = {}
      if(!values.workemail){
        errors.workemail="Work Email must not be Empty"
      }
      if(!values.password){
        errors.password="Password must not be Empty"
      }
      return errors
    }
    async function login(values,{ setSubmitting, resetForm }){
      if(values.workemail!=='' && values.password!==''){
            const response = await fetch('https://loginsignupbanckend-7.onrender.com/auth/login',{
                                   headers:{
                                            'Content-Type': 'application/json',
                                           },
                                   method:'POST',
                                   body: JSON.stringify({
                                              email:values.workemail,
                                              password:values.password
                                              })
                                   })
            const json = await response.json()
            if('error' in json) {
             setMessage(json.error)
             }
           else {
              localStorage.setItem('Token',json.access_token)
              settoken(!!localStorage.getItem('Token'))
              resetForm()
             }
         setSubmitting(false)
       }
     }
    return (    
    <div className="flex justify-center items-center m-10">
      <div className="flex flex-col gap-4 w-[80%] sm:w-[50%] md:w-[30%]">
        <Formik
        initialValues={{
          workemail:'',
          password:''
        }}
        validate={validate}
        onSubmit={(values,{ setSubmitting, resetForm })=>login(values,{ setSubmitting, resetForm } )}
        >{()=>(
          <Form className="flex flex-col gap-4">
            <Font className='font-medium'>Enter your Work Email and Password to Sign In</Font>
            <Field type='email' placeholder='Work Email' name='workemail' className="border border-gray-300 focus:border-blue-500 outline-none rounded-md h-10 px-4 placeholder:font-Open Sans, sans-serif" />
            <ErrorMessage 
            name="workemail"
            component={Font}
            className="text-[10px] text-white bg-[#EF4444] rounded-sm px-1 w-fit inline-block"
            />
            <Field type='password' placeholder='Password' name='password' className="border border-gray-300 focus:border-blue-500 outline-none rounded-md h-10 px-4 placeholder:font-Open Sans, sans-serif" />
            <ErrorMessage 
            name="password"
            component={Font}
            className="text-[10px] text-white bg-[#EF4444] rounded-sm px-1 w-fit inline-block"
            />
            <button type="submit" className="bg-blue-500 rounded-md h-8 font-Open Sans, sans-serif text-white">Sign In</button>
            <p className="font-Open Sans, sans-serif">Don't have an account? <Link className="font-Open Sans, sans-serif font-medium text-blue-500" to='/signup'>Sign Up</Link></p>
            {
              message && <Font className='text-red-500'>{message}</Font>
            }
          </Form>
        )}
        </Formik>
      </div>
    </div>
    )
}