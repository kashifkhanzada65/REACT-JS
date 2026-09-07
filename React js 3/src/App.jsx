import React from 'react'
import Navber from './components/navber'
import Body from './components/body'
import Footer from './components/footer'

const App = () => {

    const foo = (username,e) => {
        console.log("Hello", e.target);
    }
    const foo2 = ()=>{
        console.log("Kashif");
    }
    return (
        <div>

            <Navber />
            <Body />
            <Footer />
            <button onClick={(e) => {
                foo("kashif",e)
                foo2()
            }}>Click</button>


        </div>
    )
}

export default App