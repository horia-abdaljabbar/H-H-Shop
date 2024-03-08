import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { object, string, number } from 'yup';

function Login() {

  let [user,setUser]=useState({
    email:'',
    password:'',
});

let [errors,setErrors]=useState([]);
const validateData=async ()=>{
  const LoginSchema = object({
    email: string().email(),
    password: number().required().positive().integer().required(),
    
  });

try{
  await LoginSchema.validate(user);
  return true;

}
catch(error){
setErrors(error.errors);
console.log("validation" ,errors);

return false;
}

}
const handleInput=(e)=>{
  const {name,value}=e.target;
  setUser({...user,[name]:value});
}

const handleForm=async(e)=>{
  e.preventDefault();
  console.log(user);
  
if(await validateData()){
  
  const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/auth/signin`,user);
  console.log("massega:" ,data.message);
}
  else{
    console.log(errors);
  }


};


  return (
    <>
    <p>{errors}</p>
    <form className='loginForm' onSubmit={handleForm}>
<div className='w-50 m-auto'>

  <div className="col">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control"  value={user.email} name="email"  onChange={handleInput} />
  </div>

  <div className="col">
    <label  className="form-label">password</label>
    <input type="password" className="form-control mb-3" value={user.password} name="password" onChange={handleInput}/>
  </div>

  <button type='submit' className="submitBtn pt-1 pb-1" >submit</button>
</div>
    </form>
    </>
  )
}

export default Login