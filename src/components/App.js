import React, { Component, Fragment } from "react";
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Header from "./Header";
import Footer  from "./Footer";
import Home from './Home';

class App extends Component {
    render(){
        return(
            <Fragment>                
                <BrowserRouter>
                    <Header/>
                        <Routes>                          
                            <Route index element ={ <Home/>}/> 
                        </Routes>
                    <Footer/>
                </BrowserRouter>
            </Fragment>    
        )
    }
}
export default App;




