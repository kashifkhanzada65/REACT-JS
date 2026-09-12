import React, { useState } from 'react'

const Navber = () => {
    console.log("Navber");
    const [isLogin, setIsLogin] = useState(false)
    const loginHandler = () => {
        setIsLogin(true)
    }
    return (
        <div>
            <h1>{isLogin ? "Muhammad Kashif" : "Please login"}</h1>
            <button onClick={loginHandler} >login</button>
        </div>
    )
}

export default Navber