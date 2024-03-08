import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Register.css'
import { object, string, number } from 'yup';

function Register() {

  let [user,setUser]=useState({
    userName:'',
    email:'',
    password:'',
    image:'',
});

let [errors,setErrors]=useState([]);
const validateData=async ()=>{
  const RegisterSchema = object({
    userName: string().min(5).required(),
    email: string().email(),
    password: number().required().positive().integer().required(),
    image:string().required(),
    
  });

try{
  await RegisterSchema.validate(user);
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
  const formData= new FormData();
  formData.append('userName',user.userName);
  formData.append('email',user.email);
  formData.append('password',user.password);
  formData.append('image',user.image);
  const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`,formData);
  console.log(data);
}
  else{
    console.log(errors);
  }


};

const handleImg=(e)=>{
const {name,files}=e.target;
setUser({...user,
  [name]:files[0]});
}







  return (
    <>
    <p>{errors}</p>
    <form className='registerForm' onSubmit={handleForm}>
<div className='w-50 m-auto'>
  <div className="col">
    <label  className="form-label">user name</label>
    <input type="text" className="form-control mb-3" value={user.userName} name="userName" onChange={handleInput} />
  </div>

  <div className="col">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control"  value={user.email} name="email"  onChange={handleInput} />
  </div>

  <div className="col">
    <label  className="form-label">password</label>
    <input type="password" className="form-control mb-3" value={user.password} name="password" onChange={handleInput}/>
  </div>

  <div className="col">
    <label  className="form-label">image</label>
    <input type="file" className="form-control mb-3" name="image"   onChange={handleImg}/>
  </div>
  <button type='submit' className="submitBtn pt-1 pb-1" >submit</button>
</div>


    </form>
    </>
  )
}

export default Register