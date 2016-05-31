import React from 'react';
import IngredientList from './IngredientList';
import RecipeTitle from './RecipeTitle/RecipeTitle';

export default class RecipeBox extends React.Component {
  render() {
    return (
      <div className="well">
        <RecipeTitle />
        <IngredientList />
      </div>
    );
  }
}
