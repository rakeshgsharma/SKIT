import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core'; // use one of the way to import components, not both, for the sake of uniformity

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
export default function() {
    const classes = useStyles();

    const fruitsArray=['Apples', 'Bananas', 'Grapes', 'Guavas', 'Oranges']; // information usually comes from the server(backend)

    const [fruits, setFruits] = useState(fruitsArray[3]);

    const handleChange = (event) => {
        console.log(event.target.value);
        setFruits(event.target.value);
    };


    return (<form className={classes.root} noValidate autoComplete="off">
    <TextField error id="standard-basic" label="First Name" helperText="As per govt docs" />
    <TextField id="filled-basic" label="Last Name" variant="filled" />
    <TextField id="outlined-basic" label="Outlined" variant="outlined" helperText="Some important text" />
    <TextField
          id="filled-select-fruits"
          select
          label="Select"
          value={fruits}
          onChange={handleChange}
          helperText="Please select your fruit"
          variant="filled"
        >
        {fruitsArray.map((element, index) => (<MenuItem key={index} value={element} >{element}</MenuItem>)) }
        </TextField>
        <br/>
        <Button disableRipple={true} fullWidth={true}>button</Button>
  </form>);
}