import {
  SKILL_LEVEL_MAX,
  contact,
  education,
  experience,
  name,
  resumes,
  skills,
  specialSkills,
  tagline,
  volunteering,
} from "../resume";

// The page, rendered in the style of the developer resume.

const Kw = ({ children }) => <span className="tok-keyword">{children}</span>;
const Fn = ({ children }) => <span className="tok-function">{children}</span>;
const Var = ({ children }) => <span className="tok-variable">{children}</span>;
const Type = ({ children }) => <span className="tok-type">{children}</span>;
const Cm = ({ children }) => <span className="tok-comment">{children}</span>;

function Line({ indent = 0, children }) {
  return (
    <div className="code-line" style={{ "--indent": indent }}>
      {children}
    </div>
  );
}

const Blank = () => <div className="code-line">&nbsp;</div>;

function Block({ id, children }) {
  return (
    <section className="code-block">
      <span className="anchor" id={id}></span>
      {children}
    </section>
  );
}

// `target = [ "a", "b" ];` or `target.method([ "a", "b" ]);`, one item per line.
function StringList({ open, close, items, indent }) {
  return (
    <>
      <Line indent={indent}>{open}</Line>
      {items.map((item) => (
        <Line key={item} indent={indent + 1}>
          "{item}",
        </Line>
      ))}
      <Line indent={indent}>{close}</Line>
    </>
  );
}

const numbered = (base, index) => (index === 0 ? base : `${base}${index}`);
const stripProtocol = (url) => url.replace(/^https?:\/\/(www\.)?/, "");
const levelBar = (level) =>
  "#".repeat(level) + "-".repeat(SKILL_LEVEL_MAX - level);

