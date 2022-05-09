
import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom'
import { auth } from './firebase';
import "./Login.css"
function Login() {
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const signIn=event=>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push("/")
        }) 
        .catch(error=>alert(error.message))
    }
    const register=event=>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth)
            if(auth){
                history.push('/')
            }
        })
        .catch(error=>alert(error.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8DdK5WuTHjz-BC4Jf8U_p0HyDJ3qiU7spqg&usqp=CAU" alt="amazon logo"/>
            </Link>

            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h4>Email</h4>
                    <input type="text" value={email} onChange={event=>setEmail(event.target.value)}>
                        
                    </input>
                    <h4>Password</h4>
                    <input type="password" value={password} onChange={event=>setPassword(event.target.value)}>

                    </input>
                    <button onClick={signIn} type="submit" className="login_signInButton">Sign In</button>
                </form>
                <p>
                    By signing in you agree to the amazon clone conditions of use & sale. Please see our privacy notice, our cookies notice and our Interest-Based Ads notice.
                </p>
                <button onClick={register} className="login_registerButton">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
