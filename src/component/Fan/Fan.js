 
import classes from './Fan.css';
import React from 'react';
const Fan  = ( props ) => (
    <header className= 'Fanheader' >
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className = 'img' >
        <img  onClick={props.clicked} className = "Fanimg" src={require('../../../src/image/'+props.img+'.PNG')} alt="标签" />
        </div>
        <div className = 'title'  onClick={props.clicked}> {props.manufacturer} 
        <br/>
         {props.model} <br/>
        {props.series}</div><br/>

        <div className = 'feature'> {props.airflow} CFM <br/> 
          {props.maxpower} W at max speed <br/>
          {props.dbA} dBA at max speed  <br/>
          {props.sweepdia}" fan sweep diameter</div><br/>

        <div className = 'past'> 
            Past specifications:<br/>
            {props.firm} firm  / {props.global} global</div><br/>


        <input id={props.id} type = "checkbox" value = 'compare'  onChange = {props.checked}  
        /> 
        <label htmlFor= {props.id} > Compare &#160; </label> 
        <button className = {classes.button} >
            Add to &#160; 
        <i 
        style = {{  position:"absolute" ,
            zIndex:'7', color:'black'}}
        className="fa fa-caret-down"></i>
        </button>
        
        {/* <div className="dropdown-cont ent" id="myDropdown">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a></div> */}
    </header>
);
 
export default Fan;