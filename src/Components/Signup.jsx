import React from "react"; 
import { Link, useNavigate } from "react-router-dom";
import Font from "./Font";
import { Formik, Form, Field, ErrorMessage } from "formik";
export default function SignUp() {
   const navigate = useNavigate()
   const [message, setMessage] = React.useState('')
    const Create=async(values,{setSubmitting, resetForm})=>{
        if(values.username!=='' && values.email!=="" && values.password!==''){
           const response = await fetch('https://loginsignupbanckend-7.onrender.com/auth/signup',{
                                 headers:{
                                         'Content-Type': 'application/json',
                                        },
                                 method:'POST',
                                 body:JSON.stringify({
                                    username:values.username,
                                    email: values.email,
                                    password: values.password
                                 })
                                 })
          const data = await response.json()
          if(data.error){
            setMessage(data.error)
          }
          else{
            setMessage(data.message)
            resetForm()
            navigate('/')
          }
          setSubmitting(false)
        }
    }
    const validate=(values)=>{
     const errors = {}
     if(!values.username){
      errors.username='Username must not be Empty'
     }
     if(!values.email){
      errors.email='Email must not be Empty'
     }
     if(!values.password){
      errors.password='Password must not be Empty'
     }
     return errors
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
              <Formik
               initialValues={{
                username:"",
                email:'',
                password:''
               }}
               onSubmit={(values,{setSubmitting, resetForm})=>Create(values,{setSubmitting, resetForm})}
               validate={validate}
              >{()=>(
                <Form className="flex flex-col gap-4">
                  <Font>User Name</Font>
                  <Field type='text' name='username' className="border border-gray-300 focus:border-blue-500 outline-none rounded-md h-10 px-4 placeholder:font-Open Sans, sans-serif" placeholder='User Name' />
                  <ErrorMessage 
                   name="username"
                   component={Font}
                   className="text-[10px] text-white bg-[#EF4444] rounded-sm px-1 w-fit inline-block"
                  />

                  <Font>Work Email</Font>
                  <Field type='email' name='email' className="border border-gray-300 focus:border-blue-500 outline-none rounded-md h-10 px-4 placeholder:font-Open Sans, sans-serif" placeholder='Email'/>
                  <ErrorMessage 
                  name="email"
                  component={Font}
                  className="text-[10px] text-white bg-[#EF4444] rounded-sm px-1 w-fit inline-block"
                 />

                  <Font>Password</Font>
                  <Field type='password' name='password' className="border border-gray-300 focus:border-blue-500 outline-none rounded-md h-10 px-4 placeholder:font-Open Sans, sans-serif" placeholder='Password'/>
                  <ErrorMessage 
                   name="password"
                   component={Font}
                   className="text-[10px] text-white bg-[#EF4444] rounded-sm px-1 w-fit inline-block"
                   />
                   <button type="submit" className="bg-blue-500 rounded-md h-8 font-Open Sans, sans-serif text-white">Sign Up</button>
                   <p className="font-Open Sans, sans-serif">Already have an account? <Link className="font-Open Sans, sans-serif font-medium text-blue-500" to='/'>Sign In</Link></p>
                   {
                    message && <Font className={message.includes('exists') ? 'text-red-500' : 'text-green-500'}>
                                 {message}
                               </Font>
                   }
                </Form>
              )}
              </Formik>
             </div>
        </div>
    )
}
