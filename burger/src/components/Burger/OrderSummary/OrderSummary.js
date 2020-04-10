import React, {Component} from 'react' ;
import Aux from '../../../hoc/Auxho';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {

  componentDidUpdate (prevProps) {
    if(this.props.ingredients !== prevProps.ingredients) {
      console.log('[OrderSummary] WillUpdate');
    }
 }

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
      return (
        <li kye={igKey}>
         <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
        </li>)
    });

    return(
      <Aux>
      <h3> Your Order </h3>
      <p> A delicious burger with the following ingredients: </p>
      <ul>
        {ingredientSummary}
        <p><strong> Total price: {this.props.price} </strong> </p>
      </ul>
      <p> Continue to Checkout ? </p>
      <Button btnType="Danger" clicked={this.props.purchaseCanceled}>Cancel</Button>
      <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
      </Aux>

    );
  }
}


export default OrderSummary;
