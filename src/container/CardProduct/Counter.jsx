import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import ActionType from '../../redux/reducer/globalActionType'

class Counter extends Component {
    // state = {
    //     order: 0
    // }

    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue)
    // }

    // handlePlus = () => {
    //     this.setState({
    //         order: this.props.orderKempatskio + 1
    //     }, () => {
    //         this.handleCounterChange(this.props.orderKempatskio)
    //         }
    //     )
    // }

    // handleMinus = () => {
    //     if (this.props.orderKempatskio > 0) {
    //         this.setState({
    //             order: this.props.orderKempatskio - 1
    //         }, () => {
    //             this.handleCounterChange(this.props.orderKempatskio)
    //         })
    //     }
    // }

    render() {
        // console.log(this.props)
        return(
            <Fragment>
                <div className="counter">
                    <button className="minus" onClick={this.props.handleMinus}>-</button>
                    <input type="text" value={this.props.orderKempatskio} />
                    <button className="plus" onClick={this.props.handlePlus}>+</button>
                </div>
            </Fragment> 
        )
    }
}

const rubahStatekeProps = (abigoState) => {
    return {
        orderKempatskio: abigoState.totalOrderNih
    }
}

const rubahDispatchkeProps = (abigoDispatch) => {
    return {
        handlePlus: () => abigoDispatch({type: ActionType.PLUS_ORDER_GLB}) ,
        handleMinus: () => abigoDispatch({type: ActionType.MINUS_ORDER_GLB})
    }
}

export default connect(rubahStatekeProps, rubahDispatchkeProps)(Counter)