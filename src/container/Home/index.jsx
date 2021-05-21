import React, {Component, Fragment} from 'react'
import Product from '../pages/Product'
import YoutubeComp from '../pages/YoutubeCompPage'
import BlogPost from '../pages/BlogPost'
import LifeCycleComp from '../pages/LifeCycleComp'
import DetailPost from '../pages/BlogPost/DetailPost'
import Hooks from '../pages/Hooks'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import './index.css'
import Async from '../pages/Async'

class Home extends Component {
    render(){
        return(
            <BrowserRouter>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecyclecomp">Lifecycle</Link>
                        <Link to="/youtubecomp">Youtube</Link>
                        <Link to="/hooks">Hooks</Link>
                        <Link to="/async">Async</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:postID" component={DetailPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/lifecyclecomp" component={LifeCycleComp} />
                    <Route path="/youtubecomp" component={YoutubeComp} />
                    <Route path="/hooks" component={Hooks} />
                    <Route path="/async" component={Async} />
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home