import React from "react";
// import banner from "../../assets/images/Banner2025.png";
import banner from "../../assets/images/Banner.png";
import "./banner.css"

const Banner = (props) => {
	return (
		<section className="banner">
			<div className="containe">
				<img
					src={banner}
					alt=""
					width="100%"
					height="100%"
				/>	
				<p>@DePaul University</p>
				<p>Event Dates Coming Soon!</p>
				<p>24 hour hackathon event</p>
				<br/>
				<div>
					<button
						className="btn btn-secondary"
						onClick={() => {
							const popup = document.createElement("div");
							popup.style.position = "fixed";
							popup.style.top = "50%";
							popup.style.left = "50%";
							popup.style.transform = "translate(-50%, -50%)";
							popup.style.width = "80%";
							popup.style.height = "95vh";
							popup.style.backgroundColor = "#0057B7";
							popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
							popup.style.zIndex = "1000";
							popup.style.padding = "1rem";
							popup.style.borderRadius = "10px";

							// Disable scrolling
							document.body.style.overflow = "hidden";

							const iframe = document.createElement("iframe");
							iframe.src = "https://docs.google.com/forms/d/e/1FAIpQLSeQ5fs3mSQFvC8cmoHLVNzY-au9B7vXaUVdv6exrkfkU4fvnA/viewform?embedded=true"; // Replace with your desired URL
							iframe.style.width = "100%";
							iframe.style.height = "100%";
							iframe.style.border = "none";

							const closeButton = document.createElement("button");
							closeButton.textContent = "Close";
							closeButton.style.position = "absolute";
							closeButton.style.top = "10px";
							closeButton.style.right = "50px";
							closeButton.style.backgroundColor = "#f44336";
							closeButton.style.color = "white";
							closeButton.style.border = "none";
							closeButton.style.padding = "0.5rem 1rem";
							closeButton.style.cursor = "pointer";
							closeButton.style.borderRadius = "4px";

							closeButton.addEventListener("click", () => {
								document.body.style.overflow = "auto";
								document.body.removeChild(popup);
								document.removeEventListener("mousedown", handleOutsideClick); // Clean up event listener
							});

							// Function to handle clicks outside the popup
							const handleOutsideClick = (event) => {
								if (!popup.contains(event.target)) {
									document.body.style.overflow = "auto";
									document.body.removeChild(popup);
									document.removeEventListener("mousedown", handleOutsideClick); // Clean up event listener
								}
							};

							// Add the event listener to the document
							document.addEventListener("mousedown", handleOutsideClick);

							popup.appendChild(closeButton);
							popup.appendChild(iframe);
							document.body.appendChild(popup);
						}}
					>
						Sponsor Interest Form
					</button>
				</div>
			</div>
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