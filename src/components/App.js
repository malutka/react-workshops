import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import RecipesList from './RecipesList';
import recipes from "../api/recipepuppy";

class App extends React.Component {

    // definiujemy domyślny stan - pustą tablicę przepisów
    state = {
        recipes: []
    };

    componentDidMount() {
        this.fetchRecipes(); // uzupełniamy tablicę przepisów po zamontowaniu komponentu
    }

    fetchRecipes = async (pharse) => {
        // wykonujemy zapytanie do API po listę przepisów - w przypadku niepodania phrase zwróci pierwsze 10 z bazy
        const response = await recipes.get('/', {
            params: {
                i: pharse
            }
        });

        this.setState({
            recipes: response.data.results //wstawiamy pobrane przepisy do stanu komponentu - React teraz wie, że należy wykonać ponownie metodę rendr()
        });
    }
    

    render() {
        return (
            <div className="app">
                <SearchBar 
                    label="Search recipes:"
                    onFormSubmit={this.fetchRecipes} // przekazujemy metodę, którą wywołamy na akcji wysłania formularza
                />
                <p>Found {this.state.recipes.length} recipes</p>
                <RecipesList 
                    recipes={this.state.recipes} // przekazujemy dane ze stanu jako props
                />
            </div>
        )
    }
}
 export default App;