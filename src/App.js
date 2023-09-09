import './App.css';
import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css'; // Choose a theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
  })


  return (
    <div>
      {/*----------Navbar section----------*/}
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div style={{ display: "flex", paddingLeft: "3%" }}>
          <a className="nav-link text-secondary py-0" href="#about">
            About
          </a>
          <a className="nav-link text-secondary py-0" href="#faq">
            FAQ
          </a>
          <a className="nav-link text-secondary py-0" href="#schedule">
            Schedule
          </a>
          <a className="nav-link text-secondary py-0" href="#sponsors">
            Sponsors
          </a>
          <a
            id="mlh-trust-badge"
            style={{
              display: "block",
              maxWidth: 100,
              minWidth: 60,
              position: "fixed",
              right: 50,
              top: 0,
              width: "10%",
              zIndex: 10000
            }}
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=blue"
            target="_blank"
          >
            <img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-blue.svg"
              alt="Major League Hacking 2023 Hackathon Season"
              style={{ width: "100%" }}
            />
          </a>
        </div>
      </nav> */}
      {/*----------Banner section----------*/}
      <section className="banner">
        <div className={`image-container ${loaded ? 'fade-in' : ''}`}>
          <div className="containe">
            <img
              src="./templates/img/DemonHacks2023Banner1Altered.png"
              width="100%"
              height="100%"
            />
            <p><b>DePaul University</b></p>
            <p><b>Nov. 5th-6th</b></p>
            <p><b>24 hours</b></p>
            <Button
              label="Apply here!"
              className="btn" // Add the visible class for initial opacity
              onClick={() => window.open("https://cssdepaul.typeform.com/to/opRKmQKY?typeform-source=www.demonhacks.org", "_blank")}
            />
            
            <div className='navButtons'>
              <Button label="About" style={{ }} />
              <Button label="Schedule" style={{ }} />
              <Button label="FAQ" style={{  }} />
              </div>
          
            </div>
        </div>
      </section>


      {/*----------About section----------*/}
      <section className="about" id="about">
        <div className="container">
          <h1>
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
          {/* <div className="column">
            <div className="row">
              <img
                src="/templates/img/mail.png"
                onClick={() => {
                  window.location.href = 'mailto:cssdepaul@gmail.com?subject=Question%20About%20DemonHacks';
                }}
              />
              <img
                src="templates/img/discord-logo.png"
                onClick={() => {window.open('https://discord.gg/XYrECYbGTa','_blank')}}
              />
              <img
                src="templates/img/linkedin.png"
                onClick={() => {window.open('https://www.linkedin.com/company/demonhacks/','_blank')}}
              />
            </div>
          </div> */}
        </div>
      </section>

      {/*----------Schedule section----------*/}
      <section className="schedule" id="schedule">
        <div className="container">
          <h1>Schedule</h1>
          <a href="#sat" className="button1" data-toggle="collapse">
            <b>Saturday, Nov. 5th</b>
          </a>
          <div id="sat" className="collapse show">
            <br />
            <table id="satTable">
              <tbody>
                <tr>
                  <th style={{ width: 200 }}>Time (CDT) (GMT-5)</th>
                  <th>Event</th>
                  <th style={{ width: 200 }}>Location</th>
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
            <br />
          </div>
          <p />
          <a href="#sun" className="button1" data-toggle="collapse">
            <b>Sunday, Nov. 6th</b>
          </a>
          <div id="sun" className="collapse show">
            <br />
            <table id="sunTable">
              <tbody>
                <tr>
                  <th style={{ width: 200 }}>Time (CDT) (GMT-5)</th>
                  <th>Event</th>
                  <th style={{ width: 200 }}>Location</th>
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
                  <td />
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
            <br />
          </div>
        </div>
        <br />
      </section>

      {/*----------FAQ section----------*/}
      <section className="faq" aria-label="Question Accordions" id="faq">
        <div className="container">
          <h1>FAQ</h1>
          <div
            className="panel-group"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div className="panel panel-full">
              <div className="panel-heading p-3 mb-3" role="tab" id="heading0">
                <h3 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    title=""
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse0"
                    aria-expanded="true"
                    aria-controls="collapse0"
                  >
                    When do applications open?
                  </a>
                </h3>
              </div>
              <div
                id="collapse0"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="heading0"
              >
                <div className="panel-body px-5 mb-4">
                  {/* <p>Applications are closed! Please apply next year :)</p> */}
                  <p>
                    Application are currently open! <a target="_blank" href="https://cssdepaul.typeform.com/to/opRKmQKY">Apply here now :D
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="panel panel-full">
              <div className="panel-heading p-3 mb-3" role="tab" id="heading1">
                <h3 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    title=""
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse1"
                    aria-expanded="true"
                    aria-controls="collapse7"
                  >
                    Where is the Event?
                  </a>
                </h3>
              </div>
              <div
                id="collapse1"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="heading1"
              >
                <div className="panel-body px-5 mb-4">
                  <p>
                    This year we will be going back to in-person! The hackathon will
                    be located at 243 S Wabash Ave, Chicago, IL 60604, which is the
                    Jarvis College of Computing and Digital Media building.
                  </p>
                </div>
              </div>
            </div>
            <div className="panel panel-full">
              <div className="panel-heading p-3 mb-3" role="tab" id="heading2">
                <h3 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    title=""
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse2"
                    aria-expanded="true"
                    aria-controls="collapse1"
                  >
                    Are beginners welcome?
                  </a>
                </h3>
              </div>
              <div
                id="collapse2"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="heading2"
              >
                <div className="panel-body px-5 mb-4">
                  <p>
                    Of course! Hackathons are a great place to learn new
                    technologies, meet new people, network with sponsors, add
                    something to your resume, and hack something cool ;)
                  </p>
                </div>
              </div>
            </div>
            <div className="panel panel-full">
              <div className="panel-heading p-3 mb-3" role="tab" id="heading3">
                <h3 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    title=""
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse3"
                    aria-expanded="true"
                    aria-controls="collapse2"
                  >
                    What is a hackathon?
                  </a>
                </h3>
              </div>
              <div
                id="collapse3"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="heading3"
              >
                <div className="panel-body px-5 mb-4">
                  <p>
                    A hackathon is an invention marathon. Students come together to
                    build cool software &amp; hardware hacks over 24-48 hours. It’s
                    very beginner friendly.
                  </p>
                </div>
              </div>
            </div>
            <div className="panel panel-full">
              <div className="panel-heading p-3 mb-3" role="tab" id="heading4">
                <h3 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    title=""
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse4"
                    aria-expanded="true"
                    aria-controls="collapse3"
                  >
                    How much does it cost?
                  </a>
                </h3>
              </div>
              <div
                id="collapse4"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="heading4"
              >
                <div className="panel-body px-5 mb-4">
                  <p>Nothing, attending a hackathon is free!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-full">
            <div className="panel-heading p-3 mb-3" role="tab" id="heading5">
              <h3 className="panel-title">
                <a
                  className="collapsed"
                  role="button"
                  title=""
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapse5"
                  aria-expanded="true"
                  aria-controls="collapse7"
                >
                  How do teams work?
                </a>
              </h3>
            </div>
            <div
              id="collapse5"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="heading5"
            >
              <div className="panel-body px-5 mb-4">
                <p>
                  For those that do have a team in mind when applying, we will have
                  time at the start of the event to help match those who would like
                  one. Not everyone has a team in mind when applying! Team sizes are
                  limited to four hackers.
                </p>
              </div>
            </div>
          </div>
          <div className="panel panel-full">
            <div className="panel-heading p-3 mb-3" role="tab" id="heading5">
              <h3 className="panel-title">
                <a
                  className="collapsed"
                  role="button"
                  title=""
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapse9"
                  aria-expanded="true"
                  aria-controls="collapse7"
                >
                  Do we have to stay the whole event?
                </a>
              </h3>
            </div>
            <div
              id="collapse9"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="heading5"
            >
              <div className="panel-body px-5 mb-4">
                <p>
                  No one is required to stay the entire event. Some attendees stay
                  up the whole night and don't sleep, but we also have a few air
                  mattresses for those that would like to rest during the event.
                </p>
              </div>
            </div>
          </div>
          {/* <div class="panel panel-full">
<div class="panel-heading p-3 mb-3" role="tab" id="heading6">
  <h3 class="panel-title">
    <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion"
      href="#collapse6" aria-expanded="true" aria-controls="collapse7">
      How does swag work?
    </a>
  </h3>
</div>
<div id="collapse6" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading6">
  <div class="panel-body px-5 mb-4">
    <p>Due to COVID-19, some swag will be digital (such as wallpapers). Any physical swag will be mailed.</p>
  </div>
</div>
</div> */}
          <div className="panel panel-full">
            <div className="panel-heading p-3 mb-3" role="tab" id="heading7">
              <h3 className="panel-title">
                <a
                  className="collapsed"
                  role="button"
                  title=""
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapse7"
                  aria-expanded="true"
                  aria-controls="collapse4"
                >
                  Does DemonHacks have a code of conduct?
                </a>
              </h3>
            </div>
            <div
              id="collapse7"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="heading7"
            >
              <div className="panel-body px-5 mb-4">
                <p>
                  Yes. All participants must follow the <a
                    target="_blank"
                    href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                  >
                    MLH Code of Conduct.
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="panel panel-full">
            <div className="panel-heading p-3 mb-3" role="tab" id="heading8">
              <h3 className="panel-title">
                <a
                  className="collapsed"
                  role="button"
                  title=""
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapse8"
                  aria-expanded="true"
                  aria-controls="collapse8"
                >
                  What Covid-19 guidelines does DemonHacks follow?
                </a>
              </h3>
            </div>
            <div
              id="collapse8"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="heading7"
            >
              <div className="panel-body px-5 mb-4">
                <p>
                  We follow <a
                    target="_blank"
                    href="https://resources.depaul.edu/coronavirus/guidance/health-safety-practices/Pages/default.aspx"
                  >
                    DePaul's Covid-19 guidance
                  </a> which is based on the latest guidance from the Center for Disease
                  Control and Prevention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*----------Sponsors section----------*/}
      <section className="sponsors" id="sponsors">
        <div className="container">
          <div className="column">
            <h2>Sponsors</h2>
            <h3 className="gold-color">Gold</h3>
            <div className="links gold-border" />
            <div className="row gold">
              <img
                src="./templates/img/nt-stack-center.png"
                width="22%"
                height="22%"
                onClick={() => {window.open('https://www.northerntrust.com/united-states/what-we-do','_blank')}}
              />
            </div>
            <br />
            {/* <div class="row">
  <img src="templates/img/geneva_trading.jpeg" onClick={window.open('','_blank')}>
</div> */}
          </div>
        </div>
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col-9">
              <h3 className="silver-color">Silver</h3>
              <div className="links silver-border" />
              <div className="row silver">
                <img
                  src="./templates/img/crowdstrike.jpeg"
                  width="30%"
                  height="40%"
                  onClick={() => {window.open('https://www.crowdstrike.com/why-crowdstrike/','_blank')}}
                />
                <img
                  src="./templates/img/discover_logo.jpeg"
                  width="30%"
                  height="20%"
                  style={{ marginLeft: 6 }}
                  onClick={() => {window.open('https://www.discover.com/','_blank')}}
                />
                <img
                  src="templates/img/geneva-trading.png"
                  width="25%"
                  height="25%"
                  style={{ marginTop: 20, marginRight: 45 }}
                  onClick={() => {window.open('https://geneva-trading.com/who-we-are/','_blank')}}
                />
              </div>
              <div className="row">
                <img
                  src="templates/img/saf-b.png"
                  width="20%"
                  height="20%"
                  style={{ marginLeft: "60px !important" }}
                />
              </div>
            </div>
            <div className="col-3">
              <h3 className="bronze-color">General</h3>
              <div className="links bronze-border" />
              <div className="row bronze">
                <img
                  src="templates/img/stand-out-stickers.png"
                  width="60%"
                  height="60%"
                  style={{ marginTop: 45 }}
                  onClick={() => {window.open('http://hackp.ac/mlh-StandOutStickers-hackathons','_blank')}}
                />
              </div>
              <br />
            </div>
          </div>
        </div>
      </section>
      {/*----------Footer section----------*/}
      <section className="footer">
        <br />
        <div className="container">
          <p>
            © 2022 DemonHacks. Developed by <a target="_blank" href="https://www.linkedin.com/groups/6514590/">
              DePaul Computer Science Society
            </a>
          </p>
        </div>
        <br />
      </section>
    </div>
  );
}

export default App;
