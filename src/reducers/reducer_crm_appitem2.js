import {FETCH_APP_CONTENT2} from '../actions/crmaction.js';

export default (state=null,action)=>{
   switch(action.type){
        case FETCH_APP_CONTENT2 :
      console.log(action.payload);
      if (action.error){
        return action.payload;
      }
      else{
        return action.payload.TestPost2Result;
      }
         
    }
    return state;

   /* const rootItems = MenuAPI('CRM','CRM');      
    return rootItems;*/

    
}