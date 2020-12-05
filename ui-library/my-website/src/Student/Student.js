import { Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Student(props) {
	return (
		<Card style={{ padding: "20px", margin: "20px" }} variant="outlined">
			<CardContent style={{ textAlign: "center" }}>
				<Typography color="textSecondary">Name:</Typography>
				<Typography variant="h3">{props.user.name}</Typography>
				<Typography color="textSecondary">Address:</Typography>
				<Typography variant="h3">{props.user.address.street}</Typography>
			</CardContent>
			<Grid container xs={6} direction="row" justify="center" alignItems="center">
				<Grid item>
					<Typography variant="h3">{props.user.address.geo.lat}</Typography>
				</Grid>
				<Grid item>
					<Typography variant="h3">{props.user.address.geo.long}</Typography>
				</Grid>
			</Grid>
			<Grid container direction="row" justify="center" alignItems="center">
				<CardActions>
					<Link to={props.name}>
						{/* <Button size="large" variant={"outlined"} color="secondary"> */}
						Student Details
						{/* </Button> */}
					</Link>
				</CardActions>
			</Grid>
		</Card>
	);
}

export default Student;
