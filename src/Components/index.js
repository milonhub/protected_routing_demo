import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./Home";
import Contact from './Contact'
import Blogs from './Blogs';
import Navbar from './Navbar';
import Protected from './Protected';

const Index = () => {

 const [isLogded, setIsLoged] = useState(false)
  return (
    <div>
        <BrowserRouter>
        <Navbar />
        {isLogded ? (<button
         onClick={()=>{
            setIsLoged(!isLogded);
         }
          
        }>
        Log out</button>) :
        (<button 
        onClick={()=>{
        setIsLoged(!isLogded);
        }}>Log in</button>)}

        <Routes>
         <Route path='/' element = {<Home />}/>
         <Route path='/contact' element = {<Contact />}/>
         <Route path='/blogs' element = {<Protected isLogded={isLogded} > 
            <Blogs /> 
            </Protected>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Index;