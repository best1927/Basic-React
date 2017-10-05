import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAppContent2} from '../../actions/crmaction';

import React,{Component} from 'react';

class AppItm2 extends Component
{

    constructor(props){
        super(props);
       
    }
    componentWillMount(){
        this.props.getAppContent2('Redux Thunk Page2');
    }
    componentDidMount(){
      
    }
    render(){
        return <div> {this.props.appContent2}</div>;
    }
  
}

function mapStateToProps(state){
    // Map newState from Redux Reducer
    return {
        appContent2 :  state.crmAppItm2
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getAppContent2:fetchAppContent2},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(AppItm2);
