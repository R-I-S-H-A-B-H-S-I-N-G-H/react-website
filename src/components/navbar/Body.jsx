import './body.css';
function Body() {
	return (
		<div className="body">
			<div className="name">
				<div className="mainname">Rishabh Singh</div>
				<div className="other">
					<a href="/game" className="game">
						Game
					</a>
					<a href="/web" className="web">
						Web
					</a>
					<a href="/dev" className="dev">
						dev
					</a>
				</div>
			</div>
		</div>
	);
}
export default Body;
