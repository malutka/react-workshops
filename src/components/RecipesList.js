import React from 'react';
import Recipe from './Recipe';

class RecipesList extends React.Component {

    /** dążymy do tego, żeby jak najmniej logiki znajdowało się w metodzie render() 
     * oraz żeby była ona jak najbardziej czytelna , dlatego wydzieliliśmy
     * renderowanie pojedynczego przepisu do osobnej metody
     */
    renderList = () => {
        return (
            this.props.recipes.map((recipe) => {
                return <Recipe 
                    key={recipe.href} 
                    imageUrl={recipe.thumbnail} 
                    text={recipe.title} 
                    url={recipe.href} 
                    ingredients={recipe.ingredients}
                 />
            })
        )
    }

    render() {
        return (
            <div className="recipes-list">
                {this.renderList() /* potrzebujemy tutaj wyświetlić wynik działania metody renderList */}
            </div>
        )
    }
}
 export default RecipesList;