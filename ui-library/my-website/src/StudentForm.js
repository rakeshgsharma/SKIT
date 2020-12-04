import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from '@material-ui/core'; // use one of the way to import components, not both, for the sake of uniformity

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50%',
      },
    },
  }));
export default function() {
    const classes = useStyles();

    const branchArray = ['CSE','ECE','EEE','CE','ME']; // information usually comes from the server(backend)
    const [branch, setBranch] = useState(branchArray[0]);

    const [sports, setSports] = React.useState({
        Outdoor: false,
        Indoor: false,
        Water: false,
      });

      const [genderValue, setGenderValue] = useState('Male')

    const handleChange = (event) => {
        console.log(event.target.value);
        setBranch(event.target.value);
    };

    const handleCheckBoxChange = (event) => {
        setSports({ ...sports, [event.target.name]: event.target.checked })
    }

    const handleGenderValueChange = (event) => {
        setGenderValue(event.target.value);
    }

    return (<form className={classes.root} noValidate autoComplete="off"> 
    <TextField id="standard-basic" label="First Name" /><br />
    <TextField id="filled-basic" label="Address" /><br />
    <TextField
          id="filled-select-branch"
          select
          label="Select"
          value={branch}
          onChange={handleChange}
          helperText="Please select your fruit"
          variant="filled"
        >
        {branchArray.map((element, index) => (<MenuItem key={index} value={element} >{element}</MenuItem>)) }
        </TextField><br />
        <FormControlLabel
        control={
          <Checkbox
            checked={sports.Outdoor}
            onChange={handleCheckBoxChange}
            name="Outdoor"
            color="primary"
          />
        }
        label="Outdoor"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={sports.Indoor}
            onChange={handleCheckBoxChange}
            name="Indoor"
            color="primary"
          />
        }
        label="Indoor"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={sports.Water}
            onChange={handleCheckBoxChange}
            name="Water"
            color="primary"
          />
        }
        label="Water"
      />
      <br />
      <FormControl component="fieldset" > 
        <FormLabel component="legend" fullWidth={true}>Gender</FormLabel >
        <RadioGroup row aria-label="gender" name="gender1" value={genderValue} onChange={handleGenderValueChange}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
        </FormControl>
  </form>);
}