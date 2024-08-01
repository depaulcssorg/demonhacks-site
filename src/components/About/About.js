import React from "react";
import "./about.css"
import mailIcon from "../../assets/images/mail.png"
import discordLogo from "../../assets/images/discord-logo.png"
import linkedinLogo from "../../assets/images/linkedin.png"

const About = (props) => {
	return (
		// <h1>About COMPONENT</h1>

	<section className="about" id="about">
		<div className="container">
			<h1
				style={{
					fontFamily: "Montserrat",
					fontSize: 35,
					fontWeight: 300,
					color: "#fff"
				}}
			>
				About
			</h1>
			<p>
				DemonHacks is a 24-hour hackathon hosted by DePaul University that
				encourages students to investigate new ideas and develop new solutions.
				Teams of college students will work together to develop a hardware or
				software hack that they will present to judges for a chance to win
				prizes! If you have any questions check out the FAQ Section or feel free
				to email us.
			</p>
			<div className="column">
				<div className="row">
					<img
						src={mailIcon}
						onClick={() => {
							window.location.href = 'mailto:cssdepaul@gmail.com?subject=Question%20About%20DemonHacks';
						}}
					/>
					<img
						src={discordLogo}
						onClick={() => {
							window.open('https://discord.gg/XYrECYbGTa', '_blank')
						}}
					/>
					<img
						src={linkedinLogo}
						onClick={() => {
							window.open('https://www.linkedin.com/company/demonhacks/', '_blank')
						}}
					/>
				</div>
			</div>
		</div>
	</section>
)
}

export default About