import NavBar from "./NavBar";
import Students from "./Student/Students";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StudentDetails from "./Student/StudentDetails";
import Form from "./Form";
import StudentForm from "./StudentForm";

function App() {
	return (
		<>
		<Router>
			<div>
				<NavBar></NavBar>
			</div>
			<Switch>
				<Route exact path="/">
					<main>
						<Students></Students>
					</main>
				</Route>
				<Route exact path="/form">
					<Form></Form>
				</Route>
				<Route exact path="/student-form">
					<StudentForm></StudentForm>
				</Route>
				<Route path="/:studentName">
					<StudentDetails></StudentDetails>
				</Route>
			</Switch>
		</Router>
		</>
	);
}



export default App;
