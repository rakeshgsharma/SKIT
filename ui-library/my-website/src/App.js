import NavBar from "./NavBar";
import Students from "./Student/Students";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StudentDetails from "./Student/StudentDetails";

function App() {
	return (
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
				<Route path="/:studentName">
					<StudentDetails></StudentDetails>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
