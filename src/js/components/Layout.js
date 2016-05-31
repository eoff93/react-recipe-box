import React from 'react';
import IngredientList from './IngredientList';

export default class Layout extends React.Component {
  render() {
    return (
      <main className="container">
        <IngredientList />
      </main>
    );
  }
}
