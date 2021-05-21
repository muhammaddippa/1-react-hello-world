import React, {Component, Fragment} from 'react'
import CardProduct from '../../CardProduct'
import './index.css'
import {connect} from 'react-redux'

class Product extends Component {
    // state = {
    //     order: 0
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render(){
        return(
            <Fragment>
                <h4>Product Page</h4>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="https://info.etanee.id/wp-content/uploads/2020/06/Logo-etanee-LEAF-GREEN-500px.png" alt="" />
                    </div>
                    <div className="troley">
                        <img src="https://image.flaticon.com/icons/png/512/263/263142.png" alt="" />
                        <div className="count">{this.props.cainoOrder}</div>
                    </div>
                </div>
                <CardProduct />
            </Fragment>
        )
    }
}

const rubahStatekeProps = (sikakiOrder) => {
    return{
        cainoOrder: sikakiOrder.totalOrderNih
    }
}

export default connect(rubahStatekeProps)(Product)