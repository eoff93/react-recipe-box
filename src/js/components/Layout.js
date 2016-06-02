import React from 'react';
import RecipeBox from './RecipeBox';
import AddRecipe from './AddRecipe';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        { title: 'stuff', ingredients: ['stuff1', 'stuff2', 'stuff3'] },
        { title: 'things', ingredients: ['things1', 'things2', 'things3'] },
      ],
    };
  }
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
