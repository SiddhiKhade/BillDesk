import React,{useState, userEffect, useContext} from 'react';
import Home from './Home';
import './App.css';



function Login() {


  const [phone_number,setPhone]=useState("");
  const [password,setPassword]=useState("");
  const [full_name,setName]=useState("");
  const [id,setId]=useState("");
  const [RoleId,setRoleId]=useState("");
  const [role,setRole]=useState("");
  const [token,setToken]=useState("");
  
  const [success, setSuccess] = useState(false);
  let info ={id,full_name,role,RoleId,token};

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log({phone_number,password});
    let data={phone_number,password}

    const response = await fetch("https://billbook.dotminds.in/public/api/user/login",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },body:JSON.stringify(data)
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log("resp",resp.result[0].full_name);
        setName(resp.result[0].full_name);
        setId(resp.result[0].user_id);
        setRoleId(resp.result[0].user_role_id);
        setRole(resp.result[0].user_role_name);
        setToken(resp.result[0].token);
        setSuccess(resp.success);
        console.log("resp",resp);
        
      })
    });
    

    setPhone('');
    setPassword('');
    
    
       
  }
  
  return (
   
<>
    {success ? (<Home info={info}
    
    />) 
    
    :(
    <div className="App">
     <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Phone Number:</label>
                        <input
                            type="text"
                            id="username"
                            autoComplete="off"
                            value={phone_number}
                            required
                            onChange={(e)=>setPhone(e.target.value)} 
                        />
                        <br></br>
                        <br></br>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <br></br>
                        <br></br>
                        <button>Sign In</button>
                    </form>
    </div>
    )}
    </>
  );
}

export default Login