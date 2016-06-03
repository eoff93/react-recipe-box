import React from 'react';
import Ingredient from './IngredientList/Ingredient';
import { ListGroup } from 'react-bootstrap';

export default class IngredientList extends React.Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <h4>Ingredients</h4>
          <hr />
        </div>

        <ListGroup fill>
          <Ingredient ingredients={this.props.ingredients} />
          <Ingredient />
          <Ingredient />
        </ListGroup>
      </div>
    );
  }
}
