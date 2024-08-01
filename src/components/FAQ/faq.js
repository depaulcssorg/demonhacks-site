import React from "react";

const faqData = [
	{question: "When do applications open?", answer: "Application are currently open! <a target=\"_blank\" href=\"https://cssdepaul.typeform.com/to/opRKmQKY\">Apply here now :D</a>"},

	{question: "Where is the Event?", answer: "This year we will be going back to in-person! The hackathon will be located at 243 S Wabash Ave, Chicago, IL 60604, which is the Jarvis College of Computing and Digital Media building."},

	{question: "Are beginners welcome?", answer: "Of course! Hackathons are a great place to learn new technologies, meet new people, network with sponsors, add something to your resume, and hack something cool ;)"},

	{question: "What is a hackathon?", answer: "A hackathon is an invention marathon. Students come together to build cool software &amp; hardware hacks over 24-48 hours. It’s very beginner friendly."},

	{question: "How much does it cost?", answer: "Nothing, attending a hackathon is free!"},

	{question: "How do teams work?", answer: "For those that do have a team in mind when applying, we will have time at the start of the event to help match those who would like one. Not everyone has a team in mind when applying! Team sizes are limited to four hackers."},

	{question: "Do we have to stay the whole event?", answer: "No one is required to stay the entire event. Some attendees stay up the whole night and don't sleep, but we also have a few air mattresses for those that would like to rest during the event."},

	{question: "How does swag work?", answer: "Due to COVID-19, some swag will be digital (such as wallpapers). Any physical swag will be mailed."},



	{question: "Does DemonHacks have a code of conduct?", answer: 'Yes. All participants must follow the <a target="_blank" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"> MLH Code of Conduct. </a>'},

	{question: "What Covid-19 guidelines does DemonHacks follow?", answer: `We follow <a target="_blank" href="https://resources.depaul.edu/coronavirus/guidance/health-safety-practices/Pages/default.aspx"> DePaul's Covid-19 </a> guidance which is based on the latest guidance from the Center for Disease Control and Prevention.`}


]



const FAQ = (props) => {
	return (


	<section className="faq" aria-label="Question Accordions" id="faq">
		<div className="container">
			<h1>FAQ</h1>
			<div
				className="panel-group"
				id="accordion"
				role="tablist"
				aria-multiselectable="true"
			>

				{faqData.map((item, index) => (
					<div className="panel panel-full">
						<div className="panel-heading p-3 mb-3" role="tab" id="heading7">
							<h3 className="panel-title">
								<a
									className="collapsed"
									role="button"
									title=""
									data-toggle="collapse"
									data-parent="#accordion"
									href={`#collapse${index}`}
									aria-expanded="true"
									aria-controls={`collapse${index}`}
								>
									{item.question}
								</a>
							</h3>
						</div>
						<div
							id={`collapse${index}`}

							className="panel-collapse collapse"
							role="tabpanel"
							aria-labelledby="heading7"
						>
							<div className="panel-body px-5 mb-4">
								<p dangerouslySetInnerHTML={{__html: item.answer}}></p>
							</div>
						</div>
					</div>


				))}



			</div>

		</div>


	</section>


)
}

export default FAQ