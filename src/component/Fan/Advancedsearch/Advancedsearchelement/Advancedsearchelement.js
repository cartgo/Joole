import React, { Component } from 'react';

import './Advancedsearchelement.css'
class Advancedsearchelement extends Component {
    componentWillUpdate() {
        console.log('[Advancedsearch] WillUpdate');
    }

    render () {

      

        return (
            <div className = 'allelement'>
                <div className = 'filternavbar'>Find fans<span onClick = {this.props.clicked}>X</span></div>

                <div className = 'filtertitle'>Type</div>
                    <span className = 'filtersubtitle'>Use Type</span>
                        <input type = "radio" name = 'usetype'></input>
                        <label>Commercial</label>
                        <input type = "radio" name = 'usetype'></input>
                        <label>Industrial</label>
                        <input type = "radio" name = 'usetype'></input>
                        <label>Residential</label><br/>
                        <div style = {{height:'3px'}} ></div>
                    <span className = 'filtersubtitle'>Application</span>
                        <input type = "radio" name = 'Application'></input>
                        <label>Indoor</label>
                        <input type = "radio" name = 'Application'></input>
                        <label>Outdoor</label><br/>
                        <div style = {{height:'3px'}} ></div>
                     <span className = 'filtersubtitle'>Mounting Location</span>
                        <input type = "radio" name = 'ML'></input>
                        <label >Roof</label>
                        <input type = "radio" name = 'ML'></input>
                        <label>Wall</label>
                        <input type = "radio" name = 'ML'></input>
                        <label>Free standing</label><br/>
                        <div style = {{height:'3px'}} ></div>
                    <span className = 'filtersubtitle'>Accessories</span>
                        <input type = "radio" name = 'Accessories'></input>
                        <label >With Light</label>
                        <input type = "radio" name = 'Accessories'></input>
                        <label>Without Light</label><br/>
                        <div style = {{height:'3px'}} ></div>
                    <span className = 'filtersubtitle'>Model year:</span> 
                        <input type = "number"></input>————<input type = "number"></input><br/> 
                        <div style = {{height:'3px'}} ></div>
                <div className = 'filtertitle'>Technical Details</div>
                    <div style = {{height:'3px'}} ></div>
                    <span className = 'filtersubtitle'>Airflow (CFM)</span>
                    <input type = "number"></input>——<input type = "number"></input><br/> <div style = {{height:'3px'}} ></div>
                    <span className = 'filtersubtitle'>Max power (W)</span>
                    <input type = "number"></input>——<input type = "number"></input><br/> <div style = {{height:'3px'}} ></div>
                    <span className = 'filtersubtitle'>Sound at max speed (dBA)</span>
                    <input type = "number"></input>——<input type = "number"></input><br/>  <div style = {{height:'3px'}} ></div>
                    <span className = 'filtersubtitle'>Fan sweep diameter (in)</span>
                    <input type = "number"></input>——<input type = "number"></input><br/> <div style = {{height:'3px'}} ></div>
                    <span className = 'filtersubtitle'> Height (in)</span>
                    <input type = "number"></input>——<input type = "number"></input><br/>  <div style = {{height:'3px'}} ></div>

                
                <div className = 'filtertitle'>Brand</div><div style = {{height:'3px'}} ></div>
                    <span className = 'filtersubtitle'>Select Brand(s)</span>
                        <select> 
                            <option>1</option>
                            <option>2</option>
                        </select><div style = {{height:'3px'}} ></div>

                <div className = 'filtertitle'>Other</div><div style = {{height:'3px'}} ></div>
                <span className = 'filtersubtitle'> With the words</span>
                <input type = "text"></input> <div style = {{height:'3px'}} ></div>



                



</div>);
    }
}

export default Advancedsearchelement;