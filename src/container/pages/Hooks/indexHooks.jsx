import React, {useState, useEffect} from 'react'
import './index.css'

const Hooks = () => {
    const [count, setCount] = useState(0)

    //useEffect punya kemampuan component didmount
    useEffect(() => {
        document.title = `Title change: ${count}`
        //Kalo udah kelar udah dah, langsung return aja atau disebut componentWillUnmount
        return () => {
            document.title = "ReactJS Hello World"
        }
    })

    return(
        <div className="p-hooks">
            <p>Nilai saya saat ini adalah : {count}</p>
            <button onClick={() => setCount(count + 1)}>Update nilai</button>
        </div>
    )
}

export default Hooks