function Experience() {
  return (
    <Block id="experience">
      <Line>
        <Kw>public salary</Kw> <Fn>Experience</Fn> (<Kw>long</Kw>{" "}
        <Type>hours</Type>) {"{"}
      </Line>
      {experience.map((job, index) => {
        const company = numbered("company", index);
        return (
          <div key={job.company}>
            {index > 0 && <Blank />}
            <Line indent={1}>
              <Var>{company}</Var> = "{job.company}";{" "}
              <Cm>// {job.dates}</Cm>
            </Line>
            <Line indent={1}>
              <Var>{company}</Var>.<Fn>addTitle</Fn>("{job.title}");
            </Line>
            <Line indent={1}>
              <Var>{company}</Var>.<Fn>setLocation</Fn>("{job.location}");
            </Line>
            <StringList
              indent={1}
              open={
                <>
                  <Var>{company}</Var>.<Fn>addWins</Fn>([
                </>
              }
              close="]);"
              items={job.bullets}
            />
          </div>
        );
      })}
      <Line>{"}"}</Line>
    </Block>
  );
}

function Education() {
  const { quinnipiac, queenMary } = education;
  return (
    <Block id="education">
      <Line>
        <Kw>public degree</Kw> <Fn>Education</Fn> (<Kw>Years</Kw>{" "}
        <Type>16</Type>, <Kw>Cost</Kw> <Type>janinesYouth</Type>) {"{"}
      </Line>
      <Line indent={1}>
        <Var>school</Var> = "{quinnipiac.school}";{" "}
        <Cm>// {quinnipiac.location}</Cm>
      </Line>
      <Line indent={1}>
        <Var>degree</Var> = "{quinnipiac.degree}";{" "}
        <Cm>// {quinnipiac.honors}</Cm>
      </Line>
      <Line indent={1}>
        <Var>graduation</Var> = "{quinnipiac.graduation}";
      </Line>
      {quinnipiac.notes.map((note) => (
        <Line key={note} indent={1}>
          <Cm>// {note}</Cm>
        </Line>
      ))}
      <StringList
        indent={1}
        open={
          <>
            <Var>courses</Var> = [
          </>
        }
        close="];"
        items={quinnipiac.courses}
      />
      <StringList
        indent={1}
        open={
          <>
            <Var>organizations</Var> = [
          </>
        }
        close="];"
        items={quinnipiac.organizations}
      />
      <Blank />
      <Line indent={1}>
        <Var>studyAbroad</Var> = "{queenMary.school}";{" "}
        <Cm>// {queenMary.dates}</Cm>
      </Line>
      <Line indent={1}>
        <Var>studyAbroad</Var>.<Fn>setLocation</Fn>("{queenMary.location}");
      </Line>
      <Line indent={1}>
        <Cm>// {queenMary.description}</Cm>
      </Line>
      <StringList
        indent={1}
        open={
          <>
            <Var>studyAbroad</Var>.<Var>courses</Var> = [
          </>
        }
        close="];"
        items={queenMary.courses}
      />
      <Line>{"}"}</Line>
    </Block>
  );
}

function Skills() {
  const rated = skills
    .filter((skill) => skill.level)
    .sort((a, b) => b.level - a.level);
  const unrated = skills.filter((skill) => !skill.level);
  const nameWidth = Math.max(...rated.map((skill) => skill.name.length)) + 2;

  return (
    <Block id="skills">
      <Line>
        <Var>Skills</Var> [ <Kw>technology</Kw> ][ <Kw>skillLevel</Kw> ] = [
      </Line>
      {rated.map((skill) => (
        <Line key={skill.name} indent={1}>
          <span className="code-pre">
            [ {`${skill.name},`.padEnd(nameWidth)}
          </span>
          <span
            role="img"
            aria-label={`${skill.level} out of ${SKILL_LEVEL_MAX}`}
          >
            {levelBar(skill.level)}
          </span>{" "}
          ],
        </Line>
      ))}
      <Line>];</Line>
      <Blank />
      <StringList
        indent={0}
        open={
          <>
            <Var>alsoKnows</Var> = [
          </>
        }
        close="];"
        items={unrated.map((skill) => skill.name)}
      />
      <Blank />
      <StringList
        indent={0}
        open={
          <>
            <Var>specialSkills</Var> = [
          </>
        }
        close="];"
        items={specialSkills}
      />
    </Block>
  );
}

function Activities() {
  return (
    <Block id="volunteering">
      <Line>
        <Kw>public fun</Kw> <Fn>Activities</Fn> () {"{"}
      </Line>
      {volunteering.map(({ org, roles }, index) => {
        const volunteer = numbered("volunteer", index);
        return (
          <div key={org}>
            {index > 0 && <Blank />}
            <Line indent={1}>
              <Var>{volunteer}</Var> = "{org}";
            </Line>
            {roles.map((role) => (
              <div key={role.title}>
                <Line indent={1}>
                  <Var>{volunteer}</Var>.<Fn>addTitle</Fn>("{role.title}");
                  {role.dates && (
                    <>
                      {" "}
                      <Cm>// {role.dates}</Cm>
                    </>
                  )}
                </Line>
                {role.description && (
                  <Line indent={1}>
                    <Cm>// {role.description}</Cm>
                  </Line>
                )}
                <StringList
                  indent={1}
                  open={
                    <>
                      <Var>{volunteer}</Var>.<Fn>addWins</Fn>([
                    </>
                  }
                  close="]);"
                  items={role.bullets}
                />
              </div>
            ))}
          </div>
        );
      })}
      <Line>{"}"}</Line>
    </Block>
  );
}

function Contact() {
  return (
    <Block id="contact">
      <Line>
        <Kw>private job</Kw> <Fn>Contact</Fn> () {"{"}
      </Line>
      <Line indent={1}>
        <Var>email</Var> = <a href={`mailto:${contact.email}`}>{contact.email}</a>
        ;
      </Line>
      <Line indent={1}>
        <Var>github</Var> ={" "}
        <a href={contact.github} target="_blank" rel="noreferrer">
          {stripProtocol(contact.github)}
        </a>
        ;
      </Line>
      <Line indent={1}>
        <Var>linkedin</Var> ={" "}
        <a href={contact.linkedin} target="_blank" rel="noreferrer">
          {stripProtocol(contact.linkedin)}
        </a>
        ;
      </Line>
      <Line indent={1}>
        <Var>devResume</Var> = <Fn>download</Fn>(
        <a href={resumes.dev.href} download={resumes.dev.filename}>
          "{resumes.dev.filename}"
        </a>
        );
      </Line>
      <Line indent={1}>
        <Var>hrResume</Var> = <Fn>download</Fn>(
        <a href={resumes.hr.href} download={resumes.hr.filename}>
          "{resumes.hr.filename}"
        </a>
        );
      </Line>
      <Line>{"}"}</Line>
    </Block>
  );
}

function CodeView() {
  return (
    <main className="code-view" id="title">
      <h1 className="code-line">
        <Cm>
          /* {name} ~ {tagline} */
        </Cm>
      </h1>
      <Experience />
      <Education />
      <Skills />
      <Activities />
      <Contact />
    </main>
  );
}

export default CodeView;
