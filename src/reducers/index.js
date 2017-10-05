import {combineReducers} from 'redux';
import MenuSidebarReducer from './reducer_menu_sidebar';


const rootReducer = combineReducers(
    {
        rootMenus:MenuSidebarReducer
    }
);
export default rootReducer;