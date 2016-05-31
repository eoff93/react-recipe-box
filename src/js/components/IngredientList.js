import React from 'react';
import Ingredient from './IngredientList/Ingredient';
import { PanelGroup } from 'react-bootstrap';

export default class IngredientList extends React.Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <h3>Ingredients</h3>
          <hr />
        </div>

        <PanelGroup>
          <Ingredient />
          <Ingredient />
          <Ingredient />
        </PanelGroup>
      </div>
    );
  }
}
