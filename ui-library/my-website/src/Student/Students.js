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

			console.log('The API call is made');
	};

	let makeAPostCall = () => {
		const payload = {
			id: 101,
			name: "Rakesh",
			username: "rakesh",
			email: "Sincere@april.biz",
			address: {
			  street: "Goa",
			  suite: "Apt. 556",
			  city: "Gwenborough",
			  zipcode: "92998-3874",
			  geo: {
				lat: "100",
				lng: "100"
			  }
			},
			phone: "1-770-736-8031 x56442",
			website: "hildegard.org",
			company: {
			  name: "Romaguera-Crona",
			  catchPhrase: "Multi-layered client-server neural-net",
			  bs: "harness real-time e-markets"
			}
		};
		Axios.post('https://jsonplaceholder.typicode.com/posts', payload)
			.then((response) => {
				console.log(response);
				let newUser = response.data
				setUsers([...users, newUser]);
			})
			.catch((error) => {
				console.error('The request failed', error)
			});
	}
	return (
		<Grid container>
			<input type="button" onClick={makeApiCall} value="Make GET call"></input>
			<input type="button" onClick={makeAPostCall} value="Make POST call"></input>
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
