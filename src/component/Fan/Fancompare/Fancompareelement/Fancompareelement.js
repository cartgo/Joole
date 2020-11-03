
import React, { Component } from 'react';

const fancompareelement = ( props ) =>  (
// import img from '../../../../image/'



    <div className = "compareelement" >
        <div className = 'compareimg' >
                <img className = "compareFanimg" src={require('../../../../image/'+props.selectedproduct.img+'.PNG')} alt="标签" />
        </div>
        <div className = 'belowimg'>
        <div className = 'productdetailsubtitle'>
            {/* DESCRIPTION */} 
        </div> <br/>
            <table>
                <tbody>
                {Object.keys(props.selectedproduct).filter(v=>
                    Object.keys(props.selectedproduct).indexOf(v) <42&& Object.keys(props.selectedproduct).indexOf(v)>38
                    
                    ).map((k,index) =>  {
                return <tr key = {index}>
                {/* <td className = 'tablehead'> {k}
                </td>   */}
                    <td> {props.selectedproduct[k]}
                </td>  
                </tr>})}
                </tbody>
            </table>

    <div className = 'productdetailsubtitle'>
            {/* TYPE */} 
        </div> <br/>
            <table>
                <tbody>
                {Object.keys(props.selectedproduct).filter(v=>
                    Object.keys(props.selectedproduct).indexOf(v) <6&& Object.keys(props.selectedproduct).indexOf(v)>0
                    
                    ).map((k,index) =>  {
                return <tr key = {index}>
                {/* <td className = 'tablehead'> {k}
                </td>   */}
                    <td> {props.selectedproduct[k]}
                </td>  
                </tr>})}
                </tbody>
            </table>

    <div className = 'productdetailsubtitle'>
    {/* TECHNICAL SPECIFICATIONS */}
        </div> <br/>
            <table>
                <tbody>
                {Object.keys(props.selectedproduct).filter(v=>
                    Object.keys(props.selectedproduct).indexOf(v) <20&& Object.keys(props.selectedproduct).indexOf(v)>5
                    && Object.keys(props.selectedproduct).indexOf(v)!=18
                    ).map((k,index) =>  {
                return <tr key = {index}>
                {/* <td className = 'tablehead'> {k}
                </td>   */}
                    <td> {props.selectedproduct[k]}
                </td>  
                </tr>})}
                </tbody>
            </table>

    <div className = 'productdetailsubtitle'>
    {/* SERIES INFORMATION */}
    </div> <br/>
            {/* <table>
                <tbody>
                {Object.keys(props.selectedproduct).filter(v=>
                    (Object.keys(props.selectedproduct).indexOf(v) <30&& Object.keys(props.selectedproduct).indexOf(v)>19)
                    || Object.keys(props.selectedproduct).indexOf(v)==18
                    ).map((k,index) =>  {
                return <tr key = {index}>
                
                    <td> {props.selectedproduct[k]}
                </td>  
                </tr>})}
                </tbody>
            </table> */}

     


            </div>
    </div>






)

export default fancompareelement;