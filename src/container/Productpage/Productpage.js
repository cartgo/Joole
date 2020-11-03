import React, { Component } from 'react';
// import axios from '../../../axios';
import { Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Productpage.css';
import * as actions from '../../store/actions/index';
import Fan from '../../component/Fan/Fan';
import Fans from '../../component/Fan/Fans'
// import axios from '../../axios-orders';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Header from '../../component/Header/Header';
import Productsearch from '../../container/Productsearch/Productsearch'
import FanDetails from '../../component/Fan/FanDetail/FanDetails/FanDetails'
import Fancompare from '../../component/Fan/Fancompare/Fancompare'

class Productpage extends Component {
    state = {
        products: [],img:'',comparepath:''
    }

    componentDidMount () {
          this.setState({products: this.props.prs})
        
        console.log(this.state.products)
    }
 

    seedetail(id,manufacturer,model,series,img,firm, global){
    console.log(img+firm+global)
    this.setState({img:img})
    this.props.selectproducttoseedetail(id,manufacturer,model,series,img,firm, global)
    if(this.props.loading==true){console.log(this.props.selectedproductimg)
    this.props.history.replace( '/product/productdetail' );}

}
 

backtoselectcategory(){

  this.props.history.replace( '/searchbox' );

}

backtoselectcategory = this.backtoselectcategory.bind(this)


onclicknavbarsubcat=()=>{

  this.props.filtershow(
    this.props.selectedCat,
      this.props.selectedSubCat,   this.props.allSubCat)
this.setState({filterbox : []})


this.props.clearselectedproduct();
this.props.history.replace( '/product' );

}


    render () {
      
let briefinfo = null;
if(this.props.loading == true){
  briefinfo = 
  <div className = 'briefinfo'>
    <img  className = 'smallimg'
    src={require('../../image/'+this.props.selectedproductimg+'.PNG')} alt="标签" /> &nbsp;  &nbsp; 
<span>    {this.props.selectedproductmanufacturer} / {this.props.selectedproductmodel} / 
{this.props.selectedproductseries}          
<span className = 'briefinfored'>Past specifications: {this.props.selectedproductfirm}  
      firm / {this.props.selectedproductglobal} global</span>             
</span>
</div>
}


        var detailpath = (<span> &gt; {this.props.selectedproductseries}</span>)
        var comparepath =  (<span> {this.state.comparepath} </span>)


  
 
return(
<div className = "productPage">
        <div className = "proHeader"  >
            <Header></Header>
        </div>


        <div className = 'navbar'>
          <span  className = 'navbarcategory' onClick = {this.backtoselectcategory}>{this.props.selectedCat}</span> &gt; 


          <span onClick = {this.onclicknavbarsubcat}>{this.props.selectedSubCat} </span>{detailpath}{comparepath}
        </div><br/><br/><br/><br/>
        <div  className = "content">

  


              {briefinfo}
               <Switch>
                <Route
                path={this.props.match.path + '/productdetail'} component={FanDetails} />
                <Route 
                path={this.props.match.path + '/compare'} component={Fancompare} />

                <Route path={this.props.match.path} component={Fans} />



                <Redirect to="/" />

                </Switch>
                
        </div>
</div>)
    }
}

 const mapStateToProps = state => {
    return {
        prs: state.productfilter.resultlist
        ,selectedSubCat:state.productfilter.selectedSubCat,
        selectedCat:state.productfilter.selectedCat,allSubCat:state.productfilter.allSubCat
        ,selectedproduct:state.productfilter.selectedproduct
,         selectedproductseries:state.productfilter.selectedproductseries
,selectedproductimg:state.productfilter.selectedproductimg
,selectedproductfirm:state.productfilter.selectedproductfirm
,selectedproductglobal:state.productfilter.selectedproductglobal,


selectedproductmanufacturer:state.productfilter.selectedproductmanufacturer,
loading:state.productfilter.loading,selectedproductmodel:state.productfilter.selectedproductmodel
,comparelist:state.productfilter.comparelist
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
          filtershow:(cat, subcat,allsub) =>dispatch(actions.filtershow(cat,subcat,allsub)),
          clearselectedproduct:() => dispatch(actions.clearselectedproduct()),
          selectproducttoseedetail:(id,manufacturer,model,series,img,firm, global) => dispatch(actions.selectproducttoseedetail(id,manufacturer,model,series,img,firm, global))
   ,    filteronlogout: ()=> dispatch(actions.filteronlogout)
  }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Productpage);


  
  

  