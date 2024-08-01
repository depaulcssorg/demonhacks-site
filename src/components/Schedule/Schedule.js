import React from "react";

const Schedule = (props) => {
	return (
		// <h1>SCHEDULE</h1>

	<section className="schedule" id="schedule">
		<div className="container">
			<h1>Schedule</h1>
			<a href="#sat" className="button1" data-toggle="collapse">
				<b>Saturday, Nov. 5th</b>
			</a>
			<div id="sat" className="collapse show">
				<br/>
				<table id="satTable">
					<tbody>
					<tr>
						<th style={{width: 200}}>Time (CDT) (GMT-5)</th>
						<th>Event</th>
						<th style={{width: 200}}>Location</th>
					</tr>
					<tr>
						<td>9:00 am - 10:00 am</td>
						<td>Check-in and socialize</td>
						<td>
							9th floor
							{/* <a href="https://depaul.zoom.us/j/98499438063?pwd=SXYvVXFIOUdob0xxZlkvNkwvTlpiQT09">Zoom Link</a> */}
						</td>
					</tr>
					<tr>
						<td>10:00 am - 11:00 am</td>
						<td>Breakfast begins</td>
						<td>
							9th floor
							{/* <a href="https://discover.webex.com/discover/j.php?MTID=m02c1f14647654bc73824445a281d0ef6">Webex Link</a> */}
							{/* <br/>
    Meeting number (access code): 145 011 7047
    Meeting password: 3PVkD5kx
    <br/> */}
						</td>
					</tr>
					<tr>
						<td>11:00 am - 12:00 pm</td>
						<td>Opening Ceremony</td>
						<td>
							Room 924
							{/* <a href="https://virginiatech.zoom.us/j/483608709">Zoom Link</a> */}
						</td>
					</tr>
					<tr>
						<td>12:00 pm - 12:30 pm</td>
						<td>Team Formation</td>
						<td>
							Room 924
							{/* <a href="https://virginiatech.zoom.us/j/483608709">Zoom Link</a> */}
						</td>
					</tr>
					<tr>
						<td>12:30 pm</td>
						<td>Hacking begins!</td>
						<td>
							{/* <a href="https://depaul.zoom.us/j/97125934573?pwd=SlNMSHp3Yk4wTnNWdndEWi96bUp5QT09">Zoom Link</a> */}
						</td>
					</tr>
					<tr>
						<td>1:30 pm - 2:00 pm</td>
						<td>MLH Mini Event</td>
						<td>
							Room 924
							{/* <a href="https://depaul.zoom.us/j/97125934573?pwd=SlNMSHp3Yk4wTnNWdndEWi96bUp5QT09">Zoom Link</a> */}
						</td>
					</tr>
					<tr>
						<td>2:00 pm - 3:00 pm</td>
						<td>Lunch begins</td>
						<td>
							9th floor
							{/* <a href="https://depaul.zoom.us/j/95250668138?pwd=Mlp1eHNJQy8rSFRQZlpISE9aQ2FwQT09">Zoom Link</a> */}
						</td>
					</tr>
					<tr>
						<td>5:00 pm - 6:00 pm</td>
						<td>Tech Talk [Northern Trust]</td>
						<td>
							Room 924
							{/* <a href="https://depaul.zoom.us/j/99377549207?pwd=SThVTlk4R1ozVHpqUG9QZjRGaFdjUT09">Zoom Link</a> */}
						</td>
					</tr>
					<tr>
						<td>7:00 pm - 8:00 pm</td>
						<td>Dinner begins</td>
						<td>
							9th floor
							{/* <a href="https://depaul.zoom.us/j/99377549207?pwd=SThVTlk4R1ozVHpqUG9QZjRGaFdjUT09">Zoom Link</a> */}
						</td>
					</tr>
					<tr>
						<td>8:00 pm - 8:30 pm</td>
						<td>Snyk Mini-Event</td>
						<td>
							Room 924
							{/* <a href="https://depaul.zoom.us/j/97125934573?pwd=SlNMSHp3Yk4wTnNWdndEWi96bUp5QT09">Zoom Link</a> */}
						</td>
					</tr>
					<tr>
						<td>9:00 pm</td>
						<td>Cup Stacking</td>
						<td>Room 924</td>
					</tr>
					</tbody>
				</table>
				<br/>
			</div>
			<p/>
			<a href="#sun" className="button1" data-toggle="collapse">
				<b>Sunday, Nov. 6th</b>
			</a>
			<div id="sun" className="collapse show">
				<br/>
				<table id="sunTable">
					<tbody>
					<tr>
						<th style={{width: 200}}>Time (CDT) (GMT-5)</th>
						<th>Event</th>
						<th style={{width: 200}}>Location</th>
					</tr>
					<tr>
						<td>12:00 am</td>
						<td>Snacks begin</td>
						<td>9th floor</td>
					</tr>
					<tr>
						<td>1:00 am</td>
						<td>Paper Plane Tournament</td>
						<td>Room 924</td>
					</tr>
					<tr>
						<td>11:00 am</td>
						<td>Hacking Ends</td>
						<td/>
					</tr>
					<tr>
						<td>11:00 am - 12:00 pm</td>
						<td>Brunch begins</td>
						<td>9th floor</td>
					</tr>
					<tr>
						<td>1:00 pm - 2:00 pm</td>
						<td>Project Expo</td>
						<td>2nd floor</td>
					</tr>
					<tr>
						<td>3:00 pm</td>
						<td>Closing Ceremony</td>
						<td>
							Room 924
							{/* <a href="https://www.twitch.tv/dp_demonhacks">Twitch</a> */}
						</td>
					</tr>
					</tbody>
				</table>
				<br/>
			</div>
		</div>
		<br/>
	</section>
)
}

export default Schedule