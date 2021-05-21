import React, {Component} from 'react'
import LifeCycleComp from '../LifeCycleComp'

class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 4000)
    }
    render(){
        return(
            <div>
                <h3>Life Cycle Component</h3>
                <hr />
                {
                    this.state.showComponent ? <LifeCycleComp /> : null 
                }
            </div>
        )
    }
}

export default Home