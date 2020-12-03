import { Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Student(props) {
	return (
		<Card style={{ padding: "20px", margin: "20px" }} variant="outlined">
			<CardContent style={{ textAlign: "center" }}>
				<Typography color="textSecondary">Name:</Typography>
				<Typography variant="h3">{props.name}</Typography>
				<Typography color="textSecondary">Stream:</Typography>
				<Typography variant="h3">{props.stream}</Typography>
			</CardContent>
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
