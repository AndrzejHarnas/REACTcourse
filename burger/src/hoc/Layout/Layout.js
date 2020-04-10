import React, {Component} from 'react';
import Aux from '../../hoc/AUX/Auxho';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  siderDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  siderDrawerTaggleHandler = () => {
    this.setState((prevState)=>  {
      return({showSideDrawer: !prevState.showSideDrawer});
       }
    );


 }

render(){
  return(
<Aux>
<Toolbar drawerToggleClicked={this.siderDrawerTaggleHandler}/>
<SideDrawer
open={this.state.showSideDrawer}
closed={this.siderDrawerClosedHandler} />
  <main className={classes.Content}>
     { this.props.children }
  </main>
</Aux>
);
}
}
export default Layout;
