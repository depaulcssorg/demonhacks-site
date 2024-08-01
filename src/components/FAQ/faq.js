import React from "react";
import "./faq.css"

const faqData = [
	// {question: "When do applications open?", answer: "Application are currently open! <a target=\"_blank\" href=\"https://cssdepaul.typeform.com/to/opRKmQKY\">Apply here now :D</a>"},

	{question: "When do applications open?", answer: "We will be opening applications soon!"},


	{question: "Where is the Event?", answer: "DemonHacks is held at the DePaul Jarvis College of Computing and Digital Media. 243 S Wabash Ave, Chicago, IL 60604"},

	{question: "Are beginners welcome?", answer: "Of course! Hackathons are a great place to learn new technologies, meet new people, network with sponsors, add something to your resume, and hack something cool ;)"},

	{question: "What is a hackathon?", answer: "A hackathon is an invention marathon. Students come together to build cool software &amp; hardware hacks over 24-48 hours. It’s very beginner friendly."},

	{question: "How much does it cost?", answer: "Nothing, attending a hackathon is free!"},

	{question: "How do teams work?", answer: "For those that do have a team in mind when applying, we will have time at the start of the event to help match those who would like one. Not everyone has a team in mind when applying! Team sizes are limited to four hackers."},

	{question: "Do we have to stay the whole event?", answer: "No one is required to stay the entire event. Some attendees stay up the whole night and don't sleep, but we also have a few air mattresses for those that would like to rest during the event."},


	{question: "Is there a schedule of events?", answer: "We are currently working on a schedule!"},

	{question: "Will there be opportunities to network with potential employers?", answer: "It is very common for companies to sponsor hackathons. "},

	// {question: "Does DemonHacks have a code of conduct?", answer: 'Yes. All participants must follow the <a target="_blank" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"> MLH Code of Conduct. </a>'},



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