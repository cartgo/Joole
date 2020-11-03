import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import * as actions from '../../store/actions/index';
import './Header.css';
import Productsearch from '../../container/Productsearch/Productsearch'
// import NavigationItems from './component/Navigation/NavigationItems/NavigationItems';


const Header    = ( props ) => (
 
<div className = "Headerheader" >
  
 
   
        <div className= 'imgdiv'>
             <img  className = "Headerimg"  src={require('../../../src/Picture1.png')} alt="标签" />
        </div>

        <div className = "Productsearch">
             <Productsearch></Productsearch>
        </div>

    
    </div>



)
export default Header;




