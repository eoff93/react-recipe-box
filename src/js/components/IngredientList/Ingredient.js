import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

export default class Ingredient extends React.Component {
  render() {
    /*
    const ingredientList = this.props.ingredients.map(function(ingredient) {
      return (

      );
    });
    */
    return (
      <ListGroupItem>
        {this.props.ingredients}
      </ListGroupItem>
    );
  }
}
