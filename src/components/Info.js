import React from "react"


export default function Info(){
    return(
    <info>
          <h1 className="info--name">Israel Alabi</h1>
          <h2 className="info--job">Frontend Developer</h2>
          <h3 className="info--website">Israelalabi.website</h3>
          <btn>
             <button className="info--email">Email</button>
             <button className="info--linkedin">LinkedIn</button>
          </btn>
          <about>
           <h1>About</h1>
           <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
           </p>
           <h1>Interests</h1>
           <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
           </p>
        </about>
          
        </info>
    )
}
