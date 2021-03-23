import "./App.css";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="text-start mx-4">Andrea Mestre</h1>
			</header>
			<body>
				<Introduction className="my-4" />
				<Experience />
			</body>
			<footer className="my-4">
				<h3>See you around!</h3>
			</footer>
		</div>
	);
}

export default App;
