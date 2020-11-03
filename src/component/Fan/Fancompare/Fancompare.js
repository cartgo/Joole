import React, { Component } from 'react';
import { Route,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
   import { Grid } from '@material-ui/core';
//  import img from '../../../image'
import './Fancompare.css'
 import Fancompareelement from './Fancompareelement/Fancompareelement'

class Fancompare extends Component {
    
    componentDidMount(){ 
        console.log(this.props.comparelist)
    }


render(){

const test = <div className = 'allcompareelement'> 
<div className = "compareelementheads" >
        <div className = 'compareimg' >
                {/* <img className = "compareFanimg" src={require('../../../../image/'+props.selectedproduct.img+'.PNG')} alt="标签" /> */}
        </div>
        <div className = 'belowimg'>
        <div className = 'productdetailsubtitle'>
            DESCRIPTION
        </div> <br/>
            <table style = {{backgroundColor:' rgba(128, 128, 128, 0.144)'}}>
                <tbody>
                <tr><td>                   
                Manufacturer
                    </td></tr>
                    <tr><td>                   
                   Series
                    </td></tr>
                    <tr><td>                   
                    model
                    </td></tr>
                </tbody>
            </table>

    <div className = 'productdetailsubtitle'>
            TYPE
        </div> <br/>
        <table style = {{backgroundColor:' rgba(128, 128, 128, 0.144)'}}>
                <tbody>
                <tr><td>                   
                use type 
                </td></tr>
                   
                <tr><td>                   
                application
                    </td></tr>
                    <tr><td>                   
                    mounting Location
                    </td></tr>
                    <tr><td>                   
                    accessories
                    </td></tr>
                    <tr><td>                   
                    model Year
                    </td></tr>
                </tbody>
            </table>

    <div className = 'productdetailsubtitle'>
    TECHNICAL SPECIFICATIONS
        </div> <br/>
        <table style = {{backgroundColor:' rgba(128, 128, 128, 0.144)'}}>
                <tbody>
                <tr><td>                   
                airflow
                    </td></tr>
                    {/* <tr><td>                   
                    'Manufacturer'
                    </td></tr> */}
                    <tr><td>                   
                    maxpower
                    </td></tr>
                    <tr><td>                   
                    minpower
                    </td></tr>
                    <tr><td>                   
                    maxVAC
                    </td></tr>
                    <tr><td>                   
                    minVAC
                    </td></tr>
                    <tr><td>                   
                    maxRPM
                    </td></tr>
                    <tr><td>                   
                    minRPM
                    </td></tr>
                    <tr><td>                   
                    fanSpeeds
                    </td></tr>
                    <tr><td>                   
                    dbA
                    </td></tr>
                    <tr><td>                   
                    sweepdia
                    </td></tr>
                    <tr><td>                   
                    maxHeight
                    </td></tr>
                    <tr><td>                   
                    minHeight
                    </td></tr>
                    <tr><td>                   
                    weight               
                    </td></tr>
                </tbody>
            </table>

    {/* <div className = 'productdetailsubtitle'>
    SERIES INFORMATION
    </div> <br/>
    <table>
                <tbody>
                      <tr><td>                   
                    airfoils
                    </td></tr>
                    <tr><td>                   
                    airfoilFinishes
                    </td></tr>
                    <tr><td>                   
                    hardwareFinishes
                    </td></tr>
                    <tr><td>                   
                    motor
                    </td></tr>
                    <tr><td>                   
                    exceedsEnergyStar
                    </td></tr>
                    <tr><td>                   
                    controls
                    </td></tr>
                    <tr><td>                   
                    onboardSensors
                    </td></tr>
                    <tr><td>                   
                    environment
                    </td></tr>
                    <tr><td>                   
                    accessoriesDetails
                    </td></tr>
                    <tr><td>                   
                    note1
                    </td></tr>
                    <tr><td>                   
                    note2
                    </td></tr>
                
                </tbody>
            </table> */}

    


            </div>
    </div>

     { this.props.comparelist.map(item =>{         
         return <div  
         >
          <Fancompareelement 

         selectedproduct = {item}
         >

         </Fancompareelement>
         </div>
        } )





       } 


</div>


return(

    <div className = 'fancompare' >

 {test}
              
    </div>


)












}




}




const mapStateToProps = state => {
    return {
        
        selectedproduct:state.productfilter.selectedproduct,
        comparelist:state.productfilter.comparelist
    
    
    
    }}



const mapDispatchToProps = dispatch => {
    return {

        filtershow:(cat, subcat,allsub) =>dispatch(actions.filtershow(cat,subcat,allsub))


    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Fancompare));
