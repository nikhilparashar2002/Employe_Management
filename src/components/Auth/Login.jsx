import React, { useState } from 'react'

const Login = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log("email is: ", email); 
        console.log("password is: ", password);

        setEmail('')
        setPassword('')
        
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
       <div className='border-2 rounded-xl border-emerald-600 p-20'>
         <form 
         onSubmit={(e)=> {submitHandler(e)}}
         className='flex flex-col items-center justify-center'>
             <input 
             value={email}
             onChange={(e)=>{
                setEmail(e.target.value); 
                       
             }}
             required className='outline-none border-2 border-emerald-600 py-4 px-5 text-xl bg-transparent rounded-full placeholder:text-grey-400' type='email' placeholder='Enter your email'/>
             <input 
             value={password}
             onChange={(e)=>{
                setPassword(e.target.value)
                
             }}
             required className='outline-none border-2 border-emerald-600 py-4 px-5 mt-3 text-xl bg-transparent rounded-full placeholder:text-grey-400' type='password' placeholder='Enter your password'/>
             <button className='mt-5 text-white outline-none bg-emerald-600 py-4 px-5 text-xl rounded-full placeholder:text-white'>Log in</button>
         </form>         
       </div>
    </div>
  )
}

export default Login

