import {combineReducers} from 'redux';
import MenuSidebarReducer from './reducer_menu_sidebar';
import CRMAppItem1Reducer from './reducer_crm_appitem1';
import CRMAppItem2Reducer from './reducer_crm_appitem2';
const rootReducer = combineReducers(
    {
        rootMenus:MenuSidebarReducer,
        crmAppItm1:CRMAppItem1Reducer,
        crmAppItm2:CRMAppItem2Reducer
    }
);
export default rootReducer;