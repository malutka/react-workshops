import React from 'react';

class Recipe extends React.Component {
    render() {
        
        return (
            <div className="recipe">
                <img style={{width: "100px"}} src={this.props.imageUrl} />
                <div>
                    <a href={this.props.url} target="_blank">{this.props.text}</a>
                    <p>{this.props.ingredients}</p>
                </div>
            </div>
        )
    }
}
 export default Recipe;