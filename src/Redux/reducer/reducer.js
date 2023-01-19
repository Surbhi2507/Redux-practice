import { data_type } from "../type"

const intialState= {
    name:"",
    email:""
}
const dataReducer = (state=intialState,action)=>{
 
     switch(action.type){
        case data_type:{
            // console.log('reducer',action.payload.email)
            return{
                ...state,
                name:action.payload.fname,
                email:action.payload.email,
            }
        }
        default :{
            return state;
        }
    }
}
export default dataReducer