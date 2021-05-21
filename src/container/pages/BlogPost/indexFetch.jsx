import React, {Component, Fragment} from 'react'
import Post from '../../component/Post'
import './index.css'

class BlogPost extends Component {
    state = {
        post: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        //.then(json => console.log(json)) Untuk melihat versi console.log
        .then(json => {
            this.setState({
                post: json
            })
        })       
    }

    render() {
        return(
            <Fragment>
                <p className="section-title">Blog Post</p>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} title={post.title} desc={post.body} /> 
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost