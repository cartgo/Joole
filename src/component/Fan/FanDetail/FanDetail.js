
// http://localhost:8080/product/download
//         <button onClick={this.download}>下载</button>
// download = ()=>{window.open(`http://localhost:8080/product/download`)}
import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import { Route,withRouter } from 'react-router-dom';
import * as actions from '../../../store/actions/index';
import './FanDetail.css';
import { Grid } from '@material-ui/core';

const FanDetail    = ( props ) => (
<div>

 

<Grid container spacing={0} >
        <Grid item xs={6}  >
        <br/> <br/><div className = 'productdetailtitle'>PRODUCT SUMMARY</div> <br/>
        </Grid>
        <Grid item xs={6} >
        <br/> <br/><div className = 'productdetailtitle'>PRODUCT SUMMARY</div> <br/>
        </Grid>
        <Grid item xs={6}  >
            <table className = 'productsummarytypetable'>
                <thead>
                        <tr>
                        <th>ID</th>
                        <th>USER ID</th>
                        </tr>
                </thead>
                <tbody>
                <tr>
                    <td>asdf</td>
                    <td>asdf</td>
                </tr>
                </tbody>
            </table>
        </Grid>
     
        <Grid item xs={6}   >
            <table className = 'productsummarytypetable'>
                <thead>
                        <tr>
                        <th>ID</th>
                        <th>USER ID</th>
                        </tr>
                </thead>
                <tbody>
                <tr>
                    <td>asdf</td>
                    <td>asdf</td>
                </tr>
                </tbody>
            </table>
        </Grid>
</Grid>


<br/> <br/>

 <br/>DESCRIPTION
 <br/>{props.manufacturer}
 <br/>{props.series}
 <br/>{props.model}
 <br/>TYPE
 <br/>{props.userType}
 <br/>{props.application}
 <br/>{props.mountingLocation}
 <br/>{props.accessories}
 <br/>{props.modelYear}
 <br/>TECHNICAL SPECIFICATIONS
 <br/>{props.airflow}
 <br/>{props.minpower}
 <br/>{props.maxpower}
 <br/>{props.minVAC}
 <br/>{props.maxVAC}
 <br/>{props.minRPM}
 <br/>{props.maxRPM}

 <br/>{props.fanSpeeds}

 <br/>{props.dbA}
 <br/>{props.sweepdia}
 <br/>{props.minHeight} <br/>{props.maxHeight}

 <br/>{props.weight}



 <br/> <br/>PRODUCT DETAILS
 <br/> SERIES INFORMATION
 <br/>{props.airfoils}
 <br/>{props.airfoilFinishes}
 <br/>{props.hardwareFinishes}
 <br/>{props.motor}
 <br/>{props.controls}
 <br/>{props.exceedsEnergyStar}
 <br/>{props.onboardSensors}
 <br/>{props.environment}
 <br/>{props.accessoriesDetails}
 <br/>{props.note1}
 <br/>{props.note2}
 ///////////////////////////////////////<div id="anchorId">锚点1</div>

 <br/> <br/>PRODUCT DOCUMENTATION

 <br/> <br/>CONTACT
 <br/>SALES REPRESENTATIVE
 <br/>{props.salesName}
 <br/>{props.salesPhone}
 <br/>{props.salesEmail}
 <br/>{props.salesWeb}
 <br/>MANUFACTURER
 <br/>{props.manufacturerName}
 <br/>{props.manufacturerPhone}
 <br/>{props.manufacturerEmail}
 <br/>{props.manufacturerWeb}







</div>





    
)
export default FanDetail;