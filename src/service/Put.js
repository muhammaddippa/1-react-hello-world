import axios from 'axios'
import { RootPath, OnlineRoot } from './Config'

const Put = (path, root, data, fillData) => {
    const promise = new Promise((resolve, reject) => {
        console.log(data)
        axios.put(`${root ? OnlineRoot:RootPath}/${path}/${data}`, fillData)
        .then((res) => {
            resolve(res)
        }, (err) => {
            reject(err)
        })
    })

    return promise
}

export default Put