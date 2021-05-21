import React, {useState} from 'react'
import './index.css'

function Async() {
    const [text, setText] = useState("Text di sini")
    
    const login = () => {
        const first = "Muhamad"
        const last = "Diva"
        setText(`${first} ${last}`)
    }

    return(
        <div className="Async">
            <button onClick={login} class="AsyncButton">Login</button>
            <p class="AsyncP">{text}</p>
        </div>
    )
}

export default Async