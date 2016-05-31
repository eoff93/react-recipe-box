import React from 'react';
import Ingredient from './IngredientList/Ingredient';
import { PanelGroup } from 'react-bootstrap';

export default class IngredientList extends React.Component {
  render() {
    return (
      <PanelGroup>
        <Ingredient />
        <Ingredient />
        <Ingredient />
      </PanelGroup>
    );
  }
}
