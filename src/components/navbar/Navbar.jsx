import React from 'react';
import '../navbar/Navbar.css';
function Navbar() {
	return (
		<div className="navbar">
			<div>
				<h1 className="logo">LOGO</h1>
			</div>
			<ul className="navlinks">
				<li>
					<a href="/Home">Home</a>
				</li>
				<li>
					<a href="/Projects">Projects</a>
				</li>
				<li>
					<a href="/About">About</a>
				</li>
			</ul>
		</div>
	);
}
export default Navbar;
