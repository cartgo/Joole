import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

class Profile extends Component {
    componentDidMount () {
        // this.props.filteronlogout()
        // this.props.onLogout();
        
    }


    onLogout(){
        setTimeout(() => {
            this.props.onLogout()
        }, 1);
    // setTimeout(() => {
    //     this.props.onLogout()
    // }, 2000);


}



    render () {


var profilecontent = <div style = {{backgroundColor:'white',height:'500px'}}>   <br/> <br/><br/> <br/><br/> <br/>
 
                        <br/>  userId:   {localStorage.getItem('userId')} <br/> <br/>
                        <button onClick = {()=> this.onLogout()}> Logout </button> <br/> <br/>
                        <button onClick = {()=>       this.props.history.goBack()}> go back </button>
                    </div>



        return (<div>
        {profilecontent}
        </div>)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        filteronlogout: ()=> dispatch(actions.filteronlogout),
        onLogout: () => dispatch(actions.logout())
    };
};

export default connect(null, mapDispatchToProps)(Profile);