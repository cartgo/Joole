import * as actionTypes from './actions';

const initialState = {
    posts: [],  //posts
    newId:''

};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_POST:
            const newPost = {
                id:action.postData.Id?action.postData.Id:101,
                userId: action.postData.userId,
                title: action.postData.title,
                body:action.postData.body
            }
            // debugger;
            return {
               ...state,
               posts: state.posts.concat( newPost ),
                
            }
        case actionTypes.REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            }
        case actionTypes.GET_POST:
            console.log(action.posts+"action.posts")
            return {
                ...state,
                
                posts:  state.posts
            }


           
        
         case actionTypes.CHECK_POST:
             for(let i of state.posts){
                console.log(i.title)
             }
            // console.log(state.posts+"llllllllll")
            
            
            return {
                ...state,
                posts:state.posts
            }
        default:
            // console.log("state."+state.posts)
            break
    }
    return state;

};



export default reducer;