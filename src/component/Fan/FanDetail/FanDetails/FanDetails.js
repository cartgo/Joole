import React, { Component } from 'react';
import { Route,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/index';
import FanDetail from '../FanDetail'
import './FanDetails.css';
import { Grid } from '@material-ui/core';
// import img from ''
class FanDetails extends Component {
   state={
       doc:doc,img:''
   }
    componentDidMount(){
        this.setState({img:this.selectedproductimg})
        console.log(JSON.stringify(this.props.selectedproductimg))
    }



    download = ()=>{
        let id = JSON.stringify(this.props.selectedproduct.id);
        window.open('http://localhost:8080/product/download?productId='+id+'&docname=CSI - Three Part Specification.docx')}
    download2= ()=>{
        let id = JSON.stringify(this.props.selectedproduct.id);
        window.open('http://localhost:8080/product/download?productId='+id+'&docname=Control Options.pdf')}
    download3= ()=>{
        let id = JSON.stringify(this.props.selectedproduct.id);
        window.open('http://localhost:8080/product/download?productId='+id+'&docname=Submittal.pdf')}
    download4= ()=>{
        let id = JSON.stringify(this.props.selectedproduct.id);
        window.open('http://localhost:8080/product/download?productId='+id+'&docname=BIM.rvt')}
    download5= ()=>{
        let id = JSON.stringify(this.props.selectedproduct.id);
        window.open('http://localhost:8080/product/download?productId='+id+'&docname=Elevation Views.dwg')} 
    download6= ()=>{
        let id = JSON.stringify(this.props.selectedproduct.id);
        window.open('http://localhost:8080/product/download?productId='+id+'&docname=Plan Views.dwg')}

        
render(){

const productdocleft = 
    <div> 
     <div className = 'doc'>
        <img  className = "icons" src={require('../../../../image/documenticon/word.PNG')} alt="标签" />
        <span onClick={()=>this.download()}>CSI-ASDFASDF</span>
    </div>
    <div className = 'doc'>
        <img  className = "icons" src={require('../../../../image/documenticon/pdf.PNG')} alt="标签" />
        <span onClick={()=>this.download2()}>Control Options(pdf)</span>
    </div>
    <div className = 'doc'>
        <img  className = "icons" src={require('../../../../image/documenticon/pdf.PNG')} alt="标签" />
        <span onClick={()=>this.download3()}>Submittal(pdf)</span>
    </div>
    </div>
const productdocright = 
    <div> 
    <div className = 'doc'>
        <img  className = "icons" src={require('../../../../image/documenticon/rfa.PNG')} alt="标签" />
        <span onClick={()=>this.download4()}>BIM.rvt</span>
    </div>
    <div className = 'doc'>
        <img  className = "icons" src={require('../../../../image/documenticon/dwg.PNG')} alt="标签" />
        <span onClick={()=>this.download5()}>Elevation Views.dwg</span>    
    </div>
    <div className = 'doc'>
        <img  className = "icons" src={require('../../../../image/documenticon/dwg.PNG')} alt="标签" />
        <span onClick={()=>this.download6()}>Plan Views.dwg</span>
    </div>
    </div>
    
const discription = 
    <div >
    <div   className = 'productdetailsubtitle'>DESCRIPTION</div> <br/>
    <table>
    <tbody>
    <tr >
    <td className = 'tablehead'>  manufacturer</td>  
    <td > {this.props.selectedproductmanufacturer}</td> 
    </tr> 
    <tr >
        <td className = 'tablehead'>Series</td>  
    <td> {this.props.selectedproductseries}</td>  
    </tr> 
    <tr >
    <td className = 'tablehead'>Model</td>  
    <td> {this.props.selectedproductmodel}</td> 
    </tr> 
    </tbody></table>
    </div>


const type = 
    <div >
    <div className = 'productdetailsubtitle'>TYPE</div> <br/>
    <table>
    <tbody>
    {Object.keys(this.props.selectedproduct).filter(v=>
        Object.keys(this.props.selectedproduct).indexOf(v) <6&& Object.keys(this.props.selectedproduct).indexOf(v)>0
        
        ).map((k,index) =>  {
    return <tr key = {index}>
    <td className = 'tablehead'> {k}
    </td>  
        <td> {this.props.selectedproduct[k]}
    </td>  
    </tr>})}

    </tbody></table>
    </div>

const technical = 
    <div >
    <div className = 'productdetailsubtitle'>TECHNICAL SPECIFICATIONS</div> <br/>
    <table>
    <tbody>
    {Object.keys(this.props.selectedproduct).filter(v=>
        Object.keys(this.props.selectedproduct).indexOf(v) <20&& Object.keys(this.props.selectedproduct).indexOf(v)>5
        
        ).map((k,index) =>  {
    return <tr key = {index}>
    <td className = 'tablehead'> {k}
    </td>  
        <td> {this.props.selectedproduct[k]}
    </td>  
    </tr>})}
    </tbody></table>
    </div>

const productdetails = 
    <div><div className = 'productdetailsubtitle'>SERIES INFORMATION</div> <br/>
    <table>
    <tbody>
    {Object.keys(this.props.selectedproduct).filter(v=>
        
        Object.keys(this.props.selectedproduct).indexOf(v) <30&& Object.keys(this.props.selectedproduct).indexOf(v)>19
        
        ).map((k,index) =>  {
    return <tr key = {index} className = {'tr'+index%2}>
        <td className = 'longtd'> {this.props.selectedproduct[k]} 
        {/* {'tr'+index%2} */}
    </td>  
    </tr>})}
    </tbody></table>
    </div>

const salescontact = 
    <div><div className = 'productdetailsubtitle'>SALES REPRESENTATIVE</div> <br/>
    <table>
    <tbody>
    {Object.keys(this.props.selectedproduct).filter(v=>
        
        Object.keys(this.props.selectedproduct).indexOf(v) <35&& Object.keys(this.props.selectedproduct).indexOf(v)>30
        
        ).map((k,index) =>  {
    return <tr key = {index} >
    <td className = 'tablehead'> {k}
    </td>  
    <td> {this.props.selectedproduct[k]}
    </td> 
    </tr>})}
    </tbody></table>
    </div>

const manucontact = 
    <div><div className = 'productdetailsubtitle'>MANUFACTURER</div> <br/>
    <table>
    <tbody>
    {Object.keys(this.props.selectedproduct).filter(v=>
        
        Object.keys(this.props.selectedproduct).indexOf(v)>34
        
        ).map((k,index) =>  {
    return <tr key = {index} >
    <td className = 'tablehead'> {k}
    </td>         
     <td> {this.props.selectedproduct[k]}
    </td> 
    </tr>})}
    </tbody></table>
    </div>



    return(
        <div>
 
            <span  id="anchorId1"></span>
            <div className = 'fandetailnavwrap'>
            <div className = 'fandetailnav'>
             <a href="#anchorId1" >Product Summary</a>&#160; &#160; 
             </div>
             <div className = 'fandetailnav'>
                <a href="#anchorId2" >Product Details
                </a>&#160;&#160;     </div>
             <div className = 'fandetailnav'>
                 <a href="#anchorId3" >Product Documentation</a>&#160;&#160;  </div>
             <div className = 'fandetailnav'>
                 <a href="#anchorId4" >Contact</a>
             </div>
             </div>
             


<div   className = 'fandetailcontent'>
<Grid container spacing={0}>
    <div className = 'productdetailtitle'>Product Summary</div>
    <Grid item xs={6}  >
        <Grid container spacing={0} >
                <Grid item xs={12}  >
                {discription}
                {type}
                </Grid>
        </Grid>
    </Grid>
    <Grid item xs={6}>
        {technical}
    </Grid>
</Grid><span  id="anchorId2"></span>
<br/><br/><br/><br/>
<Grid container spacing={0} >
    <div className = 'productdetailtitle'>Product Details</div>
    <Grid item xs={12}  id="anchorId3">
    {productdetails}
    </Grid>
</Grid>
<br/><br/>
<Grid container spacing={0}  >
    <div className = 'productdetailtitle'>Product Documentation</div><br/><br/>
    <Grid item xs={6}  >
    {productdocleft}
    </Grid>
    <Grid item xs={6}  >
    {productdocright}
    </Grid>
</Grid>
<br/><br/>
<Grid container spacing={0} id="anchorId4">
    <div className = 'productdetailtitle'>Contact</div><br/><br/>
    <Grid item xs={6}  >
    {salescontact}
    </Grid>
    <Grid item xs={6}  >
    {manucontact}
    </Grid>
</Grid>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </div>
    )
}
}

const mapStateToProps = state => {
    return {
        prs: state.productfilter.resultlist
        ,selectedSubCat:state.productfilter.selectedSubCat,
        selectedCat:state.productfilter.selectedCat
        ,selectedproduct:state.productfilter.selectedproduct
        ,selectedproductseries:state.productfilter.selectedproductseries
        ,selectedproductmanufacturer:state.productfilter.selectedproductmanufacturer
        ,selectedproductmodel:state.productfilter.selectedproductmodel


        ,selectedproductimg:state.productfilter.selectedproductimg



        ,selectedproductfirm:state.productfilter.selectedproductfirm
        ,selectedproductglobal:state.productfilter.selectedproductglobal
,loading:state.productfilter.loading

    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
          filtershow:(cat, subcat,allsub) =>dispatch(actions.filtershow(cat,subcat,allsub)),
          clearselectedproduct:() => dispatch(actions.clearselectedproduct()),
          selectproducttoseedetail:(id,manufacturer,model,series) => dispatch(actions.selectproducttoseedetail(id,manufacturer,model,series))
}
  };
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FanDetails));


  
  

  const doc = [
    'CSI - Three Part Specification.docx',
    'Submittal.pdf',
    'Control Options.pdf',
    'Photometric Data.ies',
    'BIM.rvt',
    'Plan Views.dwg',
    'Elevation Views.dwg'

  ]