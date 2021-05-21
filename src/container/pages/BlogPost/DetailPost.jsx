import React, {Component, Fragment} from 'react'
import Axios from 'axios'

import './DetailPost.css'

class DetailPost extends Component {
    state = {
        post: {
            title: '',
            body: ''
        }
    }

    componentDidMount() {
        // console.log(this.props.match.params.postID)
        let id = this.props.match.params.postID
        Axios.get(`http://localhost:3099/posts/${id}`)
        .then(res => {
            this.setState({
                post: {
                    title: res.data.title,
                    body: res.data.body
                }
            })
        })
    }
    render() {
        // console.log(this.props)
        return(
            <Fragment>
                <div className="p-detail-post">
                    <p className="detail-title">{this.state.post.title}</p>
                    <p className="detail-body">{this.state.post.body}</p>
                </div>
            </Fragment>
        )
    }
}

export default DetailPost