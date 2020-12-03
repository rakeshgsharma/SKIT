import React from "react";

import { useParams } from "react-router-dom";

export default function StudentDetails() {
	let { studentName } = useParams();
	return <div> Student Name: {studentName}</div>;
}
