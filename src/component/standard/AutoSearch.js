import React from 'react'  

class AutoSearch extends React.Component {

  render() {  
    let inputStyle = this.props.inputstyle;

    return ( 
    <input type="text" className={ inputStyle + ' form-group input-Search ' } id={this.props.id}   placeholder={this.props.placeholder} />
    );
  }
}

export default AutoSearch

 