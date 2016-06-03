import React from 'react';
import IngredientList from './IngredientList';
import RecipeControls from './RecipeControls';
import { Panel } from 'react-bootstrap';

export default class RecipeBox extends React.Component {
  render() {
    return (
      <Panel collapsible header={this.props.title} bsStyle="primary">
        <IngredientList ingredients={this.props.ingredients}/>
        <RecipeControls />
      </Panel>
    );
  }
}
