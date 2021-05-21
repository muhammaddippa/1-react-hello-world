import React, {useState} from 'react'
import './index.css'

function Async() {
    const [text, setText] = useState("Text di sini")

    const callFirstName = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Muhamad')
            }, 1000)
        })
    }

    const callLastName = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Diva`)
            }, 1000)
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

    //Nah ini ada lagi nih cara lain promise, kita memanggilnya pake async & await
    //async & await ini ditandai dengan kata async di depan sebuah function
    //dengan ini menandakan function di dalamnya semua bisa menggunakan await
    const login = async () => {
        //Saya ingin yang first agar terbaca seperti synchronous
        //Kita akan tunggu hasilnya dari proses pemanggilan dari callFirstName
        const first = await callFirstName()
        const last = await callLastName()
        const name = first + " " + last
        setText(name)
    }

    //Ini kalo lu mau ngasih waiting kalo nunggu APInya kelar proses dulu

    const loginMethod = () => {
        return(
            setText("Please Wait"),
            login()
        )
    } 

    //Jadi kombinasinya gini, function pengambilan datanya menggunakan promise / callback
    //Display datanya pake async & await

    return(
        <div className="Async">
            <button onClick={loginMethod} class="AsyncButton">Login</button>
            <p class="AsyncP">{text}</p>
        </div>
    )
}

export default Async