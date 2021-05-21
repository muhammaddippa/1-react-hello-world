import axios from 'axios'
import { RootPath, OnlineRoot } from './Config'

const Delete = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${root ? OnlineRoot:RootPath}/${path}/${data}`)
        .then(result => {
            resolve(result)
        }, err => {
            reject(err)
        })
    })

    return promise
}

export default Delete