import React from "react"
import twitter from "../images/twitter.png"
import facebook from "../images/fb.png"
import instagram from "../images/inst.png"
import github from "../images/github.png"
export default function Footer(){
    return(
        <footer>
            <img src={twitter} className="footer--twt"/>
            <img src={facebook} className="footer--fb"/>
            <img src={instagram} className="footer--inst"/>
            <img src={github} className="footer--git"/>

        </footer>
    )
}