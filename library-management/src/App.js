import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Books from "./Books/Books";
import BookDetails from "./BookDetails/BookDetails";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BookForm from "./Forms/BookForm";

function App() {
  return (
    <Router>
      <Header></Header>
      <BookForm></BookForm>

      <Switch>
        <Route exact path="/">
          <Books></Books>
        </Route>
        <Route  path="/books/:bookId">
          <BookDetails></BookDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
