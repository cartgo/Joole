import React, { Component } from 'react';
import { Route,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Fan from './Fan';
import './Fans.css'
import { Grid } from '@material-ui/core';
import Sidefilter from '../../container/Sidefilter/Sidefilter';
class Fans extends Component {
    state = {
        products: [],
    checked:[]
    // comparelist:[]
    }

    componentDidMount () {
      
         this.setState({products: this.props.prs})
        
        console.log(this.state.products)
    }
 

    seedetail(id,manufacturer,model,series,img,firm, global){
        console.log(img+firm+global)
        this.props.selectproducttoseedetail(id,manufacturer,model,series,img,firm, global)

    this.props.history.replace( '/product/productdetail' );

}


    updatechecked(e,id,manufacturer,model,series,img){

                    console.log(e.target.value); 
                    // console.log(id+manufacturer+model+series+img)    
                    let temp=[...this.state.checked]
                    let thisproduct = [];
                    thisproduct.push(id,manufacturer,model,series,img)
                    if(e.target.checked==true ){  
                        temp.push(thisproduct)
                        this.setState({checked :temp})
                        }else{     
                            temp = temp.filter(item => {return item[0] !==id})
                        this.setState({checked :temp}) }
                    console.log(this.state.checked) }



    comparing(){
        this.props.comparing(this.state.checked)
        console.log('this.state.checked')
        this.props.history.replace( '/product/compare' )
    }
 
    render () {
         let showProduct = null;
         showProduct =(
            ( 
                <div className = 'showproduct'>
              {this.props.prs.map((post,index) =>{
                  return <div key = {index}
                 style = {{width:'24%', margin:"2px",display:'inline-block',float:"left"}}
                ><Fan key={post.id}
                clicked = {() => this.seedetail(post.id,post.manufacturer,post.model,post.series,post.img,post.firm,post.global )}
                            id = {post.id} 
                             manufacturer = {post.manufacturer}   
                             model = {post.model} 
                             series = {post.series}   
                              airflow = {post.airflow}   
                              maxpower = {post.maxpower} 
                              dbA = {post.dbA}   
                              sweepdia = {post.sweepdia}   
                              firm = {post.firm} 
                             manufacturer = {post.manufacturer}   
                             global = {post.global} 
                             img =  {post.img}
                             checked = {
                                // (e) => console.log(e.target.checked)
  (e) => this.updatechecked(e,
                            post.id,post.manufacturer,post.model,post.series,post.img )
                            }


                             /> 
                             </div>
                 }
             )}
             
            </div>
             )
      )




return(
                <div className = 'fanspage'>                 
                    <button 
                        style = {{float:'left',marginLeft:'26%',marginBottom:'2px'}}
                        disabled = {this.state.checked.length==0} 
                        onClick = {()=>this.comparing()}>compare
                    </button>    


                    <Grid container spacing={0}   alignItems="flex-start"
 >
                        <Grid item xs={3}  >
                        <Sidefilter ></Sidefilter>
                        </Grid>
                        <Grid item xs={9} className = 'test' >
                        {showProduct}  
                        </Grid>
                    </Grid>
                    <br/>
                    <br/><br/>                           
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

    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
          filtershow:(cat, subcat,allsub) =>dispatch(actions.filtershow(cat,subcat,allsub)),
          clearselectedproduct:() => dispatch(actions.clearselectedproduct()),
          selectproducttoseedetail:(id,manufacturer,model,series,img,firm, global) => dispatch(actions.selectproducttoseedetail(id,manufacturer,model,series,img,firm, global))
        ,comparing:(comparelist) => dispatch(actions.comparing(comparelist))
        
        }
  };
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Fans));


  
  

  