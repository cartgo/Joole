import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Searchbox from './container/Searchbox/Searchbox';
import Auth from './container/Auth/Auth';
import Logout from './container/Auth/Logout/Logout';
import * as actions from './store/actions/index';
import Layout from './hoc/Layout/Layout';
// import NavigationItems from './component/Navigation/NavigationItems/NavigationItems';
import Fan from './component/Fan/Fan'
import Productpage from './container/Productpage/Productpage';
import Header from './component/Header/Header'
import Home from './container/Home';
import FanDetail from './component/Fan/FanDetail/FanDetail'
import Fancompare from './component/Fan/Fancompare/Fancompare';
import Profile from './container/Auth/Profile/Profile';

class App extends Component {
  componentDidMount () {
    console.log(this.props);
    this.props.onTryAutoSignup();
  }

 

  render () {
    let routes = (
      <Route>
        <Route path="/auth" component={Auth} />
         <Redirect to="/auth" />

{/* ////////for developing:////////////////////////////////// */}
        {/* <Route path="/searchbox" component={Searchbox} />
        <Route path="/product" component={Productpage} />
        <Route path="/compare" component={Fancompare} />

        <Redirect to="/searchbox" /> */}
{/* ////////////////////////////////////////////////////////////////// */}
      </Route>
    );

    if ( this.props.isAuthenticated ) {
      routes = (
        <Switch>
          <Route path="/searchbox" component={Searchbox} />
          {/* <Route path="/orders" component={Orders} /> */}
          <Route path="/logout" component={Logout} />
          <Route path="/product" component={Productpage} />
          <Route path="/productdetail" component={FanDetail} />
          <Route path="/compare" component={Fancompare} />
          <Route path="/profile" component={Profile} />

          <Redirect to="searchbox/" />
        </Switch>
      );
    }
  return (
    <div className="App">
      <header className="App-header">
        <div className = "header">
        <Layout>
          {routes} 
        </Layout>
        </div>
        <br></br><br></br>
        <br></br>
        <br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br>
         </header>
   

    </div>
  );
}}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {

    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );