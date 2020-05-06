import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from "./ContactData/ContactData";
import {connect} from 'react-redux';
class Checkout extends Component {


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
        ingredients={this.props.ings}
        checkooutCanceled = { this.checkoutCanceledHandler }
        checkoutContinued = { this.checkContinuedHandler  }
        />
        <Route path={this.props.match.path + '/contact-data'}
         component={ContactData}/>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    ings: state.ingredients

  }
};


export default connect(mapStateToProps)(Checkout);
