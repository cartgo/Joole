import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
 import * as actions from '../../../store/actions/index';

class Logout extends Component {
    componentDidMount () {
        // this.props.filteronlogout()
        // this.props.onLogout();
        this.props.history.replace("/profile")
    }

    render () {
        return (<div>
            
        {/* <button onClick = {()=> this.props.onLogout}>asdfasdfasdfasdf</button> */}
        
        {/* <Redirect to="/"/>; */}
        
        </div>)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        filteronlogout: ()=> dispatch(actions.filteronlogout),
        onLogout: () => dispatch(actions.logout())
    };
};

export default connect(null, mapDispatchToProps)(Logout);