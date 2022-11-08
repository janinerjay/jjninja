import logo from './assets/logo.png';
import './App.css';
import GoogleImg from './assets/Google.jpg';
import VersaillesImg from './assets/versailles.jpg';
import ScholarshipImg from './assets/Scholarship_Badge.jpg';
import DeveloperResume from './assets/Jay_Developer_Resume.pdf';
import Resume from './assets/Jay_Resume.pdf';

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-default fixed-top navigation">
        <div className="container">
          <a className="navbar-brand" href="#title">
            <img className="jlogo" src={logo} alt="logo" /> Janine Jay</a>
          <ul className="nav">
            <li><a className="nav-link text-dark" href="#experience">Experience</a></li>
            <li><a className="nav-link text-dark" href="#education">Education</a></li>
            <li><a className="nav-link text-dark" href="#skills">Skills</a></li>
            {/* <li><a className="nav-link text-dark" href="#projects">Projects</a></li> */}
            <li><a className="nav-link text-dark" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="contrast-color" id="title">
        <div className=" text-center title">
          <img src={VersaillesImg} className="rounded border border-light" alt="versailles" />
          <h1 className="myName"> Janine Jay </h1>
          <img src={GoogleImg} className="rounded border border-light" alt="google" />
        </div>
      </div>

      <section id="about" className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="lead" style={{ color: "#364659" }}>Software Engineer ~ Front End Developer ~ UX/UI Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="contrast-color-two text-light section">
        <span className="anchor" id="experience"></span>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h3>Experience</h3>
              <br />

              {/* Liberty Mutual */}
              <h4>Liberty Mutual Insurance</h4>
              <p></p>
              <p><em>Senior Software Engineer</em> ~ Boston, MA September 2018-Present</p>
              <ul>
                <li>Joined as part of the TechStart Technology Leadership Development program</li>
                <li>Full-stack engineer for agile web application development using JavaScript, PostgreSQL, React,
                  HTML/CSS, Java</li>
                <li>One of the lead engineers working on a central manager portal to encompass all of the roles and
                  responsibilities of various types of managers across our global employee population</li>
                <li>Created a complex HR compensation web application for our business partners to streamline a service
                  which would manually take multiple weeks into various database functions that run in less than a half hour
                </li>
                <li>Created a web application that organized and automated various HR practices and approvals in a
                  traceable, single-source system</li>
                <li>Uses skills in: AWS, BDD, TDD, Application Monitoring, Data Visualization, Accessibility Development
                </li>
              </ul>
              <br /><br />

              {/* Cigna */}
              <h4>Cigna Inc.</h4>
              <p><em>Technical Analyst Intern</em> ~ Bloomfield, CT May-August 2017</p>
              <ul>
                <li>TECDP Summer Intern at Cigna working in the Software Engineering and Innovation team as an Application
                  Developer</li>
                <li>Contributed to a team working on rewriting a company website from AngularJS to Angular 2</li>
                <li>Worked on the front end development team using HTML, CSS, and TypeScript in an Angular framework for web
                  development for a company-wide movement challenge. This product not only integrated with various movement
                  trackers (Apple Watch, Garmin, etc), but also was so highly regarded, that the team packed and sold it as
                  a general product to the companies commercial clients</li>
                <li>Worked in User Interface Design for web development using the popular UI tool Sketch</li>
                <li>Participated in an intern capstone project team by building the entire front end of a web application
                </li>
              </ul>
              <br /><br />

              {/* Houlihan Lawrence */}
              <h4>Houlihan Lawrence</h4>
              <p><em>Assistant</em> ~ Greenwich, CT May 2015-August 2016</p>
              <ul>
                <li>Worked as an administrative assistant to two popular and highly regarded real estate agents</li>
                <li>Kept both agents' online listings up to date, maintained information in the local real estate database,
                  created and managed online marketing, assisted in staging of homes, and interfaced with town
                  administrators</li>
                <li>Utilized my design and computer skills to expand the agents' online presence as well as develop
                  materials for print and distribution</li>
              </ul>
              <br /><br />

              {/* MakerBot Inc. */}
              <h4>MakerBot Inc.</h4>
              <p><em>Intern / Retail Operator</em> ~ Greenwich, CT Seasonal: June 2014-January 2015</p>
              <ul>
                <li>Hired to sell and maintain various 3D printers and scanners in the store</li>
                <li>Held community events to increase education of 3D printing and its various uses</li>
                <li>Taught classNamees on both the printer hardware and 3D modeling software</li>
                <li>Took away increased skills in customer relations as well as learning new technologies on the spot</li>
              </ul>
              <br />
              <img src={ScholarshipImg} alt="GHC Scholar Badge"
                className="scholar-img rounded border border-light mx-auto d-block" />
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <span className="anchor" id="education"></span>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h3>Education</h3>
              <br />

              {/* Quinnipiac */}
              <h4>Quinnipiac University</h4>
              <h5>BS Software Engineering ~ May 2018 ~ Magna Cum Laude</h5>
              <h6>Minor in Mathematics</h6>
              <h6>Relevant Courses:</h6>
              <ul>
                <li>Programming and Problem Solving</li>
                <li>Object Oriented Design</li>
                <li>Data Structures and Analysis</li>
                <li>Introduction to Software Development</li>
                <li>Algorithm Design</li>
                <li>Software Design and Development</li>
                <li>Computer Networking</li>
                <li>Softare and Healthcare</li>
                <li>Software Requirements Analysis </li>
                <li>Software Project Management</li>
                <li>Software Senior Capstone</li>
              </ul>
              <h5>Organizations:</h5>
              <ul>
                <li>Quinnipiac Computing Club ~ Founding Member & President</li>
                <li>Quinnipiac Honors Program ~ Member</li>
                <li>QU Engineering Student Organization ~ Member</li>
                <li>Alpha Delta Pi ~ Sister & Recruitment Information Manager</li>
                <li>University Innovation Fellows ~ Fellow</li>
                <li>Society of Women Engineers ~ Member</li>
              </ul>
              {/* <h5>Projects:</h5>
              <ul>
                <li><a className="project-link" href="https://github.com/janinerjay/QUietNight">QUiet Night</a></li>
                <li><a className="project-link" href="https://github.com/janinerjay/YodaSpeak">Yoda Speaks</a></li>
                <li><a className="project-link" href="https://github.com/janinerjay/SER360">CDS Insulin Project</a></li>
                <li><a className="project-link" href="https://github.com/janinerjay/340-Project">Buck-Cats</a></li>
              </ul>
              <br /><br /> */}

              {/* Queen Mary */}
              <h5>Queen Mary University of London</h5>
              <p>During Spring of 2017, I studied in London, England
                and was priviledged to travel around continental Europe</p>
              <h6>Relevant Courses:</h6>
              <ul>
                <li>Graphical User Interfaces</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="contrast-color section">
        <span className="anchor" id="skills"></span>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h3>Skills</h3>
              <br />
              <ul>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>PostgreSQL</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Agile Methodoligies</li>
                <li>Git</li>
                <li>Angular</li>
                <li>Java</li>
                <li>User Interface Design</li>
                <li>Object Oriented Design</li>
                <li>Scala</li>
                <li>Sketch</li>
                <li>Android SDK</li>
                <li>iOS</li>
                <li>MakerBot 3D Printers</li>
                <li>Microsoft Office</li>
              </ul>
              <br />

              <h5>Special Skills</h5>
              <ul>
                <li>Makes a mean peach-blueberry pie</li>
                <li>Avid snowblader</li>
                <li>Can rock a dance floor for 5+ hours</li>
                <li>One of history's greatest minds in the construction of snow forts</li>
                <li>Can belt "Carry On My Wayward Son" at the top of my lungs</li>
                <li>Master with a soldering iron</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteering */}
      <section id="darkText" className="section">
        <span className="anchor" id="projects"></span>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h3>Volunteering</h3>
              <br />
              <h4>Boston SPARK Council</h4>
              <h5>Council Member</h5>
              <p>The SPARK Council is an appointed position that serves as the Mayor's ambassadors to the rest of
                Boston's large and diverse population of 20-35 year olds.</p>
              <ul>
                <li>Acted as an ambassador representing Boston to our various 'sister cities'</li>
                <li>Attended city meetings and reported back minutes to general council to promoted civic engagement</li>
                <li>Volunteered at voter registration booths and encouraged community gathering</li>
              </ul>
              <h4>Beacon Hill Women's Forum</h4>
              <h5>Treasurer</h5>
              <p>The Women's Forum is an organization open to all women who live in the extended Beacon Hill community.
                It is a non-profit group that comes together to build community with a mission to connect, inspire, and enjoy!</p>
              <ul>
                <li>Organized annual budgets for the fiscal year in accordance with federal and state non-profit laws</li>
                <li>Maintained diligent records of revenues and expenses for distribution to our board and accountant</li>
                <li>Revamped the Treasurer role with no finance background so that any member could feel comfortable
                  taking on the role in the future
                </li>
              </ul>
              <h4>Beacon Hill Civic Association</h4>
              <h5>Green Committee ~ Chair</h5>
              <p>The Green Committee aims to support and encourage sustainable living for Beacon Hill residents and
                businesses.</p>
              <ul>
                <li>Advocated for a residential curbside composting through the City of Boston which is now starting a pilot
                  program</li>
                <li>Educated residents on recycling right and responsible consumerism through a weekly newsletter column
                </li>
                <li>Ran a table at a local festival with an interactive exhibit to educate local children about composting
                </li>
                <li>Most recent initiative is working to encourage zero-waste packaging for local businesses, particularly
                  those in the food and beverage industry</li>
              </ul>
              <h5>Young Friends ~ Chair</h5>
              <p>Young Friends is an organization where we host monthly meetups for young professionals in the neighborhood.
              </p>
              <ul>
                <li>Through consistent outreach, as well as welcoming interactions at our meetups, our attendance is up by
                  50% in the last two years</li>
                <li>Our online meetups during Covid were well attended due to their engaging atmosphere</li>
              </ul>
              <h5>Streets & Sidewalks ~ Co-Chair</h5>
              <p>The Streets & Sidewalks committee aims to recognize and address issues of maintenance and cleanliness of
                the historic district of Beacon Hill, and work with the city of Boston officials to rectify any problems.
              </p>
              <ul>
                <li>Created the 'Brick By Brick' initiative, a cleanup effort, as a grassroots effort around the
                  neighborhood</li>
                <li>Advocated to change trash days from Monday/Friday to Monday/Thursday to be more spread out in the week
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contrast-color-two text-light section">
        <span className="anchor" id="contact"></span>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h3>Contact</h3>
              <br />

              <h5>I would love to get in touch with you!</h5>
              {/* Email */}
              <a href="mailto:janinerjay@icloud.com">janinerjay@icloud.com</a>
              <br /><br />

              <h4>Around the Web</h4>
              {/* GitHub */}
              <a href="https://github.com/janinerjay" target="_blank" rel="noreferrer">Github</a>
              <br />

              {/* Linked In */}
              <a href="https://www.linkedin.com/in/janinerjay" target="_blank" rel="noreferrer">LinkedIn</a>
              <br />

              {/* Resume: Code Version */}
              <a href={DeveloperResume} filename="Jay_Developer_Resume.pdf" download>My Resume: Developer Version</a>
              <br />

              {/* Resume: PR Version */}
              <a href={Resume} filename="Jay_Resume.pdf" download>My Resume: HR Version</a>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="py-5 contrast-color-two text-light">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; Janine Jay 2022</p>
        </div>
      </footer>

      {/* Custom JavaScript for this theme */}
      <script src="js/scrolling-nav.js"></script>
    </div>
  );
}

export default App;
