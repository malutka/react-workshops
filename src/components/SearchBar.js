import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    state = {
        pharse: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.pharse)
    }

    onInputChange = (event) => {

        this.setState({
            pharse: event.target.value
        });
    }

    render() {
        console.log(this.state.pharse)
        return (
            <form className="search-bar"
                onSubmit={this.onFormSubmit}
            >
                <label className="search-bar__label">{this.props.label}</label>
                <input 
                    type="text" 
                    value={this.state.pharse}
                    className="search-bar__input"
                    onChange={this.onInputChange}
                />
                <div>Result word is: {this.state.pharse}</div>
            </form>
        )
    }
}
 export default SearchBar;