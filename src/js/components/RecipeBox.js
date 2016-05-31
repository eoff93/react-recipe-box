import React from 'react';
import IngredientList from './IngredientList';
import { Panel } from 'react-bootstrap';

export default class RecipeBox extends React.Component {
  render() {
    return (
      <Panel collapsible header="Recipe Title" bsStyle="primary">
        <IngredientList />
      </Panel>
    );
  }
}
