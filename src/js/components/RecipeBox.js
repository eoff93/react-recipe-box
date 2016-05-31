import React from 'react';
import IngredientList from './IngredientList';
import { Panel } from 'react-bootstrap';

export default class RecipeBox extends React.Component {
  render() {
    return (
      <Panel collapsible defaultExpanded header="Recipe Title">
        <IngredientList />
      </Panel>
    );
  }
}
