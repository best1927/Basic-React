import React, {Component} from 'react';

class SearchBar extends Component
{
    constructor(props) {
        super(props);
        // Init State object
        this.state = {
            term: ''
        };
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    id='i1'
                    value={this.state.term}
                    onChange={(e) => (this.onInputChange(e))}/>
            
            </div>
        );
    }

    onInputChange(event) {
        const term = event.target.value;
        this.setState({term: term});
        this.props.onSearchChange(term);
       // this.props.onSearchChange(this.state.term);
        // console.log(  document.getElementById('i1').value);
        // console.log(event.target.value);
    }
}

export default SearchBar;