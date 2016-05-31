import React from 'react';
import Ingredient from './IngredientList/Ingredient';

export default class IngredientList extends React.Component {
  render() {
    return (
      <div>
        <Ingredient />
        <Ingredient />
        <Ingredient />
      </div>
    );
  }
}
