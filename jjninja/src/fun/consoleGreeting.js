import {
  contact,
  experience,
  name,
  skills,
  specialSkills,
  tagline,
} from "../resume";
import { EVENTS, downloadResume, emit, hire } from "./actions";

const HELP = `
janine.about         who you're looking at
janine.experience    where I've worked
janine.skills        what I work with
janine.specialSkills the important ones
janine.contact       how to reach me
janine.resume()      download my resume ("dev" or "hr")
janine.hire()        start an email
janine.codeMode()    toggle the code view of this page
janine.terminal()    toggle the terminal (or press \`)
janine.ninja()       you'll see
`;

export default function consoleGreeting() {
  console.log(
    `%c${name}%c ${tagline}`,
    "background:#748EAA;color:#fff;font:bold 16px 'Courier New',monospace;padding:6px 10px;border-radius:4px 0 0 4px",
    "background:#FBEEB2;color:#364659;font:16px 'Courier New',monospace;padding:6px 10px;border-radius:0 4px 4px 0",
  );
  console.log(
    "Ah, a true developer I see ;)\nType %cjanine.help()%c to look around.",
    "font-weight:bold;color:#748EAA",
    "",
  );

  window.janine = {
    about: `${name} ~ ${tagline}`,
    experience: experience.map(
      ({ company, title, dates }) => `${company} ~ ${title} (${dates})`,
    ),
    skills: skills.map((skill) => skill.name),
    specialSkills,
    contact,
    help() {
      console.log(HELP);
    },
    resume(kind) {
      return `Downloading ${downloadResume(kind)}`;
    },
    hire() {
      hire();
      return "Excellent choice. Opening your mail client...";
    },
    codeMode() {
      emit(EVENTS.toggleCode);
    },
    terminal() {
      emit(EVENTS.toggleTerminal);
    },
    ninja() {
      emit(EVENTS.ninja);
      return "🥷";
    },
  };
}
