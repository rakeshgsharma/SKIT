import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import Axios from "axios";

function BookForm(props) {
  let [bookObject, setBookObject] = useState({
    title: '',
    author: '',
    description: ''
  });

  const updateDetails = (event) => {
    setBookObject({ ...bookObject, [event.target.id]: event.target.value });
  };

  const resetForm = (response) => {
    props.setIsEdit(false);
    props.setUpdatedBook(response.data);
    setBookObject({
      title: '',
      author: '',
      description: ''
    });
  }

  const saveBook = () => {
    if(props.isEdit) {
      Axios.put("http://localhost:8000/books/" + bookObject.id, bookObject)
      .then((response) => {
        console.log('PUT CALL IS SUCCESSFUL', response);
        resetForm(response);
      });
    } else  {
      Axios.post("http://localhost:8000/books", bookObject)
        .then((response) => {
          console.log('POST CALL IS SUCCESSFUL', response);
          resetForm(response);
        })
    }
  };

  useEffect(() => {
    setBookObject(props.editBook);
  }, [props.editBook]);

  return (
    <div style={{ padding: "20px", margin: "20px" }}>
      <TextField
        id="title"
        label="Book Title"
        variant="outlined"
        value={bookObject.title}
        onChange={updateDetails}
      />
      <TextField
        id="author"
        label="Book Author"
        variant="outlined"
        value={bookObject.author}
        onChange={updateDetails}
      />
      <TextField
        id="description"
        label="Book Description"
        variant="outlined"
        value={bookObject.description}
        onChange={updateDetails}
      />
      <Button onClick={saveBook} variant="outlined">Save Book</Button>
    </div>
  );
}

export default BookForm;
