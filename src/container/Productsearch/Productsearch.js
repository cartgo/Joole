import React, { Component } from 'react';
import  './Productsearch.css';
import { connect } from 'react-redux';
 import * as actions from '../../store/actions/index';
import classes from './Productsearch.css';
import Advancedsearch from '../../component/Fan/Advancedsearch/Advancedsearch';
import Modal from '../../component/UI/Modal/Modal'
// import Home from '../../container/Home';

class Productsearch extends Component { 
    state={
        selectedSubCat:this.props.selectedSubCat,
        selectbox:[],
        filterbox:[],
        filtereditem:''
,advancedsearching:false
    }

test(){
    this.setState({selectbox: this.props.allSubCat, selectedSubCat:this.props.selectedSubCat})
    console.log(JSON.stringify(this.props.selectedSubCat)+"hahaha")   
    console.log(this.props.resultlist)
}
test = this.test.bind(this)
    componentDidMount(){
    
        this.setState({selectbox: this.props.allSubCat, selectedSubCat:this.props.selectedSubCat
        ,filtereditem:''
    })
    }

    handleChange(val){
        val.preventDefault();
    
        this.setState( { filtereditem: val.target.value,
        filterbox:this.props.resultlist.filter(item => {return (
                item.model.toLowerCase().startsWith(val.target.value.toLowerCase()) 
                ||                item.series.toLowerCase().startsWith(val.target.value.toLowerCase()) ||
                item.manufacturer.toLowerCase().startsWith(val.target.value.toLowerCase()
                ) 
                )      
            
            })

            
                
          
          
     })
     if(val.target.value.replace(/(^\s*)|(\s*$)/g, '')=='' ||val.target.value == ''){
        this.props.filtershow(
            this.props.selectedCat,
              this.props.selectedSubCat,   this.props.allSubCat)
        this.setState({filterbox : []})
    }
     console.log(this.state.filterbox)
     console.log(this.state.filtereditem)

    }
    keydown(e){
        if(e.key === "Enter"){                  
            this.props.filterfilter(this.state.filterbox)
        }
    }
    onblur(){
        this.setState({filterbox : []})

    }
    onblur = this.onblur.bind(this)

    advancedsearch = this.advancedsearch.bind(this);
    advancedsearch(){
        this.setState({advancedsearching:true})

    }
    // advancedsearchCancelHandler = this.advancedsearchCancelHandler.bind(this);

    // advancedsearchCancelHandler(){
    //     console.log(this.state.advancedsearching)
    //     this.setState({advancedsearching:false})

    // }
    advancedsearchCancelHandler = () => {
        this.setState( { advancedsearching: false } );
    }


render(
    advancedsearchwindow = <Advancedsearch 
    advancedsearchCancelHandler = {this.advancedsearchCancelHandler}
    ></Advancedsearch>
){
    let m = 
    <div className = 'productsearchproductsearch'
    >
       <link rel = 'stylesheet' type = 'text/css' href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
   ></link>
             <select  className='productsearchselect'
     
             value={this.props.selectedSubCat}  
             onChange={( event ) =>{ 
            //    console.log(this.state.filteredData)
               this.setState( { selectedSubCat: event.target.value
              } ) 
            this.props.filtershow(this.props.selectedCat,event.target.value, aa[this.props.selectedCat].map(item => 
                {return {"subCategory":item.subCategory }}))
            }
         
         }> 
              {this.props.allSubCat.map((item, index) => {
                 return <option key = {index}>
                 {item.subCategory}
                </option>
                
             })} 
             </select>
   
              <input className = 'productsearchinputfilter'
             value = {this.state.filtereditem}  onChange ={( event ) =>{this.handleChange(event) }}
             onKeyDown={(e) =>{this.keydown(e)}}
             placeholder = "search..                                                                                   ▼"
             onBlur = {this.onblur}
             >
             </input> 
              
             <i onClick = {this.advancedsearch}
             style={{
                 position:"absolute",
                 left:"470px",
                 top: '20%',zIndex:'9'
             }}
             className="fa fa-search fa fa-fw" aria-hidden="true"></i>
             <br/>          
             
           <ul className = 'productsearchdropdown'>
            {this.state.filterbox.map((item,index) => (
             <li className="dropdownelement" 
             key = {index}
    
             >{item.manufacturer}&#160;{item.series}&#160;{item.model}&#160;</li>
           ))}
         </ul>

             </div>
    return(
        <div className = 'm'  >
            {m}
            <Modal show={this.state.advancedsearching} modalClosed={this.advancedsearchCancelHandler}>
                    {advancedsearchwindow}
            </Modal>
        </div>
    )
}

}

const mapStateToProps = state => {
    return {
         allSubCat:state.productfilter.allSubCat,
         selectedSubCat:state.productfilter.selectedSubCat,
         resultlist:state.productfilter.resultlist,
         selectedCat:state.productfilter.selectedCat
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        filtershow:(cat, subcat,allsub) =>dispatch(actions.filtershow(cat,subcat,allsub)),
         getProducts: () => dispatch( actions.getProducts() ),
        filterfilter:(idlist) =>dispatch(actions.filterfilter(idlist))
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Productsearch);


  const aa = {
    'Mechanical':[{"subCategory":"Others"},{"subCategory":"HVAC fans"}],
    "Others":[{"subCategory":"Others"},{"subCategory":"HVAC fans"}]
  }
  