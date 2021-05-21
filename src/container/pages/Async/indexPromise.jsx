import React, {useState} from 'react'
import './index.css'

function Async() {
    const [text, setText] = useState("Text di sini")

    const callFirstName = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Muhamad')
            }, 3000)
        })
    }

    const callLastName = (first) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`${first} Diva`)
            }, 3000)
        })
    }

    //Jadi dalam function login, di pertama kita jalanin nih callFirstName function
    //Terus setelah itu dikasih then, hasil dari function pertama kita lempar ke function ke dua
    //Di function ke dua kita udah kasih paramter buat nangkep hasil dari function pertama callLastName = (first)
    //nah si first itu lah yang jadi data buat digabung di dalam function ke dua
    //lalu di then lagi buat result ke dua hasil dari callLastName atau function ke dua
    //lalu dirubah lah di then yang ke dua, dirubah atau didisplay
    
    const login = () => {
        callFirstName()
        .then(res => {
            return callLastName(res)
        })
        .then(res2 => {
            setText(res2)
        })
    }

    return(
        <div className="Async">
            <button onClick={login} class="AsyncButton">Login</button>
            <p class="AsyncP">{text}</p>
        </div>
    )
}

export default Async