import React from "react"
import Picture from "./components/Picture"
import Info from "./components/Info"
import About from "./components/About"
import Footer from "./components/Footer"


export default function Profile(){
    return(
        <div>
          <Picture/>
          <Info/>
          <Footer/>
          
        </div>
    )
}