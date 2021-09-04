
import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';

const Contact = () => {
  const history=useHistory()
  const [user,setUser]=useState({
    username:"",
    email:"",
    message:""
  })
  let name,value;
  const postuserdata=(event)=>{
     name=event.target.name;
     value=event.target.value;
     setUser({...user,[name]:value})
  }
  const submit=async(e)=>{
     e.preventDefault()
       const{username,email,message}=user;
     var res=await fetch("https://myport-714d9-default-rtdb.firebaseio.com/userdata.json",{
       method:"POST",
       headers:{
         "content-Type":"application/json"
       },
       body:JSON.stringify({username,
        email,
        message
       }),
     })
    if(res){
      alert("data send")
      history.push("/")
    }
    else{
      alert("try again")
    }
  }
    return (
        <div className="container">

          <div className="first">
           
            <div><a href="https://github.com/NOORMUHAMM"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" /></a></div>
            <div><a href="https://www.linkedin.com/in/noor-muhammed-a96a10116/"><img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" alt="" /></a></div>
            <div><a href="https://twitter.com/noormuhammed143"><img src="	https://www.danoneinstitute.org/wp-content/uploads/2020/06/logo-rond-twitter.png" alt="" /></a></div>
            <div><a href=""><img src="https://cdn.icon-icons.com/icons2/730/PNG/512/gmail_icon-icons.com_62758.png" alt="" /></a></div>
          </div>
            <div className="second">
              <h1 style={{marginBottom:"30px"}}>Contact me</h1>
            <form >
                <label >Enter Your Name</label><br />
                <input type="text"  name="username" value={user.username} placholder="Enter your name" onChange={postuserdata}/><br />
                  <label >Enter Your Email</label><br />
                <input type="text"  name="email" value={user.email} placholder="Email" onChange={postuserdata}/><br />
                  <label >Enter Your Message</label><br />
                <input type="text"  name="message" value={user.message} placholder="Password" onChange={postuserdata}/><br />
                <button type="submit" onClick={submit}>click</button>
            </form>
            </div>
        </div>
    )
}

export default Contact
