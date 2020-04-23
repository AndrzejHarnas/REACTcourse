import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';


class Checkout extends Component {
state = {
  ingredients: {
    salad: 1,
    meat: 1,
    cheese: 1,
    bacon: 1
  }
}

checkoutCanceledHandler = () => {
  this.props.history.goBack();
}

checkContinuedHandler = () => {
 this.props.history.replace('/checkout/contact-data');
}

render () {
    return (
      <div>
        <CheckoutSummary
        ingredients={this.state.ingredients}
        checkooutCanceled = { this.checkoutCanceledHandler }
        checkoutContinued = { this.checkContinuedHandler  }
        />
      </div>
    )
  }

}

export default Checkout;
