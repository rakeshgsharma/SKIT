import Axios from "axios";
import { useEffect, useState } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

function BookDetails() {
  const [book, setBook] = useState({});
  const {bookId} = useParams();

  console.log(bookId);

  useEffect(() => {
    Axios.get(`http://localhost:8000/books/` + bookId)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(book);

  return (
    <div>
      <Card>
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

          <Typography color="textSecondary" gutterBottom>
            {book.description}
          </Typography>
        </CardContent>
        <Link to="/">
          <Button variant="outlined" color="primary">
              BACK
          </Button>
        </Link>
      </Card>
    </div>
  );
}

export default BookDetails;
