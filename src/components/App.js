import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import RecipesList from './RecipesList';
import recipes from "../api/recipepuppy";

class App extends React.Component {

    state = {
        recipes: [],
        isLoading: false
    };

    fetchRecipes = async (pharse) => {
        this.setState({
            isLoading: true
        })
        const response = await recipes.get('/', {
            params: {
                q: pharse
            }
        });

        this.setState({
            recipes: response.data.results,
            isLoading: false
        });
    }
    

    render() {

        return (
            <div className="app">
                <SearchBar 
                    label="Search recipes:"
                    onFormSubmit={this.fetchRecipes}
                />
                <p>Found {this.state.recipes.length} recipes</p>
                {!this.state.isLoading ? <RecipesList 
                    recipes={this.state.recipes}
                />: <p>Loading...</p>}
            </div>
        )
    }
}
 export default App;