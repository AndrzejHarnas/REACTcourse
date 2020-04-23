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

componentDidMount () {
  const query = new URLSearchParams(this.props.location.search);
  const ingredients = {};
  for (let param of query.entries()) {
    //Salad
    ingredients[param[0]] = +param[1];
  }
  this.setState({ingredients: ingredients});
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
