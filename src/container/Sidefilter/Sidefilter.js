import './Sidefilter.css'
import React, { Component,userState } from 'react';
import Slider from '@material-ui/core/Slider';

class Sidefilter extends Component {
    state = {


gvalue :[20,30],
fvalue :[20,30],

fsvalue :[20,30],

dbvalue :[20,30],

mpvalue :[20,30],

afvalue :[20,30]  

   }


 


    render(){
        return(

<div className = 'sidefilter'>
    <div className = 'search'>Search: <button className = 'saveclear'>Save</button>
     <button className = 'saveclear' >Clear</button></div>
    <div > <button style = {{width:'49%'}} className = 'tab' >Product </button> 
          <button style = {{width:'49%',borderRight:'none'}}  className = 'tab'>Project</button>  
        </div>
    <div><details className = 'Product Type'>
        <summary  className = 'summary'>Product Type</summary><div><br/>
    <input type = "checkbox"></input><label>commercial</label>
    <input type = "checkbox"></input><label>residential</label><br/><br/></div>
    </details></div>

        <div><details>
        <summary className = 'summary'>Technical Specifications</summary>
        <div><br/>
        <span className = 'atitle'>↑↓ Airflow（CFM） </span> 
                {this.state.afvalue[0]}
         <div className = 'testdiv'>  <Slider
            value={this.state.afvalue}
            onChange={(e,v)=>this.setState({afvalue:v})}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"/></div> 
            {this.state.afvalue[1]}<br/>



            <span className = 'atitle'> ↑↓ Max Power（W）  </span> 
                {this.state.mpvalue[0]}
         <div className = 'testdiv'>  <Slider
            value={this.state.mpvalue}
            onChange={(e,v)=>this.setState({mpvalue:v})}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"/></div> 
            {this.state.mpvalue[1]}<br/>
            

            <span className = 'atitle'>↑↓Sound at max speed (dBA) </span> 
             <br/>   {this.state.dbvalue[0]}
         <div className = 'testdiv'>  <Slider
            value={this.state.dbvalue}
            onChange={(e,v)=>this.setState({dbvalue:v})}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"/></div> 
            {this.state.dbvalue[1]}<br/>

            <span className = 'atitle'>↑↓Fan sweep diameter (in) </span> 
                {this.state.fsvalue[0]}
         <div className = 'testdiv'>  <Slider
            value={this.state.fsvalue}
            onChange={(e,v)=>this.setState({fsvalue:v})}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"/></div> 
            {this.state.fsvalue[1]}<br/>
            <br/><br/></div>
   
        </details></div>

        <div>
        <details>
                <summary  className = 'summary'>Brand</summary>
                <div><br/>
                    <input type = "checkbox" ></input><label>Big Ass</label><br/>
                    <input type = "checkbox"></input><label>Minka</label><br/>
                    <input type = "checkbox"></input><label>Emerson</label><br/>
                    <input type = "checkbox"></input><label>Westinghouse</label><br/><br/><br/>
                </div>

        </details>
        </div>
        <div>
        <details>
                <summary  className = 'summary'>Past Selections</summary>
                <div><br/>

               
                 
        <span className = 'atitle'>↑↓ Firm </span> 
                {this.state.fvalue[0]}
         <div className = 'testdiv'>  <Slider
            value={this.state.fvalue}
            onChange={(e,v)=>this.setState({fvalue:v})}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"/></div> 
            {this.state.fvalue[1]}<br/>

        <span className = 'atitle'>↑↓ Global </span> 
                        {this.state.gvalue[0]}
                <div className = 'testdiv'>  <Slider
                    value={this.state.gvalue}
                    onChange={(e,v)=>this.setState({gvalue:v})}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"/></div> 
                    {this.state.gvalue[1]}<br/>
                    
                </div>
        </details>
        </div>
</div>










        )







        
    }
}
    export default (Sidefilter);