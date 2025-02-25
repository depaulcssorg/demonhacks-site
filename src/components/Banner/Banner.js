import React from "react";
import banner from "../../assets/images/Banner2025.png";
import "./banner.css"

const Banner = (props) => {
	return (
		<section className="banner">
			<div className="containe"> {/* Error here? Container? */}
				<img
					src={banner}
					alt=""
					width="100%"
					height="100%"
				/>
				<p>DePaul University</p>
				<p>Dates Coming Soon!</p>
				<p>24 hours</p>
			</div>
			<br/>



			{/*<div className="application-container w-100 mt-5 mb-2">*/}
			{/*	<a*/}
			{/*		className="btn btn-primary application pt-3 pr-3 pb-3 pl-3"*/}
			{/*		href="https://cssdepaul.typeform.com/to/opRKmQKY?typeform-source=www.demonhacks.org"*/}
			{/*		role="button"*/}
			{/*	>*/}
			{/*		Apply here!*/}
			{/*	</a>*/}
			{/*</div>*/}


		</section>
	)
}

export default Banner