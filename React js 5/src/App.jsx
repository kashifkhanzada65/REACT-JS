import React, { useState } from 'react'
import Navber from './components/navber'
import Card from './components/card'

const App = () => {
    console.log("App");
    // const [isRefresh, setIsRefresh] = useState(false)

    // let [user, setUser] = useState("Kashif")
    // console.log(user);

    // const updateValue = () => {
    //     user = "Muhammad Kashif"
    //     setUser(user)
    // }

    // const [arr, setArr] = useState(["apple", 'mango'])
    // console.log(arr);

    // const updateValue = () => {
    //     setArr([...arr,'"orange'])
    // }

    // const [loading, setLoading] = useState(false)
    // if (loading) {
    //     return <h1>Loading</h1>
    // }

    const [isLoading, setIsLoading] = useState(true)

    const foo = () => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }
    foo()

    const [isAuth, setIsAuth] = useState(false)

    return (
        isLoading ? <h1>Loading</h1> :
            < div >
                <h1></h1>
                <button >Login</button>



                {/* <h1>Hello world</h1>
                <h1>Hello world 1</h1>
                <h1>Hello world 2</h1>
                <h1>Hello world 3</h1> */}

                {/* <button onClick={updateValue} >Updated Array</button> */}

                {/* <h1>{!isRefresh?"First time render":"rerendering"}</h1>
            <button onClick={()=>{
                setIsRefresh(true)
            }} >click</button> */}
                {/* <Navber />
            <Card /> */}
            </div >
    )
}


export default App