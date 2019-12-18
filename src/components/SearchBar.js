import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    //chcemy móc korzystać z tekstu wpisanego w pole tekstowe, więc musimy trzymać jego wartość w stanie
    state = {
        pharse: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault(); // musimy zatrzymać domyślne przetwarzanie, żeby nie przeładowała nam się strona
        this.props.onFormSubmit(this.state.pharse); // wywołujemy metodę przekazaną w propsach; jako parametr podajemy wartość trzymaną w stanie 
                                                    // dzięki temu przekazujemy stan komponnetu do komponentu wyżej
    }

    onInputChange = (event) => {
        this.setState({
            pharse: event.target.value //zapisujemy zmiany z inputa w stanie, żeby mieć aktualną wartość
        });
    }

    render() {
        return (
            <form className="search-bar"
                onSubmit={this.onFormSubmit}
            >
                <label className="search-bar__label">{this.props.label}</label>
                <input 
                    type="text" 
                    value={this.state.pharse} // ustawiamy value na wartość trzymaną w stanie
                    className="search-bar__input"
                    onChange={this.onInputChange} //podczas wpisywania zmiany są zczytywane i zapisywane w stanie komponentu
                />
                <div>Result word is: {this.state.pharse}</div>
            </form>
        )
    }
}
 export default SearchBar;