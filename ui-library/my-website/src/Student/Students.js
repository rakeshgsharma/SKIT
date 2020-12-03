import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Student from "./Student";

function Students() {
	let [students, setStudents] = useState([
		{ name: "Rajat", stream: "CSE" },
		{ name: "Ajit", stream: "ECE" },
		{ name: "Tamana", stream: "MECH" },
		{ name: "Vani", stream: "CSE" },
	]);
	return (
		<Grid container>
			{students.map((student) => {
				return (
					<Grid item lg={4} xs={12}>
						<Student name={student.name} stream={student.stream}></Student>
					</Grid>
				);
			})}
		</Grid>
	);
}

export default Students;
