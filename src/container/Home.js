import React, { Component } from 'react';

import '../../src/App.css';

// import NavigationItems from './component/Navigation/NavigationItems/NavigationItems';


class Home extends Component {
  componentDidMount () {
    // console.log(this.props);
    // this.props.onTryAutoSignup();
  }

  render () {
return(
    <div style = {{width:'100%'}} ><br></br><br></br><br></br><br></br>
    <img  className = "joole" src={require('../../src/Picture1.png')} alt="标签" />
    <h2>
      Building Product Selection Platform
    </h2>
    </div>
)



  }}
export default Home;