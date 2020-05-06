import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

import Aux from '../../hoc/AUX/Auxho';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';





class BurgerBuilder extends Component {
//  constructor(props){
//    super(props);
//    this.state = {...}
//  }

state = {
  purchasing: false,
  loading: false,
  error: false

}

updatePurchasesState (ingredients) {
  const sum = Object.keys(ingredients)
  .map(igKey => {
    return ingredients[igKey];
  })
  .reduce((sum, el) => { return sum + el;},0);
  return sum >0;

}

purchaseHandler = () => {
  this.setState({purchasing: true});
}

purchaseCancelHandler = () => {
  this.setState({purchasing: false});
}

purchaseContinueHandler = () => {
  //alert('You continue');


 this.props.history.push('/checkout');

}




  render() {
    const disabledInfo = {
      ...this.props.ings
    };

    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <=0;
    }


    let orderSummary = null;
    let burger = this.state.error ? <p> Fatal error ingredients can't be loaded </p> : <Spinner />;

    if(this.props.ings) {
    burger = (
           <Aux>
                 <Burger ingredients={this.props.ings} />
                 <BuildControls
                 ingredientAdded={this.props.onIngredientsAdded}
                 ingredientRemoved={this.props.onIngredientsRemoved}
                 disabled= {disabledInfo}
                 purchaseable = {this.updatePurchasesState(this.props.ings)}
                 ordered = {this.purchaseHandler}
                 price={this.props.price}
                 />
         </Aux>    );

             orderSummary =     <OrderSummary
             ingredients={this.props.ings}
             purchaseCanceled = {this.purchaseCancelHandler}
             purchaseContinued = {this.purchaseContinueHandler}
             price={this.props.price.toFixed(2)}
             /> ;
     }

    if(this.state.loading) {
        orderSummary = <Spinner />;
    }
    return(

  <Aux>
          <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
            {orderSummary}
          </Modal>

          {burger}



</Aux>

    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientsAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
    onIngredientsRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName}),
  }
};



export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
