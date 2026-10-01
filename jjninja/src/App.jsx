import { useCallback, useEffect, useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import "./fun/fun.css";
import GoogleImg from "./assets/Google.jpg";
import VersaillesImg from "./assets/versailles.jpg";
import ScholarshipImg from "./assets/Scholarship_Badge.jpg";
import {
  contact,
  education,
  experience,
  resumes,
  skills,
  specialSkills,
  tagline,
  volunteering,
} from "./resume";
import { EVENTS, isTyping } from "./fun/actions";
import CodeView from "./fun/CodeView";
import Ninja from "./fun/Ninja";
import Terminal from "./fun/Terminal";
import useKonami from "./fun/useKonami";

const NAV_LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#volunteering", label: "Volunteering" },
  { href: "#contact", label: "Contact" },
];

function Page() {
  const { quinnipiac, queenMary } = education;
  return (
    <>
      <div className="contrast-color" id="title">
        <div className=" text-center title">
          <img
            src={VersaillesImg}
            className="rounded border border-light"
            alt="versailles"
          />
          <h1 className="myName"> Janine Jay </h1>
          <img
            src={GoogleImg}
            className="rounded border border-light"
            alt="google"
          />
        </div>
      </div>

      <section id="about" className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="lead" style={{ color: "#364659" }}>
                {tagline}
              </p>
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

              {experience.map((job, index) => (
                <div key={job.company}>
                  <h4>{job.company}</h4>
                  <p>
                    <em>{job.title}</em> ~ {job.location} {job.dates}
                  </p>
                  <ul>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <br />
                  {index < experience.length - 1 && <br />}
                </div>
              ))}
              <img
                src={ScholarshipImg}
                alt="GHC Scholar Badge"
                className="scholar-img rounded border border-light mx-auto d-block"
              />
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
              <h4>{quinnipiac.school}</h4>
              <h5>
                {quinnipiac.degree} ~ {quinnipiac.location} ~{" "}
                {quinnipiac.graduation} ~ {quinnipiac.honors}
              </h5>
              {quinnipiac.notes.map((note) => (
                <h6 key={note}>{note}</h6>
              ))}
              <h6>Relevant Courses:</h6>
              <ul>
                {quinnipiac.courses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
              <h5>Organizations:</h5>
              <ul>
                {quinnipiac.organizations.map((organization) => (
                  <li key={organization}>{organization}</li>
                ))}
              </ul>

              {/* Queen Mary */}
              <h5>{queenMary.school}</h5>
              <h6>
                {queenMary.program} ~ {queenMary.location} ~ {queenMary.dates}
              </h6>
              <p>{queenMary.description}</p>
              <h6>Relevant Courses:</h6>
              <ul>
                {queenMary.courses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
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
                {skills.map((skill) => (
                  <li key={skill.name}>{skill.name}</li>
                ))}
              </ul>
              <br />

              <h5>Special Skills</h5>
              <ul>
                {specialSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteering */}
      <section id="darkText" className="section">
        <span className="anchor" id="volunteering"></span>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h3>Volunteering</h3>
              <br />
              {volunteering.map(({ org, roles }) => (
                <div key={org}>
                  <h4>{org}</h4>
                  {roles.map((role) => (
                    <div key={role.title}>
                      <h5>{role.title}</h5>
                      {role.dates && (
                        <p>
                          <em>{role.dates}</em>
                        </p>
                      )}
                      {role.description && <p>{role.description}</p>}
                      <ul>
                        {role.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
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
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <br />
              <br />

              <h4>Around the Web</h4>
              {/* GitHub */}
              <a href={contact.github} target="_blank" rel="noreferrer">
                Github
              </a>
              <br />

              {/* Linked In */}
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <br />

              {/* Resume: Code Version */}
              <a href={resumes.dev.href} download={resumes.dev.filename}>
                {resumes.dev.label}
              </a>
              <br />

              {/* Resume: PR Version */}
              <a href={resumes.hr.href} download={resumes.hr.filename}>
                {resumes.hr.label}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  const [codeMode, setCodeMode] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [ninjaRun, setNinjaRun] = useState(null);

  const toggleCode = useCallback(() => {
    setCodeMode((current) => !current);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  const toggleTerminal = useCallback(
    () => setTerminalOpen((current) => !current),
    [],
  );
  const closeTerminal = useCallback(() => setTerminalOpen(false), []);
  const summonNinja = useCallback(() => setNinjaRun(Date.now()), []);
  const dismissNinja = useCallback(() => setNinjaRun(null), []);

  useKonami(summonNinja);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "`" && !isTyping(event)) {
        event.preventDefault();
        toggleTerminal();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener(EVENTS.ninja, summonNinja);
    window.addEventListener(EVENTS.toggleCode, toggleCode);
    window.addEventListener(EVENTS.toggleTerminal, toggleTerminal);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener(EVENTS.ninja, summonNinja);
      window.removeEventListener(EVENTS.toggleCode, toggleCode);
      window.removeEventListener(EVENTS.toggleTerminal, toggleTerminal);
    };
  }, [summonNinja, toggleCode, toggleTerminal]);

  const navLinkClass = codeMode ? "nav-link text-light" : "nav-link text-dark";

  return (
    <div className={codeMode ? "code-mode" : undefined}>
      {/* Navigation Bar */}
      <nav className="navbar navbar-default fixed-top navigation">
        <div className="container">
          <a className="navbar-brand" href="#title">
            <img className="jlogo" src={logo} alt="logo" /> Janine Jay
          </a>
          <ul className="nav">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className={navLinkClass} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                className={`${navLinkClass} fun-button`}
                onClick={toggleCode}
                aria-label={codeMode ? "View as a page" : "View as code"}
                title={codeMode ? "View as a page" : "View as code"}
              >
                {codeMode ? "Page" : "</>"}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {codeMode ? <CodeView /> : <Page />}

      {/* Footer */}
      <footer id="footer" className="py-5 contrast-color-two text-light">
        <div className="container text-center">
          <p className="m-0 text-center text-white">
            Copyright &copy; Janine Jay {new Date().getFullYear()}
          </p>
          <button
            type="button"
            className="fun-button terminal-hint"
            onClick={toggleTerminal}
          >
            &gt;_ press ` for a terminal
          </button>
        </div>
      </footer>

      <Terminal
        open={terminalOpen}
        onClose={closeTerminal}
        onToggleCode={toggleCode}
        onNinja={summonNinja}
      />
      {ninjaRun && <Ninja key={ninjaRun} onDone={dismissNinja} />}
    </div>
  );
}

export default App;
