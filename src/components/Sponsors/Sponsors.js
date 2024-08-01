import React from "react";

const Sponsors = (props) => {
	return (
		// <h1>SPONSORS</h1>

	<section className="sponsors" id="sponsors">
		<div className="container">
			<div className="column">
				<h2>Sponsors</h2>
				<h3 className="gold-color">Gold</h3>
				<div className="links gold-border"/>
				<div className="row gold">
					<img
						src="./templates/img/nt-stack-center.png"
						width="22%"
						height="22%"
						onClick={() => {
							window.open('https://www.northerntrust.com/united-states/what-we-do', '_blank')
						}}
					/>
				</div>
				<br/>
				{/* <div class="row">
  <img src="templates/img/geneva_trading.jpeg" onClick={window.open('','_blank')}>
</div> */}
			</div>
		</div>
		<div className="container text-center">
			<div className="row align-items-start">
				<div className="col-9">
					<h3 className="silver-color">Silver</h3>
					<div className="links silver-border"/>
					<div className="row silver">
						<img
							src="./templates/img/crowdstrike.jpeg"
							width="30%"
							height="40%"
							onClick={() => {
								window.open('https://www.crowdstrike.com/why-crowdstrike/', '_blank')
							}}
						/>
						<img
							src="./templates/img/discover_logo.jpeg"
							width="30%"
							height="20%"
							style={{marginLeft: 6}}
							onClick={() => {
								window.open('https://www.discover.com/', '_blank')
							}}
						/>
						<img
							src="templates/img/geneva-trading.png"
							width="25%"
							height="25%"
							style={{marginTop: 20, marginRight: 45}}
							onClick={() => {
								window.open('https://geneva-trading.com/who-we-are/', '_blank')
							}}
						/>
					</div>
					<div className="row">
						<img
							src="templates/img/saf-b.png"
							width="20%"
							height="20%"
							style={{marginLeft: "60px !important"}}
						/>
					</div>
				</div>
				<div className="col-3">
					<h3 className="bronze-color">General</h3>
					<div className="links bronze-border"/>
					<div className="row bronze">
						<img
							src="templates/img/stand-out-stickers.png"
							width="60%"
							height="60%"
							style={{marginTop: 45}}
							onClick={() => {
								window.open('http://hackp.ac/mlh-StandOutStickers-hackathons', '_blank')
							}}
						/>
					</div>
					<br/>
				</div>
			</div>
		</div>
	</section>
)
}

export default Sponsors