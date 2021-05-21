import Get from './Get'
import Post from './Post'
import Put from './Put'
import Delete from './Delete'

const getNewsBlog = (data) => Get('posts?_sort=id&order=desc', false)
const getComments = (data) => Get('comments', true)
const PostNewsBlog = (data) => Post('posts', false, data)
const PutNewsBlog = (data, fillData) => Put('posts', false, data, fillData)
const DelNewsBlog = (data) => Delete('posts', false, data)

const API = {
    getNewsBlog,
    getComments,
    PostNewsBlog,
    PutNewsBlog,
    DelNewsBlog
}

export default API