import React from "react";

const Navbar = (props) => {
	return (
		// <h1>NAV</h1>

	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		<div style={{display: "flex", paddingLeft: "3%"}}>
			<a className="nav-link text-secondary py-0" href="#about">
				About
			</a>
			<a className="nav-link text-secondary py-0" href="#faq">
				FAQ
			</a>



			{/*<a className="nav-link text-secondary py-0" href="#schedule">*/}
			{/*	Schedule*/}
			{/*</a>*/}



			{/*<a className="nav-link text-secondary py-0" href="#sponsors">*/}
			{/*	Sponsors*/}
			{/*</a>*/}



			{/*<a*/}
			{/*	id="mlh-trust-badge"*/}
			{/*	style={{*/}
			{/*		display: "block",*/}
			{/*		maxWidth: 100,*/}
			{/*		minWidth: 60,*/}
			{/*		position: "fixed",*/}
			{/*		right: 50,*/}
			{/*		top: 0,*/}
			{/*		width: "10%",*/}
			{/*		zIndex: 10000*/}
			{/*	}}*/}
			{/*	href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=blue"*/}
			{/*	target="_blank"*/}
			{/*>*/}
			{/*	<img*/}
			{/*		src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-blue.svg"*/}
			{/*		alt="Major League Hacking 2025 Hackathon Season"*/}
			{/*		style={{width: "100%"}}*/}
			{/*	/>*/}
			{/*</a>*/}
		</div>
	</nav>
)
}

export default Navbar