import Body from './components/navbar/Body';
import Navbar from './components/navbar/Navbar';
import './index.css';

function App() {
	return (
		<div className="main">
			<div>
				<Navbar></Navbar>
				<Body></Body>
			</div>
			<div className="end">
				<h1 className="first">Helix Nebula</h1>
				<div>
					Incididunt non veniam aliquip esse et non veniam aliquip esse edolore
				</div>
				<div>Incididunt non esse edolore</div>
				<div>©️ Helix Nebula</div>
			</div>
		</div>
	);
}

export default App;
