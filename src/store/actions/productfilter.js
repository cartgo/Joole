import axios from 'axios';

import * as actionTypes from './actionTypes';


export const filtershow = (cat, subcat,allsub) => {
    return dispatch => {
        let url ='http://localhost:8080/product/findByCategoryAndSubCategory?category='+
        // 'Mechanical'
        cat
        +'&subCategory='+
        subcat
        // 'HVAC fans'

        axios.get(url)
        .then(res => {
            console.log(res)
        const products = res.data;
        console.log(products)
        dispatch(filtered(products,cat, subcat,allsub))
        })
    }
}

export const filtered = (res,cat, subcat,allsub)=>{
    return {
        type:actionTypes.FILTER_SHOW,
        result:res,
        selectedCat:cat,
        selectedSubCat:subcat,
        allSubCat:allsub
    }
}
// export const filtershow = ( state, action ) => {
    //     return updateObject( state, { resultlist:action.result, selectedCat:action.selectedCat,
    //     selectedSubCat:action.selectedSubCat} );
    // };

export const cate = (res) => {
    return {
        type:actionTypes.Filter_Category,
        res:res
    }
}

export const clearselectedproduct =()=>{
    return{
        type:actionTypes.Filter_CLEARSELECTEDPRODUCT
    }
}


export const getProducts = () =>{
    return dispatch => {
        let url ='http://localhost:8080/product/all'
        // 'https://jsonplaceholder.typicode.com/posts';
        axios.get(url)
        .then(res => {
            console.log(res)
        const products = res.data;
        console.log(products)
        console.log("this is category")
       
        //  for(let post of firstPosts){
        //    this.props.onAddPost(post.id,post.userId, post.title, post.body)
        //  }
        dispatch(cate(products))
     
        })

 
    }

}


export const filter = (name,airflow) => {
    return dispatch => {
        let url =' http://localhost:8080/product/all'
        // 'https://jsonplaceholder.typicode.com/posts';
        axios.get(url)
        .then(res => {
        const posts = res.data;
         const firstPosts = posts.map(post =>{return   {
            name: post.model,
                airflow: post.series}
         })
         return firstPosts
        //  for(let post of firstPosts){
        //    this.props.onAddPost(post.id,post.userId, post.title, post.body)
        //  }
    
        }).then(firstposts => 
            {
                // console.log("in productfilter actions:")
                // console.log(firstposts)
                dispatch(filtershow(firstposts))
            })

 
    };
};

export const selectproducttoseedetail = (id,manufacturer,model,series,img,firm,global) =>{
    return dispatch => {
        let url ='http://localhost:8080/product/getdetail?id='+id.toString();
        // 'https://jsonplaceholder.typicode.com/posts';
        axios.get(url)
        .then(res => {
            console.log(res)
        const products = res.data;
        // console.log(manufacturer)
        // console.log(products)
        // console.log("this is category")
       
        //  for(let post of firstPosts){
        //    this.props.onAddPost(post.id,post.userId, post.title, post.body)
        //  }
        dispatch(putselectedproduct(products,manufacturer,model,series,img,firm,global))
        })
    }

}
export const putselectedproduct = (detail,manufacturer,model,series,img,firm,global) =>{
    // console.log(manufacturer)

    return {
        type:actionTypes.Filter_PUTSELECTEDPRODUCT,
        detail:detail,
        manufacturer:manufacturer,
        model:model,
        series:series,
        img:img,
        firm:firm,
        global:global
    }
}

export const filteronlogout = () => {
    console.log("filteronlogout")

    return{
        type:actionTypes.FILTER_ONLOGOUT
    }
 
}





export const comparing=(comparelist)=>{
    return  dispatch => {

        let reslist = []
        for(let product of comparelist){
            
            let url ='http://localhost:8080/product/getdetail?id='+product[0].toString();
            axios.get(url)
            .then(res => {
                console.log(res)
            const productdetails = res.data;
            productdetails['manufacturer']  =product[1]
            productdetails['model']  =product[2]
            productdetails['series']  =product[3]
            productdetails['img'] = product[4]
            reslist.push(productdetails)
            if(product == comparelist[comparelist.length-1]){dispatch(compare(reslist))
            }
        } )}
        console.log("reslist to compare:"+reslist)
        // dispatch(compare(reslist))

    }

}

export const compare = (reslist) =>{
    return {
        type:actionTypes.Filter_COMPARE,
        reslist:reslist
    }

}









export const filterfilter =(idlist) =>{
    return {
        type:actionTypes.Filter_FILTERFILTER,
        idlist:idlist
    }


}