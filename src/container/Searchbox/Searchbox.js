import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Glyphicon } from 'react-bootstrap';
import * as actions from '../../store/actions/index';
import classes from './Searchbox.css'
import Home from '../../container/Home';
import { Route, Redirect } from 'react-router-dom';
import Productpage from '../Productpage/Productpage'
class Searchbox extends Component { 

state = {
  categorylist:[]
  ,
  k:'' ,
  kk:[],
  category:'Mechanical',
  subcategory:'',
  searchsource:[],
  filteredData:[]
}
 
componentDidMount(){
 
  console.log(aa[this.state.category])
  this.getprod()
  this.setState({
    categorylist:sample,
    category:this.props.selectedCat
  })
console.log(this.state.filteredData)
}

getprod(){
 
    this.props.getProducts()
  
}
 
handleChange=(val)=> {
  val.preventDefault();
  this.setState( { subcategory: val.target.value })
// var filteredData=[];
// filteredData = aa[this.state.category].map(item => 
//       {return {"subCategory":item.subCategory }}).filter(item => {return item.subCategory.toLowerCase().startsWith(val.target.value.toLowerCase())})
 
// this.setState({filteredData:[...filteredData]})
this.setState({filteredData: aa[this.state.category].map(item => 
  {return {"subCategory":item.subCategory }}).filter(item => 
    {return item.subCategory.toLowerCase().startsWith(val.target.value.toLowerCase())})})



if(val.target.value.replace(/(^\s*)|(\s*$)/g, '')=='' ||val.target.value == ''){
  this.setState({k:''
  // ,kk:[]
})
  this.setState({filteredData : []})
}

this.setState({        
  k: aa[this.state.category].map(item => 
    {return {"subCategory":item.subCategory }}).filter(item => 
      {
        
        return  item.subCategory.toLowerCase().
        startsWith(val.target.value.toLowerCase())
      
      
      }).length?   aa[this.state.category].map(item => 
        {return {"subCategory":item.subCategory }}).filter(item => 
          {
            
            return  item.subCategory.toLowerCase().
            startsWith(val.target.value.toLowerCase())
          
          
          })[0].subCategory:[]
      
      })
}
 

 











keydown = (e) =>{
if(e.key === "Enter"){
 
  this.props.filtershow(
    this.state.category,
      this.state.k,
      aa[this.state.category].map(item => 
      {return {"subCategory":item.subCategory }}))
      this.ContinuedHandler();
}


}

 

ContinuedHandler = () => {
  this.props.history.replace( '/product' );
}


onblur(e){
   if (e.target.id!='dropdown'){this.setState({filteredData : []})
}
}
// onblur = this.onblur.bind(this)


  render(){



    const info = (
      (
        // <div  style={{border:"solid" }} >

 <div style={{position: "absolute", left:"27%",backgroundColor:"white", 
 borderRadius:"4px", border:"solid", borderColer:"white",height:"47px",width:"600px" }}>
    <link rel = 'stylesheet' type = 'text/css' href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
></link>
          <select  
          style={{position:"absolute",
          left:"0%", height:"47px",width:"100px",backgroundColor:"#c5c5c586",border:"solid,15px", borderRadius:"4px", 
          borderColor:"#5f5b5bc4",textAlign:'middle',}} 
        //, border-radius:"4px",border:"1px", solid "#DBDBDB"
          // id="mySelect"  
          value={this.state.category}  
          onChange={( event ) =>{ 
            // console.log(this.state.k+'asdf')
            console.log(this.state.filteredData)
            this.setState( { category: event.target.value         } )  
          }
      
      }> 
           {this.state.categorylist.map((item, index) => {
            return <option key = {index}>
              {item.category}
             </option>
             
          })} 
          </select>

          <input style={{  borderColor:"transparent",height:"40px",position:"absolute",
          left:"16.7%",width:"440px"
                  }} 
          value = {this.state.subcategory}  onChange ={( event ) =>{this.handleChange(event) }}
          onKeyDown={(e) =>{this.keydown(e)}}
          placeholder = "search..                                                                                    ▼"
          // onBlur = {(e)=>this.onblur(e)}
          >
          </input> 
           
          <i style = {{
            position: "absolute",
            right:"3%",
            left:'500px',
            top: "33%",
          
          }}  className="fa fa-search fa fa-fw" aria-hidden="true"></i>
          <br/>          
          <ul style={{  borderColor:"transparent",height:"40px",position:"absolute",
          left:"0",width:"440px"
                  }}                  >
         {this.state.filteredData.map((item,index) => (
          <li className = 'hoverblue' id = 'dropdown'
           onClick = {()=>{ 

            this.props.filtershow(
              this.state.category,
               item.subCategory,
                aa[this.state.category].map(item => 
                {return {"subCategory":item.subCategory }})) 
                this.ContinuedHandler();
          }}
          
          style={{ border:"solid,15px", textAlign:'left',listStyleType:'none',

          borderColor:"#5f5b5bc4",height:"40px",position:"absolute",
          
          left:"21%",width:"420px" }} 
          key = {index}
 
          >{item.subCategory}</li>
        ))}
      </ul>


      
          {/* <span  style={{float:"right",height:"47px"}}  className="input-group-btn">
                        <button  style={{backgroundColor:"transparent",borderColor:"transparent",float:"right",height:"47px"}} className="btn btn-default" type="submit">
                           <span className="glyphicon glyphicon-search">click</span>
                        </button>
                    </span> */}
          </div>

        // </div>
      )
    )


   
    return (
    
    
    <div>
      <Home></Home>
              {info} 
              <br/><br/>
              {/* <span>category: {this.state.category}</span><br/><span>subcategory:  {this.state.subcategory}</span> */}
              {/* <br/>filtereddata:  {this.state.filteredData} */}
              {/* <button onClick = {this.test}>test</button> */}
              <br></br><br></br>
              <br></br><br></br>
              {/* <button onClick = {this.ContinuedHandler}>testcheckout</button> */}
              {/* <Route
                        path={this.props.match.path + '/product'}
                        component={Productpage} /> */}
 </div>

   
    )
    
}}

const mapStateToProps = state => {
  return {
    selectedCat:state.productfilter.selectedCat,
      prs: state.productfilter.allproducts,
      allSubCat:state.productfilter.allSubCat
  };
};

const mapDispatchToProps = dispatch => {
  return {
      filtershow:(cat, subcat,allsub) =>dispatch(actions.filtershow(cat,subcat,allsub)),
       getProducts: () => dispatch( actions.getProducts() ) 
 
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbox);


const sample = [
  {
    "category": "Mechanical",
  },
  {
    "category": "Others"
    }]

    const aa = {
      'Mechanical':[{"subCategory":"Others"},{"subCategory":"HVAC fans"}],
      "Others":[{"subCategory":"Others"},{"subCategory":"HVAC fans"}]
    }
      
    