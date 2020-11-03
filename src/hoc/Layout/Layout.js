import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../AUXX/Auxx';
import classes from './Layout.css';
import Toolbar from '../../component/Navigation/Toolbar/Toolbar';
// import SideDrawer from '../../component/Navigation/SideDrawer/SideDrawer';
import NavigationItems from '../../component/Navigation/NavigationItems/NavigationItems';
import Home from '../../container/Home';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Aux> 
                <Toolbar 
                    isAuth={this.props.isAuthenticated}
                     />
                {/* <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} /> */}
                {/* <nav className={classes.DesktopOnly}>
                    <NavigationItems isAuthenticated={this.props.isAuthenticated} />
                </nav> */} 
                <main style = {{width:'100%',minHeight: '100vh'}} className={classes.Content}>
                    {this.props.children} 
                </main>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect( mapStateToProps )( Layout );