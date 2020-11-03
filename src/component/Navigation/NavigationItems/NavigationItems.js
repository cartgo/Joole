import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
// import Auth from '..../container/Auth/Auth';
import Logout from '../../../container/Auth/Logout/Logout'
import Profile from '../../../container/Auth/Profile/Profile';

const navigationItems = ( props ) => (
    <ul className={classes.NavigationItems}  
    style = {{position:"fixed" ,fontSize:"14px",color:"grey",top:"0px",right:"120px",zIndex:'1999'}}
    
    >
        {/* <NavigationItem link="/" exact>Burger Builder</NavigationItem> */}
        {/* {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null} */}

        {/* <Route>
        <Route path="/auth"   /> */}
          
      {/* </Route> */}  
              {!props.isAuthenticated
            ?
             null
            // <NavigationItem link="/auth">Authenticate</NavigationItem>
            :
            // <button onClick = {}>logout</button>
            <NavigationItem link="/logout"  >
               <img className = 'profileimg' 
               src={require('../../../image/profile/defaulprofileimg.png')} alt="标签" /> 
               {/* <Profile></Profile> */}
              </NavigationItem>
            } 
    </ul>
);

export default navigationItems;