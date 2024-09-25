import React, { useState } from 'react'

export default function Authform() {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <div className="container">
            <div className="form-container">
                <div className="form-toggle">
                    <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>Login</button>
                    <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>Signup</button>
                </div>
                {isLogin ? <>
                    <div className="form">
                        <h2>login Form</h2>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="password"/>
                        <a href="#"> Forget password?</a>
                        <button>login</button>
                        <p> Not a Member? <a href="#" onClick={()=> setIsLogin(false)}> signup now</a></p>
                        
                    </div>
                </> : <> 
                <div className="form"><h2>signup Form</h2>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="password"/>
                        <input type="password" placeholder="confirm password"/>
                        <button>Sign up</button>
                </div>
                </>}
                
            </div>
        </div>
    )
}
