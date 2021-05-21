import React, {useState} from 'react'
import './index.css'

function Async() {
    const [text, setText] = useState("Text di sini")

    //ini ibaratnya API yang lama banget
    //ini pake CallBack
    const callFirstName = (panggilUlang) => {
        setTimeout(() => {
            panggilUlang('Muhamad')
        }, 3000)
    }

    const callLastName = (panggilLagi) => {
        setTimeout(() => {
            panggilLagi('Diva')
        }, 3000)
    }

    //CallBack <- ini jadul
    //Ini dia jalanin 2 callback, dan call back paling terakhir harus di dalam sub function
    //Nah lu bayangin kalo callback sampe 10x.. gimana tuh ?
    //Nah muncul lah yang namanya promise untuk menangani callback sampe 10x
    const login = () => {
        callFirstName((result) => {
            const first = result
            callLastName((result2) => {
                const last = result2
                setText(`${first} ${last}`)
            })
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