import React from 'react';
import Ingredient from './IngredientList/Ingredient';

export default class Layout extends React.Component {
  render() {
    return (
      <main className="container">
        <Ingredient />
      </main>
    );
  }
}
