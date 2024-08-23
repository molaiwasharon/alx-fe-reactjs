import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";
import HomePage from "./HomePage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/recipes/:id" component={RecipeDetailsPage} />
      </Switch>
    </Router>
  );
};

const RecipeDetailsPage = ({ match }) => {
  const recipeId = match.params.id;
  return <RecipeDetails recipeId={recipeId} />;
};

export default App;
