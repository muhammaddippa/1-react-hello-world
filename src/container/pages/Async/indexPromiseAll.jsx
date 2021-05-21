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

    const callLastName = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Diva`)
            }, 3000)
        })
    }

    //Jadi dalam function login, di pertama kita jalanin nih callFirstName function
    //Terus setelah itu dikasih then, hasil dari function pertama kita lempar ke function ke dua
    //Di function ke dua kita udah kasih paramter buat nangkep hasil dari function pertama callLastName = (first)
    //nah si first itu lah yang jadi data buat digabung di dalam function ke dua
    //lalu di then lagi buat result ke dua hasil dari callLastName atau function ke dua
    //lalu dirubah lah di then yang ke dua, dirubah atau didisplay
    //Nah cuman ada lagi nih, kalo misalnya ampe 10x gimana ?
    //Terus adalah namanya promise all
    //Jadi dia ditampung dulu di array, kalo udah semua baru dilempar dengan 1 then
    //dalem then dikasih function lagi, yang parameternya isinya array
    //Di functino ke dua juga parameternya apus aja
    
    const login = () => {
        Promise.all([callFirstName(), callLastName()])
        .then(([res, res2]) => {
            setText(res + " " + res2)
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