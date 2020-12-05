import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import Axios from "axios";

function BookForm() {
  let [bookObject, setBookObject] = useState({});

  const updateDetails = (event) => {
    setBookObject({ ...bookObject, [event.target.id]: event.target.value });
  };

  const saveBook = () => {
    Axios.post("http://localhost:3000/books", bookObject);
  };

  return (
    <div style={{ padding: "20px", margin: "20px" }}>
      <TextField
        id="title"
        label="Book Title"
        variant="outlined"
        onChange={updateDetails}
      />
      <TextField
        id="author"
        label="Book Author"
        variant="outlined"
        onChange={updateDetails}
      />
      <TextField
        id="description"
        label="Book Description"
        variant="outlined"
        onChange={updateDetails}
      />
      <Button onClick={saveBook} variant="outlined">Save Book</Button>
    </div>
  );
}

export default BookForm;
