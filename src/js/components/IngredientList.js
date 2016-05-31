import React from 'react';
import Ingredient from './IngredientList/Ingredient';
import { Accordion } from 'react-bootstrap';

export default class IngredientList extends React.Component {
  render() {
    return (
      <Accordion>
        <Ingredient />
        <Ingredient />
        <Ingredient />
      </Accordion>
    );
  }
}
