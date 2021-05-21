import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import './index.css'

class LifeCycleComp extends Component {
    //ES6 menggunakan constructor
    constructor(props) {
        //Karena ada extends component, maka perlu didefine super
        super(props)
        this.state = {
            count: 1
        }
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return null
    }

    componentDidMount () {
        console.log('componentDidMount')
        // setTimeout(() => {
        //     this.setState({
        //         count: '2'
        //     })
        // }, 3000)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.group('shouldComponentUpdate')
        // console.log(nextProps)
        console.log('This State : ', this.state)
        console.log('Next State : ', nextState)
        console.groupEnd()
        return nextState.count >= 4 ? false : true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return true
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1    
        })
    }

    render() {
        console.log('render')
        return(
            <Fragment>
                <h4>Product Page</h4>
                <hr />
                <button className="btn" onClick={this.changeCount}>Component Button {this.state.count}</button>
                <p>Total Order : {this.props.xikobaOrder}</p>
            </Fragment>
        )
    }
}

const rubahStatekeProps = (xikoba) => {
    return {
        xikobaOrder: xikoba.totalOrderNih
    }
}

export default connect(rubahStatekeProps)(LifeCycleComp)