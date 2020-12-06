import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Books from "./Books/Books";
import BookDetails from "./BookDetails/BookDetails";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BookForm from "./Forms/BookForm";
import { useState } from "react";

function App() {

  const [editBook, setEditBookData] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [updatedBook, setUpdatedBook] = useState({});
  return (
    <Router>
      <Header></Header>
      <BookForm
        editBook={editBook}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        setUpdatedBook={setUpdatedBook}
        ></BookForm>
      <Switch>
        <Route exact path="/">
          <Books
            editBookData={setEditBookData}
            setIsEdit={setIsEdit}
            updatedBook={updatedBook}
            ></Books>
        </Route>
        <Route  path="/books/:bookId">
          <BookDetails></BookDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
