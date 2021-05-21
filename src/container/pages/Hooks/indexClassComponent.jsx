import React, {Component} from 'react'
import './index.css'

class Hooks extends Component {
    state = {
        count: 0
    }

    onUpdate = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentDidMount() {
        document.title = `Title Change: ${this.state.count}`
    }

    componentDidUpdate() {
        document.title = `Title Change: ${this.state.count}`
    }

    componentWillUnmount() {
        document.title = "ReactJS Hello World"
    }

    render(){
        return(
            <div className="p-hooks">
                <p>Nilai saya saat ini adalah : {this.state.count}</p>
                <button onClick={this.onUpdate}>Update nilai</button>
            </div>
        )
    }
}

export default Hooks