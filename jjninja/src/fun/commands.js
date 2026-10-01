import {
  contact,
  education,
  experience,
  name,
  skills,
  specialSkills,
  tagline,
  volunteering,
} from "../resume";
import { downloadResume, goTo, hire, openLink } from "./actions";

const SECTIONS = ["experience", "education", "skills", "volunteering", "contact"];

const HELP = [
  "help                 show this list",
  "whoami               who are you, anyway?",
  "ls [section]         list sections, or what's in one",
  "cat <section>        same, but it feels more official",
  "cat resume           the short version",
  "cd <section>         jump to a section of the page",
  "open <github|linkedin|resume>",
  "sudo hire janine     you know you want to",
  "code                 toggle the code view of this page",
  "ninja                summon the ninja",
  "clear                clear the terminal",
  "exit                 close the terminal (or press ` or Esc)",
];

const SECTION_OUTPUT = {
  experience: () =>
    experience.flatMap(({ company, title, location, dates }) => [
      company,
      `  ${title} ~ ${location} ~ ${dates}`,
    ]),
  education: () => {
    const { quinnipiac, queenMary } = education;
    return [
      quinnipiac.school,
      `  ${quinnipiac.degree} ~ ${quinnipiac.graduation} ~ ${quinnipiac.honors}`,
      ...quinnipiac.notes.map((note) => `  ${note}`),
      queenMary.school,
      `  ${queenMary.program} ~ ${queenMary.dates}`,
    ];
  },
  skills: () => [
    skills.map((skill) => skill.name).join(", "),
    "",
    "special skills:",
    ...specialSkills.map((skill) => `  ${skill}`),
  ],
  volunteering: () =>
    volunteering.flatMap(({ org, roles }) => [
      org,
      ...roles.map(
        ({ title, dates }) => `  ${title}${dates ? ` ~ ${dates}` : ""}`,
      ),
    ]),
  contact: () => [
    `email     ${contact.email}`,
    `github    ${contact.github}`,
    `linkedin  ${contact.linkedin}`,
  ],
};

function resumeSummary() {
  return [
    `${name} ~ ${tagline}`,
    "",
    ...SECTIONS.flatMap((section) => [
      `== ${section} ==`,
      ...SECTION_OUTPUT[section](),
      "",
    ]),
    "Want the PDF? Try: open resume",
  ];
}

function showSection(command, section) {
  if (!section) {
    return command === "ls"
      ? [SECTIONS.join("  "), "resume"]
      : ["cat: which file? Try: cat resume"];
  }
  if (section === "resume") return resumeSummary();
  if (SECTION_OUTPUT[section]) return SECTION_OUTPUT[section]();
  return [`${command}: ${section}: No such file or directory`];
}

function open(target) {
  switch (target) {
    case "github":
      openLink(contact.github);
      return ["Opening GitHub..."];
    case "linkedin":
      openLink(contact.linkedin);
      return ["Opening LinkedIn..."];
    case "resume":
      return [`Downloading ${downloadResume("dev")}...`];
    default:
      return ["open: try github, linkedin or resume"];
  }
}

// Returns the lines to print. `app` holds the callbacks that change the page.
export function runCommand(input, app) {
  const [command, ...args] = input.trim().split(/\s+/);
  const arg = args[0]?.toLowerCase();

  switch (command.toLowerCase()) {
    case "":
      return [];
    case "help":
      return HELP;
    case "whoami":
      return [
        "visitor",
        `...but you're probably looking for ${name}, ${tagline}.`,
      ];
    case "ls":
    case "cat":
      return showSection(command.toLowerCase(), arg);
    case "cd":
      if (!SECTIONS.includes(arg)) {
        return [`cd: ${arg ?? ""}: No such directory. Try: ${SECTIONS.join(", ")}`];
      }
      goTo(arg);
      return [`~/${arg}`];
    case "pwd":
      return ["/home/janine/ninja"];
    case "open":
      return open(arg);
    case "sudo":
      if (args.join(" ").toLowerCase() === "hire janine") {
        hire();
        return ["Permission granted. Opening your mail client..."];
      }
      return [
        "visitor is not in the sudoers file. This incident will be reported.",
        "(Try: sudo hire janine)",
      ];
    case "code":
      app.toggleCode();
      return ["Toggling code view..."];
    case "ninja":
      app.summonNinja();
      return ["🥷"];
    case "echo":
      return [args.join(" ")];
    case "date":
      return [new Date().toString()];
    case "rm":
      return ["Nice try."];
    case "clear":
      app.clear();
      return [];
    case "exit":
      app.close();
      return [];
    default:
      return [`command not found: ${command}. Type "help" for a list.`];
  }
}
