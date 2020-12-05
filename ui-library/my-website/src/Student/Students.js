import { Grid } from "@material-ui/core";
import Axios from "axios";
import React, { useState } from "react";
import Student from "./Student";

function Students() {
	let [users, setUsers] = useState([]);

	let makeApiCall = () => {
		Axios.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				console.log(response.data);
				setUsers(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<Grid container>
			<input type="button" onClick={makeApiCall} value="Make Api call"></input>
			{users.map((user) => {
				return (
					<Grid item lg={4} xs={12}>
						<Student user={user}></Student>
					</Grid>
				);
			})}
		</Grid>
	);
}

export default Students;
