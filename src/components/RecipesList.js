import React from 'react';
import Recipe from './Recipe';

class RecipesList extends React.Component {
    render() {

        const { recipes } = this.props;
        const renderList = recipes.map((recipe) => {
            return <Recipe 
                key={recipe.href} 
                imageUrl={recipe.thumbnail} 
                text={recipe.title} 
                url={recipe.href} 
                ingredients={recipe.ingredients}
             />
        });

        return (
            <div className="recipes-list">
                {renderList}
            </div>
        )
    }
}
 export default RecipesList;