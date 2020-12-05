import Axios from "axios";
import { useEffect, useState } from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  
  
  useEffect(() => {
      Axios.get("http://localhost:3000/books")
        .then((res) => {
          setBooks(res.data);
          
        })
        .catch((err) => {
          console.log(err);
        });

} , [])

console.log(books);

  return (
    <div>
        
      {books.map((book) => {
         return(<Card>
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
        </Card>)
      })}
    </div>
  );
}

export default Books;
