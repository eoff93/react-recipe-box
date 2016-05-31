import React from 'react';
import RecipeBox from './RecipeBox';
export default class Layout extends React.Component {
  render() {
    return (
      <main className="container">
        <RecipeBox />
      </main>
    );
  }
}
