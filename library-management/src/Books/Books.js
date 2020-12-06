import Axios from "axios";
import { useEffect, useState } from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

function Books(props) {
  const [books, setBooks] = useState([]);
  
  
  useEffect(() => {
      Axios.get("http://localhost:8000/books")
        .then((res) => {
          setBooks(res.data);
          
        })
        .catch((err) => {
          console.log(err);
        });
  } , [props.updatedBook]);

  const makeEdit = (book) => {
    props.editBookData(book);
    props.setIsEdit(true);
  }

  const deleteBook = (id) =>  {
    Axios.delete("http://localhost:8000/books/" + id)
      .then((response) => {
        console.log('DELETE CALL IS SUCCESSFUL', response);
        const afterDeletionBooks = books.filter((book) => book.id !== id);
        setBooks(afterDeletionBooks);
      });
  }

  console.log(books);

  return (
    <div>
      {books.map((book) => {
         return(<Card key={book.id}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {book.id}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {book.title}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {book.author}
            </Typography>
          </CardContent>
          <CardActions>
              <Link to={"/books/" + book.id}>
              <Button variant="outlined" color="primary">
                  View Book Details
              </Button>
              </Link>
          </CardActions>
          <CardActions>
              <Button onClick={() => makeEdit(book)} variant="outlined" color="primary">
                  EDIT
              </Button>
              <Button onClick={() => deleteBook(book.id)} variant="outlined" color="primary">
                  DELETE
              </Button>
          </CardActions>
        </Card>)
      })}
    </div>
  );
}

export default Books;
