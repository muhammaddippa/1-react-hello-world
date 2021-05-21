import React, {Component, Fragment} from 'react'
import Post from '../../../component/Post'
import './index.css'
import API from '../../../service'

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false,
        comments: []
    }

    clearState = () => {
        this.setState({
            formBlogPost: {
                id: 1,
                title: '',
                body: '',
                userId: 1
            }
        })
    }

    getPostAPI = () => {
        API.getNewsBlog()
        .then(result => {
            this.setState({
                post: result
            })
        })
        .then(() => {
            this.clearState()
        })

        API.getComments()
        .then(result => {
            this.setState({
                comments: result
            })
        })
    }

    postDatatoAPI = () => {
        API.PostNewsBlog(this.state.formBlogPost)
        .then(() => {
            this.getPostAPI()
        })
    }

    putDataToAPI = () => {
        API.PutNewsBlog(this.state.formBlogPost.id, this.state.formBlogPost)
        .then(() => {
            this.getPostAPI()
        })
    }

    handleRemove = (data) => {
        API.DelNewsBlog(data)
        .then((res) => {
            this.getPostAPI()
        })
    }

    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleSubmit = () => {
        if(this.state.formBlogPost.title !== "" && this.state.formBlogPost.body !== "") {
            if(this.state.isUpdate) {
                this.putDataToAPI()
            } else {
                this.postDatatoAPI()
            }
        } else {
            alert("Please fill the blank box !")
        }
    }

    handleFormChange = (event) => {
        let timestamp = new Date().getTime()
        let formBlogPostNew = {...this.state.formBlogPost}
        
        if(!this.state.isUpdate) {
            formBlogPostNew['id'] = timestamp
        }

        formBlogPostNew[event.target.name] = event.target.value

        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            // console.log('Now state value : ', this.state.formBlogPost)
        })
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`)
    }

    componentDidMount() {
        this.getPostAPI()
    }

    render() {
        return(
            <Fragment>
                <p className="section-title">Blogpost Page</p>
                <hr />
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={this.state.formBlogPost.title} placeholder="Add title here" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" value={this.state.formBlogPost.body} id="body" cols="30" placeholder="Add blog content here" onChange={this.handleFormChange} />
                    <button className="btn-submit" onClick={this.handleSubmit}>Submit</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} /> 
                    })
                }
                                {
                    this.state.comments.map(comment => {
                        return <p>{comment.id}. {comment.name} - {comment.email}</p>
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost