import React from 'react';
import RecipeBox from './RecipeBox';
import AddRecipe from './AddRecipe';

export default class Layout extends React.Component {
  render() {
    return (
      <main className="container">
        <div className="well">
          <RecipeBox />
          <RecipeBox />
          <RecipeBox />
        </div>
        <AddRecipe />
      </main>
    );
  }
}
