import { contact, resumes } from "../resume";

// Window events the console object uses to reach into the React app.
export const EVENTS = {
  ninja: "jj:ninja",
  toggleCode: "jj:toggle-code",
  toggleTerminal: "jj:toggle-terminal",
};

export function emit(event) {
  window.dispatchEvent(new CustomEvent(event));
}

export function hire() {
  const subject = encodeURIComponent("Hello from janinejay.ninja");
  window.location.href = `mailto:${contact.email}?subject=${subject}`;
}

export function downloadResume(kind = "dev") {
  const resume = resumes[kind] ?? resumes.dev;
  const link = document.createElement("a");
  link.href = resume.href;
  link.download = resume.filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  return resume.filename;
}

export function openLink(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export function goTo(section) {
  const target = document.getElementById(section);
  if (target) target.scrollIntoView();
  return Boolean(target);
}

export function isTyping(event) {
  const el = event.target;
  return (
    el instanceof HTMLElement &&
    (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)
  );
}
