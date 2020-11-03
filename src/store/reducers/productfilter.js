import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    resultlist:[],
    loading: false,
    allproducts:[],
    selectedCat:'Mechanical',
    selectedSubCat:'',
    allSubCat:[]
    ,selectedproduct:'',
    selectedproductseries:'',
    selectedproductmodel:'',
    selectedproductmanufacturer:'',
    selectedproductimg:'' ,
    selectedproductfirm:'',
    selectedproductglobal:'',
    comparelist:[],loading:false
};

// const passSelect = (state,action) => {
//     return updateObject(state,)
// }

const filtershow = ( state, action ) => {
    return updateObject( state, { resultlist:action.result, selectedCat:action.selectedCat,
    selectedSubCat:action.selectedSubCat,
allSubCat:action.allSubCat
} );
};


const getCategory=(state,action)=>{
    return updateObject(state,{allproducts:action.res})
}


const cleareselectedproduct = (state,action) =>{
    return updateObject(state, {
        selectedproduct:''
        ,selectedproductmanufacturer:'',
        selectedproductmodel:'',
        selectedproductseries:'',selectedproductimg:'',loading:false,
        comparelist:[]
    })
}

const selectproducttoseedetail = (state,action) =>{
    return updateObject(state,
        {//id,manufacturer,model,series
         selectedproduct:action.detail,
         selectedproductmanufacturer:action.manufacturer,
         selectedproductmodel:action.model,
         selectedproductseries:action.series,
         selectedproductimg:action.img,
         selectedproductfirm:action.firm,
         selectedproductglobal:action.global
        ,loading:true
        })
}

const compare = (state,action) =>{
return updateObject(state,
    {
        comparelist:action.reslist
    })
}



const clearprops = (state,action) =>{
    console.log("clearprops:")
    
    return updateObject(state,
{    resultlist:[],
    loading: false,
    allproducts:[],
    selectedCat:'Mechanical',
    selectedSubCat:'',
    allSubCat:[]
    ,selectedproduct:'',
    selectedproductseries:'',
    selectedproductmodel:'',
    selectedproductmanufacturer:'',
    selectedproductimg:'' ,
    selectedproductfirm:'',
    selectedproductglobal:'',
    comparelist:[],loading:false

})
}

const filterfilter = (state,action)=>{
    return updateObject(state,

{
    resultlist: action.idlist
}
    )

}
const reducer = ( state = initialState, action ) => {
    console.log('filterreducer')
    switch ( action.type ) {
        case actionTypes.FILTER_SHOW: return filtershow(state, action);
        case actionTypes.Filter_Category:return getCategory(state,action);
        case actionTypes.Filter_CLEARSELECTEDPRODUCT:return cleareselectedproduct(state,action);
        case actionTypes.Filter_PUTSELECTEDPRODUCT:return selectproducttoseedetail(state,action)
        case actionTypes.Filter_COMPARE:return compare(state,action);
        case actionTypes.FILTER_ONLOGOUT:return clearprops(state,action);
        case actionTypes.Filter_FILTERFILTER:return filterfilter(state,action);

        default:
            return state;
    }
};

export default reducer;