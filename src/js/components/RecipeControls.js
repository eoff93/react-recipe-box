import React from 'react';
import Edit from './RecipeControls/Edit';
import Delete from './RecipeControls/Delete';
import { ButtonToolbar } from 'react-bootstrap';

export default class RecipeControls extends React.Component {
  render() {
    return (
      <ButtonToolbar className="pull-left">
        <Edit />
        <Delete />
      </ButtonToolbar>
    );
  }
}
